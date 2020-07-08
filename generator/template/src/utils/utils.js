const protoToString = Object.prototype.toString
const typeString = {
    object: '[object Object]',
    array: '[object Array]'
}

export const isObject = (value) => {
    return value && protoToString.call(value) === typeString.object
}