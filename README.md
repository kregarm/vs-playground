# vs-playground

A lightweight Playwright playground for testing the BTC City Ljubljana staging site.

## Overview

This project contains end-to-end UI tests written in TypeScript with Playwright. It uses a page-object style structure and includes Docker support for running the suite in a container. It triggers github actions on push and contains answers to questions within the /reports folder.

## Important

A lot of this test suite was vibed into existence.

The current DOM is not very E2E-friendly: there are no `data-test` attributes or other stable hooks I could use for selectors. Because of that, and because I was pushed pretty hard toward using AI, I ended up dumping the DOM into the model to get something that seems to work.

In reality, the locators are fragile and prone to breaking. If I had access to the source code, I would add proper `data-test` attributes first, then clean up the selectors around those.

I also ran out of the time I had set aside for this, so the scenario coverage is not complete. I added the filtering flow and result card coverage, and I think the scope could be expanded fairly easily from here, but I do not have the time or mental bandwidth to push it further before Friday.

## Target URL

`https://staging.nepremicnine.btc-city.com/ljubljana`

## Requirements

- Node.js
- npm

## Installation

```bash
npm ci
npx playwright install
```

## Run tests

```bash
npx playwright test
```

## View test report

```bash
npx playwright show-report
```

## Run with Docker

Build the image:

```bash
docker build -t vs-playground .
```

Run the tests:

```bash
docker run --rm vs-playground
```

## What is covered

The current suite includes tests for:

- filtering results to a no-results state and resetting the filters
- opening a listing and submitting the contact form
- screenshot validation for a result card

## Notes

- Tests run in Chromium in headless mode.
- HTML reporting is enabled.
- Screenshots are captured on failure.
- Traces are retained on failure.
- Visual screenshot assertions may require longer timeouts.
- Use `npx playwright test` directly, since the default `npm test` script is not set up for the suite.
