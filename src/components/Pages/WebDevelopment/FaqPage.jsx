import { useState, useEffect } from "react";
import { X } from "lucide-react";

const FAQPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show after 10 seconds
    const timer = setTimeout(() => setIsOpen(true), 10000);

    // Detect exit intent
    const handleMouseLeave = (event) => {
      if (event.clientY < 10) {
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      {isOpen && (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-5 w-80 border border-gray-200 animate-slide-in-up">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Need Help?</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600">Check our FAQ page for answers to common questions.</p>
          <a
            href="/faq"
            className="mt-3 block text-center bg-[#FD5F20] text-white py-2 rounded-lg hover:bg-[#FD5F20]/80 transition"
          >
            Visit FAQ Page
          </a>
        </div>
      )}
    </div>
  );
};

export default FAQPopup;
