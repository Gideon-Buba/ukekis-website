import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "UKEKI'S",
  description: "Your business is just a click away from more clients",
  icons: {
    icon: "/ukeki_logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
