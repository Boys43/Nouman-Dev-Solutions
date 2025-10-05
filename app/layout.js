import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/reusable/AOSWrapper";
import Header from "./components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", '500', "600", "700"]
});

const oswald = Oswald({
  subsets: ["latin"], weight: ["400", '500', "600", "700"]
});

export const metadata = {
  title: "Nouman Dev - Meet Fun with Dev",
  description: "Nouman Dev Solution is a perfect website that merges fun with Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* ✅ Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <Header />
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
