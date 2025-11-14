import "./globals.css";

export const metadata = {
  title: "Paul Bruwer | Senior Backend Engineer",
  description: "Startup-focused backend engineer & AWS practitioner.",
  icons: { icon: "/static/favicon.ico" },
  openGraph: {
    images: '/static/profile.JPG',
  },
  twitter: {
    images: '/static/profile.JPG',
  },
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
