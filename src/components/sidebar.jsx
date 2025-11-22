import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-4 flex flex-col gap-3 text-white bg-black/40 backdrop-blur-md lg:flex rounded-r-2xl shadow-2xl">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 pl-3 mb-2">
        <img src={assets.Logo} alt="Logo" className="w-10 h-10 rounded-lg shadow-lg" />
        <p className="text-2xl font-bold tracking-wide">Sound Stream</p>
      </div>
 
      {/* Top Navigation */}
      <div className="bg-gray-800/90 rounded-2xl flex flex-col justify-around py-4 shadow-md">
        <div className="flex items-center gap-3 pl-8 py-2 cursor-pointer hover:bg-gray-700/80 rounded-lg transition-all">
          <img src={assets.home_icon} alt="home" className="w-8" />
          <p className="font-semibold text-lg">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 py-2 cursor-pointer hover:bg-gray-700/80 rounded-lg transition-all">
          <img src={assets.search_icon} alt="search" className="w-8" />
          <p className="font-semibold text-lg">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212]/95 rounded-2xl p-4 flex flex-col justify-between grow shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="library" className="w-8" />
            <p className="font-semibold text-lg">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="arrow" className="w-5 opacity-80 hover:opacity-100 transition-all" />
            <img src={assets.plus_icon} alt="plus" className="w-5 opacity-80 hover:opacity-100 transition-all" />
          </div>
        </div>

        <div className="bg-gray-700/50 rounded-xl p-4 flex flex-col justify-start gap-2 text-white">
          <h1 className="text-lg font-semibold">Create Your First Playlist</h1>
          <p className="text-sm font-light">It’s easy, we’ll help you</p>
          <button className="px-4 py-2 bg-white text-black font-semibold text-sm rounded-full mt-2 hover:scale-105 transition-transform shadow">
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
