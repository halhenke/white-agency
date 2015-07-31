# README

## Uses

- SASS
- Babel
  - ES6 to ES5
- Gobble
  - Simple tree based build manager

## Running

### Building

- install gobble-cli
  - `npm i -g gobble-cli`
- to build
  - From the root directory
    - `gobble -f build public`
- to serve (assets already built in public)
  - Use something like `live-server`
    - automatically reloads page on changes
      - install
        - `npm i -g live-server`
      - From the root directory
        - `live-server .`
  - For browsers that dont like WebSockets (IE 8) `static-server` is better
    - have to manually reload page on changes
      - install
        - `npm i -g static-server`
      - From the root directory
        - `static-server .`
