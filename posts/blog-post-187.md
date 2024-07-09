---
layout: base-layout.njk
date: 2023-04-18
tags: ["post"]
---

... that the easiest way to find the intersection of two arrays in ES6 is to use

```js
function intersect(a, b) {
  return a.filter(Set.prototype.has, new Set(b));
}
```
