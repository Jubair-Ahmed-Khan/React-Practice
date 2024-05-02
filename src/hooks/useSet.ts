import { QueryKeys } from "@/models/enums";
import { getAllSets, getSetsById } from "@/service/pokemon.service";
import { useQuery } from "@tanstack/react-query";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

const useSet = (setid: string) => {
  return useQuery<Set>({
    queryKey: [QueryKeys.set, setid],
    queryFn: async () => {
      const set = await getSetsById(setid);
      return set;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: true,
    retry: 1,
    retryDelay: 3000,
  });
};

export default useSet;
