import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1,width=device-width, minimal-ui"
        />
        <link
          href="/apple-touch-icon.png"
          sizes="180x180"
          rel="apple-touch-icon"
        />
        <title>Jason Loves Jill</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
