"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import TextField from "@component/text-field";
import { Button, IconButton } from "@component/buttons";
import { H3, H5, H6, SemiSpan } from "@component/Typography";
import Divide from "./components/Divide";
import SocialLinks from "./components/SocialLinks";
import { StyledRoot } from "./styles";

export default function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmit = async (data: any) => {
    console.log("Form submitted with data:", data); // Debugging

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData); // Debugging

      if (!response.ok) {
        alert(responseData.error || "Failed to register. Try again.");
        return;
      }

      alert("Registration successful! You can now log in.");
      window.location.href = "/login"; // Redirect to login
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <StyledRoot mx="auto" my="2rem" boxShadow="large" borderRadius={8}>
      <form className="content" onSubmit={handleSubmit(onSubmit)}>
        <H3 textAlign="center" mb="0.5rem">
          Create Your Account
        </H3>

        <H5
          fontWeight="600"
          fontSize="12px"
          color="gray.800"
          textAlign="center"
          mb="2.25rem"
        >
          Please fill all forms to continue
        </H5>

        {/* Full Name */}
        <TextField
          fullwidth
          mb="0.75rem"
          label="Full Name"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
          errorText={errors.name?.message}
        />

        {/* Email */}
        <TextField
          fullwidth
          mb="0.75rem"
          label="Email"
          type="email"
          placeholder="example@mail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          errorText={errors.email?.message}
        />

        {/* Password */}
        <TextField
          fullwidth
          mb="0.75rem"
          label="Password"
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          {...register("password", { required: "Password is required" })}
          errorText={errors.password?.message}
          endAdornment={
            <IconButton
              p="0.25rem"
              mr="0.25rem"
              type="button"
              onClick={togglePasswordVisibility}
            >
              <Icon variant="small" defaultcolor="currentColor">
                {passwordVisibility ? "eye-alt" : "eye"}
              </Icon>
            </IconButton>
          }
        />

        {/* Confirm Password */}
        <TextField
          fullwidth
          mb="1rem"
          label="Confirm Password"
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          errorText={errors.confirmPassword?.message}
          endAdornment={
            <IconButton
              p="0.25rem"
              size="small"
              mr="0.25rem"
              type="button"
              onClick={togglePasswordVisibility}
            >
              <Icon variant="small" defaultcolor="currentColor">
                {passwordVisibility ? "eye-alt" : "eye"}
              </Icon>
            </IconButton>
          }
        />

        {/* Submit Button */}
        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
        >
          Create Account
        </Button>

        <Divide />

        <SocialLinks />
      </form>

      <FlexBox justifyContent="center" bg="gray.200" py="19px">
        <SemiSpan>Already have an account?</SemiSpan>
        <Link href="/login">
          <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
            Log in
          </H6>
        </Link>
      </FlexBox>
    </StyledRoot>
  );
}
