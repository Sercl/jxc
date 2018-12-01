import axios from 'axios'
import qs from 'qs'
export default {
  whyus(){
    return this.get('http://www.1991.work/api/data/whyus')
  },
  caseList(data) {
    return this.post('http://www.1991.work/api/casetext/caselist', data)
  },
  caseDetails(data){
    return this.post('http://www.1991.work/api/casetext/casedetail',data)
  },
  userSubscribe(data){
    return this.post('http://www.1991.work/api/user/userSubscribe',data)
  },
  caseSearch(data){
    return this.post('http://www.1991.work/api/casetext/caseSearch',data)
  },
  post(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 16000,
    }).then(resp => {
      return resp.data
    }, error => {
      console.log(error)
    })
  },
  get(url) {
    return axios({
      method: 'get',
      url: url,
      timeout: 16000,
    }).then(resp => {
      return resp.data
    }, error => {
      console.log(error)
    })
  }
}