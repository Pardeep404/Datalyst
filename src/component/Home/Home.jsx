import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaChartBar, FaUsers, FaTools, FaHandshake } from "react-icons/fa";
import bgImage from "../../assets/bannerImg1.jpg";
import bgImage2 from "../../assets/bannerImg2.jpg";

function Home() {
  const testimonials = [
    {
      name: "John Doe",
      text: "Datalyst transformed how we handle data!",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Jane Smith",
      text: "CRM optimization boosted our efficiency!",
      img: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "David Brown",
      text: "Amazing insights helped us scale!",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Lisa White",
      text: "Highly professional team!",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Michael Johnson",
      text: "Expertise in data analysis saved us time!",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Emily Davis",
      text: "Immediate improvements in customer engagement!",
      img: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Robert Wilson",
      text: "Highly recommended for CRM!",
      img: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "Sophia Miller",
      text: "Game-changer for analytics!",
      img: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Daniel Clark",
      text: "Superb service and support!",
      img: "https://i.pravatar.cc/150?img=9",
    },
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto max-w-8xl md:px-4 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center p-10 rounded-lg shadow-md bg-cover bg-center  flex justify-center items-center overflow-hidden"
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "blur(4px)", // Corrected blur syntax
            zIndex: 0,
          }}
        ></div>

        {/* Dark Overlay for Better Contrast */}
        <div className="absolute inset-0  bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-bold text-white mb-4 drop-shadow-xl "
            style={{ WebkitTextStroke: "1px black" }}
          >
            Empowering Businesses with Data-Driven Insights & CRM Optimization
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-white text-lg mb-6 drop-shadow-md px-4"
          >
            Your trusted partner in structured data analytics and seamless CRM
            management. We provide intelligent solutions to optimize workflows
            and drive growth.
          </motion.p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-violet-500 via-purple-500 to-orange-400 text-white px-6 py-3 rounded-lg shadow-lg w-full md:w-auto"
            >
              Get a Free Consultation
            </motion.button> */}
            <Link to={"/services"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg border-2 border-white w-full md:w-auto"
            >
              Explore Our Services
            </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Datalyst */}
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
          {[
            {
              icon: FaChartBar,
              title: "Data-Backed Strategies",
              desc: "Make informed decisions with data insights.",
            },
            {
              icon: FaUsers,
              title: "Expert Analysts",
              desc: "Industry experts providing real-world insights.",
            },
            {
              icon: FaTools,
              title: "Custom CRM Solutions",
              desc: "Optimize your CRM for efficiency.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <item.icon className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
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
          {[
            {
              icon: FaHandshake,
              title: "DAaaS",
              desc: "Deploy expert analysts for business growth.",
            },
            {
              icon: FaTools,
              title: "CRMSync",
              desc: "Optimize your CRM for better customer tracking.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <item.icon className="text-5xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
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
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                {/* Testimonial Image */}
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />

                {/* Testimonial Text */}
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <p className="text-gray-900 font-bold mt-4">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="relative mt-16 p-8 rounded-lg shadow-lg text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage2})`,
            filter: "blur(6px)", // Corrected blur syntax
            zIndex: 0,
          }}
        ></div>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0  bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2
            className="text-4xl font-semibold mb-4 text-white drop-shadow-lg "
            style={{ WebkitTextStroke: "1px black" }}
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-6 text-white drop-shadow-lg">
            Get started with Datalyst today and unlock the power of data.
          </p>
          <Link to={"/Contact"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Contact Us Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
