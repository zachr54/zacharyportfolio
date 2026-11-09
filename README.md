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
| `service.html` | Service, leadership, volunteer hours |
| `projects.html` | Electronics projects (Arduino, ESP32, mmWave) |
| `certificates.html` | Certificate photos with filters and a full-size viewer |
| `goals.html` | Electrical Engineering and beyond |
| `resume.html` | One-page résumé (print or save as PDF) |
| `bibliography.html` | Credits |

## Adding photos (certificates and projects)

Photo spots show a dashed "Add photo" box with a file name. Save your photo with **exactly that name** and it
appears automatically. No code changes needed.

Certificates go in `assets/certificates/`:

| File name | Certificate |
|---|---|
| `swimming.jpg` | Swimming |
| `spring-classic.jpg` | Powerlifting, Spring Classic |
| `omfa-guitar.jpg` | OMFA Provincials guitar gold |
| `guitar-exam.jpg` | Guitar exam / level |
| `kaggle.jpg` | Kaggle |
| `math-contests.jpg` | Math contest certificate |
| `dublin-heights.jpg` | Dublin Heights awards |

Projects go in `assets/projects/`: `esp32.jpg`, `mmwave.jpg`, `arduino.jpg`.

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

- [ ] Email (footer of every page and the résumé), last name, portfolio URL
- [ ] Service page: volunteer roles, hours, leadership
- [ ] Activities table: grades for each activity, rugby position and team
- [ ] Contest results and course codes (Academics)
- [ ] Universities and programs you're applying to, career interest (Goals)
- [ ] Project names and descriptions (Projects)
- [ ] Certificate titles and certificate photos
- [ ] A personal story paragraph (About)
- [ ] Photo sources (Credits)

## Editing

- Colours and fonts: the first block of `style.css`.
- The header and footer repeat on every page, so a nav change has to be made in each HTML file.
