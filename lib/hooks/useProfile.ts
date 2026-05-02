import { db, type Profile } from "@/lib/utils/db";
import { useLiveQuery } from "dexie-react-hooks";

const LOADING = Symbol("loading");

interface UseProfileReturn {
  profile: Profile | null;
  hasProfile: boolean;
  isLoading: boolean;
}

export function useProfile(): UseProfileReturn {
  const result = useLiveQuery(
    () => db.profile.toCollection().first(),
    [],
    LOADING,
  );

  if (result === LOADING) {
    return { profile: null, hasProfile: false, isLoading: true };
  }

  const profile = result ?? null;
  return { profile, hasProfile: !!profile, isLoading: false };
}
