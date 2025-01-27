import Image from "next/image";
import { AuthSignOut } from "@/app/services/authentication/authenticationService";
import styles from "./../../public/style/navbar.module.css";
import UserDto from "../dto/authentication/userDto";
import { getAuthenticationUser } from "@/lib/authenticationSession";

async function Navbar() {
  const authUser: UserDto | null = await getAuthenticationUser();

  return (
    <div>
      <div className={"row container-fluid " + styles.tooltip}>
        <div className={"col-sm-2 " + styles.col}>
          <Image
            aria-hidden
            src="/free_game.svg"
            alt="Window icon"
            width={30}
            height={30}
          />{" "}
          Free Game
        </div>
        <div className={"col-sm-2 " + styles.col}>
          <Image
            aria-hidden
            src="/slots.svg"
            alt="Window icon"
            width={30}
            height={30}
          />{" "}
          Slots
        </div>
        <div className={"col-sm-2 " + styles.col}>
          <Image
            aria-hidden
            src="/bonuses.svg"
            alt="Window icon"
            width={30}
            height={30}
          />{" "}
          Bonuses
        </div>
        <div className={"col-sm-2 " + styles.col}>
          <Image
            aria-hidden
            src="/casino_review.svg"
            alt="Window icon"
            width={30}
            height={30}
          />{" "}
          Casino Review
        </div>
        <div className={"col-sm-2 " + styles.col}>
          <Image
            aria-hidden
            src="/sports.svg"
            alt="Window icon"
            width={30}
            height={30}
          />{" "}
          Sports Batting
        </div>
        <div className={"col-sm-2 " + styles.col}>
          <Image
            aria-hidden
            src="/certified.svg"
            alt="Window icon"
            width={30}
            height={30}
          />{" "}
          Certified Casinos
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className={"container-fluid " + styles.header}>
          <a className="navbar-brand" href="./" title="Gambler.GG">
            <b>Gambler.GG</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={"nav-item " + styles.nav}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Casino"
                >
                  Featured Casinos
                </a>
              </li>
              <li className={"nav-item " + styles.nav}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Blogs"
                >
                  Blogs and News
                </a>
              </li>
              <li className={"nav-item " + styles.nav}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Quiz?qt=1"
                >
                  Quiz
                </a>
              </li>
            </ul>
            {authUser != null ? (
              <>
                <a href="/Profile">
                  <button className={styles.signProfile}>
                    <Image
                      aria-hidden
                      src="/sign_profile.svg"
                      alt="Profile"
                      width={20}
                      height={20}
                    />{" "}
                    {authUser?.user_name}{" "}
                  </button>
                </a>
                <form
                  action={async () => {
                    "use server";
                    await AuthSignOut();
                  }}
                >
                  <button className={styles.signOut}>
                    <Image
                      aria-hidden
                      src="/sign_out.svg"
                      alt="Sign Out"
                      width={20}
                      height={20}
                    />{" "}
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <a href="/SignUp">
                  <button className={styles.signUp}>
                    <Image
                      aria-hidden
                      src="/sign_up.svg"
                      alt="Sign Up"
                      width={20}
                      height={20}
                    />{" "}
                    Sign Up
                  </button>
                </a>
                <a href="/SignIn">
                  <button className={styles.signIn}>
                    <Image
                      aria-hidden
                      src="/sign_in.svg"
                      alt="Sign In"
                      width={20}
                      height={20}
                    />{" "}
                    Sign In
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
