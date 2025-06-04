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
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createActivity, isLoading, error };
}
