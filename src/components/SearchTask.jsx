import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchTask({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    // Debounced search
    const timer = setTimeout(() => {
      if (searchTerm) {
        onSearch(searchTerm);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <form onSubmit={handleSearch} className="w-full md:w-auto relative">
      <div
        className={`relative transition-all duration-300 ${
          isFocused ? "scale-105" : "scale-100"
        }`}
      >
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 rounded-lg blur opacity-0 transition-opacity duration-300 ${
            isFocused ? "opacity-75" : ""
          }`}
        ></div>

        <div className="relative">
          <input
            ref={inputRef}
            type="search"
            className="input-field pr-10 w-full md:w-[340px] lg:w-[400px]"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="mr-2 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
              >
                <FaTimes className="h-3 w-3" />
                <span className="sr-only">Clear search</span>
              </button>
            )}

            <button
              type="submit"
              className={`p-1.5 rounded-full bg-gradient-to-r ${
                isFocused
                  ? "from-purple-600 to-indigo-600 text-white"
                  : "from-gray-700 to-gray-700 text-gray-400"
              } hover:from-purple-600 hover:to-indigo-600 hover:text-white focus:outline-none transition-all duration-200`}
            >
              <FaSearch className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>

      {searchTerm && (
        <div className="absolute left-0 mt-1 text-xs text-gray-400 animate-fade-in">
          Searching for "{searchTerm}"
        </div>
      )}
    </form>
  );
}
