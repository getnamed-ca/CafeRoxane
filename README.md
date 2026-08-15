# Café Roxane — Website

Static site: `index.html` + `assets/`. No build step, no framework, nothing to install.

**Run locally:** `python3 -m http.server 8123` in this folder, then open http://localhost:8123
(Opening `index.html` over `file://` mostly works, but videos and fonts behave better over HTTP.)

**Deploy:** Vercel, framework preset **Other**, build/output/install fields all empty. `vercel.json`
handles redirects, caching and security headers. Nothing to compile.

## Reservation form

Live. Submissions POST to FormSubmit, which delivers to **caferoxane@gmail.com**.

The endpoint is one constant in the reservation section of `assets/main.js`:

```js
const RESERVATION_ENDPOINT = "https://formsubmit.co/ajax/caferoxane@gmail.com";
```

**First-run activation:** FormSubmit emails that inbox a confirmation link on the very first
submission. Until someone clicks it, requests are held rather than delivered. After activation
FormSubmit issues a random endpoint token — swapping it in for the email address keeps the address
out of the page source and cuts scraper spam.

There's a hidden `_honey` honeypot field for bots, a sending state on the button, and a failure path
that shows a real error with a pre-filled `mailto:` carrying the visitor's details, rather than a
false confirmation.

## Analytics and consent

Google Analytics (`G-LGHGD0GYJS`) is **consent-gated** — required by Québec's Law 25 and by the
site's own privacy copy. `gtag.js` is never requested until the visitor clicks Accept in the cookie
notice. Decline, or ignore it, and nothing loads.

- Property ID lives in one place: `window.ROXANE_GA_ID` in the `<head>` of `index.html`
- Choice is stored as `roxane-consent` (`"granted"` / `"denied"`) in localStorage
- Loader and consent logic: the "cookie notice + consent-gated analytics" block in `assets/main.js`

To use a different GA4 property, change the ID in `index.html` and nothing else.

## Languages

EN default, FR-CA via the header toggle. All copy lives in the `I18N` object in `assets/main.js` —
including the cookie notice, the privacy and terms text, and every form state. Menu items and prices
(scraped from caferoxane.com, Aug 13 2026) live in the `MENU` object in the same file.

Adding a string means adding it to **both** `en` and `fr`, and giving the element a
`data-i18n="your.key"` attribute.

## Videos

`assets/video/` — `hero.mp4` is re-encoded with a keyframe on every frame so it scrubs smoothly
against scroll position. If you swap the clip, re-encode it the same way or the scroll animation
will stutter:

```
ffmpeg -i in.mp4 -an -c:v libx264 -g 1 -crf 23 -pix_fmt yuv420p -movflags +faststart out.mp4
```

`story.mp4` and `terrace.mp4` are ordinary playback clips and need no special encoding.

## Fonts

Fraunces (display) and Inter (text) are **self-hosted** as `.woff2` in `assets/fonts/`, declared with
`@font-face` in `index.html`. No Adobe Fonts kit, no Google Fonts request, no third-party account the
site depends on.

## Routing

`vercel.json` permanently redirects `/en`, `/fr` and anything beneath them to `/`, so links to the
previous multi-page site keep working. `robots.txt` and `sitemap.xml` point at
`https://caferoxane.com/`.
