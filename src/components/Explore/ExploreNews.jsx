import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FullNews } from "../../data/FullNews";

const ExploreNews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const repeatedNews = Array(5)
    .fill(FullNews)
    .flat()
    .sort(() => Math.random() - 0.5);

  const filteredNews = isSearching
    ? FullNews.filter(
        (item) =>
          item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 1)
    : repeatedNews;

  const handleSearch = () => {
    setIsSearching(true);
    setDisplayedItems(filteredNews);
  };

  const handleClearSearch = () => {
    setIsSearching(false);
    setSearchTerm("");
    setCurrentIndex(0);
    setDisplayedItems(repeatedNews.slice(0, 10));
  };

  const loadMore = () => {
    if (currentIndex < filteredNews.length) {
      const nextItems = filteredNews.slice(currentIndex, currentIndex + 5);
      setDisplayedItems((prev) => [...prev, ...nextItems]);
      setCurrentIndex(currentIndex + 5);
    }
  };

  // Inisialisasi
  useEffect(() => {
    setDisplayedItems(repeatedNews.slice(0, 10));
  }, []);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-10 relative">
        <div
          data-aos="fade-up"
          className="mb-6 flex flex-col md:grid md:grid-cols-12 gap-4 sticky top-20 z-30"
        >
          <div className="md:col-span-9 bg-[#F7EFE3]/50 backdrop-blur-2xl rounded-2xl flex items-center justify-center md:justify-start px-6 py-4 font-semibold text-sm relative">
            <input
              placeholder="Search Here.."
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded-2xl outline-0 border-0 text-black w-full pr-20"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 md:hidden p-2 text-gray-600 hover:text-black transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {isSearching && (
              <button
                onClick={handleClearSearch}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 md:hidden p-2 text-red-500 hover:text-red-700 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          {/* Desktop Search Button */}
          <button
            onClick={handleSearch}
            className="hidden md:flex md:col-span-3 bg-[#F7EFE3]/50 backdrop-blur-2xl rounded-2xl items-center justify-center px-6 py-4 font-semibold text-sm hover:bg-[#EEDFCB] transition"
          >
            Search
          </button>
        </div>

        {displayedItems.map((item, idx) => (
          <article
            data-aos="fade-up"
            key={`${item.slug}-${idx}`}
            className="group mb-6 flex flex-col md:grid md:grid-cols-12 gap-4 cursor-pointer"
          >
            <div className="order-2 md:order-1 md:col-span-8 bg-[#F7EFE3] rounded-2xl p-6 flex flex-col justify-center">
              <Link
                to={`/explore/${item.slug}`}
                className="text-xl md:text-2xl font-semibold mb-1 group-hover:underline"
              >
                {item.subtitle}
              </Link>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
            <figure className="order-1 md:order-2 md:col-span-4 rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-64 md:h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
          </article>
        ))}

        {!isSearching && currentIndex < filteredNews.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-[#F7EFE3]/50 backdrop-blur-2xl rounded-2xl px-8 py-4 font-semibold text-sm hover:bg-[#EEDFCB] transition"
            >
              Load More ({displayedItems.length}/{filteredNews.length})
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default ExploreNews;
