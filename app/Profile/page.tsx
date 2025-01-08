import styles from "@/public/style/profile.module.css";
import Image from "next/image";

const Profile = () => {
  return (
    <div className={"container-fluid " + styles.container}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className={"col-md-4 " + styles.profile}>
          <h1 className={styles.title}>Profile</h1>
          <p className={styles.subtitle}>Profile photo</p>

          <form className={styles.profile_form}>
            <div className="row">
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-2">
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
            <button className={"mt-4 " + styles.submitBtn}>Sign up</button>
            <div className="row">
              <p className={styles.alreadyAcc}>
                Already have an account? <a href="#"> Log in </a>{" "}
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
              By signing up, I agree with the Terms of Use & Privacy
            </h3>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Profile;
