import ClientBootstrapWrapper from "@/components/ClientBootstrapWrapper";
import Header from "@/components/Header";

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
        {children}
      </body>
    </html>
  );
}
