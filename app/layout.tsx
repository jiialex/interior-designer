import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOMELY AI | Your Space. Your Style. Your Budget.",
  description: "Reimagine your home with AI, discover Ethiopian furniture, and connect with trusted local professionals."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
