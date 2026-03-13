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

import { useParams } from "react-router-dom";

// List of PDFs in public folder
const pdfList = [
  {
    id: 1,
    name: "Notice 1",
    path: "/Introduction-to-Natural-Language-Processing.pdf",
    description: "General notice update"
  },
  {
    id: 2,
    name: "Notice 2",
    path: "/Introduction-to-Natural-Language-Processing copy.pdf",
    description: "Important member information"
  },
  {
    id: 3,
    name: "Notice 3",
    path: "/Introduction-to-Natural-Language-Processing copy 2.pdf",
    description: "Latest club announcement"
  },
];

const NoticeBoard = () => {
  const { tabId } = useParams();
  const selectedId = Number(tabId) >= 1 && Number(tabId) <= 3 ? Number(tabId) : 1;
  const selectedNotice = pdfList.find((item) => item.id === selectedId) ?? pdfList[0];

  return (
    <div className="w-full bg-linear-to-br bg-[#e8f4f8]  min-h-screen py-12 px-4 md:px-10 lg:px-10">
      <div className="max-w-7xl mx-auto md:px-10">
        {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-gray-800">
          Notice Board
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Select a notice tab. The notice opens directly below.
        </p> */}

        {/* Tabs */}
        {/* <div className="mb-8 flex flex-wrap justify-center gap-3">
          {pdfList.map((pdf) => (
            <Link
              key={pdf.id}
              to={`/noticeboard/${pdf.id}`}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                selectedId === pdf.id
                  ? "bg-cyan-600 text-white"
                  : "bg-white text-cyan-700 hover:bg-cyan-50"
              }`}
            >
              {pdf.name}
            </Link>
          ))}
        </div> */}

        {/* Selected Notice Card */}
        {/* <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-linear-to-br from-cyan-500 to-blue-600 p-6 flex items-center justify-center h-40">
            <FileText className="w-20 h-20 text-white" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedNotice.name}</h3>
            <p className="text-sm text-gray-600 mb-6">{selectedNotice.description}</p>
            <p className="text-cyan-700 font-medium">Scroll down to read this notice.</p>
          </div>
        </div> */}

        {/* Inline PDF Viewer */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b bg-cyan-50">
            <h3 className="text-lg font-bold text-gray-800">{selectedNotice.name}</h3>
          </div>
          <iframe
            src={selectedNotice.path}
            className="w-full h-300"
            title={`${selectedNotice.name} PDF`}
          />
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
