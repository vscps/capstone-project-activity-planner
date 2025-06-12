import { useState } from "react";

export function useCreateActivity() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createActivity = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: "/assets/images/placeholder.png",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const message = errorData?.message || "Failed to create activity.";
        throw new Error(message);
      }

      const newActivity = await res.json();

      return newActivity;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createActivity, isLoading, error };
}

export function useUpdateActivity() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateActivity = async (id, data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/activities/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: data.imageUrl,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const message = errorData?.message || "Failed to update activity.";
        throw new Error(message);
      }

      const updatedActivity = await res.json();

      return updatedActivity;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateActivity, isLoading, error };
}
