// src/hooks/useAuth.js
import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  // Simulate a logged-in user (change to {} to simulate login)
  return { user, login: () => setUser({ name: "Fola" }), logout: () => setUser(null) };
}
