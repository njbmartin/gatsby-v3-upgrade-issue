<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  webpack mismatch minimal reproduction
</h1>

Gatsby has been set to V2 to show the issue when upgrading without cleaning `node_modules` first.

You will notice there are only 4 dependencies:

```
    "gatsby": "^2.29.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "@storybook/react": "^6.1.18"
```

The only outdated package is Gatsby, the rest are on their respective latest versions.

1. You should first install the dependencies as they are (Gatsby v2). Use either `npm i` or `yarn`.
2. Run `gatsby develop`. It should work as expected.
3. Now upgrade gatsby to v3.
4. Run `gatsby develop`. It errors with `NormalModuleFactory.afterResolve (ReactRefreshPlugin) is no longer a waterfall hook`

Tested both NPM and Yarn. Same issue.

OS: Linux 5a9d7cf33ad4 4.19.104-microsoft-standard #1 SMP Wed Feb 19 06:37:35 UTC 2020 x86_64 GNU/Linux (VS Code Dev Container)
Node: 14.15.4
NPM: 6.14.10
Yarn: 1.22.5

### Thoughts

It appears to be caused by another package having a dependency on webpack@4, while gatsby has a dependency on webpack@5.

If you upgrade from gatsby@2 to gatsby@3, it doesn't seem to install webpack@5 but stays at webpack@4.

However, if you do a clean install by nuking the `node_modules`, webpack@5 is installed.