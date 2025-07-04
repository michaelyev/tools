import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
// THEME PROVIDER
import StyledComponentsRegistry from "@lib/registry";
// APP PROVIDER
import { AppProvider } from "@context/app-context";
import StyledContext from "@context/StyledContext";
// AUTH PROVIDER
import Providers from "@component/Providers";
// THIRD PARTY CSS FILE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NProgressBar from "@component/NProgress";
import Topbar from "@component/topbar";
import Sticky from "@component/sticky";
import { Header } from "@component/header";
import { Footer1 } from "@component/footer";
import Navbar from "@component/navbar/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonik - The Best React eCommerce Template",
  description:
    "Bonik is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store",
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react", "bonik"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <Providers>
            <AppProvider>
              <StyledContext>
                <Topbar />
                <Sticky fixedOn={0} scrollDistance={300}>
                  <>
                    <Header />
                    <Navbar navListOpen={true} />
                  </>
                </Sticky>

                {children}
                <NProgressBar />
                <Footer1 />
              </StyledContext>
            </AppProvider>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
