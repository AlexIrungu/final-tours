import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTiktok, 
  FaTwitter,
  FaChevronDown 
} from 'react-icons/fa';
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import maasai from './shiftedfrommain/maasai.jpg';
import transport from './shiftedfrommain/transport.jpg';
import Partners from "./Partners";
import BannerSlider from "./BannerSlider";
import TeamData from "./TeamData";
import Service from './ServiceSection';
import Flow from "./Flow";


function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Faridah",
      role: "They are just perfect",
      content: "We had a safari with the company and everything went on as planned.we are more than willing to recommend the company to our friends.Dan was a great guide with great knowledge of his sorroundings i.e animals,plants,political background of his country and cultures too.Thumbs up Dan for making our Safari great",
      rating: 5
    },
    {
      name: "Charles Nickson",
      role: "Simply the Best",
      content: "I booked a 3 days tour to Amboseli National Park last month with Danil Scenic Tours and to-date I still have nostalgia. It was my first tour experience I must say I enjoyed every moment. The itinerary was well planned and the pricing was pocket friendly. The accommodation was at Kibo Safari Camp and everything about the camp was perfect from meals, bed and staff. During the tour the guide was not only friendly but also very knowledgeable about birds, animals, culture of the Masai people. The best part about the whole tour was my birthday surprise by the team from Danil Scenic Tours (thanks to their keen eye for detail they noticed from my identification documents that I had a birthday on the last day of the tour). Let me tell it to you, they actually organized with the hotel for me to cut a piece of cake as they sang birthday songs walking round the dinning area and using cutlery as the musical instruments.... wow, this was so emotional I could not help it. This was best birthday that I have ever celebrated in my life. Thank you Danil Scenic Tours for that and the whole team good job. I plan to do another trip with them soon.😍",
      rating: 5
    },
    {
      name: "Matthew",
      role: "Thrilling Safari Experience",
      content: "I recently had the pleasure of embarking on a safari adventure to the iconic Maasai mara national reserve with Danil scenic tours and it was nothing short of extra ordinary. From the time I booked my safari with them, they team demonstrated professionalism and expertise. They provided a detailed information about the itinerary, accommodation and what to expect during the safari. The game drives were incredible and had an opportunity of viewing the animals in their natural habitat. The overall experience exceeded my expectations, the combination of expert guidance, unforgettable wildlife encounters and seamless logistics made it a trip of a lifetime. I wouldn't hesitate recommending Danil scenic Tours to anyone seeking an authentic and unforgettable safari experience.",
      rating: 5
    }
    
  ];

  const socialLinks = [
    { Icon: FaTwitter, href: "https://twitter.com/@DanilScenic" },
    { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61550528048010" },
    { Icon: FaInstagram, href: "https://www.instagram.com/danil.scenic/" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/danil-scenic-743945286/" },
    { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCutpUrWcoi58yHOJb0bTXQg" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@danilscenic" }
  ];

  const tourHighlights = [
    { title: "Local Expertise", description: "In-depth knowledge of Kenya and its unique attractions" },
    { title: "Responsible Travel", description: "Committed to sustainable tourism" },
    { title: "24/7 Customer Support", description: "Assistance available round the clock" },
    { title: "Wide Selection", description: "We offer a diverse fleet to cater to various needs and preferences." },
    { title: "Convenience", description: "We provide flexible pick-up and drop-off locations, including major airports and cities."},
    { title: "Maintenance & Safety", description: "Our vehicles are regularly serviced to ensure your safety and comfort." },
    { title: "Experienced Guides", description: "Professional multilingual guides with extensive knowledge of wildlife and local culture." }
  ];

  const features = [
    {
      title: "Explore Nature",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWC5L8ciPyoaooGlHodVbZvg2Tli4nnwKUA&usqp=CAU",
      link: "/nature",
      description: "Discover breathtaking landscapes and stunning natural wonders"
    },
    {
      title: "Experience Culture",
      image: maasai,
      link: "/culture", 
      description: "Immerse yourself in rich traditions and history"
    },
    {
      title: "Adventure Awaits",
      image: transport,
      link: "/calendar",
      description: "Embark on thrilling adventures and create unforgettable memories"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <BannerSlider />
    
    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="rounded-full bg-amber-600 hover:bg-amber-700 p-4"
      >
        <FaChevronDown className="transform rotate-180" />
      </Button>
    </motion.div>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"
        />
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-6 relative">
          Welcome To Danil Scenic Tours!
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience the beauty of Kenya with our expertly curated tours and professional guides
        </p>
        <motion.div 
          className="mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/calendar">
          <Button 
            
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full"
          >
            Book Now
          </Button>
          </Link>
          
          <Link to="/contact">
          <Button 
           
           variant="outline"
           className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full"
         >
           Contact Us
         </Button>
          </Link>
         
        </motion.div>
      </motion.div>

      {/* Features Grid with Enhanced Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {features.map((feature, index) => (
          <Link to={feature.link} key={index}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-64"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Explore More
                  </Badge>
                </div>
              </motion.div>
              <CardContent className="p-6">
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <section className="mb-24 bg-amber-50 rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-lg text-gray-700 italic mb-4">
                "{testimonials[activeTestimonial].content}"
              </p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-amber-500">★</span>
                ))}
              </div>
              <p className="font-semibold text-amber-800">
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-sm text-gray-600">
                {testimonials[activeTestimonial].role}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-amber-600 w-4' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Enhanced Cards */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
          Why Choose Danil Scenic Tours?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-amber-600 text-2xl">✦</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-800 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <Flow />
      <Service />
      <TeamData />
    </main>

    {/* Enhanced Footer */}
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left Column - Connect With Us */}
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-amber-400 transition-all duration-200"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        <Link to="/reviews">
          <Button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 text-sm rounded-full">
            View Testimonials
          </Button>
        </Link>
      </div>

      {/* Middle Column - Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Partners />
        </div>

      {/* Right Column - Links and Copyright */}
      <div className="text-center space-y-2">
        <nav className="flex justify-center space-x-4 mb-2">
          {['Faq', 'Contact', 'Terms'].map((route) => (
            <Link
              key={route.toLowerCase()}
              to={`/${route.toLowerCase()}`}
              className="text-sm hover:text-amber-400 transition-colors duration-200"
            >
              {route}
            </Link>
          ))}
        </nav>
        <div className="text-xs text-amber-200/80">
          <p>&copy; {new Date().getFullYear()} Danil Scenic Tours. All rights reserved.</p>
          <p>Developed by Alex Irungu</p>
        </div>
      </div>
    </div>
  </div>
</footer>
  </div>
);
}

export default Home;