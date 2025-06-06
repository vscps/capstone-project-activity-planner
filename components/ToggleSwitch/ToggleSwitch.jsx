import { useState } from "react";
import { useRouter } from "next/router";
import { Input, StyledLabel, StyledLink, Wrapper } from "./ToggleSwitch.styles";

export default function ToggleSwitch({ initialState }) {
  const [viewFavorites, setViewFavorites] = useState(initialState);
  const router = useRouter();

  function handleToggle() {
    const newState = !viewFavorites;
    setViewFavorites(newState);

    setTimeout(() => {
      newState ? router.push("/favorites") : router.push("/");
    }, 1000);
  }

  return (
    <>
      <Wrapper>
        <p>View only favorites</p>
        <Input
          id="toggle_switch"
          name="toggle_switch"
          type="checkbox"
          checked={viewFavorites}
          onChange={handleToggle}
        />
        <StyledLabel htmlFor="toggle_switch"></StyledLabel>
      </Wrapper>
    </>
  );
}
