"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { AuthSignIn } from "@/app/services/authentication/authenticationService";
import { useRouter } from "next/navigation";

import styles from "@/public/style/signIn.module.css";
import {
  SignInRequestDto,
  SignInResponseDto,
} from "../dto/authentication/userDto";

const SignIn = () => {
  const router = useRouter();
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [authenticationErrorMessage, setAuthenticationErrorMessage] =
    useState("");
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address!" })
      .min(1, { message: "Email is required!" }),
    password: z.string().min(1, { message: "Password is required!" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmitSignInForm(values: z.infer<typeof formSchema>) {
    setFormSubmitLoading(true);
    setAuthenticationErrorMessage("");
    if (values.email && values.password) {
      const request: SignInRequestDto = {
        email: values.email,
        password: values.password,
      };
      AuthSignIn(request)
        .then((response: SignInResponseDto) => {
          setFormSubmitLoading(false);
          if (response.status == true) {
            router.push("/");
          } else {
            setAuthenticationErrorMessage(response.msg);
          }
        })
        .catch((error) => {
          console.log(error);
          setFormSubmitLoading(false);
          setAuthenticationErrorMessage("Something went wrong!");
        });
    }
  }

  return (
    <div className={"container-fluid " + styles.container}>
      <div className="row">
        <div className={"col-md-4 " + styles.signin}>
          <h1 className={styles.title}>Welcome Back!</h1>
          <form
            className={styles.signin_form}
            onSubmit={handleSubmit(onSubmitSignInForm)}
          >
            {authenticationErrorMessage != "" ? (
              <span className="alert alert-danger p-2 m-0 d-block">
                {authenticationErrorMessage}
              </span>
            ) : (
              ""
            )}
            <div className="row">
              <div className="col-md-12 col-sm-12 mt-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
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
                  type="password"
                  id="password"
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
            <div className="row mt-2">
              <p className={styles.rembMe}>
                <Image
                  src="/icon/signup/check.svg"
                  width={20}
                  height={20}
                  alt="Check"
                />
                Remember me
              </p>
              <a href="#" className={styles.fgpass}>
                Forgot password?
              </a>
            </div>

            <button
              disabled={
                errors.email?.message || errors.password?.message ? true : false
              }
              className={"mt-4 " + styles.submitBtn}
            >
              {formSubmitLoading ? "Loading..." : "Sign In"}
            </button>
            <div className="row">
              <p className={styles.notAcc}>
                Don’t have an account? <a href="/SignUp"> Sign up </a>{" "}
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
