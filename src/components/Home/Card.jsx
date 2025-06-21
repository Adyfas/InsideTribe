const Card = ({ id, img, desc, location, onRead = () => {} }) => {
  return (
    <div
      data-ao="fade-up"
      data-aos-delay={200 * id}
      key={id}
      className="relative w-[340px] h-[400px] rounded-3xl overflow-hidden shadow-lg bg-black/80 max-md:w-[360px] max-md:h-[400px] group cursor-pointer"
    >
      <img
        src={img}
        alt={desc}
        className=" inset-0 w-full h-full object-cover group-hover:brightness-75"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-700" />
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
        <div className="flex gap-2 ">
          <span
            key={id}
            className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md transition-all duration-500 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              ></path>
            </svg>
            {location}
          </span>
        </div>
      </div>
      <div className="absolute bottom-6 left-4 right-4 z-10 transform translate-y-100 group-hover:translate-y-0 transition-all duration-700">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h3 className="text-white text-xl font-normal leading-snug text-start mb-3">
            {desc}
          </h3>
          <div className="border-t border-white/20 mb-2" />
          <button
            onClick={() => onRead()}
            className="relative flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 group px-4 py-2 rounded-lg overflow-hidden focus:outline-none"
          >
            <span className="transition-transform duration-700 group-hover:-translate-x-2 relative ">
              Read
            </span>
            <span aria-hidden className="transition-none">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
