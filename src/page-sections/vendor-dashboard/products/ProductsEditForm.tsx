"use client";

import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@component/text-field";
import TextArea from "@component/textarea";
import Select from "@component/Select";
import { Button } from "@component/buttons";
import Grid from "@component/grid/Grid";
import Card from "@component/Card";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
  searchTags: yup.string(),
  rent: yup.boolean(),
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
  deliveryCost: yup.number(),
});

export default function ProductEditForm({ productData, categoryOptions }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      price: 0,
      searchTags: "",
      rent: false,
      daily_price: 0,
      weekly_price: 0,
      monthly_price: 0,
      deliveryCost: 0,
    },
  });

  const [imageUrls, setImageUrls] = useState([]);

  const rentSelected = watch("rent");

  useEffect(() => {
    if (productData) {
      reset({
        title: productData.title || "",
        category: productData.category || "",
        description: productData.description || "",
        price: productData.price || 0,
        searchTags: productData.tags || "",
        rent: productData.rent || false,
        daily_price: productData.daily_price || 0,
        weekly_price: productData.weekly_price || 0,
        monthly_price: productData.monthly_price || 0,
        deliveryCost: productData.deliveryCost || 0,
      });
      setImageUrls(productData.images || []);
    }
  }, [productData, reset]);

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      images: imageUrls,
      thumbnail: imageUrls[0] || "",
    };

    const response = await fetch(`http://localhost:4100/products/by-id/${productData._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("✅ Product updated successfully!");
    } else {
      const err = await response.json();
      alert("❌ Update failed: " + err?.message);
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
                  onChange={(val) => field.onChange(val?.value || "")}
                  errorText={errors.category?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextArea fullwidth label="Description" {...register("description")} errorText={errors.description?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Tags" {...register("searchTags")} errorText={errors.searchTags?.message} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Price" {...register("price")} errorText={errors.price?.message} />
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
              />{" "}
              Rent this item
            </label>
          </Grid>

          {rentSelected && (
            <>
              <Grid item sm={4} xs={12}>
                <TextField fullwidth label="Daily Price" {...register("daily_price")} errorText={errors.daily_price?.message} />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField fullwidth label="Weekly Price" {...register("weekly_price")} errorText={errors.weekly_price?.message} />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField fullwidth label="Monthly Price" {...register("monthly_price")} errorText={errors.monthly_price?.message} />
              </Grid>
            </>
          )}

          <Grid item sm={6} xs={12}>
            <TextField fullwidth label="Delivery Cost" {...register("deliveryCost")} />
          </Grid>
        </Grid>

        <Button mt="25px" variant="contained" color="primary" type="submit">
          Update Product
        </Button>
      </form>
    </Card>
  );
}
