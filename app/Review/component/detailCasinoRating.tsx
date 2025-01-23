
import Image from "next/image";
import styles from "@/public/style/review.module.css";
import {CasinoReviewsDto} from "@/app/dto/casino/casinoDto";
import { CasinoReviewRatingService } from "@/app/services/casino/casinoService";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

const DetailCasinoRating = () => {

  const searchParams = useSearchParams();
  const casinoID = searchParams.get("casino_id");
  const [casinoRatingList, setcasinoRatingList] = useState<
    CasinoReviewsDto[]
  >([]);

  useEffect(() => {
    CasinoReviewRatingService(Number(casinoID)).then((record) => {
      setcasinoRatingList(record);
    });
  }, [casinoID]);


    return (
       <>
       {casinoRatingList.map((ratingCasino, index) => (
       <div key={index} className={"row " + styles.ratingSec}>
                <div className="col-lg-6">
                  <p>{ratingCasino?.reviews_type}</p>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/rating.svg"
                    width={600}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
               ))}
       </>
    );
};

export default DetailCasinoRating;