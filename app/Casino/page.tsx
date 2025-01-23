"use client";
import React, { useEffect, useState } from "react";
import CasinoListService from "../services/casino/casinoService";

import styles from "@/public/style/casino.module.css";
import Image from "next/image";
import CasinoDto from "../dto/casino/casinoDto";


const Casino = () => {
    const [casinoContent, setCasinoContent] = useState<CasinoDto[]>([]);

    useEffect(() => {
    CasinoListService().then((contentData) => {
        setCasinoContent(contentData);
      });
    }, [setCasinoContent]);

    return (
        <div className={styles.mainSection}>
            <h1>Casino</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className={styles.card1}>
                        <h1 className={styles.casinoTitle}>BEST CASINO OFFERS</h1>
                        <button className={styles.casinobtn}>REDEEM NOW &nbsp;&nbsp; REDEEM NOW &nbsp;&nbsp; REDEEM NOW &nbsp;&nbsp; REDEEM NOW</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.card2}>
                        <h1 className={styles.casinoTitle}>CASINO REVIEWS</h1>
                        <button className={styles.casinobtn}>REVIEWS &nbsp;&nbsp; REVIEWS &nbsp;&nbsp; REVIEWS &nbsp;&nbsp; REVIEWS</button>
                    </div>
                </div>
            </div>
            <h1 className={styles.ratingTitle}>Top Rated Online Casinos</h1>
            <div className={"row " + styles.casinobg}>
            {casinoContent.map((casino, index) => (
                <div key={index} className="col-lg-4">
                    <div className={styles.cardColumn}>
                        <Image
                            src={casino.image_url}
                            width={400}
                            height={210}
                            className={styles.stakeImg}
                            alt="Stake"
                        />
                        <div className={"row " + styles.casinoCardRow}>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/wizard_rating.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Wizard Rating</span>
                                    <div className={styles.wizardNum}>
                                    {Number(casino.wizard_rating)} / 10
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <Image
                                    src="/Line.svg"
                                    width={10}
                                    height={40}
                                    alt="Stake"
                                />
                            </div>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/critic_score.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Critic Score</span>
                                    <div className={styles.wizardNum}>
                                    {Number(casino.critic_score)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardPrice}>
                            <span>Get 100% up to €500 + 200</span><br/>
                            <span className={styles.alignLeftCasino}> Bonus Spins</span>
                        </div>
                        <a href="#"><button className={styles.visitCasinoBtn}>Visit Stake Casino</button></a><br />
                        <a href={("/Review?casino_id=").concat(casino.id.toString())}><button className={styles.readCasinoBtn}>Read Stake Review</button></a>
                    </div>
                </div>
                ))}
            </div>
            <br />
            <div className={styles.topSpace}></div>
        </div>
    );
};

export default Casino;