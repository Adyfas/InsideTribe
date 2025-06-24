import { useParams } from "react-router-dom";
import { FullNews } from "../data/FullNews";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function NewsExplore() {
  const { slug } = useParams();
  const article = FullNews.find((item) => item.slug === slug);

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
    <article className="max-w-4xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          {article.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4">{article.subtitle}</p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>
      </header>

      <img
        src={article.image}
        alt={article.title}
        className="rounded-lg mb-6 w-full object-cover"
      />

      <section className="prose prose-lg max-w-none">
        {article.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>
    </article>
  );
}
