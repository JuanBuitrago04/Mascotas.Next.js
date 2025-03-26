// app/api/mascotas/route.js
import pool from "../../../db"; // Ajusta la ruta a donde pusiste db.js

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM mascotas ORDER BY id DESC");
    return new Response(JSON.stringify({ data: result.rows }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al obtener mascotas:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener mascotas" }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, raza, edad, unidad, duenio, notas } = body;

    const query = `
      INSERT INTO mascotas (nombre, raza, edad, unidad, duenio, notas)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [nombre, raza, edad, unidad, duenio, notas];
    const result = await pool.query(query, values);

    return new Response(
      JSON.stringify({
        message: "Mascota registrada con éxito",
        data: result.rows[0],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al crear mascota:", error);
    return new Response(
      JSON.stringify({ error: "Error al crear mascota" }),
      { status: 500 }
    );
  }
}
        