# Café Roxane — Website

Static site: `index.html` + `assets/`. No build step, no framework.

**Run locally:** `python3 -m http.server 8123` in this folder, open http://localhost:8123

**Deploy to Vercel:** `npx vercel` in this folder (or drag the folder into vercel.com/new). It's a plain static site.

**Reservation form:** currently front-end demo — submissions show a confirmation and log to console. To wire real delivery to caferoxane@gmail.com, point the form at a service like FormSubmit/Formspree (one attribute change in `index.html` + a fetch in `assets/main.js` submit handler).

**Languages:** EN default, FR-CA via the header toggle. All copy lives in the `I18N` object in `assets/main.js`. Menu items and prices (scraped from caferoxane.com, Aug 13 2026) live in the `MENU` object there too.

**Videos:** `assets/video/` — `hero.mp4` is re-encoded with a keyframe every frame for smooth scroll-scrubbing; replace it with the same encoding (`ffmpeg -i in.mp4 -an -c:v libx264 -g 1 -crf 23 -pix_fmt yuv420p -movflags +faststart out.mp4`) if you swap the clip.
