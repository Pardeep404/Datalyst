import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const testimonials = [
    {
      name: "John Doe",
      text: "Datalyst transformed how we handle data, making our decision-making process much more effective!",
    },
    {
      name: "Jane Smith",
      text: "Their CRM optimization service boosted our efficiency significantly!",
    },
    {
      name: "David Brown",
      text: "Amazing data insights that helped us scale our business!",
    },
    {
      name: "Lisa White",
      text: "Professional and highly skilled team. A pleasure to work with!",
    },
    {
      name: "Michael Johnson",
      text: "Their expertise in data analysis saved us countless hours!",
    },
    {
      name: "Emily Davis",
      text: "We saw immediate improvements in our customer engagement!",
    },
    {
      name: "Robert Wilson",
      text: "Highly recommended for any business looking to improve its CRM!",
    },
    {
      name: "Sophia Miller",
      text: "A game-changer for our analytics-driven approach!",
    },
    { name: "Daniel Clark", text: "Superb service and excellent support!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto max-w-8xl md:px-4 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center bg-gray-100 p-10 rounded-lg shadow-md"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Empowering Businesses with Data-Driven Insights & CRM Optimization
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your trusted partner in structured data analytics and seamless CRM
          management.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get a Free Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Explore Our Services
          </motion.button>
        </div>
      </motion.div>

      {/* Why Choose Datalyst Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Why Choose Datalyst?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Data-Backed Strategies
            </h3>
            <p className="text-gray-700">
              We help businesses leverage data to make informed decisions.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Expert Analysts
            </h3>
            <p className="text-gray-700">
              Work with industry experts who provide real-world insights.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Custom CRM Solutions
            </h3>
            <p className="text-gray-700">
              Optimize your CRM for better client management and efficiency.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Offerings */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Our Core Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              DAaaS (Data Analyst as a Service)
            </h3>
            <p className="text-gray-700">
              Deploy expert data analysts to drive business growth through
              analytics.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              CRMSync (CRM Setup & Optimization)
            </h3>
            <p className="text-gray-700">
              Optimize your CRM for better data organization and customer
              tracking.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-16 bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <p className="text-gray-900 font-bold mt-4">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-16 bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-900 p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg mb-6">
          Get started with Datalyst today and unlock the power of data.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Contact Us Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;
