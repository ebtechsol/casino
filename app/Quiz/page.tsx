"use client";
import { useSearchParams, redirect } from "next/navigation";
import { Suspense } from "react";

import CasinoDeals from "@/app/components/CasinoDeals";
import FeaturedCasino from "@/app/components/FeaturedCasino";
import Start from "@/app/components/Quizzes/Start";
import Qz1 from "@/app/components/Quizzes/Qz1";
import Qz2 from "@/app/components/Quizzes/Qz2";

import NewsAndBlogs from "@/app/components/NewsAndBlogs";
import { useEffect } from "react";

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
