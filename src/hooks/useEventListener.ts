import { onMounted, onUnmounted } from "vue";

// any fn
type Fn = () => void
// any args fn
type ArgFn = (arg: any) => void

export function useEventListener(target: Window, event: string, callback: ArgFn) {
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}