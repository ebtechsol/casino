"use client";
import { useSearchParams, redirect } from "next/navigation";

import CasinoDeals from "@/app/components/CasinoDeals";
import FeaturedCasino from "@/app/components/FeaturedCasino";
import Start from "@/app/components/Quizzes/Start";
import Qz1 from "@/app/components/Quizzes/Qz1";
import Qz2 from "@/app/components/Quizzes/Qz2";

import NewsAndBlogs from "@/app/components/NewsAndBlogs";
import { useEffect } from "react";

const Quiz = () => {
  const searchParams = useSearchParams();
  const quizType = searchParams.get("qt");

  useEffect(() => {
    if (quizType == null || quizType == "") {
      redirect("/");
    }
  }, [quizType]);

  function SelectQuiz() {
    switch (quizType) {
      case "1":
        return <Qz1 />;
      case "2":
        return <Qz2 />;
      default:
        return <Start />;
    }
  }

  return (
    <>
      <CasinoDeals />

      <FeaturedCasino />

      <SelectQuiz />

      <NewsAndBlogs />
    </>
  );
};

export default Quiz;
