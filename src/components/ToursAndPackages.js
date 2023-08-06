import React from 'react';
// import zebras from './assets/zebra1.jpg'

const ToursAndPackages = () => {
  return (
    <section className="project-area section-gap" id="project">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-30 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Tours and Packages</h1>
              <p>An overview of the different types of tours offered by Danil Scenic Tours, such as wildlife safaris, cultural expeditions, adventure tours, and beach getaways.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="active-works-carousel mt-40 col-lg-8">
            <div className="item">
              <img className="img-fluid" src="" alt="" />
              <div className="caption text-center mt-20">
                <h6 className="text-uppercase">Wildlife Safaris</h6>
                <p>Embark on an unforgettable wildlife safari adventure in Kenya's iconic national parks and reserves. Witness the incredible wildebeest migration in the Maasai Mara, spot majestic elephants in Amboseli National Park, and encounter rare species in Tsavo National Park.</p>
              </div>
            </div>
            <div className="item">
              <img className="img-fluid" src="img/about-img.jpg" alt="" />
              <div className="caption text-center mt-20">
                <h6 className="text-uppercase">Cultural Expeditions</h6>
                <p>Immerse yourself in the rich cultural heritage of Kenya through our cultural expeditions. Visit traditional Maasai villages, witness vibrant tribal ceremonies, and interact with local communities to gain a deeper understanding of Kenya's diverse cultures and traditions.</p>
              </div>
            </div>
            <div className="item">
              <img className="img-fluid" src="img/nairobi_national_park.jpg" alt="" />
              <div className="caption text-center mt-20">
                <h6 className="text-uppercase">Adventure Tours</h6>
                <p>Experience thrilling adventures in Kenya's stunning landscapes. Trek to the summit of Mount Kenya, go on exhilarating game drives, enjoy walking safaris, or engage in water sports along the Kenyan coast. Our adventure tours offer exciting activities for all adventure enthusiasts.</p>
              </div>
            </div>
            <div className="item">
              <img className="img-fluid" src="img/beach.jpg" alt="" />
              <div className="caption text-center mt-20">
                <h6 className="text-uppercase">Beach Getaways</h6>
                <p>Escape to the pristine beaches of the Kenyan coast and indulge in a relaxing beach getaway. Enjoy the crystal-clear waters, white sandy beaches, and warm tropical climate. Take part in water sports, explore marine life, or simply unwind and rejuvenate in paradise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursAndPackages;
