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
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);

    setValue("categories", updatedValues, { shouldValidate: true });
  };

  return (
    <CheckboxGroupWrapper>
      <fieldset name="categories">
        <legend>Please choose at least one</legend>
        {categories.map((cat) => (
          <CheckboxLabel key={cat._id}>
            <input
              type="checkbox"
              value={cat.name}
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
