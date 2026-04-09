# Hosted Site Screenshots

Drop approved public screenshots here when they are ready for the hosted site.

Recommended structure:

- `iphone/`
- `ipad/`

Recommended source structure if you want to use the sync script:

- `Release/AppStoreScreenshots/iPhone/*.png`
- `Release/AppStoreScreenshots/iPad/*.png`

Canonical ordered basenames for the current launch pass:

iPhone:

- `01-dashboard-summary.png`
- `02-active-trip-overview.png`
- `03-history-sessions.png`
- `04-insights-trend.png`
- `05-active-trip-route-controls.png`

iPad:

- `01-dashboard-summary.png`
- `02-active-trip-ready.png`
- `03-active-trip-live.png`
- `04-history-split-view.png`
- `05-insights-trend.png`
- `06-settings-controls.png`

Rules:

- Reuse the same basename when the iPhone and iPad capture the same screen.
- Keep the numeric prefix so App Store ordering and hosted-site ordering match.
- Keep files as approved public PNG captures only.
- Do not use desktop screenshots, Figma workspace captures, or private test data.

Then run:

```bash
ruby Scripts/sync_hosted_site_screenshots.rb
```

The export script will automatically include this folder in `/tmp/deadheaddetective-site` when files are present.
