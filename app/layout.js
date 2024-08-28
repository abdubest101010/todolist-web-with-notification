import { TelegramProvider } from "../lib/TelegramProvider";
import "./globals.css"; // Import your global styles if any
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "A todolist web app",
  description: "A todolist web app with notification",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TelegramProvider>
          <Navbar />
          <main className="bg-white">{children}</main>
          <Footer />
        </TelegramProvider>
      </body>
    </html>
  );
}
