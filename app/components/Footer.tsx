"use client"
import styles from "@/public/style/footer.module.css";
import Image from 'next/image';
import React, { useState } from "react";
import { NewsLetterRequestDto, NewsLetterResponseDto } from '../dto/newsLetter/newsletter';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddSubscriber } from "../../app/services/newsletter/subscriber";


const Footer = () => {
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [addUserSuccessMessage, setAddUserSuccessMessage] = useState("");
    const [addUserErrorMessage, setAddUserErrorMessage] = useState("");
    const formSchema = z.object({
        email: z
            .string()
            .email({ message: "Please enter a valid email address!" })
            .min(1, { message: "Email is required!" })
            .trim(),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    });

    async function onSubmitSubscriberForm(values: z.infer<typeof formSchema>) {
        setFormSubmitLoading(true);
        setAddUserSuccessMessage("");
        setAddUserErrorMessage("");
        if (values.email) {
            const request: NewsLetterRequestDto = {
                email: values.email
            };
            AddSubscriber(request)
                .then((response: NewsLetterResponseDto) => {
                    setFormSubmitLoading(false);
                    if (response.status == true) {
                        setAddUserSuccessMessage(response.msg);
                        setAddUserErrorMessage("");
                        reset();
                    } else {
                        setAddUserSuccessMessage("");
                        setAddUserErrorMessage(response.msg);
                    }
                })
                .catch(() => {
                    setFormSubmitLoading(false);
                    setAddUserSuccessMessage("");
                    setAddUserErrorMessage("Something went wrong!");
                });
        }
    }
    return (
        <div className="container-fluid">
            <div className={"row foBg_black " + styles.foBg_black}>
                <div className={"col-md-3 col-sm-12 ct1 " + styles.ct1}>
                    <a href="./"><h3 title="Gambler.GG">Gambler.GG</h3></a>
                    <p>Discover Top Casino Deals & <br /> Boost Your Winnings!</p>
                    <div className="row">
                        <div className="col-2 text-center p-0">
                            <a href="#"><Image
                                src="/icon/footer/instagram.svg"
                                width={30}
                                height={30}
                                alt="Picture of the author"
                            /></a>
                        </div>
                        <div className="col-2 text-center p-0">
                        <a href="#"><Image
                                src="/icon/footer/telegram.svg"
                                width={30}
                                height={30}
                                alt="Picture of the author"
                            /></a>
                        </div>
                        <div className="col-2 text-center p-0">
                        <a href="#"><Image
                                src="/icon/footer/facebook.svg"
                                width={30}
                                height={30}
                                alt="Picture of the author"
                            /></a>

                        </div>
                        <div className="col-2 text-center p-0">
                        <a href="#"><Image
                                src="/icon/footer/pinterest.svg"
                                width={30}
                                height={30}
                                alt="Picture of the author"
                            /></a>
                        </div>
                    </div>
                </div>
                <div className={"col-md-2 col-sm-12 ct2 " + styles.ct2}>
                    <ul>
                        <li> <a href="/Casino">Casinos</a> </li>
                        <li> <a href="/Blogs">Blog</a> </li>
                        <li> <a href="/Quiz?qt=1">Quiz</a> </li>
                    </ul>
                </div>
                <div className={"col-md-3 col-sm-12 ct2 " + styles.ct2}>
                    <ul>
                        <li> <a href="#">FAQ</a> </li>
                        <li> <a href="/termsAndCondition">Terms of Service</a> </li>
                        <li> <a href="#">Privacy Policy</a> </li>
                        <li> <a href="#">Contact</a> </li>
                    </ul>
                </div>
                <div className={"col-md-4 col-sm-12 ct3 " + styles.ct3}>
                    <h4>Subscribe to our newsletter</h4>
                    <form
                        onSubmit={handleSubmit(onSubmitSubscriberForm)}
                    >
                        {addUserSuccessMessage != "" ? (
                            <span className="alert alert-success p-2 m-0 d-block">
                                {addUserSuccessMessage}
                            </span>
                        ) : (
                            ""
                        )}
                        {addUserErrorMessage != "" ? (
                            <span className="alert alert-danger p-2 m-0 d-block">
                                {addUserErrorMessage}
                            </span>
                        ) : (
                            ""
                        )}
                        <div className={styles.form}>
                            <div className="col-md-12 col-sm-12 d-flex">
                                <div className="col-md-9">
                                    <input type="email" id="email" {...register("email")} placeholder="Type your email Address here" />
                                </div>
                                <div className="col-md-3">
                                    <button type="submit"
                                        disabled={
                                            errors.email?.message
                                                ? true
                                                : false
                                        }>{formSubmitLoading ? "Loading..." : "SignUp"}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={"row " + styles.foBg_red}>
                <p className=""> © 2025 Gambler.GG, All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer;