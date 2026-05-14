export interface Review {
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

export interface PlaceDetails {
  reviews: Review[];
  rating: number | null;
  total: number | null;
}

const PLACE_ID = "ChIJEV2cyLM5WpMRrBYLJYO-zrE";

export async function getPlaceDetails(): Promise<PlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY não configurada");
    return { reviews: [], rating: null, total: null };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,reviews,rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // Cache por 24h — evita estourar quota da Places API a cada request
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    const result = data.result ?? {};

    return {
      reviews: result.reviews ?? [],
      rating: typeof result.rating === "number" ? result.rating : null,
      total:
        typeof result.user_ratings_total === "number"
          ? result.user_ratings_total
          : null,
    };
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return { reviews: [], rating: null, total: null };
  }
}
