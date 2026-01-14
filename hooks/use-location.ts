import { useState, useEffect } from 'react';

interface LocationState {
  countryCode: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>({
    countryCode: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Using ipapi.co for free IP geolocation
        // In production, consider a more robust paid service or your own backend proxy
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
           throw new Error('Failed to fetch location');
        }
        const data = await response.json();
        setLocation({
          countryCode: data.country_code, // Returns ISO 3166-1 alpha-2 code e.g., 'IN', 'US'
          isLoading: false,
          error: null,
        });
      } catch (err) {
        console.error('Error fetching location:', err);
        setLocation({
          countryCode: null, // Fallback usually handled by component (e.g. default to Global/US)
          isLoading: false,
          error: 'Failed to detect location',
        });
      }
    };

    fetchLocation();
  }, []);

  return location;
}
