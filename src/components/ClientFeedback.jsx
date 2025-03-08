import Marquee from "react-fast-marquee";
import icon1 from "../assets/Icons/pngegg (17) 1.png";
import icon2 from "../assets/Icons/pngegg (19) 1.png";
import icon3 from "../assets/Icons/pngegg (20) 1.png";
import icon4 from "../assets/Icons/pngegg (21) 1.png";
import icon5 from "../assets/Icons/pngegg (22) 1.png";

const images = [icon1, icon2, icon3, icon4, icon5];

const ClientFeedback = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative py-10 overflow-hidden">
      {/* Title Section */}
      <div className="text-center flex items-center justify-center mb-6">
        <div className="flex-grow border-t border-gray-900 mx-1"></div>
        <h1 className="text-4xl font-bold text-gray-900 m-8">Our Satisfied Clients</h1>
        <div className="flex-grow border-t border-gray-900 mx-4"></div>
      </div>

      {/* Scrolling Marquee */}
      <Marquee speed={60} pauseOnHover gradient={false} direction="left" className="overflow-hidden" loop={0}>
        {images.map((img, index) => (
          <img key={index} src={img} className="h-40 mx-4 transition-transform duration-300 transform hover:scale-110" alt={`Client ${index + 1}`} />
        ))}
        {/* Duplicate the images to make the loop seamless */}
        {images.map((img, index) => (
          <img key={index + images.length} src={img} className="h-40 mx-4 transition-transform duration-300 transform hover:scale-110" alt={`Client ${index + 1}`} />
        ))}
        {images.map((img, index) => (
          <img key={index + images.length} src={img} className="h-40 mx-4 transition-transform duration-300 transform hover:scale-110" alt={`Client ${index + 1}`} />
        ))}
      </Marquee>
    </div>
  );
};

export default ClientFeedback;
