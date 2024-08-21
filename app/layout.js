import { TelegramProvider } from "../lib/TelegramProvider";
import "./globals.css"; // Import your global styles if any
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your App Title",
  description: "A description of your app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TelegramProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TelegramProvider>
      </body>
    </html>
  );
}
