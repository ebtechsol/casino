import styles from "@/public/style/signIn.module.css";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className={"container-fluid " + styles.container}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className={"col-md-4 " + styles.signin}>
          <h1 className={styles.title}>Welcome Back!</h1>

          <form className={styles.signin_form}>
            <div className="row">
                <div className="col-md-12 col-sm-12 mt-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 mt-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
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
                  Forget password?
              </a>
            </div>

            <button className={"mt-4 " + styles.submitBtn}>Sign In</button>
            <div className="row">
              <p className={styles.notAcc}>
               Don’t have an account? <a href="#"> Sign up </a>{" "}
              </p>
            </div>

            <div className={"row mt-3 mb-3 ms-0 me-0 " + styles.rowOR}>
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
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default SignIn;
