import { defaultWindow, MaybeComputedRef, RemovableRef, UseStorageOptions } from "../utils/types";
import { useStorage } from "./useStorage";

export function useLocalStorage<T extends (string | number | boolean | object | null)>(
    key: string,
    initalValue: MaybeComputedRef<T>,
    options: UseStorageOptions<T> = {}
): RemovableRef<T> {
    const { window = defaultWindow } = options
    return useStorage(key, initalValue, window?.localStorage, options)
}