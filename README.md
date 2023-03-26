[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# BDD base project: Cypress + Cucumber + Typescript

Basic example of using Cypress with Cucumber (BDD). This `Gherkin` example includes:
- Basic Scenario
- Scenario Outline
- Tagged tests

# Table of contents

* [Get started](#get-started)
  * [Installation](#installation)
* [How to run the tests](#how-to-run-the-tests)
  * [Running tests](#running-tests)
  * [Running tagged tests](#running-tagged-tests)
    * [Running tagged smoke tests](#running-tagged-smoke-tests)
    * [Running using customized tags](#running-using-customized-tags)
  * [Running tests manually](#running-tests-manually)
* [Static code analysis tools](#static-code-analysis-tools)
  * [How to run the tools](#how-to-run-the-tools)
  * [ESLint](#eslint)
    * [Find Problems](#find-problems)
    * [Fix Automatically](#fix-automatically)
  * [TypeScript Compiler](#typescript-compiler)
    * [Checking code without compilation](#checking-code-without-compilation)
* [Issues](#issues)
* [License](#license)

# Get started

## Installation

```bash
npm install
```

# How to run the tests

## Running tests

```bash
npm test
```

**`output`**: an output is generated for each `.feature` file found.

```bash
    Spec                                              Tests  Passing  Failing  Pending  Skipped
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✔  web/Duckduckgo.feature                  00:10        3        3        -        -        -  │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
  ✔  All specs passed!                       00:10        3        3        -        -        -
```

**HTML report**:

![Output](./documentation/images/report_html.png "Report")

## Running tagged tests

### Running tagged smoke tests

```bash
# defined in package.json file
npm run tag:smoke
```

### Running using customized tags

```bash
npx cypress run --env tags="@smoke and @duckduckgo"
```

*more details*: [tags](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/tags.md)

# Running tests manually

Open **`Cypress`** and run the tests manually:

```bash
npm run cypress:open
```

# Static code analysis tools

## How to run the tools

Run ESLint and TypeScript Compiler (without compilation)

```bash
npm run lint
```

## ESLint

### Find Problems

ESLint statically analyzes the code to find problems.

```bash
npm run lint:eslint
```

### Fix Automatically

Many problems ESLint finds can be automatically fixed.

```bash
npm run lint:eslint:fix
```

## TypeScript Compiler

### Checking code without compilation

Check the types and validate the code using TypeScript without compilation.

```bash
npm run lint:tsc
```

# License

[MIT](./LICENSE)
