import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const culturalElements = [
  {
    name: 'Traditional Tribes',
    description: 'Dive into the rich tapestry of Kenya\'s cultural heritage by exploring the traditions, rituals, and unique lifestyles of its various tribes such as the Maasai, Samburu, and Kikuyu.',
    imageFilter: 'tribes'
  },
  {
    name: 'Vibrant Festivals',
    description: 'Experience the colorful and lively festivals that celebrate Kenya\'s diverse cultural identity. From the Nairobi International Film Festival to the Lamu Cultural Festival, each event is a unique celebration.',
    imageFilter: 'festivals'
  },
  {
    name: 'Local Cuisine',
    description: 'Kenyan cuisine is rich and diverse, featuring a variety of dishes that showcase the country\'s cultural heritage and agricultural abundance, including unique foods such as Mursik and Busaa, as well as popular beverages like chai (tea), Tusker beer, Muratina, palm wine (tembo), and Stoney Tangawizi.',
    imageFilter: 'cuisine'
  },
  {
    name: 'Arts and Crafts',
    description: 'Discover the artistic expressions of Kenya through traditional crafts, beadwork, and contemporary art. Explore the bustling markets filled with handmade goods that reflect the country\'s creativity.',
    imageFilter: 'arts'
  },
  {
    name: 'Music and Dance',
    description: 'Explore the vibrant music and dance traditions of Kenya. From the rhythmic beats of traditional drums to the energetic moves of tribal dances, immerse yourself in the country\'s musical culture.',
    imageFilter: 'music'
  },
  {
    name: 'Languages and Communication',
    description: 'Learn about the diverse languages spoken in Kenya, reflecting the multiculturalism of the country. Discover how communication plays a crucial role in preserving cultural identity, as exemplified by common greetings like "Jambo" (hello) and "Karibu Kenya" (welcome to Kenya).',
    imageFilter: 'language'
  },
  {
    name: 'Sacred Sites',
    description: 'Journey to the sacred sites of Kenya, where ancient rituals and ceremonies have been performed for centuries. These sites hold historical and religious importance, showcasing the enduring traditions that have shaped the spiritual landscape.',
    imageFilter: 'sacred'
  },
  {
    name: 'Traditional Clothing',
    description: 'Admire the beauty of traditional Kenyan clothing, characterized by vibrant colors and intricate patterns. Each tribe has its unique attire, reflecting their cultural values and history.',
    imageFilter: 'clothing'
  },
  {
    name: 'Storytelling Traditions',
    description: 'Delve into the rich storytelling traditions of Kenya, where myths, legends, and folktales are passed down through generations, preserving the cultural heritage of diverse communities.',
    imageFilter: 'storytelling'
  },
  {
    name: 'Sports and Recreation',
    description: 'Discover the role of sports and recreation in Kenyan culture. From traditional games to modern sports, explore how physical activities bring communities together and foster a sense of unity.',
    imageFilter: 'sports'
  }
];

const ExploreCulture = ({ onElementClick, selectedElement }) => {
  return (
    <div className="space-y-3">
      {culturalElements.map((element) => (
        <motion.div
          key={element.name}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
            selectedElement?.name === element.name
              ? 'bg-amber-800 text-white shadow-xl'
              : 'bg-white/80 shadow-md hover:shadow-lg backdrop-blur-sm'
          }`}
          onClick={() => onElementClick(element)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{element.name}</h3>
            <ChevronRight 
              className={`w-5 h-5 transition-transform duration-300 ${
                selectedElement?.name === element.name ? 'rotate-90' : ''
              }`}
            />
          </div>
          {selectedElement?.name === element.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm mt-2 text-white/90"
            >
              Click to explore more
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export { culturalElements };
export default ExploreCulture;