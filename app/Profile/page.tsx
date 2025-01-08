import styles from "@/public/style/profile.module.css";
import Image from "next/image";

const Profile = () => {
  return (
    <div className={"container-fluid " + styles.container}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className={"col-md-6 " + styles.profile}>
          <h1 className={styles.title}>Profile</h1>
          <p className={styles.subtitle}>Profile photo</p>

          <div className="row">
            <div className="col-md-3 col-sm-12 text-center">
              <Image
                src="/icon/profile/profile_picture.svg"
                width={120}
                height={120}
                className={styles.picture_img}
                alt="Profile"
              />
            </div>
            <div className={"col-md-8 ps-0 col-sm-12 " + styles.picture_text}>
              <h4>Upload your photo</h4>
              <p>File should be in PNG or JPEG</p>

              <button className={styles.btnChoosePhoto}>Choose photo</button>
              <button className={styles.btnRemove}>Remove</button>
            </div>
          </div>

          <form className={styles.profile_form}>
            <div className="row">
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="fullName">Full name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 mt-2">
                <label htmlFor="location">Location:</label>
                <select id="location" name="location">
                  <option value="">Select Location</option>
                  <option value="country">Country</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 mt-2">
                <label htmlFor="aboutMe">About me:</label>
                <textarea id="aboutMe" name="aboutMe" rows={4} placeholder="Tell me about yourself"></textarea>
              </div>
            </div>
            <div className="row mt-4 text-right">
              <button className={styles.cancelBtn}>Cancel</button>
              <button className={styles.submitBtn}>Save profile</button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Profile;
