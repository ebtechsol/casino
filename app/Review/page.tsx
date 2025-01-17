import Image from "next/image";

const Profile = () => {
  return (
   <div className="row">
    <div className="col-lg-08">
        <div className="row">
            <div className="col-lg-3">
            <Image
                src="/casino_stake.svg"
                width={300}
                height={150}
                alt=""
              />
            </div>
            <div className="col-lg-9">
                <h2>Stake Reviews</h2>
                <div>
                    <span>
                    <Image
                src="/review-slots.svg"
                width={20}
                height={20}
                alt=""
              /> Slots
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-04"></div>
   </div>
  );
};

export default Profile;
