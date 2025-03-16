"use client"; //aca indicamos que es un componente client, porque se usara internamente

import 'bootstrap/dist/css/bootstrap.min.css'; // importamos bootstrap
import "./styles/globals.css"; //importamos estilos globales
import Navbar from "@/components/Navbar"; //componente de navegacion se creara en otro archivo
import Footer from "@/components/Footer"; //componente de footer se creara en otro archivo

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Sistema de Gestion de Proyectos con React/Next</title>
      </head>
      <body>
        <Navbar />
        <main className="container my-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
