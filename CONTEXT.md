# bllakcn-website

Personal portfolio site for Ahmet Bilal Akcan — public resume, blog, and related surfaces.

## Language

**CV data**:
The structured resume content that is the single source of truth for both the website resume and generated CV PDFs. Lives as language-specific JSON (`cv.json`, `cv.nl.json`).
_Avoid_: resume data, CV source, content file

**Resume page**:
The website view that renders CV data in the browser (`/resume`).
_Avoid_: CV page, online CV

**CV PDF**:
A printable PDF artifact generated from CV data for a given language, committed and served as a static file.
_Avoid_: resume PDF, generated resume
