import type { ComputedRef, Ref } from "vue";

export type Fn = () => void

export type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return

export interface FunctionWrapperOptions<Args extends any[] = any[], This = any> {
  fn: FunctionArgs<Args, This>
  args: Args
  thisArg: This
}

export type MaybeRef<T> = T | Ref<T>

export type MaybeReadonlyRef<T> = (() => T | ComputedRef<T>)

export type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>

export type Serializer<T> = {
  read(raw: string): T
  write(value: T): string
}

export interface UseStorageOptions<T> extends ConfigurableEventFilter, ConfigurableWindow, WatchOptions {
  deep?: boolean

  listenToStorageChanges?: boolean

  writeDefaults?: boolean

  mergeDefaults?: boolean | ((storageValue: T, defaults: T) => T)

  serializer?: Serializer<T>

  onError?: (error: unknown) => void

  shallow?: boolean
}

export type RemovableRef<T> = Omit<Ref<T>, 'value'> & {
  get value(): T
  set value(value: T | null | undefined)
}

export interface StorageLike {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export type EventFilter<Args extends any[] = any[], This = any> = (
  invoke: Fn,
  options: FunctionWrapperOptions<Args, This>
) => void

export interface ConfigurableEventFilter {
  eventFilter?: EventFilter
}

export interface ConfigurableWindow {
  window?: Window
}

export interface ConfigurableFlush {
  flush?: WatchOptions['flush']
}

export interface WatchOptions {
  flush?: any
}

export const isClient = typeof window !== 'undefined'

export const defaultWindow = /* #__PURE__ */ isClient ? window : undefined