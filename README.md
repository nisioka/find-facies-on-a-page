FIXME: FaceDetectionAPIがまだまだで、上手くいかなかった。
顔検出はできるが、(特定の人物の)顔認識はできない。

そもそもまだfeatureフラグ。
chrome://flags/#enable-experimental-web-platform-features

# Chrome Extension Sample

Chrome Extension Sample

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* React
* Jest
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`
