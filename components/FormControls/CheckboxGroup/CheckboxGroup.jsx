import { useEffect, useState } from "react";
import useFetchAllPages from "@/hooks/useFetchAllPages";
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
}) {
  const [categories, setCategories] = useState([]);

  const { data: categoriesData } = useFetchAllPages("/api/categories");

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

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
        {categories.map((cat) => (
          <CheckboxLabel key={cat.id}>
            <input
              type="checkbox"
              value={cat.id}
              onChange={handleCheckboxChange}
              {...register("categories", {
                validate: (value) =>
                  value.length > 0 || "Please select at least one category",
              })}
            />
            {cat.name}
          </CheckboxLabel>
        ))}
      </fieldset>
      {errors.categories && <ErrorText>{errors.categories.message}</ErrorText>}
    </CheckboxGroupWrapper>
  );
}
