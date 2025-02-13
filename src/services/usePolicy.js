import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { URL } from "../utils/constants";

export function usePolicies() {
  const { data, isLoading } = useQuery({
    queryKey: ["policies"],
    queryFn: async () => {
      const res = await fetch(URL);
      return res.json();
    },
  });
  return { data, isLoading };
}

export function useAddPolicy({ reset }) {
  const queryClient = useQueryClient();

  const { mutate: addPolicy, isLoading } = useMutation({
    mutationFn: async (newPolicy) => {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPolicy),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["policies"]); // 🔥 Auto refetch
      if (reset) reset();
    },
    onError: (err) => {
      throw new Error(err);
    },
  });
  return { addPolicy, isLoading };
}

export function getPolicyById({ id }) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["policies", id],
    queryFn: async () => {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  if (!id) return { data, isLoading };
  const dataId = data.find((policy, idx) => idx.toString() === id);
  return { dataId, isLoading };
}

export function useUpdatePolicy() {
  const queryClient = useQueryClient();

  const { mutate: updatePolicy, isLoading } = useMutation({
    mutationFn: async ({ id, updatedPolicy }) => {
      const res = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPolicy),
      });

      if (!res.ok) {
        throw new Error("Failed to update the policy");
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["policies"]);
    },
  });

  return { updatePolicy, isLoading };
}
