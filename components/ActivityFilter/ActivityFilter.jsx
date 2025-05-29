import { useRef, useEffect } from "react";
import {
  FilterContainer,
  FilterHeader,
  FilterBody,
  FilterTag,
  FilterTagContainer,
  ActiveFilters,
  ResetLink,
  FilterSection,
  CloseButton,
} from "./ActivityFilter.styles";
import { LuFilter } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export default function ActivityFilter({
  filterOptions,
  activeFilters,
  onFilterChange,
  isOpen,
  onToggle,
}) {
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        onToggle(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

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

    setTimeout(() => {
      onFilterChange(newFilters);
    }, 0);
  };

  const handleResetFilters = () => {
    setTimeout(() => {
      onFilterChange({});
    }, 0);
  };

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <FilterContainer ref={filterRef}>
      <FilterHeader onClick={handleToggleFilter}>
        <LuFilter /> Filter
      </FilterHeader>

      {!isOpen && hasActiveFilters && (
        <ActiveFilters>
          {Object.entries(activeFilters).map(([key, values]) =>
            values.map((value) => (
              <FilterTag
                key={`${key}-${value}`}
                onClick={() => handleSelectFilter(key, value)}
              >
                {value} <span>×</span>
              </FilterTag>
            ))
          )}
        </ActiveFilters>
      )}

      {isOpen && (
        <FilterBody>
          <CloseButton onClick={handleToggleFilter}>
            <IoMdClose />
          </CloseButton>
          {Object.entries(filterOptions).map(([key, values]) => (
            <FilterSection key={key}>
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <FilterTagContainer>
                {values.map((value) => (
                  <FilterTag
                    key={`${key}-${value}`}
                    active={
                      activeFilters[key]?.includes(value) ? "true" : undefined
                    }
                    onClick={() => handleSelectFilter(key, value)}
                  >
                    {value}
                    {activeFilters[key]?.includes(value) && <span>×</span>}
                  </FilterTag>
                ))}
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
