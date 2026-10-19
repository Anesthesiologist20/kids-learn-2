# Source migration snapshot

Source repository: `Anesthesiologist20/kids-learning`
Source revision: `6067dbf2b878bb7373bc6cd0667efe8e5fba5c56`
Destination: `Anesthesiologist20/kids-learn-2`
Working branch: `migration/source-snapshot`

## Verified voice integration
Source file: `sakinah/irregular-verbs/audio-manifest.json`
Voice identifiers: `af_bella`, `af_heart`, `af_sarah`; manifest speed: `1`.
Audio generation workflow in source: `.github/workflows/sakinah-irregular-audio.yml`; generator: `scripts/generate_irregular_audio.py`.

## Migration checklist
- [ ] Inventory complete source tree and binary assets
- [ ] Copy HTML, JS, CSS, fonts/images/audio and lesson content
- [ ] Review workflows before enabling on destination (avoid unplanned CI generation)
- [ ] Validate relative URLs and voice audio
- [ ] Verify tablet layout and assessments
- [ ] Set up separate GitHub Pages deployment and test public URLs
- [ ] Request parent approval before merging

Do not confuse this record with a completed migration. Original repository must remain untouched.
