/* Public settings only. Never put secrets here. */
window.WEDDING_CONFIG = {
  /* After deploying the backend (backend/README.md) paste the Azure Function URL, e.g.
     https://YOUR-FUNCTION-APP.azurewebsites.net/api/rsvp */
  rsvpEndpoint: "",

  music: {
    source: "youtube",              /* "youtube" (embedded player) or "file" (assets/audio/wedding-music.mp3) */
    youtubeId: "akOGqVSeVGk",       /* Bismillah, Kailash Kher: Tere Naam Se Shuru Hua */
    startSeconds: 16,               /* start (and loop back) from the 16th second */
    volume: 45,                     /* 0 to 100 */
    fileStartSeconds: 0             /* used only in "file" mode */
  }
};
