# DeadHead Detective Public Site Repo Template

Use this template in a separate public GitHub repository so the main DeadHead Detective app repository can remain private.

## Recommended Repository

- Repository name: `deadheaddetective-site`
- GitHub Pages URLs:
  - `https://ninjatomonline.github.io/deadheaddetective-site/`
  - `https://ninjatomonline.github.io/deadheaddetective-site/support.html`
  - `https://ninjatomonline.github.io/deadheaddetective-site/privacy.html`

## This Public Repo Should Contain

- `index.html`
- `support.html`
- `privacy.html`
- `site.css`
- `screenshots/` if you export approved public screenshots later
- `.nojekyll`
- `.github/workflows/publish-pages.yml`

## Setup

1. Create a new public GitHub repository named `deadheaddetective-site`.
2. Copy the exported site files into that repo root.
3. In the new repo, open `Settings > Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main` and let the workflow deploy the site.

## Later Custom-Domain Swap

1. Open the public site repo on GitHub.
2. Go to `Settings > Pages`.
3. Enter your custom domain.
4. Point DNS at GitHub Pages.
5. Turn on `Enforce HTTPS` after DNS propagation finishes.

The site uses relative links, so the same package works at both the temporary `github.io` URL and a future custom domain.
