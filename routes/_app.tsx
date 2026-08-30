import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Jason + Jill" />
        <meta name="theme-color" content="#ffe2e2" />
        <link rel="manifest" href="/manifest.webmanifest" />
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
