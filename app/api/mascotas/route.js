export async function POST(request) {
    try {
      const body = await request.json();
      // Aquí podrías guardar 'body' en una base de datos, 
      // o hacer alguna otra lógica.
  
      console.log("Datos recibidos en la API:", body);
  
      // Retorna una respuesta con status 200 y un JSON
      return new Response(JSON.stringify({
        message: "Mascota registrada con éxito",
        mascota: body,
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({
        error: "Error al procesar los datos",
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  