"use client";
import { useState } from "react";

export default function Page() {
  // Estado para el formulario (agregamos "unidad" con valor por defecto "años")
  const [mascota, setMascota] = useState({
    nombre: "",
    raza: "",
    edad: "",
    unidad: "años", // <-- Nuevo campo para manejar si son meses o años
    duenio: "",
    notas: "",
  });

  // Estado para almacenar TODAS las mascotas registradas
  const [listaMascotas, setListaMascotas] = useState([]);

  // Maneja cambios en cada campo del formulario
  const handleChange = (e) => {
    setMascota({
      ...mascota,
      [e.target.name]: e.target.value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega la nueva mascota al array
    setListaMascotas([...listaMascotas, mascota]);
    // Limpia el formulario
    setMascota({
      nombre: "",
      raza: "",
      edad: "",
      unidad: "años", // Reiniciamos la unidad al valor por defecto
      duenio: "",
      notas: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "2rem",
      }}
    >
      {/* Contenedor principal del formulario */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          padding: "2rem",
          color: "#000",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#000",
            fontSize: "2rem", // Aumenta este valor para un título más grande
          }}
        >
          Registro de Mascota
        </h1>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Nombre de la Mascota:
            </label>
            <input
              type="text"
              name="nombre"
              value={mascota.nombre}
              onChange={handleChange}
              placeholder="Ej. Firulais"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Raza:
            </label>
            <input
              type="text"
              name="raza"
              value={mascota.raza}
              onChange={handleChange}
              placeholder="Ej. Labrador"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Edad con select para indicar si son meses o años */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Edad:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="number"
                name="edad"
                value={mascota.edad}
                onChange={handleChange}
                placeholder="Ej. 3"
                required
                style={{
                  width: "100px",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <select
                name="unidad"
                value={mascota.unidad}
                onChange={handleChange}
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="meses">Meses</option>
                <option value="años">Años</option>
              </select>
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Nombre del Dueño:
            </label>
            <input
              type="text"
              name="duenio"
              value={mascota.duenio}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Notas Adicionales:
            </label>
            <textarea
              name="notas"
              value={mascota.notas}
              onChange={handleChange}
              placeholder="Observaciones..."
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                minHeight: "80px",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              padding: "0.75rem 1rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Registrar Mascota
          </button>
        </form>
      </div>

      {/* Contenedor de la lista de mascotas */}
      <div
        style={{
          maxWidth: "600px",
          margin: "2rem auto 0 auto",
          color: "#000",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#000",
            fontSize: "2rem", // Aumenta este valor para un título más grande
          }}
        >
          Mascotas Registradas
        </h2>
        {listaMascotas.length === 0 ? (
          <p>No hay mascotas registradas.</p>
        ) : (
          listaMascotas.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p>
                <strong>Nombre:</strong> {item.nombre}
              </p>
              <p>
                <strong>Raza:</strong> {item.raza}
              </p>
              <p>
                <strong>Edad:</strong> {item.edad} {item.unidad}
              </p>
              <p>
                <strong>Dueño:</strong> {item.duenio}
              </p>
              <p>
                <strong>Notas:</strong> {item.notas}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
