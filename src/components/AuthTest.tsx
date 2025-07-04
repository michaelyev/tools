"use client";

import { useAuth } from "../hooks/useAuth";
import { Button } from "@component/buttons";
import { H5, H6 } from "@component/Typography";
import Box from "./Box";
import Card from "@component/Card";

export default function AuthTest() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  const handleTestLogin = async () => {
    const result = await login("test@example.com", "password123");
    console.log("Login result:", result);
  };

  if (isLoading) {
    return (
      <Card p="2rem" textAlign="center">
        <H5>Loading authentication...</H5>
      </Card>
    );
  }

  return (
    <Card p="2rem">
      <H5 mb="1rem">Authentication Status</H5>
      
      <Box mb="1rem">
        <H6>Status: {isAuthenticated ? "Authenticated" : "Not authenticated"}</H6>
      </Box>

      {isAuthenticated && user ? (
        <Box mb="1rem">
          <H6>User Info:</H6>
          <p>Name: {user.name.firstName} {user.name.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Business: {user.isBusiness ? "Yes" : "No"}</p>
          {user.isBusiness && user.business && (
            <Box mt="0.5rem">
              <p>Business Name: {user.business.name}</p>
              <p>Phone: {user.business.phone}</p>
              <p>Services: {user.business.providesServices ? "Yes" : "No"}</p>
            </Box>
          )}
        </Box>
      ) : (
        <Box mb="1rem">
          <H6>Not logged in</H6>
          <p>Please register or login to see user information</p>
        </Box>
      )}

      <Box display="flex" gap="1rem">
        {!isAuthenticated ? (
          <Button variant="contained" onClick={handleTestLogin}>
            Test Login
          </Button>
        ) : (
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        )}
      </Box>
    </Card>
  );
} 