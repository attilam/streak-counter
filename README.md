# `@attilam/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in TypeScript and meant for the browser (uses `localStorage`).

## Install

```shell
yarn add @attilam/streak-counter
```

or

```shell
npm install @attilam/streak-counter
```

## Usage

```ts
import {streakCounter} from '@attilam/streak-counter';

const today = new Date();
const streak = streakCounter(localStorage, today);

// streak returns an Object:
// {
//   currentCount: 1,
//   lastLoginDate: "06/18/2022",
//   startDate: "06/18/2022"
// }
```

## Demo

[![Edit streak-counter (ts-course) (forked)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/streak-counter-ts-course-forked-6zhyxg?fontsize=14&hidenavigation=1&theme=dark)

## Course Notes

via https://www.typescriptcourse.com/

```shell
yarn init -y
yarn add -D typescript jest ts-jest @types/jest
yarn tsc --init
yarn ts-jest config:init
```
