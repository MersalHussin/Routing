import { Link, useLocation } from "react-router-dom";

interface IProps {
  statusCode: number;
  title?: string;
}

const ErrorRootHandler = ({
  statusCode = 500,
  title = "Server Error",
}: IProps) => {
    
const pathname = useLocation().pathname;

  return (
    <div className="min-h-[calc(100vh-92px)] flex flex-col items-center justify-center  text-center px-4 text-gray-100">
      <div className="rounded-2xl bg-[#2b3039] p-8 max-w-md w-full shadow-lg border border-gray-700">
        <h2 className="text-3xl font-bold text-[#61dafb] mb-2">Error Occurred!</h2>
        <h3 className="text-xl font-semibold text-gray-200 mb-6">{title}</h3>

        <p className="text-gray-400 text-lg mb-8">
          Status Code:{" "}
          <span className="font-mono font-bold text-[#61dafb]">{statusCode}</span>
        </p>

        <div className="flex items-center justify-center gap-4">
          {/* زر الريفريش */}
          <Link to= {pathname}
            className="px-4 py-2 rounded-lg border border-[#61dafb] text-[#61dafb] font-medium hover:bg-[#61dafb]/10 transition"
          >
            Refresh Page
          </Link>

          {/* زر الهوم */}
          <Link to={"/"}
            className="px-4 py-2 rounded-lg bg-[#61dafb] text-[#1a1a1a] font-semibold hover:bg-[#4fc8e6] transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorRootHandler;
