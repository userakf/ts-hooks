export const useLocalStorage = (name: string, opt: Record<string, unknown>) => {
    localStorage.setItem(name, JSON.stringify(opt))
    return JSON.parse(localStorage.getItem(name)!)
}