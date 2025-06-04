import {
  FilterContainer,
  FilterHeader,
  FilterBody,
  FilterTag,
  FilterTagContainer,
  ActiveFilters,
  ResetLink,
  FilterSection,
} from "./ActivityFilter.styles";
import { LuFilter } from "react-icons/lu";

export default function ActivityFilter({
  filterOptions,
  activeFilters,
  onFilterChange,
  isOpen,
  onToggle,
}) {
  const handleToggleFilter = () => {
    onToggle(!isOpen);
  };

  const handleSelectFilter = (key, value) => {
    const newFilters = { ...activeFilters };

    if (!newFilters[key]) {
      newFilters[key] = [];
    }

    const index = newFilters[key].indexOf(value);

    if (index > -1) {
      newFilters[key].splice(index, 1);
      if (newFilters[key].length === 0) {
        delete newFilters[key];
      }
    } else {
      newFilters[key].push(value);
    }

    onFilterChange(newFilters);
  };

  const handleResetFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <FilterContainer>
      <FilterHeader
        onClick={handleToggleFilter}
        aria-label={`${isOpen ? "Close" : "Open"} filters`}
        aria-expanded={isOpen}
      >
        <LuFilter />
      </FilterHeader>

      {!isOpen && hasActiveFilters && (
        <ActiveFilters>
          {Object.entries(activeFilters).map(([key, values]) =>
            values.map((value) => {
              const isActive = activeFilters[key]?.includes(value);
              return (
                <FilterTag
                  key={`${key}-${value}`}
                  $active={isActive}
                  onClick={() => handleSelectFilter(key, value)}
                >
                  {value}
                  {isActive && <span>×</span>}
                </FilterTag>
              );
            })
          )}
        </ActiveFilters>
      )}

      {isOpen && (
        <FilterBody>
          {Object.entries(filterOptions).map(([key, values]) => (
            <FilterSection key={key}>
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <FilterTagContainer>
                {values.map((value) => {
                  const isActive = activeFilters[key]?.includes(value);
                  return (
                    <FilterTag
                      key={`${key}-${value}`}
                      $active={isActive}
                      onClick={() => handleSelectFilter(key, value)}
                    >
                      {value}
                      {isActive && <span>×</span>}
                    </FilterTag>
                  );
                })}
              </FilterTagContainer>
            </FilterSection>
          ))}

          {hasActiveFilters && (
            <ResetLink onClick={handleResetFilters}>Reset all</ResetLink>
          )}
        </FilterBody>
      )}
    </FilterContainer>
  );
}
