# CogAT Practice App

This repo hosts the interactive test app.

- `app/` is the working source.
- `docs/` is a copy used by GitHub Pages.

To refresh the published version after edits:

```powershell
Copy-Item -Recurse -Force app docs
```

If you delete files from `app/`, remove the matching files in `docs/` too.
