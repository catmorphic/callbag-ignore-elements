# callbag-ignore-elements

Ignores all data emitted by the source callbag and only passes 0(handshake) or 2(complete or error).

## Install

NPM:

```
npm install --save  callbag-ignore-elements
```

Yarn:

```
yarn add callbag-ignore-elements
```

## Usage

```js
// import { concat, pipe, interval, take, of, delay }  from somewhere
// I can't guarantee that all the callbag methods you find in the community are implemented correctly,
// as I have encountered many bugs...
import ignoreElements from "callbag-ignore-elements";

const src = concat(
  pipe(interval(1000), take(5)),
  pipe(of(""), delay(3000), ignoreElements),
  pipe(interval(1000), take(3))
);

forEach(console.log)(src);

// => 0--1--2--3--4--- wait for 3 seconds ---0--1--2
```

### LICENSE

The MIT License (MIT)

Copyright (c) 2021 Levi Wong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
