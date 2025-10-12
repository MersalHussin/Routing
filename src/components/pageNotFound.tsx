const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2c313a] text-center px-4 text-gray-100">
      <div className="bg-[#242424] rounded-2xl p-8 max-w-md w-full shadow-lg border border-gray-700">
        <h1 className="text-[6rem] font-extrabold text-[#61dafb] leading-none mb-2">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Looks like you took a wrong turn in the React universe.
        </p>

        <div className="flex items-center justify-center gap-4">
          {/* زر إعادة التحميل */}
          <button
            disabled
            className="px-4 py-2 rounded-lg border border-[#61dafb] text-[#61dafb] font-medium hover:bg-[#61dafb]/10 transition"
          >
            Refresh Page
          </button>

          {/* زر العودة للصفحة الرئيسية */}
          <button
            disabled
            className="px-4 py-2 rounded-lg bg-[#61dafb] text-[#1a1a1a] font-semibold hover:bg-[#4fc8e6] transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
