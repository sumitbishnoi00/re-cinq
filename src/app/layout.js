import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";



export const metadata = {
  metadataBase: new URL("https://re-cenq.vercel.app/"),
  title: "Re Cinq",
  description: "Join leaders navigating the shift from Cloud Native to AI Native. Access the shared language, historical context, and patterns to lead with certainty.",
  openGraph: {
    title: "Re Cinq",
    description: "Join leaders navigating the shift from Cloud Native to AI Native. Access the shared language, historical context, and patterns to lead with certainty.",
    url: "https://re-cenq.vercel.app/",
    siteName: "Stack Audio",
    images: [
      { url: "/assets/png/meta.png", width: 1200, height: 630, alt: "Stack Audio" },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/assets/png/meta.png"] },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
