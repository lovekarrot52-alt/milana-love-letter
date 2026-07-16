import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Для Миланы ♥",
  description: "Маленькое признание, сделанное с теплом специально для Миланы.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
