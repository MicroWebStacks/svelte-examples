# svelte-examples

Simple examples with Svelte Kit showing common web design patterns, with focus on server and client states management and synchronization.

# 01_basics

basic example with home server rendered page and a prerendered page

live demo : https://svelte-basics.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5744d9-f70d-48af-b7ff-908415431a51/deploy-status)](https://svelte-basics.netlify.app/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/svelte-examples/tree/main/01_basics)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/svelte-examples/tree/main/01_basics)


# 02_ssr-counter

global server counter, keep state on page reload as long as the same instance is running. All clients will increment the same counter.


* Sequence

<img src="./media/02_ssr-counter-sequence.drawio.svg" width="500">

* Project files

<img src="./media/02_ssr-counter.drawio.svg" width="500">



live demo : https://svelte-ssr-counter.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/71157122-a8d8-4bdf-92ee-7c000f77991d/deploy-status)](https://svelte-ssr-counter.netlify.app/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/svelte-examples/tree/main/02_ssr-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/svelte-examples/tree/main/02_ssr-counter)


# 03_server-cookie-counter

couter saved as a cookie, fetched, incremented and updated by the server

<img src="./media/03_server-cookie-counter.drawio.svg" width="500">

live demo : https://svelte-cookie-counter.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/12e511dd-b988-4c8a-a84f-0db3651889e0/deploy-status)](https://svelte-cookie-counter.netlify.app/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/svelte-examples/tree/main/03_server-cookie-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/svelte-examples/tree/main/03_server-cookie-counter)

# 04_client-counters

classical front end Cards counters. Each Card has a counter variable, all client side, resets on page reload, reactive DOM assignment.

live demo : https://svelte-client-counters.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/e24c6238-9f4e-48cc-9391-f215fcd36c9a/deploy-status)](https://svelte-client-counters.netlify.app/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/svelte-examples/tree/main/04_client-counters)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/svelte-examples/tree/main/04_client-counters)

# 05_sse-counter

SSE: Server Sent Events. global var using a timer and Emitter.

Server keeps couter state. Reloading the page has no effect on the counter states which just keeps counting independently.

This example is using both load functions on server and on client.

* Notes

requires Node18 Node18 for ReadableStream()

not serverless compatible

* Sequence

<img src="./media/05_sse-counter-sequence.drawio.svg" width="500">

* Project files

<img src="./media/05_sse-counter.drawio.svg" width="700">

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/svelte-examples/tree/main/05_sse-counter)

# 06_markdown

simple example with markdown rendering
