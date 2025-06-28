import { Link, useParams } from "react-router-dom";
import { FullNews } from "../data/FullNews";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import GalleryPopupDetails from "../components/GalleryPopupDetails";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function NewsExplore() {
  const { title } = useParams();
  console.log("Route nya ", title);
  const article = FullNews.find((item) => item.slug === title);
  console.log(article);

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="w-full max-w-4xl mx-auto py-20 px-4 text-center h-screen flex items-center justify-center flex-col">
          <h1 className="text-2xl font-bold text-gray-700">
            Artikel tidak ditemukan
          </h1>
          <p className="mt-4 text-gray-500">
            Silakan kembali ke halaman eksplorasi.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12 relative">
      <div className="items-center flex justify-center">
        <Link
          to={"/explore"}
          className="fixed bg-white/50 backdrop-blur-3xl text-center border-black border rounded-2xl p-2 bottom-5 right-15 max-md:right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 20v-9H6.8l1.6 1.6L7 14l-4-4l4-4l1.4 1.4L6.8 9H15q.825 0 1.413.588T17 11v9z"
            ></path>
          </svg>
        </Link>
        {/* <button  className="fixed bg-white/50 backdrop-blur-2xl w-[150px] text-center border-black border rounded-2xl p-2 bottom-5">
          Back
        </button> */}
      </div>
      <header className="mb-12">
        <h1 className="text-5xl font-serif font-bold leading-tight mb-4 text-gray-900">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6 font-light">
          {article.subtitle}
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2 max-md:flex-col max-md:items-start">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
              ></path>
            </svg>
            {article.location}
          </span>
          <span>{article.author}</span>
          <a
            href={article.from}
            target="_blank"
            className="truncate w-1/2 text-blue-600 flex items-center"
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${article.from}`}
              alt="favicon"
              className="w-6 h-6 mr-2"
            />
            From: {article.from}
          </a>
        </div>
        <hr className="my-6 border-gray-200" />
      </header>
      <div className="flex flex-col items-start">
        <GalleryPopupDetails img={article.image}>
          <img
            src={article.image}
            alt={article.title}
            className="rounded-lg mb-10 w-full object-cover shadow"
          />
        </GalleryPopupDetails>
        <a href={article.image} className="text-[10px] w-1/2 truncate">
          {article.image}
        </a>
      </div>
      <section className="prose prose-lg max-w-none font-serif text-gray-900">
        {article.content.map((paragraph, i) => (
          <p
            className="my-5"
            key={i}
            dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/<(.*?)>/g, '<img src="$1" alt="Gambar" />')
                .replace(
                  /\*(.*?)\*/g,
                  '<strong className="text-3xl">$1</strong>'
                ),
            }}
          ></p>
        ))}
        <div className="w-full h-72 mb-10 rounded-lg overflow-hidden shadow">
          <MapContainer
            center={article.GPS}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={article.GPS}>
              <Popup>
                {article.title} <br /> {article.location}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() =>
              window.open(
                `https://maps.google.com/maps?q=${article.GPS}&z=15`,
                "_blank"
              )
            }
            className="mt-4 px-4 py-2 font-bold rounded-3xl text-black transition duration-300 border-black border hover:-translate-y-2"
          >
            View Map more detail
          </button>
        </div>
      </section>
    </article>
  );
}
