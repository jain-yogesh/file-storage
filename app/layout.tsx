import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const poppins = Poppins({
  subsets:['latin'],
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "File Store",
  description: "The only solution for your file storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}