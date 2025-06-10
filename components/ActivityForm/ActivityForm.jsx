import { useForm } from "react-hook-form";

import FormField from "../FormField/FormField";
import InputField from "../FormControls/InputField/InputField";
import TextareaField from "../FormControls/TextareaField/TextareaField";
import CategoryCheckboxGroup from "../FormControls/CheckboxGroup/CheckboxGroup";
import {
  FormWrapper,
  PlaceholderImage,
  SubmitButton,
} from "./ActivityForm.styles";
import Button from "../Button/Button";

export default function ActivityForm({
  onSubmit,
  isLoading = false,
  submitButtonText = "Submit",
  successMessage = null,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
  };

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
        />
      </FormField>

      <SubmitButton
        type="submit"
        purpose={"submit"}
        isLoading={isLoading}
        text={"Create activity"}
      />

      {successMessage && <p>{successMessage}</p>}
    </FormWrapper>
  );
}
