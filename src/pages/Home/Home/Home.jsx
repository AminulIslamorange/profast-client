import Banner from "./Banner/Banner";
import Benefits from "./Benefit/Benefits";
import ClientLogo from "./ClientLogo/ClientLogo";
import HowItsWork from "./HowItsWork/HowItsWork";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWork></HowItsWork>
            <Services></Services>
            <ClientLogo></ClientLogo>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;