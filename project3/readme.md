# Proposal

### 01. Project Description

NYC Bird Orchestra (potential name) is A community-driven website that transforms bird sightings across NYC's five boroughs into a collective audio/visual composition. Each sighting becomes a bird-shaped musical note, gradually building a score composed by the community.

### 02. Community

**Target:** NYC birdwatchers, urban wildlife enthusiasts, and curious residents.
**Goal:** Encourage people to observe urban birds and share their encounters through a collaborative, creative experience.

### 03. User-Generated Content

Visitors submit:

- **Bird species** — Dropdown
- **Borough** — Dropdown
- **Time of sighting** — Time input
- **Observation** — Optional text

Submissions are stored on the server and displayed on the collective musical score.

### 04. Data Visualization & Interaction

| User Input | Representation |
| --- | --- |
| Borough | One of five musical staff lines (pitch) |
| Time | Horizontal position (00:00–24:00) |
| Species | Bird illustration |
| Each sighting | One musical note |

**Interactions:**

- Click/hover a bird to read its observation.
- Submit a sighting to add a note.
- Look at or hear the collective composition. (Audio is optional but it’d be nice if I have extra time)

### 05. Sitemap

```
NYC Bird Orchestra
│
├── Home / Orchestra
│   ├── Introduction
│   ├── Interactive musical score
│   ├── Bird observation details
│   ├── Play / Pause
│   └── Add a Bird → Submit
│
├── Submit a Sighting
│   ├── Submission form
│   └── Confirmation → Home
│
└── About
    ├── Project & community
    ├── How it works
    └── Join → Submit
```

### 06. Wireframes

1. **Home:** Header, introduction, musical score, playback controls, CTA, footer.
    
    !image.png
    
2. **Submit:** Form, submit button, confirmation state.
    
    !image.png
    
3. **About:** Project explanation, community information, participation instructions.
    
    !image.png
    

*Credits to Figma Make*

### 07. Visual Direction

- **Vintage sheet music × birdwatcher's field journal**
- Warm paper tones
- ink-colored staff lines
- illustrated birds
- serif typography
- subtle animations (optional)

!An AIGC image based on my concept (credit: chatgpt)

An AIGC image based on my concept (credit: chatgpt)

### 08. References

**Tags:** Conceptual, Visual, Technical (ordered by relevance)

| Project | Inspiration |
| --- | --- |
| Logan Williams | An artist who experiments with bird data a lot! |
| Flocking | My previous TA (Audrey Oh)’s project. Related to subway data visualization through animation of birds.  |
| Skyline Symphony  | My Code of Music final project which also involves visualizing music and data. |
| Listen to Wikipedia | Transforming collective data into music. Critique: no hover or preview state and going to an external browser is a little disruptive. |
| Chrome Music Lab | Interactive music visualization (covered in IMA Code of Music!) A helpful tool if I have time for audio.  |
| eBird | Birdwatching community and user-generated observations |

### 09. Timeline

- [x]  **Oct 13–15:** Proposal, sitemap, wireframes, visual references
- [ ]  **Oct 16–20:** User generated content: form design, submissions, backend
- [ ]  **Oct 21–25:** Frontend, data transformed into audio/visual output
- [ ]  **Oct 26–27:** Testing, refinement, documentation