import { useEffect, useState } from "react";
import {
  CheckboxGroupWrapper,
  CheckboxLabel,
  ErrorText,
} from "./CheckboxGroup.styles";

export default function CategoryCheckboxGroup({
  register,
  setValue,
  getValues,
  errors,
  categoriesData,
  isEditingState,
  selectedCategoryIds,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  // Prefill selected categories only in edit mode
  useEffect(() => {
    if (isEditingState && selectedCategoryIds.length > 0) {
      setValue("categories", selectedCategoryIds, { shouldValidate: true });
    }
  }, [isEditingState, selectedCategoryIds, setValue]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const currentValues = getValues("categories") || [];

    const updatedValues = checked
      ? [...currentValues, parseInt(value, 10)]
      : currentValues.filter((v) => v !== parseInt(value, 10));

    setValue("categories", updatedValues, { shouldValidate: true });
  };

  return (
    <CheckboxGroupWrapper>
      <fieldset name="categories">
        <legend>Please choose at least one</legend>
        {Array.isArray(categoriesData) &&
          categories.map((cat) => {
            const selected = getValues("categories") || [];
            const isChecked = selected.includes(cat.id);
            return (
              <CheckboxLabel key={cat.id}>
                <input
                  type="checkbox"
                  value={cat.id}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  {...register("categories", {
                    validate: (value) =>
                      value.length > 0 || "Please select at least one category",
                  })}
                />
                {cat.name}
              </CheckboxLabel>
            );
          })}
      </fieldset>
      {errors.categories && <ErrorText>{errors.categories.message}</ErrorText>}
    </CheckboxGroupWrapper>
  );
}
