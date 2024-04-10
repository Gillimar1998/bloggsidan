import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/componments/header";
import { Footer } from "@/componments/footer";
import variables from '../styles/variables.module.scss'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={variables.body}>
        <Header/>
        <main className={variables.main}>{children}</main>
        <Footer/>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
