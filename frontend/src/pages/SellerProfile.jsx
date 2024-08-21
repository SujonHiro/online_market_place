import {useState} from "react";
import MasterLayout from "../components/layouts/MasterLayout";
import SellerGigs from "../page-components/seller-profile/SellerGigs";
import SellerDashboard from "../components/SellerDashboard.jsx";
import Profile from "../page-components/seller-profile/Profile.jsx";
import {useParams} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SellerProfile = () => {
    const { id } = useParams();
    const [panel, setPanel] = useState(1)

  return (
      <MasterLayout>
          <SellerDashboard showPanel={setPanel}>
              {panel == 1 && <Profile id={id} />}
              {panel == 5 && <SellerGigs />}

          </SellerDashboard>
      </MasterLayout>
  );
};

export default SellerProfile;