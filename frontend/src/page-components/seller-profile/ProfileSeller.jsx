import SectionTitle from './../../components/SectionTitle';
import iconImg from "../../../public/profile-avatar.jpg"
import {sellerById, updateBuyerProfile, userProfile} from "../../helpers/api.js";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const ProfileSeller = () => {
    const [SellerProfile, setSellerProfile] = useState({
        serviceName : "",
        email : "",
        img : "",
        country : "",
        phone : "",
        city : "",
        road : "",
        houseNo : "",
    })

   /* let handleData = (e) => {
        setSellerProfile({ ...SellerProfile, [e.target.name]: e.target.value })
    }*/
    useEffect(() => {
        (async () => {
            let result = await sellerById()
            if(result){
                setSellerProfile({
                    serviceName: result?.serviceName ?? "",
                    email: result?.email ?? "",
                    img: result?.img ?? "",
                    country: result?.country ?? "",
                    phone: result?.phone ?? "",
                    city: result?.city ?? "",
                    road: result?.road ?? "",
                    houseNo: result?.houseNo ?? "",
                })
            }
        })()
    }, [0])


    return (
        <section className="my-5 buyer-profile-section">
            <div className="container">
                <div className="row">
                    <SectionTitle title={"Your"} titleHighlight={"profile"} text={"See your profile info here"} />
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="col-sm-12 col-md-4">
                            <div className="buyer-profile-img">
                                <img src={SellerProfile.img} alt=""/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card p-4 border border-0 shadow-sm">
                                <form>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="Service Name">Service Name</span>
                                        <input type="text" className="form-control" name="ServiceName" placeholder="Plumbing" disabled/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="email">Email</span>
                                        <input type="email" className="form-control" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="phone">Phone</span>
                                        <input type="text" className="form-control" name="phone" placeholder="phone"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="country">Country</span>
                                        <input type="text" className="form-control" name="country" placeholder="Country" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="city">City</span>
                                        <input type="text" className="form-control" name="city" placeholder="City" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="road">Road</span>
                                        <input type="text" className="form-control" name="road" placeholder="road"  />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="houseNo">House No</span>
                                        <input type="text" className="form-control" name="houseNo" placeholder="houseNo" />
                                    </div>
                                    <button type="submit" className="bg-btns btn-lg mt-4">save account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSeller;