import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CodeLeap Network - Frontend Test",
  description:
    "CodeLeap Network app, a Next.js frontend test with post CRUD, authentication, and filters.",
  openGraph: {
    title: "CodeLeap Network - Frontend Test",
    description:
      "CodeLeap Network app, built for the CodeLeap frontend challenge with CRUD operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLeap Network - Frontend Test",
    description:
      "CodeLeap Network app, built for the CodeLeap frontend challenge with CRUD operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
