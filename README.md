# nathanpayne.dev V1 (OLD)

Portfolio showcasing some of my work. I have updated this at [https://nathanpayne.dev](nathanpayne.dev)

## Technologies

- HTML
- TailwindCSS
- PostCSS
- Javascript
- Node.js + express
- Nginx

## Purpose

This site ws built using a node.js backend with Tailwind CSS classes. Javascript is used to animate various elements.

Tailwind is a lower level css framework which adds more intuitive classes to the HTML but requires almost no custom CSS, no naming of custom classes, no context switching and therefore easily reusable modular site components.

Tailwind prevents a large and hard to navigate css file which takes more time to work in, leads to hard to find conflicts and uneccessary css overwrites.

It was used here as a plugin through POSTcss which includes useful tools like auto-prefixer (increasing browser compatability) and purgeCSS (reducing Tailwinds final build size to < 10kb.)

To deploy I used Nginx as a reverse proxy on a linux server. This required command line tools, process managers and SSL certificates.

## Timespan

This project was worked on part-time for about a week
