import "./globals.css";
import Page from "./page.js"

export const metadata = {
  title: 'Todo'
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Page/>
      </body>
    </html>
  );
}
