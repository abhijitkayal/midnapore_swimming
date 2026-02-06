// const NoticeBoard = () => {
//   return (
//     <div className="w-full bg-[#f0faff]  py-12 px-4 md:px-4 lg:px-10">
//       {/* Banner Container */}
//       <div className="max-w-7xl mx-auto relative h-screen aspect-[21/9] md:aspect-[3/1] bg-[#ccd5e0] overflow-hidden shadow-sm">
//         {/* Stylized Mountain/Hill Shapes */}
//         <div className="absolute bottom-0 left-[-10%] w-[70%] h-[80%] bg-[#f8fafc] rounded-[100%] translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-[-10%] w-[75%] h-[90%] bg-[#f1f5f9] rounded-[100%] translate-y-1/3"></div>

//         {/* Stylized Sun/Moon */}
//         <div className="absolute top-[30%] left-[25%] w-12 h-12 md:w-20 md:h-20 bg-[#f8fafc] rounded-full opacity-80"></div>

//         {/* Optional Overlay Text or Content can be placed here */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* <h1 className="text-4xl font-bold text-slate-700">Your Title Here</h1> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoticeBoard;

import { useState, useEffect } from "react";
import { FileText, X, Plus } from "lucide-react";

// PDF metadata interface
interface PdfItem {
  id: number;
  name: string;
  path: string;
  description: string;
}

// Default PDFs (you can remove these once you upload your own)
const defaultPdfs: PdfItem[] = [
  {
    id: 1,
    name: "Introduction to Natural Language Processing",
    path: "/Introduction-to-Natural-Language-Processing.pdf",
    description: "Learn about NLP fundamentals"
  },
  {
    id: 2,
    name: "Introduction to Natural Language Processing (Copy)",
    path: "/Introduction-to-Natural-Language-Processing copy.pdf",
    description: "NLP guide and resources"
  }
];

const NoticeBoard = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfList, setPdfList] = useState<PdfItem[]>([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newPdf, setNewPdf] = useState({ name: "", description: "", file: null as File | null });

  // Load PDFs from localStorage or use defaults
  useEffect(() => {
    const savedPdfs = localStorage.getItem('noticeBoardPdfs');
    if (savedPdfs) {
      setPdfList(JSON.parse(savedPdfs));
    } else {
      setPdfList(defaultPdfs);
      localStorage.setItem('noticeBoardPdfs', JSON.stringify(defaultPdfs));
    }
  }, []);

  const openPdf = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewPdf({ ...newPdf, file: e.target.files[0] });
    }
  };

  const addPdfToList = () => {
    if (newPdf.name && newPdf.description && newPdf.file) {
      // Create object URL for the uploaded file
      const fileUrl = URL.createObjectURL(newPdf.file);
      
      const newPdfItem: PdfItem = {
        id: Date.now(),
        name: newPdf.name,
        path: fileUrl,
        description: newPdf.description
      };

      const updatedList = [...pdfList, newPdfItem];
      setPdfList(updatedList);
      localStorage.setItem('noticeBoardPdfs', JSON.stringify(updatedList));
      
      // Reset form
      setNewPdf({ name: "", description: "", file: null });
      setShowUploadForm(false);
      alert("Notice added successfully!");
    } else {
      alert("Please fill all fields and select a PDF file");
    }
  };

  const deletePdf = (id: number) => {
    if (confirm("Are you sure you want to delete this notice?")) {
      const updatedList = pdfList.filter(pdf => pdf.id !== id);
      setPdfList(updatedList);
      localStorage.setItem('noticeBoardPdfs', JSON.stringify(updatedList));
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#e8f4f8] to-[#f0faff] mt-10 min-h-screen py-12 px-4 md:px-10 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Notice Board
          </h2>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="mt-4 sm:mt-0 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Notice
          </button>
        </div>
        <p className="text-center text-gray-600 mb-10 text-sm sm:text-base">
          Click on any notice to view details
        </p>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Notice</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notice Title
                </label>
                <input
                  type="text"
                  value={newPdf.name}
                  onChange={(e) => setNewPdf({ ...newPdf, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter notice title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newPdf.description}
                  onChange={(e) => setNewPdf({ ...newPdf, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload PDF
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileUpload}
                    className="flex-1 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                  />
                </div>
                {newPdf.file && (
                  <p className="text-sm text-green-600 mt-2">
                    Selected: {newPdf.file.name}
                  </p>
                )}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={addPdfToList}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Add Notice
                </button>
                <button
                  onClick={() => setShowUploadForm(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PDF Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pdfList.map((pdf) => (
            <div
              key={pdf.id}
              onClick={() => openPdf(pdf.path)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 flex items-center justify-center h-40">
                <FileText className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {pdf.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {pdf.description}
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openPdf(pdf.path);
                    }}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    View Notice
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePdf(pdf.id);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Modal/Viewer */}
        {selectedPdf && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-bold text-gray-800">Notice Document</h3>
                <button
                  onClick={closePdf}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={selectedPdf}
                  className="w-full h-full"
                  title="PDF Viewer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
