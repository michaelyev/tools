"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

import Card from "@component/Card";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import Typography from "@component/Typography";
import { getUserLocation, getCoordsFromZip } from "@utils/location_fetch/location_fetch";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().typeError("Price must be a number").required("Price is required"),
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
  zip: yup.string().when("useAutoLocation", {
    is: false,
    then: yup.string().required("ZIP Code is required"),
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
      description: "",
      category: "",
      rent: false,
      daily_price: 0,
      weekly_price: 0,
      monthly_price: 0,
      useAutoLocation: true,
      zip: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const [location, setLocation] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [widgetReady, setWidgetReady] = useState(false);

  const rentSelected = watch("rent");
  const titleSlug = watch("title")?.trim().toLowerCase().replace(/\s+/g, "-");
  const useAutoLocation = watch("useAutoLocation");

  useEffect(() => {
    if (useAutoLocation) {
      getUserLocation().then((loc) => {
        if (loc) {
          setLocation({ latitude: loc.latitude, longitude: loc.longitude });
          setValue("zip", loc.zip); // display only
        } else {
          alert("Could not detect your location. Please enter ZIP manually.");
          setValue("useAutoLocation", false);
        }
      });
    }
  }, [useAutoLocation]);

  const handleZipInput = async (zip) => {
    const coords = await getCoordsFromZip(zip);
    if (!coords) {
      alert("Invalid ZIP Code. Try again.");
      return;
    }
    setLocation({ latitude: coords.lat, longitude: coords.lng });
  };

  const removeImage = (index) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    if (!location) return alert("Location not available.");
    if (imageUrls.length === 0) return alert("Please upload at least one image.");

    const rentFields = data.rent
      ? {
          daily_price: Number(data.daily_price),
          weekly_price: Number(data.weekly_price),
          monthly_price: Number(data.monthly_price),
        }
      : {};

    const shop = loggedInUser?.shop || {};

    const productData = {
      ...data,
      ...rentFields,
      id: crypto.randomUUID(),
      slug: titleSlug,
      price: Number(data.price),
      sale_price: Number(data.sale_price),
      stock: Number(data.stock),
      category: data.category.trim(),
      location: {
        type: "Point",
        coordinates: [location.longitude, location.latitude],
      },
      shop,
      thumbnail: imageUrls[0],
      images: imageUrls,
    };

    const response = await fetch("http://localhost:4100/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      alert("✅ Product created successfully!");
      reset();
      setImageUrls([]);
    } else {
      const err = await response.json();
      alert("❌ Failed: " + err?.message);
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
            <label>
              <input
                type="checkbox"
                {...register("useAutoLocation")}
                checked={useAutoLocation}
                onChange={() => setValue("useAutoLocation", !useAutoLocation)}
              />{" "}
              🛰 Use Automatic Location
            </label>
          </Grid>

          {!useAutoLocation && (
            <Grid item xs={12}>
              <TextField
                fullwidth
                label="📮 ZIP Code"
                {...register("zip")}
                onBlur={(e) => handleZipInput(e.target.value)}
                errorText={errors.zip?.message}
              />
            </Grid>
          )}

          {location?.latitude && (
            <Grid item xs={12}>
              <Typography fontSize="0.875rem" mb="6px">
                📍 Coordinates: {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary-signature"
              options={{
                folder: `products/name/${loggedInUser.email}/${titleSlug}`,
                multiple: true,
                maxFiles: 10,
                sources: ["local"],
              }}
              onUploadAdded={() => setWidgetReady(true)}
              onSuccess={(result) => {
                const secureUrl = (result.info as CloudinaryUploadWidgetInfo).secure_url;
                if (secureUrl) {
                  setImageUrls((prev) => [...prev, secureUrl]);
                }
              }}
            >
              {({ open }) => (
                <Button
                  type="button"
                  onClick={() => {
                    if (titleSlug === "temp") {
                      alert("Please enter a valid title before uploading.");
                      return;
                    }
                    open();
                  }}
                >
                  Upload Image
                </Button>
              )}
            </CldUploadWidget>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
              {imageUrls.map((url, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <img src={url} width={120} style={{ borderRadius: 8 }} alt={`uploaded-${idx}`} />
                  <Button
                    style={{ position: "absolute", top: 0, right: 0 }}
                    size="sm"
                    variant="outlined"
                    onClick={() => removeImage(idx)}
                  >
                    ✕
                  </Button>
                </div>
              ))}
            </div>
          </Grid>

          <Grid item xs={12}>
            <TextArea fullwidth label="Description" {...register("description")} errorText={errors.description?.message} />
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
              /> Rent this item
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

        <Button mt="25px" variant="contained" color="primary" type="submit">
          Save product
        </Button>
      </form>
    </Card>
  );
}
