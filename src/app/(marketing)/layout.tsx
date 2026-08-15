import Header from "@/components/marketing/header";
import Footer from "@/components/marketing/footer";
import React from "react";

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}