import Arrivals from "@/components/ui/Arrivals";
import Blog from "@/components/ui/Blog";
import Brand from "@/components/ui/Brand";
import Cards from "@/components/ui/Cards";
import Chairs from "@/components/ui/Chairs";
import Deals from "@/components/ui/Deals";
import Feedback from "@/components/ui/Feedback";
import Hero from "@/components/ui/Hero";
import Mail from "@/components/ui/Mail";
import Pic from "@/components/ui/Pic";
import Sofa from "@/components/ui/Sofa";

const Home = () => {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Chairs />
      </div>
      <div>
        <Arrivals />
      </div>
      <div>
        <Deals />
      </div>
      <div>
        <Sofa />
      </div>
      <div>
        <Mail />
      </div>
      <div>
        <Pic />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Feedback />
      </div>
      <div>
        <Brand />
      </div>
    </main>
  );
};

export default Home;
