import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mt-0 ">
      <div className="text-white font-semibold ml-8 mt-3 text-lg">
        IntelliAudit
      </div>

      <div className="hidden md:flex gap-8 text-sm mt-3 text-gray-300">
        <a href="#">Results</a>
        <a href="#">Process</a>
        <a href="#">Insights</a>
        <a href="#">Contacts</a>
      </div>

      <button className="bg-white text-black px-4 py-2 mt-3 mr-3 rounded-full text-sm font-medium">
        Want to talk?
      </button>
    </div>
  );
}
