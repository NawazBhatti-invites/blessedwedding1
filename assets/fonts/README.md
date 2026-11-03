# Fonts

| Use | Font | File expected here |
|---|---|---|
| All wording on the cover, welcome and save-the-date pages | **Tempting** (RGB Studio, DaFont) | `Tempting.woff2` and/or `Tempting.ttf` |
| Groom's name only | **Birds of Paradise** (Herofonts, DaFont) | `BirdsOfParadise.woff2` and/or `BirdsOfParadise.ttf` |
| The words **Rasm-e-Hina, Barat, Walima** only | **Chocolate** (Fadlilah Studio, DaFont) | `Chocolate.woff2` and/or `Chocolate.ttf` |
| The invitation wording page ("Your Presence Is Our Gift", "See You There") | **Astoria** (Khurasan, DaFont) | `Astoria.woff2` and/or `Astoria.ttf` |
| Dates, times, addresses and countdowns; the Locations page; the RSVP page and form; buttons on those pages | **Poppins** | included: `Poppins-Regular.ttf`, `Poppins-Medium.ttf` |

`css/style.css` loads these with `@font-face` using only the files in this folder, so a different font that happens to be installed on a guest's phone is never used by mistake. If one of the four DaFont files is missing, the site falls back to Parisienne (a similar script from Google Fonts) and nothing breaks. Add a file with exactly the name above and it is used automatically. A `.ttf` can be converted to `.woff2` with any font converter for faster loading.

## Licences: please read

- **Poppins**: SIL Open Font License 1.1, which allows web embedding and redistribution. Keep the licence text with the fonts if you publish the repository.
- **Tempting**: DaFont lists it as "Free for personal use" (download named "PERSONAL USE ONLY").
- **Birds of Paradise**: free for personal use only; commercial licences are sold by the author.
- **Chocolate (Fadlilah Studio)**: listed as free for personal use.
- **Astoria (Khurasan)**: the author's note says "FREE FOR PERSONAL USE ONLY. No commercial use allowed."

A private family wedding is personal, but putting a font file on a public website lets anyone download it, and I could not confirm that web embedding is allowed under these personal-use licences. Before publishing, either ask each author for written permission (or buy the web or commercial licence they offer), or keep the repository and site private. If you cannot get permission, tell me and I will switch to an open-licence font.
