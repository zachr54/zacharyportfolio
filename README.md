# Zachary — Portfolio

Personal portfolio for university applications. Plain HTML, CSS and a little JavaScript; no build step.
Open `index.html` in a browser to view it, or publish the folder with GitHub Pages.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: intro, highlights, links to every section |
| `about.html` | My story, heritage, values |
| `academics.html` | Awards, contests, coursework |
| `activities.html` | Guitar, folk dance, rugby, robotics, powerlifting |
| `service.html` | Service, leadership and volunteer hours |
| `ics4u0.html` | Java projects from ICS4U0 |
| `tutorial.html` | OOP tutorial |
| `goals.html` | University and career goals |
| `resume.html` | One-page résumé (print or save as PDF) |
| `bibliography.html` | Credits and sources |

## Before sending this to universities

Placeholders are highlighted in yellow on the page. To find them all, search the HTML files for `class="todo"`.
When you fill one in, remove the `todo` wrapper so it shows as normal text. For example:

```html
<span class="todo">school name</span>   →   Your School Name
<p class="todo">Add 2–3 sentences…</p>  →   <p>Your sentences…</p>
```

Checklist:

- [ ] Email address (footer of every page, and the résumé)
- [ ] Last name, school name, portfolio URL (résumé, About page)
- [ ] Service page: volunteer roles, hours table, leadership roles
- [ ] Grades you did each activity (Activities table), rugby position and team
- [ ] Contest results, math and science courses (Academics)
- [ ] Universities and programs you're considering (Goals)
- [ ] A personal story paragraph (About)
- [ ] Photo sources (Credits page)
- [ ] Check every fact: grade, years, awards and results

## Editing

- Colours and fonts: the first block of `style.css`.
- Photos: the web-sized versions in `assets/web/` are the ones the pages use. To change one, save a JPG
  around 1200 px wide there with the same name.
- The header and footer are repeated on each page, so a nav change needs to be made in every HTML file.
