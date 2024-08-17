// app/layout.js
import { TelegramProvider } from "../lib/TelegramProvider";
import { UserProvider } from "../context/UserContext";
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
          <UserProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </UserProvider>
        </TelegramProvider>
      </body>
    </html>
  );
}
