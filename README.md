This is an next.js project,

Install npm packages npm i

for development build npm run dev

for production build npm run build npm run start


# next.js

* An intuitive page-based routing system (with support for dynamic routes)
* Automatically statically optimizes page(s) when possible
* Server-side renders page(s) with blocking data requirements
* Automatic code splitting for faster page loads
* Client-side routing with optimized page prefetching
* Built-in CSS support, and support for any CSS-in-JS library
* Webpack-based dev environment which supports Hot Module Replacement (HMR)
* API routes to build your API with serverless functions, with the same simple router used for pages
* Customizable with community plugins and with your own Babel and Webpack configurations


# react-virtualize

I did not use practices that infinite loader or pagination for rendering matches,
I thought that the match json came from the server, and infinite loader logic should apply on the server side, 
I used the json supplied to me as a static data.
That is why i used react-virtualize, i think it is the solution of big lists rendering problem on the frontend side.

List virtualization, or "windowing", is the concept of only rendering what is visible to the user. The number of elements
that are rendered at first is a very small subset of the entire list and the "window" of visible content moves when the user
continues to scroll. This improves both the rendering and scrolling performance of the list.

# jest & enzyme

I used enzyme for shallowing components during tests.
