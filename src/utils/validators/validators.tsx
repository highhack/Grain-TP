

export const required = (value: string) => {
    if (value) return undefined
    return 'Field is Required'
}
// export const maxLength30 = (value: string) => {
//     if (value.length > 30) return 'max length is 30'
//     return undefined
// }
export const maxLengthCreator = (length: number) => (value: string) => {
    if (value.length > length) return `max length is  ${length} symbols`
    return undefined
}