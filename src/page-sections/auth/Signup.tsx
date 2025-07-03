"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import TextField from "@component/text-field";
import { Button, IconButton } from "@component/buttons";
import { H3, H5, H6, SemiSpan } from "@component/Typography";
import TextArea from "@component/textarea";
import CheckBox from "@component/CheckBox";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import Card from "@component/Card";
import Box from "@component/Box";
import Divide from "./components/Divide";
import SocialLinks from "./components/SocialLinks";
import { StyledRoot } from "./styles";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required("Please confirm your password"),
  isBusiness: yup.boolean(),
  businessName: yup.string().optional(),
  phone: yup.string().optional(),
  website: yup.string().url("Invalid website URL").optional(),
  providesServices: yup.boolean(),
  serviceCategories: yup.array().optional(),
  businessDescription: yup.string().optional()
});

export default function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      isBusiness: false,
      providesServices: false,
      serviceCategories: [],
      socialMedia: {
        instagram: "",
        googleMaps: "",
        yelp: "",
        facebook: ""
      }
    },
    mode: "onChange"
  });

  const isBusiness = watch("isBusiness");
  const providesServices = watch("providesServices");

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const categoryOptions = [
    { label: "Construction Tools", value: "construction-tools" },
    { label: "Garden Equipment", value: "garden-equipment" },
    { label: "Cleaning Supplies", value: "cleaning-supplies" },
    { label: "Electrical Tools", value: "electrical-tools" },
    { label: "Plumbing Tools", value: "plumbing-tools" },
    { label: "Automotive Tools", value: "automotive-tools" }
  ];

  const handleCategoryChange = (selectedOptions) => {
    if (selectedOptions) {
      const values = Array.isArray(selectedOptions) 
        ? selectedOptions.map(opt => opt.value)
        : [selectedOptions.value];
      setValue("serviceCategories", values);
    } else {
      setValue("serviceCategories", []);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Подготавливаем данные для отправки
    const submitData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      isBusiness: data.isBusiness || false,
      businessName: data.businessName || "",
      phone: data.phone || "",
      website: data.website || "",
      socialMedia: data.socialMedia || {},
      providesServices: data.providesServices || false,
      serviceCategories: data.serviceCategories || [],
      businessDescription: data.businessDescription || ""
    };

    console.log("Form submitted with data:", submitData);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const responseData = await response.json();
      console.log("Response from server:", responseData);

      if (!response.ok) {
        alert(responseData.error || "Failed to register. Try again.");
        return;
      }

      alert("Registration successful! You can now log in.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
          Join our community of tool enthusiasts and businesses
        </H5>

        {/* Personal Information Section */}
        <Box mb="2rem">
          <H5 mb="1rem" color="primary.main">
            <Icon mr="0.5rem" size="20px">person</Icon>
            Personal Information
          </H5>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullwidth
                label="First Name"
                placeholder="John"
                {...register("firstName")}
                errorText={errors.firstName?.message}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullwidth
                label="Last Name"
                placeholder="Doe"
                {...register("lastName")}
                errorText={errors.lastName?.message}
              />
            </Grid>
          </Grid>

          <TextField
            fullwidth
            mt="1rem"
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            {...register("email")}
            errorText={errors.email?.message}
          />

          <Grid container spacing={2} mt="1rem">
            <Grid item sm={6} xs={12}>
              <TextField
                fullwidth
                label="Password"
                placeholder="*********"
                type={passwordVisibility ? "text" : "password"}
                {...register("password")}
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
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullwidth
                label="Confirm Password"
                placeholder="*********"
                type={confirmPasswordVisibility ? "text" : "password"}
                {...register("confirmPassword")}
                errorText={errors.confirmPassword?.message}
                endAdornment={
                  <IconButton
                    p="0.25rem"
                    mr="0.25rem"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <Icon variant="small" defaultcolor="currentColor">
                      {confirmPasswordVisibility ? "eye-alt" : "eye"}
                    </Icon>
                  </IconButton>
                }
              />
            </Grid>
          </Grid>
        </Box>

        {/* Business Toggle */}
        <Box mb="2rem">
          <Controller
            name="isBusiness"
            control={control}
            render={({ field }) => (
              <CheckBox
                label={
                  <FlexBox alignItems="center">
                    <Icon mr="0.5rem" size="18px">business</Icon>
                    I'm registering as a business
                  </FlexBox>
                }
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        </Box>

        {/* Business Information Section */}
        {isBusiness && (
          <Box mb="2rem">
            <H5 mb="1rem" color="primary.main">
              <Icon mr="0.5rem" size="20px">store</Icon>
              Business Information
            </H5>
            
            <TextField
              fullwidth
              mb="1rem"
              label="Business Name"
              placeholder="Your Business Name"
              {...register("businessName")}
              errorText={errors.businessName?.message}
            />

            <TextField
              fullwidth
              mb="1rem"
              label="Phone Number"
              placeholder="(555) 123-4567"
              {...register("phone")}
              errorText={errors.phone?.message}
            />

            <TextField
              fullwidth
              mb="1rem"
              label="Website (Optional)"
              placeholder="https://yourbusiness.com"
              {...register("website")}
              errorText={errors.website?.message}
            />

            {/* Social Media Links */}
            <H6 mb="0.75rem" color="gray.700">
              <Icon mr="0.5rem" size="16px">share</Icon>
              Social Media Links (Optional)
            </H6>
            <Grid container spacing={2} mb="1rem">
              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  label="Instagram"
                  placeholder="@yourbusiness"
                  {...register("socialMedia.instagram")}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  label="Google Maps"
                  placeholder="Google Maps URL"
                  {...register("socialMedia.googleMaps")}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  label="Yelp"
                  placeholder="Yelp Business URL"
                  {...register("socialMedia.yelp")}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  label="Facebook"
                  placeholder="Facebook Page URL"
                  {...register("socialMedia.facebook")}
                />
              </Grid>
            </Grid>

            {/* Services Toggle */}
            <Box mb="1rem">
              <Controller
                name="providesServices"
                control={control}
                render={({ field }) => (
                  <CheckBox
                    label={
                      <FlexBox alignItems="center">
                        <Icon mr="0.5rem" size="18px">build</Icon>
                        We provide services
                      </FlexBox>
                    }
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
            </Box>

            {/* Service Categories */}
            {providesServices && (
              <Box mb="1rem">
                <Select
                  label="Service Categories"
                  options={categoryOptions}
                  onChange={handleCategoryChange}
                  isMulti
                  placeholder="Select categories..."
                  errorText={errors.serviceCategories?.message}
                />
              </Box>
            )}

            {/* Business Description */}
            <TextArea
              fullwidth
              label="Business Description"
              placeholder="Tell us about your business, services, and what makes you unique..."
              rows={4}
              {...register("businessDescription")}
              errorText={errors.businessDescription?.message}
            />
          </Box>
        )}

        {/* Submit Button */}
        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
          size="large"
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? (
            <FlexBox alignItems="center">
              <Icon mr="0.5rem" size="18px" className="spin">refresh</Icon>
              Creating Account...
            </FlexBox>
          ) : (
            "Create Account"
          )}
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

      <style jsx>{`
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </StyledRoot>
  );
}
