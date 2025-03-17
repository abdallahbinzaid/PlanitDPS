// components/Navbar.js
"use client";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Gestión Proyectos</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tareas">Tareas</a>
            </li>
          </ul>
          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text me-3">Buen dia, {user.username}</span>
                <button className="btn btn-outline-secondary" onClick={logout}>Salir</button>
              </>
            ) : (
              <a className="btn btn-primary" href="/auth/login">Iniciar Sesión</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

