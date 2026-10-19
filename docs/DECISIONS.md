# Approved project decisions

- Original kids-learning is immutable; develop only in kids-learn-2.
- Prefer free Kokoro TTS: Heart (af_heart), Sarah (af_sarah), Bella (af_bella). Confirm actual integration against existing source before changing pages.
- Do not use paid ElevenLabs or silently fall back to browser voices.
- Audio must be segmented, with a preview, voice choice and speed choice before a lesson.
- English content LTR, responsive full-screen tablet experience.
- Test before deployment; parent reviews final changes.
- Reuse shared components; document lessons learned after each iteration.

Status: repository migration is not yet complete. These are project standards, not claims that implementation exists.

## Agent activation status

The `AGENTS.md` and `skills/` files are instructions for development tooling, not a live AI tutor on GitHub Pages. A real-time interactive AI teacher is NOT enabled. Existing recorded-audio exercises are separate from AI conversation. Do not present a chat button without a working secure backend, speech recognition and explicit approval for child-data handling. Never put API secrets in client-side JavaScript.

## V2 design rollout

- Homepage and child section landing pages have a tablet-first V2 layout on migration/source-snapshot.
- Existing lesson bodies and AI tutoring are not yet comprehensively upgraded or tested.
- Keep legacy repository untouched.
