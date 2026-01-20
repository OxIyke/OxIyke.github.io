import "./globals.css";

export const metadata = {
  title: "will you be my valentine?",
  description: "A cute valentine proposal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
