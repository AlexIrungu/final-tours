import { useState, useEffect } from 'react';

const usePlacesData = (searchQuery = '') => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const url = `http://localhost:5000/api/places${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ''}`;
        console.log('Fetching places from:', url);
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch places: ${response.status}`);
        }

        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }

        console.log('Places fetched:', data.length);
        
        setPlaces(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching places:', err);
        setError(err.message);
        
        // Fallback data when API fails
        const fallbackData = [
          {
            id: '1',
            name: 'Masai Mara',
            type: 'Park',
            rating: 4.8,
            description: 'Famous game reserve known for the annual wildebeest migration',
            image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800',
            bestTime: 'July to October',
            highlights: ['Wildlife', 'Safari', 'Nature'],
            location: { lat: -1.5, lng: 35.1 }
          },
          {
            id: '2',
            name: 'Diani Beach',
            type: 'Beach',
            rating: 4.7,
            description: 'Pristine white sandy beach with crystal clear waters',
            image: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=800',
            bestTime: 'December to March',
            highlights: ['Beach', 'Water Sports', 'Marine Life'],
            location: { lat: -4.3, lng: 39.6 }
          },
          {
            id: '3',
            name: 'Mount Kenya',
            type: 'Mountain',
            rating: 4.6,
            description: 'Second highest mountain in Africa with breathtaking glaciers and alpine forests',
            image: 'https://images.unsplash.com/photo-1558424871-c0cc827bc7bb?q=80&w=800',
            bestTime: 'January to February',
            highlights: ['Hiking', 'Mountain', 'Adventure'],
            location: { lat: -0.1522, lng: 37.3084 }
          }
        ];
        setPlaces(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [searchQuery]);

  return { places, loading, error };
};

export default usePlacesData;