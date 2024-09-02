import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import Home from "../home/Home";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
   
      <main className="min-h-screen flex flex-col items-center justify-center py-15 xs:px-2 sm:px-2 md:px-20 lg:px-40 text-black">
      {currentPath === "/" ? <Home /> : children}
            </main>
      <Footer />
    </div>
  );
}