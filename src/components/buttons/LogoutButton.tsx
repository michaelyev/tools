"use client";

import { signOut } from "next-auth/react";
import { Button } from "@component/buttons";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login", // Redirect user to login page after logout
    });
  };

  return (
    <Button variant="outlined" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
}
