import localFont from "next/font/local";
import "./globals.css";

const paperlogy = localFont({
  src: [
    {
      path: "./fonts/Paperlogy-1Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-2ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-3Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-4Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-5Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-6SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-7Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-8ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Paperlogy-9Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-paperlogy",
});

export const metadata = {
  title: "TOOLBEE PLUS",
  description: "AI 기반 영상제작 프레임워크",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${paperlogy.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
