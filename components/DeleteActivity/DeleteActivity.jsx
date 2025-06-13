import { useState } from "react";
import { useRouter } from "next/router";

import Button from "../Button/Button.jsx";
import {
  ButtonWrapper,
  ConfirmationWrapper,
  SuccessMessage,
} from "./DeleteActivity.styles.js";

export default function DeleteActivity({ activityID, activityTitle }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const handleTransitionEnd = () => {
    if (isClosing) {
      setShowConfirmation(false);
      setIsClosing(false);
    }
  };

  const handleDeleteActivity = async () => {
    try {
      const response = await fetch(`/api/activities/${activityID}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDeletionConfirmed(true);
        setShowConfirmation(false);

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        console.error("Deletion failed");
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  const startDeletion = () => {
    setShowConfirmation(true);
  };

  const cancelDeletion = () => {
    setIsClosing(true);
  };

  return (
    <div>
      {!showConfirmation && !deletionConfirmed && (
        <Button text="Delete" onClick={startDeletion} purpose="delete" />
      )}

      {showConfirmation && !deletionConfirmed && (
        <ConfirmationWrapper
          $isDisappearing={isClosing}
          onTransitionEnd={handleTransitionEnd}
        >
          <p>
            Are you sure you would like to delete the activity{" "}
            <strong>{`"${activityTitle}"`}</strong>?
          </p>
          <ButtonWrapper>
            <Button
              text="Yes"
              onClick={handleDeleteActivity}
              purpose="confirm"
            />
            <Button text="No" onClick={cancelDeletion} purpose="cancel" />
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
