import { Html, Head, Main, NextScript } from "next/document";

// console.log('Outside document')

export default function Document() {

  console.log('Document')

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
