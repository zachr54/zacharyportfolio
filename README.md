# Zachary — Portfolio

Personal portfolio for university applications. Plain HTML, CSS and a little JavaScript; no build step.
Open `index.html` in a browser to view it.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | Story, heritage, quick facts, values |
| `academics.html` | Awards, contests, coursework |
| `activities.html` | Guitar, folk dance, rugby, robotics, powerlifting |
| `service.html` | Leadership, work and service |
| `projects.html` | Occupancy counter, FTC robot parts, Arduino |
| `certificates.html` | Certificate photos with filters and a full-size viewer |
| `goals.html` | Electrical Engineering and beyond |
| `resume.html` | One-page resume (print or save as PDF) |
| `bibliography.html` | Credits |

## Adding photos (certificates and projects)

Photo spots show a dashed "Add photo" box with a file name. Save your photo with **exactly that name** and it
appears automatically. No code changes needed.

Certificates go in `assets/certificates/`:

| File name | Certificate |
|---|---|
| `opa-provincials.webp` | Gold, OPA Ontario Provincials medal (added) |
| `swimming.jpg` | Gold & bronze, Central Region Championships |
| `rugby-mip.webp` | Most Improved Player trophy (added) |
| `spring-classic.webp` | Spring Classic medal (added) |
| `lifeguard-nl-pool.jpg`, `lifesaving-instructor.jpg`, `swim-instructor.jpg`, `first-aid-instructor.jpg`, `first-aid-cpr-c.jpg`, `high-five.jpg` | Lifesaving Society and HIGH FIVE certifications (added). To update one, replace the file with the same name. Cover your home address first. |
| `omfa-guitar.webp` | Gold, OMFA Provincials medal (added) |
| `kiwanis-guitar.jpg` | Gold, Ontario Kiwanis Music Festival |
| `kumon-level-j.webp` | Kumon Math Level J plaque (added) |
| `honor-roll.jpg` | Advanced Student Honor Roll Award |
| `math-contests.jpg` | Math contest certificate |
| `dublin-heights.jpg` | Dublin Heights awards |
| `kaggle.jpg` | Kaggle Python (added) |

Projects go in `assets/projects/`: `mmwave.jpg` (occupancy counter), `ftc-cad.jpg` (robot parts), `arduino.jpg`.

Other photos go in `assets/photos/`: `swimming.jpg` (you swimming), `fitness-club.jpg`, `pool.jpg` (at work).

To swap the powerlifting photo for one from OPA Provincials, replace `assets/web/powerlifting.jpg`
with your new photo (same name).

Medals and trophies are saved as `.webp` with the background removed, so they sit on the page's spotlight.

Tips: use JPG, about 1200–1600 px wide, and take certificate photos straight-on in good light.

### Adding another certificate

In `certificates.html`, copy one `<figure class="cert" …>…</figure>` block, then change:

- `data-cat`: `athletics`, `music`, `academics` or `tech` (this is what the filter buttons use)
- the file name in **both** `data-file="…"` and `src="…"`
- the title in `<h3>` and the line under it in `<p>`

## Before sending this to universities

Placeholders are highlighted in teal on the page. Search the HTML for `class="todo"` to find them, then replace each
one with plain text. For example:

```html
<span class="todo">your email</span>   →   you@example.com
```

Checklist:

- [ ] Optional: contest results (Academics)
- [ ] Project details and the Arduino project (Projects)
- [ ] Remaining certificate photos (and the math contest certificate title)
- [ ] A personal story paragraph (About)
- [ ] Photo sources (Credits)

## Editing

- Colours and fonts: the first block of `style.css`.
- The header and footer repeat on every page, so a nav change has to be made in each HTML file.
