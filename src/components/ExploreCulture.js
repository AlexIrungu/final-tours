import React, { useState } from 'react';

const ExploreCulture = () => {
  const [selectedElement, setSelectedElement] = useState('');

  const culturalElements = [
    {
      name: 'Traditional Tribes',
      description: 'Dive into the rich tapestry of Kenya’s cultural heritage by exploring the traditions, rituals, and unique lifestyles of its various tribes such as the Maasai, Samburu, and Kikuyu.',
    },
    {
      name: 'Vibrant Festivals',
      description: 'Experience the colorful and lively festivals that celebrate Kenya`s diverse cultural identity. From the Nairobi International Film Festival to the Lamu Cultural Festival, each event is a unique celebration.',
    },
    {
      name: 'Local Cuisine',
      description: 'Certainly! Kenyan cuisine is rich and diverse, featuring a variety of dishes that showcase the country`s cultural heritage and agricultural abundance, including unique foods such as Mursik and Busaa, as well as popular beverages like chai (tea), Tusker beer, Muratina, palm wine (tembo), and Stoney Tangawizi.',
    },
    {
      name: 'Arts and Crafts',
      description: 'Discover the artistic expressions of Kenya through traditional crafts, beadwork, and contemporary art. Explore the bustling markets filled with handmade goods that reflect the country’s creativity.',
    },
    {
      name: 'Music and Dance',
      description: 'Explore the vibrant music and dance traditions of Kenya. From the rhythmic beats of traditional drums to the energetic moves of tribal dances, immerse yourself in the country’s musical culture.',
    },
    {
      name: 'Languages and Communication',
      description: 'Learn about the diverse languages spoken in Kenya, reflecting the multiculturalism of the country. Discover how communication plays a crucial role in preserving cultural identity, as exemplified by common greetings like "Jambo" (hello) and "Karibu Kenya" (welcome to Kenya). These phrases not only showcase linguistic diversity but also emphasize the importance of language in fostering a sense of hospitality and cultural pride. ',
    },
    {
      name: 'Sacred Sites',
      description: 'Journey to the sacred sites of Kenya, where ancient rituals and ceremonies have been performed for centuries, enriching the cultural tapestry of the nation. One such sacred site is Subukia, known for its spiritual significance. Here, diverse communities engage in traditional ceremonies that connect them to their roots and heritage. These sites not only hold historical and religious importance but also provide a profound glimpse into Kenya’s rich religious diversity, showcasing the enduring traditions that have shaped the spiritual landscape of the country for generations.',
    },
    {
      name: 'Traditional Clothing',
      description: 'Admire the beauty of traditional Kenyan clothing, characterized by vibrant colors and intricate patterns. Each tribe has its unique attire, reflecting their cultural values and history.',
    },
    {
      name: 'Storytelling Traditions',
      description: 'Delve into the rich storytelling traditions of Kenya, where myths, legends, and folktales are passed down through generations, preserving the cultural heritage of diverse communities. Among the Maasai people, for instance, tales of Enkai, the god of the Maasai, and Engai Na-nyokie, the god of the sky and creator, are woven into the fabric of their oral traditions. These stories not only convey profound wisdom and moral lessons but also serve as a vital means of transmitting cultural values, fostering a deep connection between past and present.',
    },
    {
      name: 'Sports and Recreation',
      description: 'Discover the role of sports and recreation in Kenyan culture. From traditional games to modern sports, explore how physical activities bring communities together and foster a sense of unity.',
    },
  ];

  const handleElementClick = (elementName) => {
    setSelectedElement((prevElement) => (prevElement === elementName ? '' : elementName));
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-md shadow-md">
    <h2 className="text-4xl font-bold mb-4">Explore Kenya's Culture</h2>
    <p className="text-lg mb-6">Choose an element to immerse yourself in the vibrant culture of Kenya:</p>

    <div className="">
      {culturalElements.map((element) => (
        <div
          key={element.name}
          className={`bg-white p-4 rounded-md shadow-md cursor-pointer transition duration-300 ${
            selectedElement === element.name ? 'border-brown-600' : 'border-gray-300'
          }`}
          onClick={() => handleElementClick(element.name)}
        >
          <h3 className="text-xl font-semibold mb-2">{element.name}</h3>
          {/* Display the description only when the element is selected */}
          {selectedElement === element.name && (
            <p className="text-brown-600">{element.description}</p>
          )}
        </div>
      ))}
    </div>

    {/* Additional content or interactive elements can be added here */}
  </div>
  );
};

export default ExploreCulture;
