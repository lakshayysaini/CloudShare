import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/Header";

const inter = Outfit( { subsets: ["latin"] } );

export const metadata = {
  title: "Cloud Share",
  description: "Upload, Save and Share Your Files",
};

export default function RootLayout( { children } ) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ inter.className }>
          <Header />
          { children }
        </body>
      </html>
    </ClerkProvider>
  );
}
