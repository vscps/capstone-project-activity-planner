import { useState } from "react";
import { mutate } from "swr";

const invalidateActivitiesCache = async () => {
  await mutate(
    (key) => typeof key === "string" && key.includes("/api/activities"),
    undefined,
    { revalidate: false }
  );
};

export function useCreateActivity() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createActivity = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: "/assets/images/placeholder.png",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.message || "Failed to create activity.";
        throw new Error(message);
      }

      const newActivity = await response.json();

      await invalidateActivitiesCache();

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
      const response = await fetch(`/api/activities/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: data.imageUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.message || "Failed to update activity.";
        throw new Error(message);
      }

      const updatedActivity = await response.json();

      await invalidateActivitiesCache();
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

export function useDeleteActivity() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteActivity = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/activities/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.message || "Failed to delete activity.";
        throw new Error(message);
      }

      await invalidateActivitiesCache();

      return true;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteActivity, isLoading, error };
}
