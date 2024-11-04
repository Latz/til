---
layout: base-layout.njk
date: 2024-11-04
tags: ["post"]
---

... that I have to tell the canvas that I want to use an alpha value: `const ctx = canvas.getContext('2d', {alpha: true});`, otherwise the color will turn black if the value is below 10.
