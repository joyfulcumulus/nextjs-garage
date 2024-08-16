import "./globals.css";
import { open_sans } from "./ui/fonts";

export const metadata = {
  title: {
    template: '%s | NextJS Garage App',
    default: 'NextJS Garage App',
  },
  description: "Garage Management App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
