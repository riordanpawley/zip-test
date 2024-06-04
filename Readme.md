# Web Assignment

## Notes
* Live here: [zip-test-git-master-riordanpawleys-projects.vercel.app](zip-test-git-master-riordanpawleys-projects.vercel.app)
* I decided to use this opportunity to explore some technologies and tools that I have wanted to try for a while such such as bun, RSCs and graphql.
  * I spent a lot of time just trying to get some type safety into the graphql code. I'm not sure it is all hooked up correctly, but it seems to work for the most part.
  * Bun seems to be the drop in replacement that it is supposed to be (at least in this repo). I haven't been able to use it before due to most of my projects using grpc server code.
* I've split the app into two parts, one part uses suspense and the other does not. I wanted to see how they compare - open the network graph and refresh the page to see the difference.
  * It seems that with suspense the blocking time is much shorter as the layout of the site is rendered first and the rest of the site is streamed in.
* I've used Effect in the backend in a few places since you guys were interested in it. Let me know if you want an explanation on anything there.
* I didn't bother going too fancy with the styling as I'm not a designer and I wanted to focus on getting a handle on RSCs and graphql.


## Setup
1. Clone the repo
2. If you use nix flakes or have bun installed, you are good to go - otherwise you can either install bun or do a find and replace in the package.json file to replace `bun` with `pnpm` or `yarn` or whatever package manager you use.
3. install deps
4. run `bun dev` or `bun run build && bun run start` to start the server
5. open the browser to `localhost:3000`

## Testing
I've added a few tests to the project. You can run unit tests with `bun run test` and e2e tests with `bun playwright --ui`.