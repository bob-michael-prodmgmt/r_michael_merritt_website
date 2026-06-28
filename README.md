# R. Michael Merritt — Reputation OS (website)

A static, dependency-free personal site built for GitHub Pages. Six audience-tailored pillars under one identity.

## Pages
- `index.html` — Home ("choose your door" + metrics band)
- `founder.html` — Founder / Sartori AI (investors)
- `executive.html` — Executive / AI leadership (recruiters) — includes the searchable Living Resume
- `work.html` — Builder / Selected Work by problem solved
- `ideas.html` — Thinker / Research & Essays
- `speaking.html` — Speaker / Media kit
- `lab.html` — Lab / Open source, notebooks, and "Now"
- `assets/css/style.css`, `assets/js/main.js` — design system + minimal JS
- `resumes/` — downloadable PDFs (Executive, Founder, Research)

No build step. It's plain HTML/CSS/JS — open `index.html` in any browser to preview.

## Deploy to GitHub Pages (5 minutes)
1. Create a new GitHub repo (e.g. `rmichaelmerritt-site` or use a `username.github.io` repo).
2. Upload the entire contents of this folder to the repo root (or `git add . && git commit && git push`).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / root → Save**.
4. Your site goes live at `https://<username>.github.io/<repo>/` within a minute or two.

### Custom domain (optional)
- Add a file named `CNAME` containing your domain (e.g. `rmichaelmerritt.com` or `founder.sartori.ai`).
- Point the domain's DNS to GitHub Pages (CNAME → `<username>.github.io`, or A records to GitHub's IPs).
- Enable **Enforce HTTPS** in Settings → Pages.

## To finish wiring (quick wins)
- **Speaking media kit:** drop headshots, logos, and a one-page bio PDF into `/assets/` and link them.
- **Research profiles:** add Google Scholar / ResearchGate / ORCID URLs on `ideas.html`.
- **Sartori links:** confirm the public Sartori site URL used in `founder.html`.
- **Essays:** publish full essay text as individual pages (source preserved in the content archive).

## Notes on accuracy
Content is drawn from your four résumés and the live pitch deck (the canonical sources). Previous healthcare ventures are labeled by status (previous venture / innovation initiative / applied study); unverified commercial claims (acquisitions, partnership specifics) were intentionally left out pending confirmation.
