#!/usr/bin/env bash
# Regenerate the CV PDF (public/Ricardo-Calcado-CV.pdf) from src/data/cv.js.
# Keeps the PDF in sync with the website by reading the same source data.
set -euo pipefail
cd "$(dirname "$0")/.."

VENV="${VENV:-/tmp/cvpdf-venv}"

# 1. Export the CV data from cv.js to JSON.
node --input-type=module -e "
import * as cv from './src/data/cv.js';
import fs from 'fs';
const out = { profile: cv.profile, socials: cv.socials, skills: cv.skills,
  experience: cv.experience, education: cv.education,
  certifications: cv.certifications, volunteering: cv.volunteering };
fs.writeFileSync('/tmp/cv.json', JSON.stringify(out, null, 2));
"

# 2. Ensure a Python venv with reportlab exists.
if [ ! -x "$VENV/bin/python" ]; then
  python3 -m venv "$VENV"
fi
# reportlab renders the PDF; pypdf enforces the one-page limit.
"$VENV/bin/python" -c "import reportlab, pypdf" 2>/dev/null || \
  "$VENV/bin/pip" install --quiet reportlab pypdf

# 3. Render the PDF.
"$VENV/bin/python" scripts/generate_pdf.py
