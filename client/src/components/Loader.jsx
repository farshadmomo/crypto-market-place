import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-3 w-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-700" />
    </div>
  );
};

export default Loader;
