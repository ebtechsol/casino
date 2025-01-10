import Image from "next/image";
import styles from "./../../public/style/navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <div className={"row container-fluid " + styles.tooltip} >
                <div className={"col-sm-2 " + styles.col}><Image
                    aria-hidden
                    src="/free_game.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                /> Free Game</div>
                <div className={"col-sm-2 " + styles.col}><Image
                    aria-hidden
                    src="/slots.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                /> Slots</div>
                <div className={"col-sm-2 " + styles.col}><Image
                    aria-hidden
                    src="/bonuses.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                /> Bonuses</div>
                <div className={"col-sm-2 " + styles.col}><Image
                    aria-hidden
                    src="/casino_review.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                /> Casino Review</div>
                <div className={"col-sm-2 " + styles.col}><Image
                    aria-hidden
                    src="/sports.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                /> Sports Batting</div>
                <div className={"col-sm-2 " + styles.col}><Image
                    aria-hidden
                    src="/certified.svg"
                    alt="Window icon"
                    width={30}
                    height={30}
                /> Certified Casinos</div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className={"container-fluid " + styles.header}>
                    <a className="navbar-brand" href="./">
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
                                <a className="nav-link active" aria-current="page" href="/Casino">
                                    Featured Casinos
                                </a>
                            </li>
                            <li className={"nav-item " + styles.nav}>
                                <a className="nav-link active" aria-current="page" href="/Blogs">
                                    News & Blogs
                                </a>
                            </li>
                            <li className={"nav-item " + styles.nav}>
                                <a className="nav-link active" aria-current="page" href="#">
                                    Quiz
                                </a>
                            </li>
                        </ul>
                        <a href="/SignUp">
                            <button className={styles.signUp}><Image
                                aria-hidden
                                src="/user.svg"
                                alt="Window icon"
                                width={20}
                                height={20}
                            /> Sign Up</button>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;