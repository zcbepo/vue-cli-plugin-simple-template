import request from '../index'

export function getData() {
    return request.get('/tableData')
}