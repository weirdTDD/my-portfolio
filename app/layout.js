import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import BlurryBlob from "@/components/animata/background/blurry-blob";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Next",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" >
      <body
        className={`${outfit.className
        } ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-black dark:text-white`}
      >
        {/*Background blobs*/}
        <BlurryBlob firstBlobColor="bg-blue-400" secondBlobColor="bg-purple-400" />
        {children}
      </body>
    </html>
  );
}
