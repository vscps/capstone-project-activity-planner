import { useForm } from "react-hook-form";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useEffect } from "react";

import FormField from "../FormField/FormField";
import InputField from "../FormControls/InputField/InputField";
import TextareaField from "../FormControls/TextareaField/TextareaField";
import CategoryCheckboxGroup from "../FormControls/CheckboxGroup/CheckboxGroup";
import Button from "../Button/Button";
import {
  FormWrapper,
  PlaceholderImage,
  SubmitButtonRow,
  MessageRow,
} from "./ActivityForm.styles";

export default function ActivityForm({
  onSubmit,
  isLoading = false,
  successMessage = null,
  isEditingState,
  isPreviewMode,
  setIsPreviewMode,
  activityData,
  categoriesData,
  selectedCategoryIds,
  submitButtonText,
}) {
  const [previewData, setPreviewData, { removeItem }] = useLocalStorageState(
    "previewActivityData",
    { defaultValue: {} }
  );

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: isEditingState ? activityData?.title || "" : "",
      description: isEditingState ? activityData?.description || "" : "",
      area: isEditingState ? activityData?.area || "" : "",
      country: isEditingState ? activityData?.country || "" : "",
      categories: isEditingState ? selectedCategoryIds || [] : [],
    },
  });

  useEffect(() => {
    if (!isPreviewMode && activityData) {
      reset({
        title: activityData.title || "",
        description: activityData.description || "",
        area: activityData.area || "",
        country: activityData.country || "",
        categories: selectedCategoryIds || [],
      });
    }
  }, [isPreviewMode, activityData, selectedCategoryIds, reset]);

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    removeItem();
  };

  const handlePreview = () => {
    const formData = getValues();
    setPreviewData({
      ...formData,
      ...(activityData?._id ? { _id: activityData._id } : {}),
      ...(activityData?.imageUrl ? { imageUrl: activityData.imageUrl } : {}),
    });
    setIsPreviewMode(true);
  };

  const handleCancel = () => {
    removeItem();
    router.push(`/activity/${activityData._id}`);
  };

  const buttonPurpose = isEditingState ? "confirm" : "submit";

  return (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <PlaceholderImage
        src={
          isEditingState && activityData?.imageUrl
            ? activityData.imageUrl
            : "/assets/images/placeholder.png"
        }
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
          selectedCategoryIds={selectedCategoryIds}
        />
      </FormField>
      <SubmitButtonRow>
        <Button
          type="submit"
          purpose={buttonPurpose}
          isLoading={isLoading}
          text={submitButtonText}
        />
        <Button
          type="button"
          purpose="preview"
          onClick={handlePreview}
          text="Preview"
        />

        {isEditingState && (
          <Button
            type="button"
            purpose="cancel"
            text="Cancel"
            as="a"
            href={`../${activityData._id}`}
          />
        )}
      </SubmitButtonRow>
      {!isEditingState && successMessage && (
        <MessageRow>{successMessage}</MessageRow>
      )}
    </FormWrapper>
  );
}
