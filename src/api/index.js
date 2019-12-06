/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {fetch, baseUrl} from './config'
// eg
export function eg(params) {
  return fetch(`${baseUrl}/eg`, params)
}