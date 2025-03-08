import React,{useState} from 'react'
import ConsultationForm from '../ConsultationForm';

const DigitalMarketing = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

  const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible); // Toggle visibility
  };
  return (
    <div className="container mx-auto p-8 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Digital Marketing: Fueling Your Business Growth
      </h2>

      <p className="text-lg text-center mb-12">
        Unlock your brand's potential with our proven digital marketing strategies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  text-lg ">
        {/* Service Cards */}
        <div className="bg-[#FD5F20]/40  text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-4">Search Engine Optimization (SEO)</h3>
          <p className="mb-4">
            Maximize visibility on search engines and attract organic traffic. Our SEO experts implement strategies for higher rankings and lead conversions.
          </p>
          <ul className="list-disc list-inside">
            <li>Keyword Research & Analysis</li>
            <li>On-page & Off-page Optimization</li>
            <li>Content Strategy & Link Building</li>
          </ul>
        </div>

        <div className="bg-[#FD5F20]/40 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-4">Pay-Per-Click Advertising (PPC)</h3>
          <p className="mb-4">
            Drive traffic fast with targeted ads across platforms like Google and Facebook. Optimize for maximum ROI with expert campaign management.
          </p>
          <ul className="list-disc list-inside">
            <li>Google Ads & Bing Ads Campaigns</li>
            <li>Social Media Advertising</li>
            <li>Ad Copywriting & Creative Services</li>
          </ul>
        </div>

        <div className="bg-[#FD5F20]/40 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
          <p className="mb-4">
            Engage your audience across social platforms with targeted campaigns and creative content. Build brand loyalty and increase website traffic.
          </p>
          <ul className="list-disc list-inside">
            <li>Platform-Specific Campaigns</li>
            <li>Content Creation & Curation</li>
            <li>Community Engagement & Management</li>
          </ul>
        </div>

        <div className="bg-[#FD5F20]/40 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
          <p className="mb-4">
            Create engaging content that resonates with your audience and positions your brand as an industry leader.
          </p>
          <ul className="list-disc list-inside">
            <li>Blog & Article Writing</li>
            <li>Infographics & Visual Content</li>
            <li>Content Distribution & Promotion</li>
          </ul>
        </div>

        <div className="bg-[#FD5F20]/40 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-4">Email Marketing</h3>
          <p className="mb-4">
            Reach your audience directly with customized email campaigns that nurture leads and improve customer retention.
          </p>
          <ul className="list-disc list-inside">
            <li>Automated Email Campaigns</li>
            <li>Personalized Newsletters</li>
            <li>Lead Nurturing & Retention</li>
          </ul>
        </div>

        <div className="bg-[#FD5F20]/40 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-4">Conversion Rate Optimization (CRO)</h3>
          <p className="mb-4">
            Optimize your website to convert more visitors into paying customers with A/B testing, landing page improvements, and more.
          </p>
          <ul className="list-disc list-inside">
            <li>A/B Testing & Multivariate Testing</li>
            <li>Landing Page Optimization</li>
            <li>Heatmaps & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#FD5F20]/40  text-gray-800 py-12 mt-16  m-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
        <p className="text-lg mb-6">
          At [Your Agency Name], we focus on delivering results that matter. With a team of industry experts, we provide you with measurable growth strategies and consistent support to ensure your success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2">Tailored Strategies</h4>
            <p>Customized marketing plans that align with your goals and challenges.</p>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2">Expert Team</h4>
            <p className="text-xl " >Professionals with years of experience across various digital marketing disciplines.</p>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2">Measurable Results</h4>
            <p>We deliver transparent, data-driven results that you can track and measure.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='m-8 mt-28'>
            <div className="text-center mt-16">
                <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
                <p className="mb-8">
                    Let us help you elevate your brand through powerful digital marketing strategies. Contact us today!
                </p>
                <button
                    onClick={toggleFormVisibility} // Toggle form visibility on button click
                    className="bg-[#FD5F20] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#FD5F50] hover:shadow-lg transition-all duration-300 ease-in-out"                >
                    Get Your Free Consultation
                </button>
            </div>

            {/* Conditionally render the form based on isFormVisible state */}
            {isFormVisible && <ConsultationForm />}
        </div>
    </div>
  );
};

export default DigitalMarketing