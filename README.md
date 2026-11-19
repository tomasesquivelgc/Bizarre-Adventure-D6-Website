# Bizarre Adventures D6 (BAD6)

A companion website for **Bizarre Adventures D6**, a tabletop RPG system inspired by *JoJo's Bizarre Adventure*. Like a D&D-style game, players create characters (PCs) and drive the story together, while a Narrator (GM) runs the world, NPCs, and rulings.

The core fantasy is the **Stand User**: someone who manifests their soul as a Stand with its own Ability, Typing, and Properties. Stands and Users share damage and senses, are usually only visible or harmable by other Stand Users, and are strongest when close to their User — with plenty of room for exceptions at the table.

## What you need to play

- A handful of six-sided dice (**D6**)
- Pencil and paper for stats and maps
- Or online tools like [Roll20](https://roll20.net/) / [Foundry VTT](https://foundryvtt.com/)

Community and source material:

- [BAD6 Discord](https://discordapp.com/invite/2QVASDt)
- [Changelog](https://docs.google.com/document/d/17T32edqs6SqHV7KYUpTuskYgDnnvjfjzvmJ_PGfKvUQ/view)
- [Rulebook v.0.75b](https://docs.google.com/document/d/1SfNOul18JrU_dAcTkiIVmvdY3tsSowobP-KP9EiIers/view)

## Site pages

| Route | Description |
| --- | --- |
| `/` | Introduction and what BAD6 is |
| `/mechanics` | Core rules: rolling, DC, actions, hits, gambits, turn order, and more |
| `/mechanic-examples` | Worked examples, reference tables, and stat combo chart |
| `/character-creation` | Building Users, Stands, stats, abilities, and alternatives |
| `/resources` | Example sheets and useful external links |

## Tech stack

- [React Router](https://reactrouter.com/) (Framework Mode)
- React 19 + TypeScript
- Tailwind CSS v4
- Vite

## Getting started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

### Other scripts

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # generate route types + TypeScript check
```

## Project layout

```
app/
  routes/          # page modules (home, mechanics, character creation, …)
  components/      # shared UI (e.g. On This Page)
  nav/             # site header / navigation
  welcome/         # home page content
  tailwind.css     # theme tokens, fonts, global styles
public/            # static assets (banner, logos, mechanics art, fonts)
```

## License / attribution

BAD6 is a fan tabletop system inspired by *JoJo's Bizarre Adventure*. This site presents the rules for play; the Narrator remains the final arbiter at their table.
