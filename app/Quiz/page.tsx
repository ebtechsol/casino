"use client";
import { useEffect } from "react";
import { Suspense } from "react";
import { useSearchParams, redirect } from "next/navigation";

import CasinoDeals from "@/app/components/CasinoDeals";
import FeaturedCasino from "@/app/components/FeaturedCasino";
import Start from "@/app/components/Quizzes/Start";
import Qz1 from "@/app/components/Quizzes/Qz1";
import Qz2 from "@/app/components/Quizzes/Qz2";
import Qz3 from "@/app/components/Quizzes/Qz3";
import Qz4 from "@/app/components/Quizzes/Qz4";
import Qz5 from "@/app/components/Quizzes/Qz5";
import Qz6 from "@/app/components/Quizzes/Qz6";
import Qz7 from "@/app/components/Quizzes/Qz7";
import Qz8 from "@/app/components/Quizzes/Qz8";
import NewsAndBlogs from "@/app/components/NewsAndBlogs";

function SelectQuiz() {
  const searchParams = useSearchParams();
  const quizType = searchParams.get("qt");

  useEffect(() => {
    if (quizType == null || quizType == "") {
      redirect("/");
    }
  }, [quizType]);

  switch (quizType) {
    case "1":
      return <Qz1 />;
    case "2":
      return <Qz2 />;
    case "3":
      return <Qz3 />;
    case "4":
      return <Qz4 />;
    case "5":
      return <Qz5 />;
    case "6":
      return <Qz6 />;
    case "7":
      return <Qz7 />;
    case "8":
      return <Qz8 />;
    default:
      return <Start />;
  }
}

const Quiz = () => {
  return (
    <>
      <CasinoDeals />

      <FeaturedCasino />

      <Suspense>
        <SelectQuiz />
      </Suspense>

      <NewsAndBlogs />
    </>
  );
};

export default Quiz;
