// // // "use client";
// // // import { useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { Card, CardContent } from "@/components/ui/card";

// // // export default function BulkJobPostingPage() {
// // //   const [file, setFile] = useState<File | null>(null);

// // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     if (e.target.files && e.target.files.length > 0) {
// // //       setFile(e.target.files[0]);
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     if (!file) {
// // //       alert("Please upload a CSV file before submitting.");
// // //       return;
// // //     }
// // //     console.log("Uploading file:", file.name);
// // //     // TODO: API call to backend
// // //   };

// // //   return (
// // //     <div className="flex flex-col min-h-screen">
// // //       <div className="flex flex-1">
// // //         {/* Main Content */}
// // //         <main className="flex-1 p-6 bg-gray-50">
// // //           <div className="max-w-4xl mx-auto">
// // //             {/* Page Title */}
// // //             <h1 className="text-3xl font-semibold text-sky-700 mb-6">
// // //               Bulk Job Posting
// // //             </h1>

// // //             {/* Upload Card */}
// // //             <Card className="p-6 shadow-md rounded-2xl">
// // //               <CardContent>
// // //                 {/* Download Button */}
// // //                 <div className="flex justify-end mb-6">
// // //                   <Button className="bg-sky-500 hover:bg-sky-600 text-white">
// // //                     Download Sample CSV
// // //                   </Button>
// // //                 </div>

// // //                 {/* Upload Section */}
// // //                 <h2 className="text-xl font-semibold mb-2">Upload Jobs in Bulk</h2>
// // //                 <p className="text-gray-500 mb-4">
// // //                   Upload a CSV file to post multiple jobs at once. Use the sample CSV as a template.
// // //                 </p>

// // //                 {/* Upload Box */}
// // //                 <label
// // //                   htmlFor="csvUpload"
// // //                   className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 cursor-pointer hover:border-sky-400 transition"
// // //                 >
// // //                   <svg
// // //                     className="w-10 h-10 text-gray-400 mb-2"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     strokeWidth="2"
// // //                     viewBox="0 0 24 24"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l8-8 8 8M12 4v12"
// // //                     />
// // //                   </svg>
// // //                   <span className="text-gray-600">
// // //                     Drag and drop your CSV here, or <span className="text-sky-500">browse</span>
// // //                   </span>
// // //                   <input
// // //                     id="csvUpload"
// // //                     type="file"
// // //                     accept=".csv"
// // //                     className="hidden"
// // //                     onChange={handleFileChange}
// // //                   />
// // //                 </label>

// // //                 {/* Selected File */}
// // //                 {file && (
// // //                   <p className="mt-3 text-sm text-gray-600">
// // //                     Selected File: <span className="font-medium">{file.name}</span>
// // //                   </p>
// // //                 )}

// // //                 {/* Submit Button */}
// // //                 <div className="mt-6">
// // //                   <Button
// // //                     onClick={handleSubmit}
// // //                     className="bg-sky-600 hover:bg-sky-700 text-white w-full"
// // //                   >
// // //                     Submit and Post Jobs
// // //                   </Button>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </div>
// // //         </main>
// // //       </div>


     
// // //     </div>
// // //   );
// // // }
// // "use client";


// // export default function BulkJobPostingPage() {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       {/* Navbar */}


// //       <div className="flex flex-1">
// //         {/* Sidebar */}
     
// //         {/* Main Content */}
// //         <main className="flex-1 p-6 bg-[#f9fafc]">
// //           <div className="max-w-5xl mx-auto">
// //             {/* Page Title */}
// //             <h1 className="text-[28px] font-semibold text-[#2563eb] mb-6">
// //               Bulk Job Posting
// //             </h1>

// //             {/* Upload Box Container */}
// //             <div className="bg-white rounded-2xl shadow p-8">
// //               {/* Download Button */}
// //               <div className="flex justify-end mb-6">
// //                 <button className="bg-[#e6f0ff] text-[#2563eb] font-medium rounded-full px-6 py-2 flex items-center gap-2">
// //                   <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M12 4v16m8-8H4"
// //                     />
// //                   </svg>
// //                   Download Sample CSV
// //                 </button>
// //               </div>

// //               {/* Upload Section */}
// //               <h2 className="text-xl font-semibold mb-2">Upload Jobs in Bulk</h2>
// //               <p className="text-gray-500 mb-6">
// //                 Upload a CSV file to post multiple jobs at once. Use the sample
// //                 CSV as a template.
// //               </p>

// //               {/* Dotted Upload Box */}
// //               <div className="border-2 border-dashed border-gray-300 rounded-lg py-16 px-6 text-center cursor-pointer hover:border-[#2563eb] transition">
// //                 <svg
// //                   className="w-12 h-12 mx-auto mb-3 text-[#2563eb]"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l8-8 8 8M12 4v12"
// //                   />
// //                 </svg>
// //                 <span className="text-gray-600">
// //                   Drag and drop your CSV here, or{" "}
// //                   <span className="text-[#2563eb] font-medium cursor-pointer">
// //                     browse
// //                   </span>
// //                 </span>
// //               </div>

// //               {/* Submit Button */}
// //               <div className="mt-8 flex justify-center">
// //                 <button className="bg-[#2563eb] hover:bg-[#1e4ecb] text-white font-medium rounded-full px-8 py-2 shadow">
// //                   Submit and Post Jobs
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>

   
// //     </div>
// //   );
// // }
// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Download, Upload } from "lucide-react"; // ✅ icons

// export default function BulkJobPostingPage() {
//   return (
//     <main className="flex-1 p-6 bg-gray-50">
//       <div className="max-w-4xl mx-auto">
//         {/* Page Title */}
//         <h1 className="text-3xl font-semibold text-sky-700 mb-6">
//           Bulk Job Posting
//         </h1>

//         {/* Upload Card */}
//         <Card className="p-6 shadow-md rounded-2xl">
//           <CardContent>
//             {/* Download Button */}
//             <div className="flex justify-end mb-6">
//               <Button className="bg-sky-300 hover:bg-sky-400 text-sky-900 rounded-full px-6 flex items-center gap-2">
//                 <Download className="w-5 h-5" />
//                 Download Sample CSV
//               </Button>
//             </div>

//             {/* Upload Section */}
//             <h2 className="text-xl font-semibold mb-2">Upload Jobs in Bulk</h2>
//             <p className="text-gray-500 mb-4">
//               Upload a CSV file to post multiple jobs at once. Use the sample CSV as a template.
//             </p>

//             {/* Upload Box */}
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500">
//               <Upload className="w-12 h-12 mb-3 text-sky-400" />
//               <span>
//                 Drag and drop your CSV here, or{" "}
//                 <span className="text-sky-500 cursor-pointer">browse</span>
//               </span>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6 flex justify-center">
//               <Button className="bg-sky-300 hover:bg-sky-400 text-sky-900 px-8 rounded-full flex items-center gap-2">
//                 <Upload className="w-5 h-5" />
//                 Submit and Post Jobs
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowUpRight, Briefcase } from "lucide-react"; // using Briefcase for title

