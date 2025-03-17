"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/api";

export default function ProyectosPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Llama a la función mock para obtener proyectos
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      {projects.length === 0 ? (
        <p>Cargando proyectos...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong>: {project.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
