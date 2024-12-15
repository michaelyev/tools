"use client";

import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createProduct } from "@utils/data_fetch/createProduct";

import Card from "@component/Card";
import Image from "@component/Image";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import DropZone from "@component/DropZone";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";

// Styled Component
const UploadImageBox = styled("div")(({ theme }) => ({
  width: 70,
  height: 70,
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  marginRight: ".5rem",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.primary[100],
}));

// Types
type Option = { label: string; value: string };
type User = {
  id: string;
  email: string;
  name: string;
  image?: string;
};

interface Props {
  loggedInUser: User; // User data is passed as a prop
  categoryOptions: Option[];
}

// Validation Schema
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  category: yup.array().min(1, "At least one category is required"),
  description: yup.string().required("Description is required"),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .required("Stock is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Regular price is required"),
  sale_price: yup
    .number()
    .typeError("Sale price must be a number")
    .required("Sale price is required"),
  tags: yup.string().required("Tags are required"),
});

export default function ProductUpdateForm({
  loggedInUser,
  categoryOptions,
}: Props) {
  console.log(loggedInUser);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      tags: "",
      stock: "",
      sale_price: "",
      description: "",
      category: [],
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const shop = {
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
  
      // Преобразуем `category` в массив значений
      const categoryValues = data.category.map((cat: Option) => cat.value);
  
      const productData = {
        ...data,
        id: crypto.randomUUID(),
        slug: data.name.toLowerCase().replace(/\s+/g, "-"),
        shop,
        category: categoryValues, // Передаем только значения категорий
      };
  
      console.log("Product Data:", productData);
  
      const response = await fetch("http://localhost:4100/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
  
      if (response.ok) {
        alert("Product created successfully!");
        reset()
      } else {
        alert("Failed to create product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("An error occurred while creating the product.");
    }
  };
  
  

  return (
    <Card p="30px" borderRadius={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullwidth
              label="Name"
              placeholder="Name"
              {...register("name")}
              errorText={errors.name?.message}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  isMulti
                  label="Category"
                  options={categoryOptions}
                  placeholder="Select category"
                  {...field}
                  errorText={errors.category?.message}
                  onChange={(value) => setValue("category", value)}
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
