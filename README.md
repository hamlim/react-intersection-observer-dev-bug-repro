# react-intersection-observer-dev-bug-repro

This repo is a simple Next app that is using the `react-intersection-observer` library (at version `8.34.0`).

In development, the `onChange` handler for the `<InView>` compponent doesn't get called at all - however when building the app locally and then running the `onChange` handler does get called correctly.

## Reproduction:

### Broken:

- Install dependencies using `yarn` (Node 22)
- Run `yarn dev`
- Visit `localhost:3000` and scroll down
- ❌Don't see sticky header when the normal header is out of view

Ideally:

- This would show a sticky header at the top of the page
- Also the `onChange` on `<InView>` should be called and we would see a log in the console

### Working:

- Install dependencies using `yarn` (Node 22)
- Run `yarn build`
- Run `yarn start`
- Visit `localhost:3000` and scroll down
- ✅ Correctly see sticky header when the normal header is out of view!
