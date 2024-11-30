import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-gray-800 font-bold text-center">
            Task Details
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold text-slate-600">
            {title}
          </h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
