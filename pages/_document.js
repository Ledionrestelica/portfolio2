import { Html, Head, Main, NextScript } from "next/document";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "next-themes";

export default function Document() {
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
