import "./globals.css";

import  Header  from '../components/header'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Colégio Normélia Ballock',
  description:'Novo site CNB',
  openGraph:{
    title:'Colégio Normélia Ballock',     //Depois precisa adicionar a URL
    description:'Parte da URL'

  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
    index: true,
    follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>

        {children}
      </body>
    </html>
  );
}
