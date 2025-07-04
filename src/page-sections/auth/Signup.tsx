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
  businessName: yup.string().when('isBusiness', {
    is: true,
    then: schema => schema.required("Business name is required for business accounts"),
    otherwise: schema => schema.notRequired().nullable().default("")
  }),
  phone: yup.string().when('isBusiness', {
    is: true,
    then: schema => schema.required("Phone number is required for business accounts"),
    otherwise: schema => schema.notRequired().nullable().default("")
  }),
  website: yup.string().url("Invalid website URL").notRequired().nullable().default("") ,
  providesServices: yup.boolean().default(false),
  serviceCategories: yup.array().of(yup.string()).when(['isBusiness', 'providesServices'], {
    is: (isBusiness, providesServices) => isBusiness && providesServices,
    then: schema => schema.min(1, "Please select at least one service category"),
    otherwise: schema => schema.notRequired().default([])
  }),
  businessDescription: yup.string().when('isBusiness', {
    is: true,
    then: schema => schema.min(10, "Business description must be at least 10 characters").notRequired().nullable().default("") ,
    otherwise: schema => schema.notRequired().nullable().default("")
  }),
  socialMedia: yup.object({
    instagram: yup.string().notRequired().nullable().default("") ,
    googleMaps: yup.string().notRequired().nullable().default("") ,
    yelp: yup.string().notRequired().nullable().default("") ,
    facebook: yup.string().notRequired().nullable().default("") ,
  }).notRequired().default({
    instagram: "",
    googleMaps: "",
    yelp: "",
    facebook: "",
  }),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isBusiness: false,
  businessName: "",
  phone: "",
  website: "",
  providesServices: false,
  serviceCategories: [],
  businessDescription: "",
  socialMedia: {
    instagram: "",
    googleMaps: "",
    yelp: "",
    facebook: "",
  },
};

export default function Signup() {
  const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "all"
  });

  // Диагностика
  console.log('form values', watch && watch());
  console.log('form errors', errors);
  console.log('form isValid', isValid);

  const isBusiness = watch("isBusiness");
  const providesServices = watch("providesServices");

  const onSubmit = async (data) => {
    const { confirmPassword, ...toSend } = data;
    // Если не бизнес, удаляем бизнес-поля
    if (!toSend.isBusiness) {
      delete toSend.businessName;
      delete toSend.phone;
      delete toSend.website;
      delete toSend.providesServices;
      delete toSend.serviceCategories;
      delete toSend.businessDescription;
      delete toSend.socialMedia;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toSend),
      });
      if (!response.ok) {
        const error = await response.json();
        alert("Ошибка: " + (error.error || "Не удалось создать пользователя"));
        return;
      }
      alert("Пользователь успешно зарегистрирован!");
    } catch (err) {
      alert("Ошибка сети или сервера");
    }
  };

  return (
    <StyledRoot mx="auto" my="2rem" boxShadow="large" borderRadius={8}>
      <form className="content" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullwidth label="First Name" errorText={errors.firstName?.message} />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullwidth label="Last Name" errorText={errors.lastName?.message} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullwidth label="Email" errorText={errors.email?.message} />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField {...field} type="password" fullwidth label="Password" errorText={errors.password?.message} />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField {...field} type="password" fullwidth label="Confirm Password" errorText={errors.confirmPassword?.message} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="isBusiness"
              control={control}
              render={({ field }) => (
                <CheckBox
                  checked={field.value}
                  onChange={e => field.onChange(e.target.checked)}
                  label="Registering as a business?"
                />
              )}
            />
          </Grid>
          {isBusiness && (
            <>
              <Grid item xs={12}>
                <Controller
                  name="businessName"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Business Name" errorText={errors.businessName?.message} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Business Phone" errorText={errors.phone?.message} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="website"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Business Website" errorText={errors.website?.message} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="providesServices"
                  control={control}
                  render={({ field }) => (
                    <CheckBox
                      checked={field.value}
                      onChange={e => field.onChange(e.target.checked)}
                      label="Does your business provide services?"
                    />
                  )}
                />
              </Grid>
              {providesServices && (
                <Grid item xs={12}>
                  <Controller
                    name="serviceCategories"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        fullwidth
                        label="Service Categories"
                        placeholder="Select categories"
                        multiple
                        options={[
                          { label: "Plumbing", value: "plumbing" },
                          { label: "Electrical", value: "electrical" },
                          { label: "Cleaning", value: "cleaning" },
                          { label: "Landscaping", value: "landscaping" },
                          { label: "Other", value: "other" },
                        ]}
                        errorText={errors.serviceCategories?.message}
                        onChange={val => field.onChange(val)}
                        value={field.value}
                      />
                    )}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Controller
                  name="businessDescription"
                  control={control}
                  render={({ field }) => (
                    <TextArea {...field} fullwidth label="Business Description" errorText={errors.businessDescription?.message} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <h4>Social Media Links</h4>
              </Grid>
              <Grid item md={6} xs={12}>
                <Controller
                  name="socialMedia.instagram"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Instagram" errorText={errors.socialMedia?.instagram?.message} />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Controller
                  name="socialMedia.googleMaps"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Google Maps" errorText={errors.socialMedia?.googleMaps?.message} />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Controller
                  name="socialMedia.yelp"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Yelp" errorText={errors.socialMedia?.yelp?.message} />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Controller
                  name="socialMedia.facebook"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullwidth label="Facebook" errorText={errors.socialMedia?.facebook?.message} />
                  )}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Button
          mt="2rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
          size="large"
          disabled={!isValid}
        >
          Create Account
        </Button>
      </form>
    </StyledRoot>
  );
}
