import { ref, shallowRef } from "vue";
import { defaultWindow, MaybeComputedRef, RemovableRef, StorageLike, UseStorageOptions } from "../utils/types";
const shallowRefs = shallowRef('')
const refs = ref('')
export function useStorage<T extends (string | number | boolean | object | null)>(
  key: string,
  defaults: MaybeComputedRef<T>,
  storage: StorageLike | undefined,
  options: UseStorageOptions<T> = {}
): RemovableRef<T> {
  const {
    flush = 'pre',
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e)
    },
  } = options

  const data = (shallow ? shallowRefs : refs) as RemovableRef<T>

  return data
}