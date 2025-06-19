import {
  CheckboxGroupWrapper,
  CheckboxLabel,
  CheckboxInput,
} from "./CheckboxGroup.styles";

export default function CategoryCheckboxGroup({
  register,
  setValue,
  getValues,
  categoriesData,
}) {
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
          categoriesData.map((cat) => {
            const selected = getValues("categories") || [];
            const isChecked = selected.includes(cat.id);
            return (
              <CheckboxLabel key={cat.id}>
                <CheckboxInput
                  type="checkbox"
                  value={cat.id}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                {cat.name}
                <input
                  type="hidden"
                  {...register("categories", {
                    validate: (value) =>
                      value.length > 0 || "Please select at least one category",
                  })}
                />
              </CheckboxLabel>
            );
          })}
      </fieldset>
    </CheckboxGroupWrapper>
  );
}
