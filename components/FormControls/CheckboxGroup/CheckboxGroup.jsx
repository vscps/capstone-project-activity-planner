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
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories", error);
      }
    }

    fetchCategories();
  }, []);

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
              value={cat.activityType}
              onChange={handleCheckboxChange}
              {...register("categories", {
                validate: (value) =>
                  value.length > 0 || "Please select at least one category",
              })}
            />
            {cat.activityType}
          </CheckboxLabel>
        ))}
      </fieldset>
      {errors.categories && <ErrorText>{errors.categories.message}</ErrorText>}
    </CheckboxGroupWrapper>
  );
}
