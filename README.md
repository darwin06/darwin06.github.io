# Darwin Mateos — personal portfolio

Static GitHub Pages portfolio for a Senior WordPress Engineer. Semantic HTML, plain CSS, and a small vanilla JavaScript file. No build or runtime dependencies are required.

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. GitHub Pages serves the same files directly.

## Update content

- `index.html`: biography, expertise, selected experience, contact, and ten project links.
- `assets/site.css`: responsive navy and mint design and original abstract project artwork.
- `assets/site.js`: mobile navigation, project filters, active navigation, and footer year.
- `assets/Darwin_Mateos_Resume.pdf`: current downloadable résumé.
- `assets/darwin-mateos.webp`: optimized portrait from the existing site.
- `assets/fonts/`: self-hosted Montserrat font files reused from the repository.

The page remains usable without JavaScript. Fonts and images are local.

Project cards intentionally contain only names, domains, and links. They represent contributions in collaboration with agency/client teams, not sole authorship of entire websites. Selection prioritizes substantial engineering involvement from the supplied portfolio notes. The artwork is illustrative typography, not external-site screenshots or official logos.

Career content comes from the supplied October 2026 résumé. The experience section is a selection; the PDF provides the full chronology.

Legacy Sass, Gulp, stylesheets, JavaScript, and assessment files remain for reference. The redesigned homepage does not load them. The old Sass pipeline does not overwrite `assets/site.css`.

## Deployment

Prepared on the existing feature branch. Publish through the repository's normal GitHub Pages branch or pull request workflow. No additional hosting configuration is required.

## Verification

Checked JavaScript syntax, navigation/filter behavior, HTML anchors, local asset/font paths, structured data, project URLs against supplied notes, résumé file integrity, and Git whitespace checks. Browser preview and screenshots could not run in the editing sandbox because local sockets and browser startup are restricted. Visually check desktop and mobile layouts using the local preview command before publishing.

## Readability and search metadata

Body copy uses 16–18px text, with secondary labels at least 14px. Project names and career roles use larger headings. Decorative project numbering and tiny engineering labels were removed; section titles and skill labels use clearer wording. Project cards continue to omit descriptions.

Search metadata includes a descriptive title and summary, canonical URL, complete Open Graph/Twitter fields, and linked WebSite/ProfilePage/Person/ItemList structured data matching visible content. `robots.txt` advertises `sitemap.xml`, which contains the canonical homepage only. This is an implementation change, not a guarantee of indexing or search ranking. Add new real pages to the sitemap when they are published; section anchors are not separate sitemap URLs.
