#!/usr/bin/env python3
"""Generate a clean, print-ready A4 CV PDF from the site's cv.js data.

Usage:
    node --input-type=module -e "...dump cv.json..."   # writes /tmp/cv.json
    /tmp/cvpdf-venv/bin/python scripts/generate_pdf.py

Keeps the PDF in sync with the website by reading the same exported data.
"""
import json
import os
import re

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = json.load(open("/tmp/cv.json", encoding="utf-8"))
OUT = os.path.join(HERE, "..", "public", "Ricardo-Calcado-CV.pdf")

# Palette — light/print-friendly, keeping the site's terracotta accent.
ACCENT = HexColor("#C9764A")
INK = HexColor("#1C1917")
SUB = HexColor("#57534E")
MUTE = HexColor("#78716C")
LINE = HexColor("#E7E5E4")


def clean(s):
    """Strip emoji/edge cases and escape XML for Paragraph markup."""
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return s


styles = getSampleStyleSheet()
body = ParagraphStyle("body", parent=styles["Normal"], fontName="Helvetica",
                      fontSize=9.5, leading=13.5, textColor=SUB)
name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24,
                      leading=26, textColor=INK)
title = ParagraphStyle("title", fontName="Helvetica", fontSize=12.5,
                       leading=15, textColor=ACCENT, spaceBefore=2)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.6,
                         leading=12, textColor=MUTE, spaceBefore=4)
sect = ParagraphStyle("sect", fontName="Helvetica-Bold", fontSize=10.5,
                      leading=12, textColor=ACCENT, spaceBefore=4, spaceAfter=2)
role = ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10.2,
                      leading=13, textColor=INK)
period = ParagraphStyle("period", fontName="Helvetica", fontSize=8.6,
                        leading=13, textColor=MUTE, alignment=TA_RIGHT)
loc = ParagraphStyle("loc", fontName="Helvetica-Oblique", fontSize=8.6,
                     leading=12, textColor=MUTE, spaceAfter=1)
bullet = ParagraphStyle("bullet", parent=body, fontSize=9.2, leading=12.6,
                        leftIndent=10, spaceBefore=1)
skill = ParagraphStyle("skill", parent=body, fontSize=9.2, leading=13.5)

story = []


def section(label):
    story.append(Spacer(1, 9))
    story.append(Paragraph(label.upper(), sect))
    story.append(HRFlowable(width="100%", thickness=0.8, color=LINE,
                            spaceBefore=1, spaceAfter=5))


def role_row(left_html, period_text):
    t = Table(
        [[Paragraph(left_html, role), Paragraph(clean(period_text), period)]],
        colWidths=[12.0 * cm, 5.0 * cm],
    )
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(t)


# ── Header ───────────────────────────────────────────────────────────────
p = DATA["profile"]
story.append(Paragraph(clean(p["name"]), name))
story.append(Paragraph(clean(p["title"]), title))

links = [f'{clean(p["location"])}',
         f'<a href="mailto:{p["email"]}" color="#57534E">{p["email"]}</a>']
for s in DATA["socials"]:
    if s["label"] == "GitHub":
        links.append('<a href="https://github.com/paparuco" color="#57534E">github.com/paparuco</a>')
    elif s["label"] == "LinkedIn":
        links.append('<a href="https://www.linkedin.com/in/ricardocalcado/" color="#57534E">linkedin.com/in/ricardocalcado</a>')
story.append(Paragraph("  &nbsp;•&nbsp;  ".join(links), contact))
story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=1.4, color=ACCENT))

# ── Summary ──────────────────────────────────────────────────────────────
section("Summary")
story.append(Paragraph(clean(p["about"]), body))

# ── Experience ───────────────────────────────────────────────────────────
section("Experience")
for i, job in enumerate(DATA["experience"]):
    if i:
        story.append(Spacer(1, 6))
    role_row(f'{clean(job["role"])} <font color="#C9764A">·</font> {clean(job["company"])}',
             job["period"])
    if job.get("location"):
        story.append(Paragraph(clean(job["location"]), loc))
    items = [ListItem(Paragraph(clean(b), bullet), leftIndent=12, value="square")
             for b in job["bullets"]]
    story.append(ListFlowable(items, bulletType="bullet", bulletColor=ACCENT,
                              bulletFontSize=5, start="square",
                              leftIndent=6, spaceBefore=2))

# ── Education ─────────────────────────────────────────────────────────────
section("Education")
for e in DATA["education"]:
    role_row(clean(e["degree"]), e["period"])
    story.append(Paragraph(clean(e["school"]), loc))

# ── Certifications ────────────────────────────────────────────────────────
section("Certifications")
for c in DATA["certifications"]:
    nm = c["name"] if isinstance(c, dict) else c
    story.append(Paragraph(clean(nm), bullet, bulletText="•"))

# ── Skills ───────────────────────────────────────────────────────────────
section("Skills")
for grp in DATA["skills"]:
    items = ", ".join(it["name"] if isinstance(it, dict) else it for it in grp["items"])
    story.append(Paragraph(
        f'<font name="Helvetica-Bold" color="#1C1917">{clean(grp["group"])}:</font> {clean(items)}',
        skill))

# ── Volunteering ─────────────────────────────────────────────────────────
if DATA.get("volunteering"):
    section("Volunteering")
    for v in DATA["volunteering"]:
        role_row(f'{clean(v["role"])} <font color="#C9764A">·</font> {clean(v["org"])}',
                 v["period"])
        story.append(Paragraph(clean(v["description"]), body))
        story.append(Spacer(1, 3))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTE)
    canvas.drawCentredString(A4[0] / 2, 1.0 * cm,
                             "Ricardo Calçado  ·  ricardo.calcado10@gmail.com  ·  github.com/paparuco")
    canvas.restoreState()


doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=1.7 * cm, rightMargin=1.7 * cm,
    topMargin=1.5 * cm, bottomMargin=1.5 * cm,
    title="Ricardo Calçado — CV", author="Ricardo Calçado",
    subject="Curriculum Vitae",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print("Wrote", os.path.abspath(OUT))
