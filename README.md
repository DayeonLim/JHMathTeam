# The King's Academy — Junior High Math Team website

A single-page site with an ocean / jellyfish theme. No build step, no
dependencies — just static HTML, CSS, and JavaScript.

## Run it locally
Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content
Almost everything lives in **`js/data.js`**:
- `LINKS` — the application and absence-form URLs
- `TIMELINE` — application-cycle dates
- `HOUSES` — the four houses and their accent colors
- `COACHES` — each coach's name, grade, house, role, bio, and photo file
- `ADVISOR` — the faculty advisor (Dr. Ting)

Missing bios show "Bio coming soon." automatically.

## Adding coach photos
See **`assets/coaches/README.md`** for the exact file names. Until a photo
exists, the site shows a colored tile with the coach's initials.

## Deploying (free options)
- **GitHub Pages:** push to GitHub → Settings → Pages → deploy from `main` / root.
- **Netlify / Cloudflare Pages / Vercel:** drag-and-drop the folder or connect the repo.

## Structure
```
index.html          # page markup
css/styles.css       # ocean/jellyfish theme
js/data.js           # ← edit content here
js/main.js           # rendering + animations
assets/coaches/      # coach photos (see its README)
```
