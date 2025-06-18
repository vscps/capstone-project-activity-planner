import { useState } from "react";
import { useRouter } from "next/router";
import {
  BookmarkIcon,
  BookmarkIconAdded,
  Input,
  StyledLabel,
  Knob,
  Wrapper,
} from "./ToggleSwitch.styles";

export default function ToggleSwitch({ initialState }) {
  const [viewFavorites, setViewFavorites] = useState(initialState);
  const router = useRouter();

  function handleToggle() {
    const newState = !viewFavorites;
    setViewFavorites(newState);

    setTimeout(() => {
      newState ? router.push("/favorites") : router.push("/");
    }, 500);
  }

  return (
    <Wrapper>
      <Input
        id="toggle_switch"
        checked={viewFavorites}
        onChange={handleToggle}
      />
      <StyledLabel htmlFor="toggle_switch">
        {viewFavorites ? (
          <BookmarkIconAdded className="icon" />
        ) : (
          <BookmarkIcon className="icon" />
        )}
        <Knob className="knob" />
      </StyledLabel>
    </Wrapper>
  );
}
