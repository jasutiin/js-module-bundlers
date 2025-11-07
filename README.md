# Understanding JavaScript Module Bundlers

This repository holds all of my experiments regarding JavaScript module bundlers like Vite, Webpack, and Turbopack. I don't even know if Vite is a module bundler because it uses ESBuild which is a module bundler itself. This means I don't know if I should be comparing ESBuild to Webpack, or Vite to Webpack. We just out here learning : )

The most I know about this stuff is when I do `npm create vite@latest my-app -- --template react-ts`, so I know nothing at all about them lol. Since I use that command, it makes sense to go into how Vite works. I've already mentioned that it uses ESBuild, but what is ESBuild's job in Vite? It's used to read the source code and identifiy the modules (think of these as separate `.js`/`.ts` files) and their dependencies, and bundles it all together into one JavaScript file. ESBuild is also used for minification of files to obfuscate a lot of the code that was written. This means shortening variable names, removing comments, and so on.

## Some articles I should read

https://medium.com/ekino-france/beyond-webpack-esbuild-vite-rollup-swc-and-snowpack-97911a7175cf
