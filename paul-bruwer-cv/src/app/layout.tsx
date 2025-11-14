import "./globals.css";

export const metadata = {
  title: "Paul Bruwer | Senior Backend Engineer",
  description: "Startup-focused backend engineer & AWS practitioner.",
  icons: { icon: "/static/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
