"use client";

import styled from "styled-components";
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
import { getUserLocation } from "@utils/location_fetch/location_fetch";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  stock: yup.number().typeError("Stock must be a number").required("Stock is required"),
  price: yup.number().typeError("Price must be a number").required("Regular price is required"),
  sale_price: yup.number().typeError("Sale price must be a number").required("Sale price is required"),
  tags: yup.string().required("Tags are required"),
});

export default function ProductUpdateForm({ loggedInUser, categoryOptions }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      tags: "",
      stock: "",
      sale_price: "",
      description: "",
      category: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const [location, setLocation] = useState(null);

  const onSubmit = async (data) => {
    try {
      const productData = {
        ...data,
        id: crypto.randomUUID(),
        slug: data.title.toLowerCase().replace(/\s+/g, "-"),
        category: data.category.trim(), // Гарантируем, что это строка
        location: location ? { type: "Point", coordinates: [location.longitude, location.latitude] } : null,
      };

      const response = await fetch("http://localhost:4100/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert("Product created successfully!");
        reset();
      } else {
        alert("Failed to create product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("An error occurred while creating the product.");
    }
  };

  useEffect(() => {
    getUserLocation().then(setLocation);
  }, []);

  return (
    <Card p="30px" borderRadius={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullwidth
              label="Title"
              placeholder="Title"
              {...register("title")}
              errorText={errors.title?.message}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  label="Category"
                  options={categoryOptions}
                  placeholder="Select category"
                  value={categoryOptions.find((option) => option.value === field.value) || ""}
                  onChange={(selectedOption) => setValue("category", selectedOption?.value || "")}
                  errorText={errors.category?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <DropZone onChange={(files) => console.log(files)} />
          </Grid>

          <Grid item xs={12}>
            <TextArea
              rows={6}
              fullwidth
              label="Description"
              placeholder="Description"
              {...register("description")}
              errorText={errors.description?.message}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullwidth
              label="Stock"
              placeholder="Stock"
              {...register("stock")}
              errorText={errors.stock?.message}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullwidth
              label="Tags"
              placeholder="Tags"
              {...register("tags")}
              errorText={errors.tags?.message}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullwidth
              type="number"
              label="Regular Price"
              placeholder="Regular Price"
              {...register("price")}
              errorText={errors.price?.message}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullwidth
              type="number"
              label="Sale Price"
              placeholder="Sale Price"
              {...register("sale_price")}
              errorText={errors.sale_price?.message}
            />
          </Grid>
        </Grid>

        <Button mt="25px" variant="contained" color="primary" type="submit">
          Save product
        </Button>
      </form>
    </Card>
  );
}
