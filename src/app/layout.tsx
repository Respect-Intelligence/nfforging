import AOSWrapper from "@/components/animation/AOSWrapper";
import ClientBootstrapWrapper from "@/components/ClientBootstrapWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "@/components/Toster/ToastContainer";
import { ToastProvider } from "@/components/Toster/ToastProvider";
import GlobalContextProvider from "@/context/GlobalContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <GlobalContextProvider>
          <AOSWrapper>
            <ToastProvider>
              <ClientBootstrapWrapper />
              <Header />
              {children}
              <ToastContainer />

              <Footer />
            </ToastProvider>
          </AOSWrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
