import ClientBootstrapWrapper from "@/components/ClientBootstrapWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "@/components/Toster/ToastContainer";
import { ToastProvider } from "@/components/Toster/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <ClientBootstrapWrapper />
        <Header />
        <ToastProvider>
          {children}
          <ToastContainer />
        </ToastProvider>

        <Footer />
      </body>
    </html>
  );
}
