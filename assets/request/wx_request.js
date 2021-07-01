let api = require('./setting').api;
class wx_request{
  request(url,method,data){
    return new Promise((resolve,reject) => {
      wx.request({
        url: api + url,
        method,
        data,
        headers: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res) {
          resolve(res.data)
        },
        fail: function (res) {
            reject(res)
        },
        complete: function () {
        }
      })
    })
  }
  get(url,data){
    return this.request(url,'GET',data);
  }
  post(url,data){
    return this.request(url,'POST',data);
  }
}
module.exports = new wx_request;