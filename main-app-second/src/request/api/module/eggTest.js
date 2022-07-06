/**
 * eggTest
 */
import base from '@/request/api/base'
import axios from '@/request/http'

const eggTest = {
  testA() {
    return axios.get(`${base.dynamicUrl}/testA`)
  },
  testB() {
    return axios.get(`${base.dynamicUrl}/testB`)
  }
}
export default eggTest
