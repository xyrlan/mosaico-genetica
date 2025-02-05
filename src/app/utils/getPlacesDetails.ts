interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}


export async function getPlaceDetails(): Promise<Review[]> {
  const apiKey = 'AIzaSyAhwiRkGOJQCOTiAjbJ4em34DlguNdNfgY';
  const placeId = 'ChIJEV2cyLM5WpMRrBYLJYO-zrE';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`;

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      if (data.result && data.result.reviews) {
          return data.result.reviews;
      }
      
      return [];
  } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      return [];
  }
}
