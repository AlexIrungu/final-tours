import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import nick from './nick.jpg'
import muze from './muze.jpg'
import watamu from './watamu.jpeg'
import park from './park.jpeg';
import orphan from './orphan.jpg'
import reserve from './reserve.jpg'
import ModalVideo from 'react-modal-video';
import amboseli from './top-places/amboseli.jpeg'
import diani from './top-places/dianibeach.jpeg'
import naivasha from './top-places/lakenaivasha.jpeg'
import nakuru from './top-places/lakenakuru.jpeg'
import mtkenya from './top-places/mtkenya.jpeg'
import maasaimara from './top-places/maasaimara.jpeg'
import olpegeta from './top-places/olpegeta.png'



function Places(){
    const [activeCard, setActiveCard] = useState(null);
    // Add new state variable for selected service image
    const [selectedServiceImage, setSelectedServiceImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    
    const history = useHistory(); // Use the useHistory hook
    const [searchLocation, setSearchLocation] = useState([-1.2921, 36.8219]);
  
  
    const toggleCard = (title, image) => {
      setActiveCard((prevActiveCard) => (prevActiveCard === title ? null : title));
      // Set the selected service image when the card is clicked
      setSelectedServiceImage(activeCard === title ? null : image);
    };
  
    const handleBookNow = () => {
      // Simulating a booking process with a 1.5-second delay
      // Replace this with your actual booking logic (e.g., API calls, database updates, etc.)
      console.log("Booking process initiated...");
      setTimeout(() => {
        console.log("Booking successful!");
        setBookingSuccess(true);
        setShowModal(true);
        history.push("/calendar"); // Replace "/calendar" with the URL of the page you want to redirect to
      }, 1500);
    };

    const handleViewPricing = () => {
      // Simulate a process with a delay (replace with your logic)
      console.log("View Pricing process initiated...");
      setTimeout(() => {
        console.log("View Pricing successful!");
        setIsPricingOpen(true);
        setShowModal(true);
        history.push("/pricing");
        // You can add a redirect here if needed
      }, 1500);
    };
    

   
  
    const handleBookingSuccess = () => {
      // Redirect the user to the calendar page after the booking is successful
      history.push("/calendar");
      setBookingSuccess(false);
    };

  
  
    const handleModalClose = () => {
      setShowModal(false);
    };

    const toggleBookAdventureModal = () => {
      setBookAdventureOpen((prevState) => !prevState);
    };

    

    const [isBookAdventureOpen, setBookAdventureOpen] = useState(false);
    const [isPricingOpen , setIsPricingOpen] = useState(false);
    
  
    const ServiceCard = ({ image, title, description }) => (
      <div className="service-card bg-white rounded-lg shadow-lg mb-4">
        <img src={image} alt={title} className="service-card-image" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-brown-600 mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
          {/* Book Now button */}
          <button
            onClick={handleBookNow}
            className="mt-4 bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Book Now
          </button>
          {/* Pricing button */}
          <button
            onClick={handleViewPricing}
            className="mt-4 bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            View Pricing
          </button>
        </div>
      </div>
    );
    return(
        <div>
            <h1 className="text-3xl font-bold text-orange-700 mt-10 mb-4">Places to Visit</h1>
          <p className="text-gray-700 mb-6">Explore the 
          <button
              onClick={toggleBookAdventureModal}
              className="cta-button mt-4 bg-customWhite text-brown-600 underline font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
            >
              top tourist destination
            </button>
          in Kenya that will captivate your heart and soul. Discover the best of the country's natural beauty, rich culture, and awe-inspiring landmarks.</p>

          

      <div className="grid grid-cols-1  gap-4 p-4">
        <ServiceCard
          title="Mount Kenya National Park"
          image={mtkenya}
          description="Nestled within the picturesque landscapes of East Africa, Mount Kenya National Park stands as a paragon of natural beauty and adventure. Enthusiasts of hiking and mountaineering are presented with an exceptionally rewarding experience. The ascent of Mount Kenya unveils awe-inspiring vistas, featuring majestic glaciers, serene lakes, and an array of indigenous avian and terrestrial species."
        />
        <ServiceCard
          title="Diani Beach"
          image={diani}
          description="Diani Beach, lauded by CNN as one of the premier coastal destinations in the world and among Africa's finest, beckons water enthusiasts with its alluring charm. This idyllic sanctuary invites travelers to immerse themselves in a plethora of aquatic activities. Whether it's swimming, sailing, windsurfing, diving, snorkeling, jet skiing, or water skiing, Diani Beach caters to the desires of those seeking maritime thrills."
        />
        <ServiceCard
          title="Lake Nakuru"
          image={nakuru}
          description="Nestled amidst the captivating expanse of Eastern Africa's Great Rift Valley lake system, Lake Nakuru is an iconic soda lake and the centerpiece of the Lake Nakuru National Park. This sanctuary boasts a profusion of wildlife, including the enigmatic black and white rhinoceros, majestic lions, elusive leopards, and fleet-footed cheetahs, all harmoniously coexisting with the resident hippos and flamingos. The park's allure extends beyond its wildlife, as it encompasses breathtaking landscapes, featuring euphorbia forests, acacia woodlands, sweeping savannah grasslands, and rugged escarpments that embrace a shallow, alkaline lake."
        />
        <ServiceCard
          title="Masai Mara Game Reserve"
          image={maasaimara}
          description="The Maasai Mara Game Reserve is a venerable bastion of wildlife conservation in Africa, renowned for its exceptional concentrations of iconic species such as lion, leopard, cheetah, and African bush elephants. It plays host to the grand spectacle of the great wildebeest migration, an annual phenomenon that unfolds across its expansive savannahs from July to October. Recognized as one of the Seven Natural Wonders of Africa and as a Wonder of the World, Maasai Mara remains a testament to the untamed beauty of the wild."
        />

        <ServiceCard
          title="Lake Naivasha"
          image={naivasha}
          description="Encompassing an area of 139 square kilometers, Lake Naivasha is ensconced within a realm of papyrus swamps and groves of the striking yellow fever trees. The unique ecosystem, juxtaposed with the lake's tranquil waters, is celebrated for its vibrant hippopotamus population and revered by avid birdwatchers as a paradise of over 400 avian species, including the iconic flamingos."
        />
        <ServiceCard
          title="Amboseli National Park"
          image={amboseli}
          description="With the majestic silhouette of Mount Kilimanjaro as its backdrop, Amboseli National Park is one of Kenya's most revered natural sanctuaries. Offering an unparalleled opportunity to witness free-ranging herds of African elephants up close, this park is a haven for nature aficionados. It encompasses five distinct habitats, ranging from the desiccated lake bed of Lake Amboseli to the lush wetlands with sulfur springs, the sweeping savannah, and the verdant woodlands."
        />
        <ServiceCard
          title="Ol Pejeta conservancy"
          image={olpegeta}
          description="Boasting the largest rhinoceros population in Kenya, the Ol Pejeta Conservancy also serves as the last refuge for the world's remaining northern white rhinos, both male and female. This conservancy is a testament to wildlife conservation, housing the illustrious Big Five – the African elephant, lion, leopard, Cape buffalo, and rhinoceros. Moreover, it shelters endangered species like the African wild dog, cheetah, Grevy’s zebra, beisa oryx, and Jackson’s hartebeest. A diverse range of fauna, including giraffes, baboons, hippos, and hyenas, adds to the tapestry of life within this remarkable haven."
        />
      </div>

      {/* <p>Other Places to visit include:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <ServiceCard
          image={park}
          title="National Parks"
          description="Kenya boasts a diverse range of national parks, each offering a unique wildlife and nature experience. Explore the Nairobi National Park, Aberdare National Park, Amboseli National Park, South Island National Park, Hells Gate National Park, Sibiloi National Park, Ruma National Park, Ol Donyo Sabuk National Park, Ndere Island National Park, Mount Longonot National Park, Kora National Park, Meru National Park, Marsabit National Park & Reserve, Mount Kenya National Park & Reserve, Lake Nakuru National Park, Chyulu Hills National Park, Central Island National Park, Arabuko Sokoke National Park, Tsavo East, Tsavo West National Parks, Mount Elgon National Park, and Saiwa Swamp National Park."
        />

        <ServiceCard
          image={reserve}
          title="National Reserves"
          description="Discover the beauty of Kenya's national reserves, home to various wildlife and stunning landscapes. Visit the Masai Mara National Reserve, Malka Mari National Park, Mwingi Game Reserve, Nasolot National Reserve, Samburu National Reserve, Kakamega Forest National Reserve, Bisanadi National Reserve, Shimba Hills National Reserve, Mwea National Reserve, Rahole National Reserve, Arawale National Reserve, Boni National Reserve, Buffalo Springs National Reserve, Dodori National Reserve, Lake Bogoria National Reserve, and Rimoi National Reserve."
        />

        <ServiceCard
          image={watamu}
          title="National Marine Parks and Reserves"
          description="Explore the mesmerizing marine life and underwater wonders of Kenya's marine parks and reserves. Dive into the Mombasa Marine National Park & Reserve, Kisite Mpunguti Marine Park, Malindi Marine National Park & Reserve, Watamu Marine National Park & Reserve, Kiunga Marine National Reserve, and Diani-Chale Marine Reserve."
        />

        <ServiceCard
          image={orphan}
          title="Animal Orphanages and Sanctuaries"
          description="Get up close with Kenya's wildlife conservation efforts by visiting animal orphanages and sanctuaries. Visit the Nairobi Animal Orphanage, Nairobi Safari Walk, Lake Simbi National Sanctuary, Kisumu Impala Sanctuary, and Mwaluganje Elephant Sanctuary."
        />

        <ServiceCard
          image={nick}
          title="Scenic Spots"
          description="Immerse yourself in the breathtaking beauty of Kenya's scenic spots. Witness God’s Footprint (Lwayo Lwa Mulungu), The Mbaraki Pillar, Marafa’s Hell's Kitchen, Lake Kapedo, Eliye Beach, Kyamwilu Hill, Takawiri Island, and Mzima Springs, and experience the magic of nature."
        />

        <ServiceCard
          image={muze}
          title="Museums"
          description="Delve into Kenya's rich history and cultural heritage by visiting its museums. Discover the Nairobi National Museum, Nairobi Gallery, Karen Blixen Museum, Uhuru Gardens National Monument, Hyrax Hill Museum, Kariandusi Archaeological Site, Nyeri Museum, Olorgesailie Pre-historic Site, Thimlich Ohinga Archaeological Site, Fort Jesus, Gede Ruins, Kapenguria Museum, Bomas of Kenya, Lamu Museum, National Archives, Nairobi Railway Museum, and Oloolua Nature Trail."
        />
      </div> */}
          <div className='py-10'>
          <ModalVideo
      channel="youtube"
      isOpen={isBookAdventureOpen}
      videoId="ZJq26SI2IUc"
      onClose={toggleBookAdventureModal}
    />
    </div>
        </div>
    )
}
export default Places