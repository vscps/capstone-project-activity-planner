import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button.jsx";
import {
  ConfirmationWrapper,
  SuccessMessage,
} from "./DeleteActivity.styles.js";

export default function DeleteActivity({ activityID, activityTitle }) {
  const [isDeletionMode, setIsDeletionMode] = useState(false);
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const router = useRouter();

  async function handleDeleteActivity() {
    try {
      const response = await fetch(`/api/activities/${activityID}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDeletionConfirmed(true);
        setIsDeletionMode(false);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        console.error("Deletion failed");
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  }

  return (
    <div>
      {!isDeletionMode && !deletionConfirmed && (
        <Button
          text="Delete"
          onClick={() => setIsDeletionMode(true)}
          purpose="delete"
        />
      )}

      {isDeletionMode && !deletionConfirmed && (
        <ConfirmationWrapper>
          <p>
            Are you sure you want to delete the activity{" "}
            <strong>{`"${activityTitle}"`}</strong>?
          </p>
          <Button
            text="Confirm"
            onClick={handleDeleteActivity}
            purpose="confirm"
          />{" "}
          <Button
            text="Cancel"
            onClick={() => setIsDeletionMode(false)}
            purpose="cancel"
          />
        </ConfirmationWrapper>
      )}

      {deletionConfirmed && (
        <SuccessMessage>
          Activity successfully deleted. Redirecting to the list of all
          activities.
        </SuccessMessage>
      )}
    </div>
  );
}
