# Paradisiac — Travel Blog

**[Live Site](https://chruz0.github.io/travelblog/)**

A themeable travel blog exploring a research question: how does the treatment and captivity of dolphins at a popular Jamaican attraction affect a visitor's experience, and what should travelers weigh before deciding to participate? The site combines firsthand field observations with secondary research to give readers a balanced, source-backed picture.

Originally created as a multimodal research project for a college rhetoric course.

## Features

- **Theme system** -- six selectable themes (Teal, Coral, Sand, Ocean Blue, Sunset Orange, Night Mode) built with CSS custom properties, applied via a JS-toggled class on `<body>`
- **Persistent theme preference** saved to `localStorage` and restored on page load
- **Accessible dropdown** -- supports click and keyboard interaction (Enter/Space to select, Escape to close, closes on outside click)
- **Responsive hero layout** using CSS Grid, collapsing from a two-column to single-column layout below 980px
- **Long-form guide format** -- TL;DR summary, firsthand field notes, cited ethical/environmental analysis, and a full Works Cited section (7 sources)
- **Panel-based structure** -- Field Notes, Promises, Ethical Concerns, Mitigation Measures, and Alternatives, guiding readers from lived experience to evidence to their own decision
- **Typography via Google Fonts** (Montserrat, Lora, Bonheur Royale)

## Research approach

- **Primary research:** firsthand observations from an in-person visit, including guest experience, trainer behavior, and dolphin responses
- **Secondary research:** news coverage, NEPA environmental filings, and marine-mammal welfare studies, linked directly so readers can verify claims themselves

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, media queries)
- Vanilla JavaScript (theming, keyboard-accessible UI)
- Hosted via GitHub Pages

## Status

Single-entry site. The top nav [**Attractions** / **Guides** / **About**] is scaffolded for potential future entries but not yet wired to live pages.
