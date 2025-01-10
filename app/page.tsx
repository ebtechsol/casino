import CasinoDeals  from "./components/CasinoDeals";
import FeaturedCasino  from "./components/FeaturedCasino";
import QuizStart  from "./components/Quizzes/Start";
import NewsAndBlogs  from "./components/NewsAndBlogs";

export default function Home() {
  return (
    <>
      <CasinoDeals />

      <FeaturedCasino />

      <QuizStart />

      <NewsAndBlogs />
    </>
  );
}
