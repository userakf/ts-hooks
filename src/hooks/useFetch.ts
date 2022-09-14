import { ComputedRef, isRef, ref, unref, watchEffect } from "vue";

export function useFetch(url: ComputedRef<string>) {
    const data = ref(null)
    const error = ref<any>(null)

    async function doFetch() {
        // 在请求之前重设状态...
        data.value = null
        error.value = null
        // unref() 解包可能为 ref 的值
        const urlValue = unref(url)

        try {
            await timeout()
            const res = await fetch(urlValue)
            data.value = await res.json()
        } catch (e) {
            error.value = e
        }
    }
    if (isRef(url)) {
        // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
        watchEffect(doFetch)
    } else {
        // 否则只请求一次
        // 避免监听器的额外开销
        doFetch()
    }



    return { data, error, retry: doFetch }
}

// artificial delay
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(null)
            } else {
                reject(new Error('Random Error'))
            }
        }, 300)
    })
}