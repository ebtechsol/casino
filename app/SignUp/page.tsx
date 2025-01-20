"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthSignUp } from "@/app/services/authentication/authenticationService";

import styles from "@/public/style/signUp.module.css";
import Image from "next/image";
import {
  SignUpRequestDto,
  SignUpResponseDto,
} from "../dto/authentication/userDto";

const SignUp = () => {
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [addUserSuccessMessage, setAddUserSuccessMessage] = useState("");
  const [addUserErrorMessage, setAddUserErrorMessage] = useState("");
  const formSchema = z.object({
    user_name: z.string().min(1, { message: "Username is required!" }),
    email: z
      .string()
      .email({ message: "Please enter a valid email address!" })
      .min(1, { message: "Email is required!" }),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
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
      user_name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmitSignUpForm(values: z.infer<typeof formSchema>) {
    setFormSubmitLoading(true);
    setAddUserSuccessMessage("");
    setAddUserErrorMessage("");
    if (values.user_name && values.email && values.password) {
      const request: SignUpRequestDto = {
        user_name: values.user_name,
        email: values.email,
        password: values.password,
      };
      AuthSignUp(request)
        .then((response: SignUpResponseDto) => {
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
    <div className={"container-fluid " + styles.container}>
      <div className="row">
        <div className={"col-md-5 " + styles.signup}>
          <h1 className={styles.title}>Sign up</h1>
          <p className={styles.subtitle}>Let’s get Started!</p>
          <form
            className={styles.signUp_form}
            onSubmit={handleSubmit(onSubmitSignUpForm)}
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
            <div className="row">
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="user_name">Username:</label>
                <input
                  type="text"
                  id="user_name"
                  placeholder="Username"
                  {...register("user_name")}
                />
                {errors.user_name?.message && (
                  <small className="text-danger">
                    {errors.user_name?.message}
                  </small>
                )}
              </div>
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="email">Email:</label>

                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <small className="text-danger">{errors.email?.message}</small>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 mt-2">
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password?.message && (
                  <small className="text-danger">
                    {errors.password?.message}
                  </small>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={
                errors.user_name?.message ||
                errors.email?.message ||
                errors.password?.message
                  ? true
                  : false
              }
              className={"mt-4 " + styles.submitBtn}
            >
              {formSubmitLoading ? "Loading..." : "Sign Up"}
            </button>
            <div className="row">
              <p className={styles.alreadyAcc}>
                Already have an account? <a href="/SignIn"> Log in </a>{" "}
              </p>
            </div>

            <div className={"row mt-3 mb-3 ms-0 me-0 d-none " + styles.rowOR}>
              <h3>Or</h3>
            </div>

            <button className={"mt-2 " + styles.googleBtn}>
              <Image
                src="/icon/signup/google.svg"
                width={18}
                height={18}
                className={styles.image}
                alt="Google"
              />
              Sign up with Google
            </button>
            <button className={"mt-2 " + styles.facebookBtn}>
              <Image
                src="/icon/signup/facebook.svg"
                width={18}
                height={18}
                className={styles.image}
                alt="Facebook"
              />
              Sign up with Facebook
            </button>
            <button className={"mt-2 " + styles.appleBtn}>
              <Image
                src="/icon/signup/apple.svg"
                width={18}
                height={18}
                className={styles.image}
                alt="Apple"
              />
              Sign up with Apple
            </button>
          </form>

          <br />
          <div className={"row " + styles.info}>
            <h3>
              <Image
                src="/icon/signup/check.svg"
                width={16}
                height={16}
                alt="Check"
              />
              Subscribe to our newsletter and promotions
            </h3>
          </div>
          <div className={"row " + styles.info}>
            <h3>
              <Image
                src="/icon/signup/check.svg"
                width={16}
                height={16}
                alt="Check"
              />
              By signing up, I agree with the Terms and Conditions and Privacy
              Policy
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
