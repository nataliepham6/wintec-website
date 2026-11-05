# Wintec Foam — company website (English · Tiếng Việt · 中文)

A one-page website for **Wintec Foam Enterprise Limited / Công Ty TNHH Vĩnh Đức**.
It is plain HTML, CSS and JavaScript, with no build step, so it runs on GitHub Pages as it is.

## Folder map

```
index.html            page skeleton (you rarely need to touch it)
content/en.js         ALL English text   ← edit here
content/vi.js         ALL Vietnamese text ← edit here
content/zh.js         ALL Chinese text    ← edit here
assets/img/           photos and logo
assets/css/style.css  colours, fonts, layout
assets/js/app.js      builds the page from the content files
```

## How to change things

### Change text
Open `content/en.js` (or `vi.js` / `zh.js`) and edit the words between the quotes `"..."`.
Keep the quotes and commas. Do the same in all three files so the languages match.

### Add or remove an item
Each list is in square brackets `[ ... ]`, with one `{ ... }` block per item. Examples are products, certifications, services, markets and "why" reasons.
- **Add:** copy a whole `{ ... },` block, paste it below, then change the text.
- **Remove:** delete the whole `{ ... },` block.

Example: adding a new product to `products.items`:
```js
{
  id: "acoustic",
  name: "Acoustic Foam",
  tagline: "Quiet rooms, better sound",
  image: "assets/img/profiling-cutting.jpg",
  caption: "Egg-crate profile for sound absorption",
  density: [20, 35],          // or null to hide the density bar
  text: "Short description here.",
  bullets: ["Point one", "Point two"]
},
```

### Change a photo
1. Put the new image in `assets/img/`, e.g. `new-factory.jpg`. Use a large, sharp photo (1600px wide or more) for best quality.
2. In the content file, change the path, e.g. `image: "assets/img/new-factory.jpg"`.

### Change the numbers (years, grades, area, staff)
Edit the `stats` list near the top of each content file.

### Change the brand colour
In `assets/css/style.css`, change `--orange` and `--ink` at the top.

### Remove a whole section from the menu
In `assets/js/app.js`, remove its name from the `SECTIONS` list. Also remove its builder from the `render()` function.

## Language links
- English: `.../?lang=en`
- Tiếng Việt: `.../?lang=vi`
- 中文: `.../?lang=zh`

The site remembers each visitor's last choice. On a first visit it follows their browser language.

## Publishing changes
Edit the files on GitHub (pencil icon → **Commit changes**) or push from your computer.
GitHub Pages updates the live site in about a minute.

## Preview on your computer
Double-click `index.html`, or run this in the folder and open http://localhost:8000:
```
python3 -m http.server 8000
```
