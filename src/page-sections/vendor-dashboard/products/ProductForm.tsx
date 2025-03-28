"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

import Card from "@component/Card";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import DropZone from "@component/DropZone";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import Typography from "@component/Typography";
import { getUserLocation } from "@utils/location_fetch/location_fetch";

// ✅ Валидация
const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().typeError("Price must be a number").required("Regular price is required"),
  tags: yup.string(),
  rent: yup.boolean().notRequired(),
  daily_price: yup.number().when("rent", {
    is: true,
    then: (schema) => schema.required("Daily price is required"),
  }),
  weekly_price: yup.number().when("rent", {
    is: true,
    then: (schema) => schema.required("Weekly price is required"),
  }),
  monthly_price: yup.number().when("rent", {
    is: true,
    then: (schema) => schema.required("Monthly price is required"),
  }),
});

export default function ProductUpdateForm({ loggedInUser, categoryOptions }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      price: 0,
      tags: "",
      stock: "",
      sale_price: "",
      description: "",
      category: "",
      rent: false,
      daily_price: 0,
      weekly_price: 0,
      monthly_price: 0,
    },
    resolver: yupResolver(validationSchema),
  });

  const [location, setLocation] = useState(null);
  const rentSelected = watch("rent");

  useEffect(() => {
    getUserLocation().then(setLocation);
  }, []);

  const onSubmit = async (data) => {
    try {
      if (!location) {
        alert("Location not available. Please allow location access.");
        return;
      }

      // 👇 Фоллбек логика создания shop, если его нет в loggedInUser
      const shop = loggedInUser?.shop || {
        id: crypto.randomUUID(),
        slug: loggedInUser?.name?.toLowerCase().replace(/\s+/g, "-") || "unknown-shop",
        user: {
          id: crypto.randomUUID(),
          email: loggedInUser?.email || "unknown-email",
          avatar: loggedInUser?.image || "/default-avatar.png",
          name: {
            firstName: loggedInUser?.name?.split(" ")[0] || "First",
            lastName: loggedInUser?.name?.split(" ")[1] || "Last",
          },
        },
        email: loggedInUser?.email || "unknown-email",
        name: loggedInUser?.name || "Unknown Shop",
        phone: "123-456-7890",
        address: "Default Address",
        verified: false,
        coverPicture: "/default-cover.png",
        profilePicture: "/default-profile.png",
        socialLinks: {
          facebook: null,
          youtube: null,
          twitter: null,
          instagram: null,
        },
      };

      const rentFields = data.rent
        ? {
            daily_price: Number(data.daily_price),
            weekly_price: Number(data.weekly_price),
            monthly_price: Number(data.monthly_price),
          }
        : {};

      const productData = {
        ...data,
        ...rentFields,
        id: crypto.randomUUID(),
        slug: data.title.toLowerCase().replace(/\s+/g, "-"),
        price: Number(data.price),
        sale_price: Number(data.sale_price),
        stock: Number(data.stock),
        category: data.category.trim(),
        location: {
          type: "Point",
          coordinates: [location.longitude, location.latitude],
        },
        shop,
      };

      const response = await fetch("http://localhost:4100/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert("✅ Product created successfully!");
        reset();
      } else {
        const err = await response.json();
        console.error("❌ Backend error:", err);
        alert("❌ Failed to create product.");
      }
    } catch (error) {
      console.error("❗ Unexpected error:", error);
      alert("❗ An unexpected error occurred.");
    }
  };

  return (
    <Card p="30px" borderRadius={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Title" {...register("title")} errorText={errors.title?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  label="Category"
                  options={categoryOptions}
                  value={categoryOptions.find((o) => o.value === field.value) || ""}
                  onChange={(val) => setValue("category", val?.value || "")}
                  errorText={errors.category?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <DropZone onChange={(files) => console.log("Files uploaded:", files)} />
          </Grid>

          <Grid item xs={12}>
            <TextArea fullwidth label="Description" {...register("description")} errorText={errors.description?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Stock" {...register("stock")} errorText={errors.stock?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Tags" {...register("tags")} errorText={errors.tags?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Price" {...register("price")} errorText={errors.price?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Sale Price" {...register("sale_price")} errorText={errors.sale_price?.message} />
          </Grid>

          <Grid item xs={12}>
            <label>
              <Controller
                name="rent"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    {...field}
                    checked={field.value}
                    onChange={(e) => setValue("rent", e.target.checked)}
                  />
                )}
              />
              Rent this item
            </label>
          </Grid>
        </Grid>

        {rentSelected && (
          <Grid container spacing={6}>
            <Grid item sm={4} xs={12}>
              <TextField fullwidth label="Daily Price" {...register("daily_price")} errorText={errors.daily_price?.message} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField fullwidth label="Weekly Price" {...register("weekly_price")} errorText={errors.weekly_price?.message} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField fullwidth label="Monthly Price" {...register("monthly_price")} errorText={errors.monthly_price?.message} />
            </Grid>
          </Grid>
        )}

        <Grid item xs={12}>
          {location?.city && (
            <Typography fontSize="0.875rem" mb="6px">
              Location: {location.city} ({location.zip})
            </Typography>
          )}
        </Grid>

        <Button mt="25px" variant="contained" color="primary" type="submit">
          Save product
        </Button>
      </form>
    </Card>
  );
}
