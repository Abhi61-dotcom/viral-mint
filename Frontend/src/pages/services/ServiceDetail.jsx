import { useParams } from "react-router-dom";
import DigitalMarketing from "./DigitalMarketing";
import SaasSolution from "./SaasSolution"
import Itsolution from "./ItSolution"
import ManpowerSolution from "./Manpower"
import CreditCardFacility from "./CreditFacility"
import BusinessStrategy from "./BusinessStrategy";

const ServiceDetail = () => {
  const { serviceName } = useParams();

  if (serviceName === "digital-marketing") {
    return <DigitalMarketing />; // ✅ reuse same page
  }

  if (serviceName === "saas-solution") {
    return <SaasSolution/>;
  }

  if (serviceName === "it-solutions") {
    return <Itsolution/>
  }

  if (serviceName === "manpower-services") {
    return <ManpowerSolution/>
  }

  if (serviceName === "credit-card-facility") {
    return <CreditCardFacility/>
  }

  if (serviceName === "business-strategy") {
    return <BusinessStrategy/>
  }

  return <div className="text-white p-10">Service Not Found ❌</div>;
};

export default ServiceDetail;