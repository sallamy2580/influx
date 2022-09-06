## Getting Started

First, install the dependencies:

```bash
yarn
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## How it works

With the introduction of getServerSideProps and getStaticProps, things became a bit difficult, because the two forms of pre-rendering only run on the server side which was not the case with getInitialProps which ran and on the client side and server side.

In the reducers, in the swich cases, we will have to implement the HYDRATE case first which will allow our client and server state to be reconciled because our stare must merge in order to avoid the clash between client and server.

you can still always use getInitialProps and dispatch the actions in _app, which is not without consequence because you will not benefit from the automatic static optimization offered by next js. that's why in all our pages we implement the checkServerSideCookie function in order to load the token if it exists. we can also remove this function from all our pages and implement it only in _app but again we would be depriving ourselves of static optimization because of getInitialProps.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
