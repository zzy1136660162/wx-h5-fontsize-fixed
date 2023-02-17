export const loadScript =async (src: string) => {
    const script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
}
