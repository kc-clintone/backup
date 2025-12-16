import { LoaderCircleIcon } from "lucide-react";
import React from "react";

function LoaderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-4">
      <LoaderCircleIcon className="w-16 h-16 text-red-600 animate-spin" />

      <p className="text-lg font-medium">Just a sec...</p>
    </div>
  );
}

export default LoaderPage;
