import { getPlaceDetails } from "@/app/utils/getPlacesDetails";

export async function GET(request: Request) {
  const reviews = await getPlaceDetails();
 try {
  return new Response(JSON.stringify(reviews), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
 } catch (error: any) {
   return new Response(JSON.stringify({ error: error.message }), {
     status: 500,
     headers: {
       'Content-Type': 'application/json',
     },
   });
 }
}