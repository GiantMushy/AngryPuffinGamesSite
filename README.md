# Angry Puffin Games — State Your Case

Marketing site for Angry Puffin Games and their party game *State Your Case (Málþóf)*, built from the [Claude Design](https://claude.ai/design) handoff spec.

## Structure

```
index.html   # single-page site
styles.css   # all styles, design tokens as CSS custom properties
main.js      # email signup form (idle / sending / success / error states)
assets/      # logos, key art, gameplay screenshots, topic pack crops
```

No build step — plain HTML/CSS/JS, served directly by GitHub Pages.

## Local preview

Just open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deployment

This repo is served by **GitHub Pages** from the `main` branch, root (`/`).
Settings → Pages → Source: Deploy from a branch → `main` / `/(root)`.

## Before real launch

- [ ] Wire the signup form to a real email list provider — set `SIGNUP_ENDPOINT` in `main.js` (Buttondown, Mailchimp, Formspree, or a Cloudflare Worker all work with a static site)
- [ ] Add a gameplay video block in the game section once footage is available
- [ ] Replace team card placeholders with real portraits
- [ ] Add App Store / Play Store links once the game ships
- [ ] Optional: clean per-card topic pack art to replace the cropped versions
- [ ] Optional: Icelandic-language version of the copy
