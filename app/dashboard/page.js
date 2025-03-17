// app/dashboard/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si no hay usuario, redirige al login
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user.username}.</p>
    </div>
  );
}
