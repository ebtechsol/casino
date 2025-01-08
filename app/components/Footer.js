import styles from "@/public/style/footer.module.css";
import Image from 'next/image'


const Footer = () => {
    return (
        <div className="container-fluid">
            <div className={"row foBg_black " + styles.foBg_black}>
                    <div className={"col-md-3 col-sm-12 ct1 " + styles.ct1}>
                        <h3>Gambler.GG</h3>
                        <p>Discover Top Casino Deals & <br /> Boost Your Winnings!</p>
                        <div className="row">
                            <div className="col-2 text-center p-0">
                                <Image
                                    src="/icon/footer/instagram.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="col-2 text-center p-0">
                                <Image
                                    src="/icon/footer/telegram.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="col-2 text-center p-0">
                                <Image
                                    src="/icon/footer/facebook.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />

                            </div>
                            <div className="col-2 text-center p-0">
                                <Image
                                    src="/icon/footer/pinterest.svg"
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-2 col-sm-12 ct2 " + styles.ct2}>
                        <ul>
                            <li> <a href="#">Casinos</a> </li>
                            <li> <a href="#">Blog</a> </li>
                            <li> <a href="#">Quiz</a> </li>
                        </ul>
                    </div>
                    <div className={"col-md-3 col-sm-12 ct2 " + styles.ct2}>
                        <ul>
                            <li> <a href="#">FAQ</a> </li>
                            <li> <a href="#">Terms of Service</a> </li>
                            <li> <a href="#">Privacy Policy</a> </li>
                            <li> <a href="#">Contact</a> </li>
                        </ul>
                    </div>
                    <div className={"col-md-4 col-sm-12 " + styles.ct3}>
                        <h4>Subscribe to our newsletter</h4>
                        <div className={styles.form}>
                            <div className="col-md-12 col-sm-12 d-flex">
                                <div className="col-md-9">
                                    <input type="email" id="email" name="email"  placeholder="Type your email Address here" />
                                </div>
                                <div className="col-md-3">
                                    <button>SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <div className={"row " + styles.foBg_red}>
                <p className=""> © 2024 Gambler.GG, All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer;