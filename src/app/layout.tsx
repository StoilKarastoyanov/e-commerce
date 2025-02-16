import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReduxProvider from "../redux/reduxProvider";
import "./globals.css";
import MuiProvider from "../theme/muiThemeProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>

          <ClerkProvider>
            <ReduxProvider>
              <Header />
              {children}
              <Footer />
            </ReduxProvider>
          </ClerkProvider>
        </MuiProvider>
      </body>

    </html>
  );
}
