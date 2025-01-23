
import Image from "next/image";
import styles from "@/public/style/review.module.css";
import CasinoDto from "@/app/dto/casino/casinoDto";
import { CasinoService } from "@/app/services/casino/casinoService";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

const DetailCasinoSection = () => {

    const searchParams = useSearchParams();
    const casino_id = searchParams.get("casino_id");
    console.log(casino_id);

    const router = useRouter();
    const [detail, setDetail] = useState<CasinoDto>();

    useEffect(() => {
        if (detail == null) {
            CasinoService(Number(casino_id)).then((casino) => {
                if (casino == null) {
                    router.push("/");
                } else {
                    setDetail(casino as CasinoDto);
                }
            });
        }
    }, [router, detail, casino_id]);

    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-3">
                        <Image
                            src={detail?.image_url ? detail?.image_url : "/casino_stake.svg"}
                            width={220}
                            height={150}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-9">
                        <h2 className={styles.mainTitle}>{detail?.title}</h2>
                        <div>
                            <span className={styles.reviewTags}>
                                <Image
                                    src="/review-slots.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                /> Slots
                            </span>
                            <span className={styles.reviewTagspac}>
                                <Image
                                    src="/shaf-card.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                /> Blackjack
                            </span>
                            <span className={styles.reviewTagspac}>
                                <Image
                                    src="/lottery.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                /> Roulette
                            </span><br /><br />
                            <span className={styles.reviewTags}>
                                <Image
                                    src="/dice.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                /> Craps
                            </span>
                            <span className={styles.reviewTagspac}>

                                <Image
                                    src="/live-streaming.svg"
                                    width={20}
                                    height={20}
                                    alt=""
                                /> Live Games
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewDev}>
                    <span>
                        <Image
                            src="/profile-img.svg"
                            width={30}
                            height={30}
                            alt=""
                        /> Richard Jarvis
                        <Image
                            src="/certificate.svg"
                            width={30}
                            height={30}
                            alt=""
                        /> US Casino Expert
                    </span>
                </div>
                <h4>{detail?.sub_tile}</h4>
                <p>{detail?.description}</p>
            </div>
            <div className={"col-lg-4 " + styles.cardBg}>
                <div className={styles.cardRow}>
                    <button className={styles.visitBtn}>Visit Stake Casino</button>
                    <div className={styles.stakeInnerSec}>
                        <p>Welcome Bonus</p>
                        <h2 className={styles.stakeBonusParagh}>100% up to €500 + 200 <br />Bonus Spins</h2>
                        <button className={styles.claimBtn}>
                            <Image
                                src="/pan.svg"
                                width={20}
                                height={20}
                                alt="Picture of the author"
                            />
                            Claim Offer & Play</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCasinoSection;