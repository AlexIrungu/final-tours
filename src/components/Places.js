import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Loader2, X, Search, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import  Input  from './ui/input';
import usePlacesData from './usePlacesData';

const Places = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const { places, loading, error } = usePlacesData(activeSearch);

  // Enhanced image handling with multiple fallbacks
  const PlaceImage = ({ place, index = 0, className }) => {
    const [imgError, setImgError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleImageError = () => {
      setImgError(true);
      setIsLoading(false);
    };

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const getImageUrl = () => {
      if (imgError || !place.images || !place.images[index]) {
        return `/api/placeholder/800/500?text=${encodeURIComponent(place.name)}`;
      }
      return place.images[index];
    };

    return (
      <div className={`relative ${className} bg-gray-100 overflow-hidden`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
        <img 
          src={getImageUrl()}
          alt={`${place.name} - ${index + 1}`}
          className={`h-full w-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    );
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setActiveSearch(searchInput);
  };

  // Filter places based on selected type
  const filteredPlaces = selectedType === 'all' 
    ? places 
    : places.filter(place => place.type.toLowerCase() === selectedType.toLowerCase());

  // Get unique types from the places data
  const placeTypes = ['all', ...new Set(places.map(place => 
    place.type.charAt(0).toUpperCase() + place.type.slice(1)
  ))];

  // Detailed view component
  const DetailView = ({ place, onClose }) => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="min-h-[50vh] w-full max-w-4xl my-8">
        <Card className="relative">
          <CardHeader className="space-y-4 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <PlaceImage 
                  place={place} 
                  index={0}
                  className="h-64 w-full rounded-lg"
                />
              </div>
              {place.images?.slice(1, 3).map((_, index) => (
                <PlaceImage 
                  key={index + 1}
                  place={place}
                  index={index + 1}
                  className="h-48 w-full rounded-lg"
                />
              ))}
            </div>
            <Button 
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">{place.name}</CardTitle>
                <Badge>{place.type}</Badge>
              </div>
              {place.rating && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  {place.rating.toFixed(1)}
                </Badge>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">{place.description}</p>

              {place.bestTime && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 shrink-0" />
                  <span>Best time to visit: {place.bestTime}</span>
                </div>
              )}

              {place.location && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>
                    Location: {place.location.lat.toFixed(2)}°N, {place.location.lng.toFixed(2)}°E
                  </span>
                </div>
              )}

              {place.highlights && place.highlights.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium">Highlights:</h3>
                  <div className="flex flex-wrap gap-2">
                    {place.highlights.map(highlight => (
                      <Badge key={highlight} variant="outline">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="border-t pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

  if (loading && places.length === 0) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <Card className="w-full max-w-md p-8 text-center">
          <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg text-muted-foreground">
            Loading amazing places in Kenya...
          </p>
        </Card>
      </div>
    );
  }

  if (error && places.length === 0) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <Card className="w-full max-w-md p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Oops! Something went wrong</h3>
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Discover Kenya's Wonders
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the most breathtaking destinations across Kenya
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search places..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Searching...
                </>
              ) : (
                'Search'
              )}
            </Button>
          </form>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {placeTypes.map(type => (
            <Button 
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="capitalize"
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">
                No places found matching your criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedType('all');
                  setSearchInput('');
                  setActiveSearch('');
                }}
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            filteredPlaces.map(place => (
              <Card key={place.id} className="group overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <PlaceImage 
                    place={place}
                    className="h-52 w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  {place.rating && (
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 right-2 bg-white/90 flex items-center gap-1"
                    >
                      <Star className="h-3 w-3 fill-current" />
                      {place.rating.toFixed(1)}
                    </Badge>
                  )}
                </div>

                <CardContent className="flex-grow pt-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                    <Badge>{place.type}</Badge>
                  </div>

                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {place.description || 'Discover this amazing destination in Kenya'}
                  </p>

                  {place.bestTime && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 shrink-0" />
                      Best time: {place.bestTime}
                    </div>
                  )}

                  {place.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>
                        {place.location.lat.toFixed(2)}°N, {place.location.lng.toFixed(2)}°E
                      </span>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="border-t pt-4">
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1">
                      {place.highlights?.slice(0, 2).map(highlight => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => setSelectedPlace(place)}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPlace && (
        <DetailView 
          place={selectedPlace} 
          onClose={() => setSelectedPlace(null)} 
        />
      )}
    </div>
  );
};

export default Places;