# rspack-repro

- [Rspack website](https://www.rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

Webpack is included for comparing the outputs.

## Reproduction Steps

1. `npm run build:rspack`
2. open `rspack-dist/d3.html` and `rspack-dist/standalone.html`
3. Note that in both cases some coordinates are printed to the page
4. `npm run build:rspack -- --mode=production`
5. Refresh the pages
6. Note that in both cases `null` is printed to the page

## What's happening?

The following construct in the d3 source code
```js
return point = null,
    (lower48Point.point(x, y), point)
    || (alaskaPoint.point(x, y), point)
    || (hawaiiPoint.point(x, y), point);
```

Is being transpiled/minified to the following in production mode
```js
return (
    e.point(i, u),
    (t = null),
    (n.point(i, u), t) || (o.point(i, u), t)
);
```

Which is invalid, because the first call to `.point()` modifies the `point` var.

## versions

```
    "@rspack/cli": "nightly",
    "webpack-cli": "^5.0.1",
    "webpack": "^5.79.0",
```

## Usages

`pnpm run build` would both run Webpack and Rspack with config `./config.mjs`

- Webpack will emits output in `./webpack-dist`
- Rspack will emits output in `./rspack-dist`

`./webpack-dist` and `./rspack-dist` are purposely not added to `.gitignore`.
It is recommended to commit these files so we quickly compare the outputs.
