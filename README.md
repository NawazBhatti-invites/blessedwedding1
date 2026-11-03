# Muhammad Nawaz Bhatti – Wedding Invitation

A mobile-first digital invitation: a closed ivory card with a wax seal that opens when tapped, then one continuous vertical scroll through the invitation, the three wedding days (each with a live countdown), venue maps, contact numbers and an RSVP that is saved to a Microsoft Excel workbook.

```
index.html
css/style.css          styles, engraved typography, card-opening animation
js/config.js           public settings (RSVP endpoint)
js/script.js           card opening, scroll reveals, countdowns, music
js/rsvp.js             RSVP buttons, form, validation, submission
assets/images/         card-closed, door-left/right, seal, frame, couple (+ bismillah.png, in-shaa-allah.png: see below)
assets/fonts/          Poppins (included) + Tempting and Birds of Paradise (you add them: see assets/fonts/README.md)
assets/audio/wedding-music.mp3
backend/               Azure Function + Power Automate + Excel workbook (see backend/README.md)
```

## Before you publish: three things to add

1. **Fonts**: put `Tempting`, `BirdsOfParadise`, `Chocolate` and `Astoria` files (`.ttf` or `.woff2`) in `assets/fonts/`. Until then a fallback script font is used. **Read the licence note in `assets/fonts/README.md` first**: all four are "personal use only".
2. **Bismillah picture**: save it as `assets/images/bismillah.png` (transparent PNG works best). Until then plain Arabic text is shown. The In Shaa Allah picture is already in place.
3. **RSVP backend**: follow `backend/README.md`, then paste the function URL into `js/config.js`. Until then the RSVP form tells guests that nothing was saved; it never pretends to succeed.

## How the pages behave

The two floral pictures stay fixed. Scrolling only changes which page is showing: the words and countdowns fade out and the next ones fade in on the same picture (Bismillah to Barat). The picture then cross-fades to the couple for Walima, and back to the first picture for the invitation wording, directions and RSVP pages. Nothing slides.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository (`main` branch).
2. **Settings → Pages → Deploy from a branch → `main` / root → Save.**
3. Your site appears at `https://<username>.github.io/<repository>/`. Add that origin (without a trailing slash) to `ALLOWED_ORIGINS` in the backend settings.

To test locally: `python3 -m http.server 8000`, then open http://localhost:8000.

## Music

The music is the YouTube video *Bismillah* (Kailash Kher, "Tere Naam Se Shuru Hua"), set in `js/config.js` (`youtubeId`, and `startSeconds: 16` so it starts and loops from the 16th second). It starts only after a guest taps **Open Invitation**; round buttons at the bottom right pause or mute it.

- YouTube requires its player to stay visible (at least 200 x 200 pixels), so a small player appears at the bottom left after the card opens. It cannot be hidden to play the audio alone.
- YouTube players do not work when `index.html` is opened straight from your computer (`file://`). Test on GitHub Pages or with `python3 -m http.server 8000`.
- If the video cannot play (embedding switched off by the owner, no internet), the site automatically uses `assets/audio/wedding-music.mp3`, an original instrumental I synthesised, so there is still music.
- If you want music with no visible player, use an MP3 you have the right to use: save it as `assets/audio/wedding-music.mp3`, set `source: "file"` and `fileStartSeconds: 16` in `js/config.js`.

## Edit the details

Names, dates, venues and phone numbers are in `index.html`. Countdown times are in `js/script.js` (object `T`, Pakistan time `+05:00`). RSVP events are listed at the top of `js/rsvp.js` and `backend/azure-function/src/lib/rsvp-core.js`.

## What has and has not been tested

- Backend validation, honeypot, origin allow-list, rate limit and Pakistan-time logic: unit tests pass (`cd backend/azure-function && npm test`).
- The Excel workbook and its summary formulas: recalculated with no errors.
- **Not yet tested:** the pages in real phone browsers, and the live Azure → Power Automate → Excel chain (it needs your Microsoft account). Follow the test steps in `backend/README.md` and do not announce RSVPs as working until a test row appears in Excel.
