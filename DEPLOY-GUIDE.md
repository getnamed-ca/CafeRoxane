# Café Roxane — going live

**Updated:** Aug 15, 2026
**Repo:** `getnamed-ca/CafeRoxane` (yours) · **Vercel:** `roxanecafe`, Hobby plan
**Local folder:** `Desktop/caferoxane-deploy` — the 49 files that belong in the repo

Everything from the previous developers is out of scope. We take the domain, point it at your project, and that's it.

---

## What you're launching

`getnamed-ca/CafeRoxane` already holds our v4 site — one commit, "Add files via upload", Aug 13, byte-identical to the build we finished with. This adds the launch prep:

| File | |
|---|---|
| `index.html` | updated |
| `assets/main.js` | updated |
| `vercel.json` | new |
| `robots.txt` | new |
| `sitemap.xml` | new |
| `.gitignore` | new |

**Two behaviour changes worth knowing.**

The reservation form now actually sends email, to `caferoxane@gmail.com` via FormSubmit. It needs one activation click: the first submission triggers a confirmation email to that inbox, and until someone clicks the link, requests are held rather than delivered. If delivery ever fails, the visitor sees a real error with a pre-filled `mailto:` carrying their details — not a false "See you soon."

Google Analytics now asks permission. Oskar's tag fired for everyone, which contradicted the site's own privacy copy and Québec's Law 25. The cookie box is Accept / Decline in both languages; the tag loads only on Accept. Verified: zero requests to Google before consent, one after.

---

## Step 1 — Push

The repo isn't serving anything yet, so commit straight to `main` — no branch, no pull request.

```bash
cd ~/Desktop
git clone https://github.com/getnamed-ca/CafeRoxane.git caferoxane-repo
cd caferoxane-repo
cp -R ~/Desktop/caferoxane-deploy/. .
git status
```

`git status` should list exactly six files — `index.html` and `assets/main.js` as modified, and `.gitignore`, `robots.txt`, `sitemap.xml`, `vercel.json` as untracked. `DEPLOY-GUIDE.md` will show up too; that's fine, it's harmless documentation. **No deletions.** If you see any, stop.

Then:

```bash
git add -A
git commit -m "Launch prep: consent-gated GA4, real reservation delivery, vercel.json, robots, sitemap"
git push
```

---

## Step 2 — Create the project

Vercel → **Add New → Project** → import `getnamed-ca/CafeRoxane`.

- Framework Preset: **Other** (auto-detected — there's no `package.json`)
- Build Command / Output Directory / Install Command: all empty
- Deploy

You get a `.vercel.app` URL. Free on Hobby. Don't attach the domain yet.

---

## Step 3 — Test on the .vercel.app URL

- [ ] Hero video scrubs on scroll, logo docks top-left
- [ ] Menu tabs, gallery drag, RESERVE modal
- [ ] **Submit a test reservation** → check `caferoxane@gmail.com` → click the FormSubmit activation link → submit a second one and confirm it arrives
- [ ] EN ⇄ FR swaps everything, cookie box included
- [ ] Cookie box: Decline → nothing loads · Accept → you appear in GA4 Realtime within a minute
- [ ] Open it on your phone
- [ ] `/en` and `/fr` redirect to the homepage instead of 404ing

---

## Step 4 — Take the domain

Vercel → your avatar → **Domains**. Find `caferoxane.com`.

**If it's listed there** — the domain lives in this account, so this is two clicks. Open the project currently using it, remove the domain from that project, then in your new project → Settings → Domains, add both `caferoxane.com` and `www.caferoxane.com`. Keep both; point one at the other. A few seconds of gap between removing and adding, so pick a quiet hour.

Note the difference between **removing a domain from a project** and **deleting a project**. The first is what you want here, and it's reversible. Deleting a project is not.

**If it isn't listed** — the domain sits in someone else's Vercel account and only they can release it. Ask for either a transfer to your account (Vercel issues an auth code for this) or, faster, have them delete the domain from their account so you can add it to yours. Oskar said it was bought through Vercel, so there's no external registrar in the way.

The old site served `/en` and `/fr` as separate pages; ours is one page at `/`. `vercel.json` permanently redirects both, so existing links, bookmarks and Google results keep working and the ranking transfers.

---

## Step 5 — Search Console

Vercel → Domains → `caferoxane.com` → **DNS Records** → Add:

| Field | Value |
|---|---|
| Type | `TXT` |
| Name | blank (or `@`) |
| Value | `google-site-verification=Rr9f8DJogp-uagFrIyPlbTvZtnsbU66xYDHmCsWfKNg` |
| TTL | default |

Then **Verify** in Search Console and submit `https://caferoxane.com/sitemap.xml`.

---

## Step 6 — Delete the old projects (last, not first)

Once `caferoxane.com` loads the new site and `/en` redirects properly, the six old projects are dead weight and you can delete them: project → Settings → scroll to the bottom → Delete Project.

**Order matters, and it's one-way.** Deleting a project in Vercel is immediate and permanent — the deployments, build logs and the `.vercel.app` URL are gone, and there's no undo and no trash. Two things to get right:

1. **Don't delete the project holding `caferoxane.com` until the domain is attached to the new project and you've loaded the live site in a browser.** If you delete first, the domain detaches and you're reconfiguring DNS under pressure with the site down.
2. **Keep the old project alive through the first day or two.** It's your rollback: if something's wrong with the new site, moving the domain back is a two-minute fix — but only while that project still exists.

Delete on day three, not launch night. Nothing bad happens from waiting.

The old GitHub repos under `caferoxane-hue` can go too, but they cost nothing to keep and they're the only record of what the previous site actually contained. I'd leave them.

---

## Loose ends that aren't yours yet

**Google Analytics** — property `G-LGHGD0GYJS` is on Oskar's account. Either have him add the café's Google account as Administrator, or create your own GA4 property and swap one line in `index.html`: `window.ROXANE_GA_ID = "G-XXXXXXX";`

**Google Business Profile** — Nick owns the café's listing.

**Adobe Fonts** — nothing to do. That kit was a dependency of Oskar's site; ours self-hosts Fraunces and Inter in `assets/fonts/`.

**Hobby plan access** — Hobby can't invite teammates, so whoever holds the login holds the access. Write the `roxanecafe` credentials somewhere the café owns, not just your machine.

---

## Still open

- FormSubmit activation click — blocks real reservation delivery until done
- Replacement clip for the terrace video
- Optional: after activation, FormSubmit issues a random endpoint token. Swapping it for the email address in `assets/main.js` (`RESERVATION_ENDPOINT`) keeps `caferoxane@gmail.com` out of the page source.
