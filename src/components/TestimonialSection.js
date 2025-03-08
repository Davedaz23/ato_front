import React from 'react';
import customer from '../assets/img/customer.png';
import tes from '../assets/img/tes.jfif';
import tes2 from '../assets/img/tes2.jfif';
import tes3 from '../assets/img/tes3.jfif';
import tes4 from '../assets/img/test4.jpeg'; // Assuming you have a new image for the fourth testimonial
import tes5 from '../assets/img/test5.jpg'; // Assuming you have a new image for the fifth testimonial

const TestimonialSection = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <div className="">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <TestimonialCard
            text="Working with <strong>Ato Creative</strong> was a transformative experience.
   They delivered a sleek and modern website that perfectly captured our brand's essence. 
   The team's creativity and professionalism were evident in every step of the process."
            author="John Doe"
            position="CEO, Marley IT Solutions"
            photoUrl={tes}
          />
          <TestimonialCard
            text="The video production services provided by <strong> Ato Creative </strong> were exceptional. 
  Their ability to bring our vision to life through high-quality videos was impressive. 
  The final product exceeded our expectations and has been a huge hit with our audience."
            author="Jane Smith"
            position=" Marketing Director, Luxy software solutions"
            photoUrl={tes2}
          />
          <TestimonialCard
            text="<strong> Ato Creative</strong> has been a vital partner in our marketing efforts. 
  Their innovative approach and deep understanding of our industry have helped us achieve outstanding results.
   From branding to digital marketing, their expertise is unmatched."
            author="John Doe"
            position="CMO, Galaxy Digtal Marketing Consultancy"
            photoUrl={tes3}
          />
          <TestimonialCard
            text="The team at <strong>Ato Creative</strong> is incredibly talented. They helped us redesign our website, and the results were phenomenal. 
            The site is not only visually stunning but also highly functional and user-friendly."
            author="Emily Johnson"
            position="Product Manager, Tech Innovators"
            photoUrl={tes4}
          />
          <TestimonialCard
            text="<strong>Ato Creative</strong> has been instrumental in our rebranding efforts. Their strategic insights and creative solutions have significantly boosted our brand's visibility and engagement."
            author="Michael Brown"
            position="Founder & CEO, GreenTech Solutions"
            photoUrl={tes5}
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, author, position, photoUrl }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.6)] transition-transform transform scale-100 hover:scale-110 hover:border-gray-400 overflow-hidden">
      <img className="w-full h-60 object-cover shadow-[0px_4px_15px_rgba(0,0,0,0.6)] " src={photoUrl} alt={`Testimonial from ${author}`} />
      <div className="p-6">
        <div className="mt-4">
          <div className="testimonial-text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className="flex flex-row items-center mt-4">
          <div className="flex-shrink-0">
            {/* Empty div for spacing */}
          </div>
          <div className="ml-4">
            <div className="text-xl font-semibold">{author}</div>
            <div className="text-gray-500">{position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;