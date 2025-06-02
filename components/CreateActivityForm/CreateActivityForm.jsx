import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import FormField from "../FormField/FormField";
import InputField from "../FormControls/InputField";
import TextareaField from "../FormControls/TextareaField";
import CategoryCheckboxGroup from "../FormControls/CheckboxGroup";
import {
  FormContainer,
  FormBox,
  PlaceholderImage,
  SubmitButton,
} from "./CreateActivityForm.styles";

export default function CreateActivityForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: "/assets/images/placeholder.png",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const message = errorData?.message || "Failed to submit activity.";
        throw new Error(message);
      }

      const newActivity = await res.json();

      setSuccessMessage(
        `Activity "${newActivity.title}" created successfully!`
      );
      setTimeout(() => {
        router.push(`/activity/${newActivity._id}`);
      }, 2500);
    } catch (error) {
      console.error("Submission error", error);
      alert("Something went wrong");
    }
  };

  return (
    <FormContainer>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <PlaceholderImage
          src="/assets/images/placeholder.png"
          width={500}
          height={300}
          alt="Activity Picture"
        />

        <FormField label="Title" error={errors.title?.message}>
          <InputField
            {...register("title", { required: "Title is required" })}
          />
        </FormField>

        <FormField label="Description" error={errors.description?.message}>
          <TextareaField
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
          />
        </FormField>

        <FormField label="Area" htmlFor="area" error={errors.area?.message}>
          <InputField
            id="area"
            type="text"
            {...register("area", { required: "Area is required" })}
          />
        </FormField>

        <FormField
          label="Country"
          htmlFor="country"
          error={errors.country?.message}
        >
          <InputField
            id="country"
            type="text"
            {...register("country", { required: "Country is required" })}
          />
        </FormField>

        <FormField
          label="Categories"
          htmlFor="categories"
          error={errors.categories?.message}
        >
          <CategoryCheckboxGroup
            register={register}
            setValue={setValue}
            getValues={getValues}
            errors={errors}
          />
        </FormField>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit your Activity"}
        </SubmitButton>

        {successMessage && <p>{successMessage}</p>}
      </FormBox>
    </FormContainer>
  );
}
