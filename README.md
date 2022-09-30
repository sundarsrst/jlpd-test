# Technical Task (DevOps / SRE)

## Introduction

Welcome to the technical task for the Engineering Effectiveness team at Glean. 

Within this repository is a simple Node.js server, written using TypeScript. If you've never encountered Node or TypeScript before, don't panic! The task doesn't require you to write any actual code, instead focusing on DevOps-style tasks that interact with the code in a limited way.

Use of Google, StackOverflow etc is also allowed and encouraged!

To help you get started, here's a quick summary of the files this repository contains:

 - `package.json` - this essentially defines the project, outlining its dependencies, where the 'main' file lives and so on. It also defines some `scripts` for common tasks, which can be executed via `yarn run X` - e.g. `yarn run lint`.
 - `src` - this directory contains the application code and tests, written in TypeScript.

## Setup

To get going with the repository, you will need Node installed. You can either install this on your machine, or you're welcome to use a Docker image if you prefer - see https://nodejs.org/en/download/. **Note:** this project has been developed and tested on Node v16.15.0. 

Once you've got Node setup, use `yarn install` from the repo root to grab its dependencies. After that, a simple `yarn run serve` will spin up a local version of the server. You can test that it's working by navigating to http://localhost:3000/ in a browser.

## The Task

Please push your solution to a branch and open a PR once you are finished. Get in touch to let us know you are done and we'll aim to review your code within 2 working days.

### Part 1 - Containerisation

Create a Dockerfile that can be used to build and run the app. You don't need to publish it anywhere, but should be able to verify it locally via `docker build` and `docker run` (after which you should be able to hit https://localhost:3000/ as before).

### Part 2 - Continuous Integration

Create a build pipeline for the project. You can use whichever CI provider you like for this - Github Actions might be a natural choice, but feel free to use Jenkins or something else if that's more familiar to you. 

The pipeline should aim to verify as much as possible, including (but not limited to): 
 - TypeScript compilation
 - formatting
 - testing
 - building your Dockerfile from Part 1

Some of these may fail to begin with - it's up to you how to fix them.

### Part 3 - Bonus content / stretch goals

Here are some extra things you might like to consider if you've got time to spare:

 - The test suite currently doesn't pass consistently when run together. Can you figure out what's going wrong? Is there a simple way to fix it?
 - Jest supports gathering code coverage during test runs. Update your pipeline so that it produces a coverage report as a build artifact.
