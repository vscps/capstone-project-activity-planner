import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FormField from "../FormField/FormField";
import InputField from "../FormControls/InputField/InputField";
import TextareaField from "../FormControls/TextareaField/TextareaField";
import CategoryCheckboxGroup from "../FormControls/CheckboxGroup/CheckboxGroup";
import {
  CancelButton,
  FormWrapper,
  PlaceholderImage,
  SubmitButton,
} from "./ActivityForm.styles";

export default function ActivityForm({
  onSubmit,
  isLoading = false,
  successMessage = null,
  isEditingState,
  activityData,
  categoriesData,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditingState && activityData) {
      setValue("title", activityData.title || "");
      setValue("description", activityData.description || "");
      setValue("area", activityData.area || "");
      setValue("country", activityData.country || "");
      setValue("categories", activityData.categories || []);
    }
  }, [isEditingState, activityData, setValue]);

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
  };
  const router = useRouter();
  const buttonText = isEditingState ? "Update activity" : "Create activity";
  const buttonPurpose = isEditingState ? "confirm" : "submit";
  return (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <PlaceholderImage
        src="/assets/images/placeholder.png"
        width={500}
        height={300}
        alt="Activity Picture"
      />

      <FormField label="Title" error={errors.title?.message}>
        <InputField {...register("title", { required: "Title is required" })} />
      </FormField>

      <FormField
        label="Description"
        htmlFor="description"
        error={errors.description?.message}
      >
        <TextareaField
          id="description"
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
          categoriesData={categoriesData}
          isEditingState={isEditingState}
          selectedCategoryIds={activityData?.categories || []}
        />
      </FormField>

      <SubmitButton
        type="submit"
        purpose={buttonPurpose}
        isLoading={isLoading}
        text={buttonText}
      />
      {isEditingState ? (
        <CancelButton
          purpose={"cancel"}
          text={"Cancel editing"}
          onClick={() => router.push(`../${activityData._id}`)}
        ></CancelButton>
      ) : (
        ""
      )}

      {successMessage && <p>{successMessage}</p>}
    </FormWrapper>
  );
}