export default function BulkJobPostingPage() {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-sky-700 mb-6 flex items-center gap-2">
          Bulk Job Posting
          <Briefcase className="w-8 h-8" style={{ color: "#4679B5" }} />
        </h1>

        {/* Upload Card */}
        <Card className="p-6 shadow-md rounded-2xl">
          <CardContent>
            {/* Download Button */}
            <div className="flex justify-end mb-6">
              <Button
                className="rounded-full px-6 flex items-center gap-3"
                style={{ backgroundColor: "#9BC9FF", color: "white" }}
              >
                {/* Icon inside circle */}
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: "#4679B5" }}
                >
                  <Download className="w-4 h-4 text-white" />
                </span>
                Download Sample CSV
              </Button>
            </div>

            {/* Upload Section */}
            <h2 className="text-xl font-semibold mb-2">Upload Jobs in Bulk</h2>
            <p className="text-gray-500 mb-4">
              Upload a CSV file to post multiple jobs at once. Use the sample CSV as a template.
            </p>

            {/* Upload Box */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500 
              transition-colors duration-200 hover:bg-white hover:shadow-md cursor-pointer"
            >
              <ArrowUpRight className="w-12 h-12 mb-3" style={{ color: "#4679B5" }} />
              <span>
                Drag and drop your CSV here, or{" "}
                <span className="text-sky-500 cursor-pointer">browse</span>
              </span>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                className="px-8 rounded-full flex items-center gap-3 border"
                style={{
                  borderColor: "#4679B5",
                  color: "#4679B5",
                  backgroundColor: "white",
                }}
              >
                {/* Icon inside circle */}
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: "#4679B5" }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
                Submit and Post Jobs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
