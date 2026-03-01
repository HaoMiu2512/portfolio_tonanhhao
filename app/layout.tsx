import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tôn Anh Hào | Fullstack · AI · Security",
  description: "Portfolio of Tôn Anh Hào — Fullstack Developer, AI/ML Engineer, and Cybersecurity Researcher. Building production web apps, AI-powered systems, and secure solutions.",
  keywords: "fullstack developer, AI engineer, cybersecurity, React, Next.js, LangChain, penetration testing, Vietnam",
  authors: [{ name: "Tôn Anh Hào" }],
  openGraph: {
    title: "Tôn Anh Hào | Fullstack · AI · Security",
    description: "Fullstack Developer, AI/ML Engineer & Security Researcher from Vietnam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
