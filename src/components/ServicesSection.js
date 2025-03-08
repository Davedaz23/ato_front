import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPaintBrush, faUsers, faChalkboardTeacher, faBullhorn, faStar, faDesktop, faCogs, faUser } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  return (
    <div className="h-full  overflow-auto ">
      <div className="container mx-auto  ">

        <h2 className="text-4xl font-extrabold text-center ">
          Our Services
        </h2>

       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <ServiceCard
          className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Brand Strategy"
            description="Whether it's creating a brand from scratch, rebranding, or modernizing an existing one, we craft strategies that resonate."
            icon={faChartLine}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Brand Identity Development"
            description="We breathe life into brands, shaping their visual identity, voice, and personality."
            icon={faPaintBrush}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Customer Experience Design"
            description="Every touchpoint matters. We design seamless experiences that leave lasting impressions."
            icon={faUsers}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Brand Workshops and Training"
            description="Empowering teams with the knowledge and tools they need to champion their brand."
            icon={faChalkboardTeacher}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Content and Campaign Creation"
            description="From compelling storytelling to impactful campaigns, we drive engagement."
            icon={faUser}
          />
          <ServiceCard
            title="Marcom Planning and Execution"
            description="Strategic communication that amplifies your brand's message."
            icon={faBullhorn}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Strategic PR"
            description="Celebrating successes and navigating challenges with finesse."
            icon={faStar}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Website Design and Development"
            description="Crafting digital spaces that captivate and convert."
            icon={faDesktop}
          />
          <ServiceCard
           className="shadow-[0px_4px_15px_rgba(0,0,0,0.6)]"
            title="Social Media Management"
            description="Building communities and fostering authentic connections."
            icon={faUsers}
          />

        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center">
      <FontAwesomeIcon icon={icon} size="4x" className='text-[#FD5F20]' />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
};

export default ServicesSection;
