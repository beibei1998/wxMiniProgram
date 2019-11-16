// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marks: ['10', '5', '0', '5', '10', '20', '30', '40', '∞'],
    array: [
      {
        index: 0,
        buttonName: '1',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 1,
        buttonName: '2',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 2,
        buttonName: '3',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 3,
        buttonName: '4',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 4,
        buttonName: '5',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 5,
        buttonName: '6',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 6,
        buttonName: '7',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 7,
        buttonName: '8',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 8,
        buttonName: '9',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 9,
        buttonName: '10',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 10,
        buttonName: '11',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 11,
        buttonName: '12',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 12,
        buttonName: 'mic1',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 13,
        buttonName: 'mic2',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 14,
        buttonName: 'mic3',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 15,
        buttonName: 'mic4',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 16,
        buttonName: 'music',
        buttonType: 'warn',
        sliderButtonPosition: 60
      },
      {
        index: 17,
        buttonName: 'mix',
        buttonType: 'warn',
        sliderButtonPosition: 60
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


    // var context = wx.createContext()
    // context.setLineWidth(2)
    // let x = 0
    for (var index in this.data.array) {
      const ctx = wx.createCanvasContext(index)
      ctx.beginPath()
      ctx.moveTo(10, 0)
      ctx.lineTo(10, 300)
      ctx.stroke()
      ctx.draw()
    }
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

  },

  clickMuteButton: function (e) {
    let index = e.currentTarget.dataset['index']
    var currentArray = this.data.array
    let currentType = this.data.array[index].buttonType
    if (currentType == 'warn') {
      currentType = 'primary'
    } else {
      currentType = 'warn'
    }
    currentArray[index].buttonType = currentType
    this.setData({
      array: currentArray
    })
  },

  moveSliderButton: function (e) {
    // console.log('here')
    // console.log(e)
    let index = e.currentTarget.dataset['index']
    var currentArray = this.data.array
    var touchTarget = e.changedTouches[0]
    var y = touchTarget.pageY-30
    //slider轴距离window top为30
    currentArray[index].sliderButtonPosition = y
    this.setData({
      array: currentArray
    })
  }

})