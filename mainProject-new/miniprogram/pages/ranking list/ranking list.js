// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: [],
    wrongNum: 0,
    curIndex: 0,
    flag: false
  },

  check1() {
    var idx = this.data.curIndex
    console.log(this.data.dataArray[idx].answer)
    if (this.data.dataArray[idx].answer == 'A') {
      if (this.data.curIndex == 19) {
        this.setData({
          flag: true
        })
      }
      wx.showToast({
        title: '答案正确',
        icon: 'success',
        duration: 1500//持续的时间
      })
      this.setData({
        curIndex: idx + 1
      })
    }
    else {
      wx.showToast({
        title: '选择错误，请重新选择',
        icon: 'none',
        duration: 2000//持续的时间
      })
      this.setData({
        wrongNum: this.data.wrongNum+1
      })
    }
  },
  check2() {
    
    var idx = this.data.curIndex
    console.log(this.data.dataArray[idx].answer)
    if (this.data.dataArray[idx].answer == 'B') {
      if (this.data.curIndex == 19) {
        this.setData({
          flag: true
        })
      }
      wx.showToast({
        title: '答案正确',
        icon: 'success',
        duration: 1500//持续的时间
      })
      this.setData({
        curIndex: idx + 1
      })
    }
    else {
      wx.showToast({
        title: '选择错误，请重新选择',
        icon: 'none',
        duration: 2000//持续的时间
      })
      this.setData({
        wrongNum: this.data.wrongNum+1
      })
      
    }
  },
  check3() {
    
    var idx = this.data.curIndex
    console.log(this.data.dataArray[idx].answer)
    if (this.data.dataArray[idx].answer == 'C') {
      if (this.data.curIndex == 19) {
        this.setData({
          flag: true
        })
      }
      wx.showToast({
        title: '答案正确',
        icon: 'success',
        duration: 1500//持续的时间
      })
      this.setData({
        curIndex: idx + 1
      })
    }
    else {
      wx.showToast({
        title: '选择错误，请重新选择',
        icon: 'none',
        duration: 2000//持续的时间
      })
      this.setData({
        wrongNum: this.data.wrongNum+1
      })
    }
  },

  test() {
    this.setData({
      curIndex: this.data.curIndex + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'getData2'
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
          dataArray:res.result.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
