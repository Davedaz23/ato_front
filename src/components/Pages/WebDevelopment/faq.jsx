import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQPage = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows you to return products within 30 days of purchase. Please ensure the product is unused and in its original packaging.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team by emailing support@company.com or calling (123) 456-7890.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping. Please check our shipping page for more details on countries we deliver to and shipping costs.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, you will receive a tracking number via email. You can use this to track your order on our website.",
    },
  ];

  return (
    <div className="max-w-full min-h-screen mx-auto mt-28">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <button>
                {open === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>
            {open === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
