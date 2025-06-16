import { useState } from "react";
import { useRouter } from "next/router";

import Button from "../Button/Button.jsx";
import { useDeleteActivity } from "../../hooks/useActivityMutations.js";
import {
  ButtonWrapper,
  ConfirmationWrapper,
  SuccessMessage,
} from "./ActivityDelete.styles.js";

export default function ActivityDelete({ activityID, activityTitle }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const { deleteActivity, isLoading, error } = useDeleteActivity();

  const handleTransitionEnd = () => {
    if (isClosing) {
      setShowConfirmation(false);
      setIsClosing(false);
    }
  };

  const handleDeleteActivity = async () => {
    try {
      await deleteActivity(activityID);
      setDeletionConfirmed(true);
      setShowConfirmation(false);

      setTimeout(() => {
        router.push("/");
      }, 3000);
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
      {error && <p>Error: {error.message}</p>}

      {!showConfirmation && !deletionConfirmed && (
        <Button
          text="Delete"
          onClick={startDeletion}
          purpose="delete"
          disabled={isLoading}
        />
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
              text={isLoading ? "Deleting..." : "Yes"}
              onClick={handleDeleteActivity}
              purpose="confirm"
              disabled={isLoading}
            />
            <Button
              text="No"
              onClick={cancelDeletion}
              purpose="cancel"
              disabled={isLoading}
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
