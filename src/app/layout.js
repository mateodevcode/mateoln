import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Mateo Lizcano Noriega",
  description: "Personal website of Mateo Lizcano Noriega",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
