// import type { Metadata } from "next";
// import { GeistSans, GeistMono } from "geist/font"; // already usable objects
// import "./globals.css";

// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
// import Footer from "@/components/Footer";

// const geistSans = GeistSans;
// const geistMono = GeistMono;

// export const metadata: Metadata = {
//   title: "Teachnow Dashboard",
//   description: "Job portal dashboard",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f9fafb]`}
//       >
//         <Navbar />
//         <div className="flex">
//           <Sidebar />
//           <main className="flex-1 p-8">{children}</main>
//         </div>
//         <Footer />
//       </body>
//     </html>
//   );
// }
// import EmployerNavbar from "@/components/Employeer/EmployeeNavbar"
// import EmployerSidebar from "@/components/Employeer/EmployeerSidebar"
// import EmployerFooter from "@/components/Employeer/Footer" 

// app/Employer/layout.tsx
import type { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#f9fafb] min-h-screen flex flex-col">
      {/* Employer Navbar */}
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
