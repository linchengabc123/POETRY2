// miniprogram/pages/word selection/word selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionArray:[],
    curIndex: 0
  },
  formSubmit(e) {
    var idx = this.data.curIndex
    var ans = e.detail.value.answer
    console.log(ans)
    console.log(this.data.questionArray[idx].answer)
    if (ans == this.data.questionArray[idx].answer) {
      
      wx.showToast({
        title: '答案正确',
        icon: 'success',
        duration: 2000//持续的时间
      })
      this.setData({
        curIndex: idx + 1
      })
    }else {
      wx.showToast({
        title: '答案错误，请重新输入',
        icon: 'none', 
        duration: 2000//持续的时间
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'getData1'
    }).then(res=>{
      console.log(res)
      this.setData({
        questionArray:res.result.data
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