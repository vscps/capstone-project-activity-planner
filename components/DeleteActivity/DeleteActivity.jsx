import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button.jsx";
import {
  ButtonWrapper,
  ConfirmationWrapper,
  SuccessMessage,
} from "./DeleteActivity.styles.js";

export default function DeleteActivity({ activityID, activityTitle }) {
  const [isDeletionMode, setIsDeletionMode] = useState(false);
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [shouldRenderConfirmation, setShouldRenderConfirmation] =
    useState(false);
  const router = useRouter();

  // Some delays through timeouts had to be added to be able to play a slideUp animation for the confirmation message.
  // Without delays, React unmounts the component too early and the animation has no time to play.
  // Also, a shouldRenderConfirmation state needed to be introduced to delay unmounting of the message
  // until this state has been set to true.

  useEffect(() => {
    if (isDisappearing) {
      const timeout = setTimeout(() => {
        setShouldRenderConfirmation(false);
        setIsDeletionMode(false);
        setIsDisappearing(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isDisappearing]);

  async function handleDeleteActivity() {
    setIsDisappearing(true);

    try {
      const response = await fetch(`/api/activities/${activityID}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDeletionConfirmed(true);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        console.error("Deletion failed");
        setIsDisappearing(false);
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
      setIsDisappearing(false);
    }
  }

  return (
    <div>
      {!isDeletionMode && !deletionConfirmed && (
        <Button
          text="Delete"
          onClick={() => {
            setIsDeletionMode(true);
            setShouldRenderConfirmation(true);
          }}
          purpose="delete"
        />
      )}

      {shouldRenderConfirmation && (
        <ConfirmationWrapper isDisappearing={isDisappearing}>
          <p>
            Are you sure you would like to delete the activity{" "}
            <strong>{`"${activityTitle}"`}</strong>?
          </p>
          <ButtonWrapper>
            {" "}
            <Button
              text="Yes"
              onClick={handleDeleteActivity}
              purpose="confirm"
            />
            <Button
              text="No"
              onClick={() => {
                setIsDisappearing(true); // play slide-up on cancel too
              }}
              purpose="cancel"
            />
          </ButtonWrapper>
        </ConfirmationWrapper>
      )}

      {deletionConfirmed && (
        <SuccessMessage>
          Activity successfully deleted. Redirecting to the list of all
          activities in three seconds.
        </SuccessMessage>
      )}
    </div>
  );
}
