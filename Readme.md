# Web Assignment

## Notes
* I decided to use this opportunity to explore some technologies and tools that I have wanted to try for a while such such as bun, rsc and graphql.
* I spent a lot of time just trying to get some type safety into the graphql code. I'm not sure it is all hooked up correctly, but it seems to work for the most part.
* I've split the app into two parts, one part uses suspense and the other does not. I wanted to see how they compare - open the network graph and refresh the page to see the difference.
* I've used Effect in the backend in a few places since you guys were interested in it. Let me know if you want an explanation on anything there.


## Setup
1. Clone the repo
2. If you use nix flakes or have bun installed, you are good to go - otherwise you can either install bun or do a find and replace in the package.json file to replace `bun` with `pnpm` or `yarn` or whatever package manager you use.
3. install deps
4. run `bun dev` or `bun run build && bun run start` to start the server
5. open the browser to `localhost:3000`