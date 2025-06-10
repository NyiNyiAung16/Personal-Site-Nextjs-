import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getGlobalContent } from "@/data/actions";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Blogs",
    template: "Blogs - %s",
  },
  description: "I will share my knowledge and experience through this blog.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getGlobalContent();
  const navbar = data.data.navbar;
  const footer = data.data.footer;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={'/coding.svg'}
          type="image/x-icon"
        />
      </head>
      <body className="">
        <ThemeProvider>
          <Navbar
            logoName={navbar.logoName}
            logo={navbar.logoImage}
            links={navbar.links}
          />
          <div className="widthBase px-3 sm:px-4 lg:px-8 py-4 sm:py-6 md:py-8">{children}</div>
          <Footer
            links={footer.links}
            logoName={footer.logoName}
            logoImage={footer.logoImage}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
