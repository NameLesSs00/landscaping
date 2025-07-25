import type { Metadata } from "next";
import "./globals.css";
import NavMain from '@/app/components/NavMain';


export const metadata: Metadata = {
  title: "Landscaping service ",
  description: "Professional landscaping services to transform and maintain your outdoor spaces. We offer lawn care, garden design, hardscaping, and more for residential and commercial properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NavMain></NavMain>

        {children}
      </body>
    </html>
  );
}
