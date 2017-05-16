import * as wx from 'wx-sdk-ts';

/****************************************************************************
 * 配置方法
 ****************************************************************************/

wx.config({
  debug: true,
  appId: '123',
  timestamp: '234',
  nonceStr: '456',
  signature: '567',
  jsApiList: [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
  ],
});

wx.ready(() => { console.log('I am ready'); });
wx.error((res) => { console.log(res); });
wx.checkJsApi({
  jsApiList: [],
  success: (res) => {
    const { errMsg, checkResult } = res;
    if (errMsg) {
      console.error(errMsg);
    }
    console.log(checkResult);
  },
});

/****************************************************************************
 * 分享接口
 ****************************************************************************/

wx.onMenuShareAppMessage({
  title: 'test',
  link: 'https://kxq.io',
  type: 'video',
  dataUrl: 'https://kxq.io',
  desc: 'Hello weixin',
  success: (res) => console.log(res),
  fail: (res) => console.log(res),
});

wx.onMenuShareQQ({
  title: 'test',
  link: 'https://kxq.io',
  imgUrl: 'https://kxq.io/favicon.png',
  desc: 'Hello weixin',
  success: (res) => console.log(res),
  fail: (res) => console.log(res),
});

wx.onMenuShareQZone({
  title: 'test',
  link: 'https://kxq.io',
  imgUrl: 'https://kxq.io/favicon.png',
  desc: 'Hello weixin',
  success: (res) => console.log(res),
  fail: (res) => console.log(res),
});

wx.onMenuShareTimeline({
  title: 'test',
  link: 'https://kxq.io',
  imgUrl: 'https://kxq.io/favicon.png',
  success: (res) => console.log(res),
  fail: (res) => console.log(res),
});

wx.onMenuShareWeibo({
  title: 'test',
  link: 'https://kxq.io',
  imgUrl: 'https://kxq.io/favicon.png',
  desc: 'Hello weixin',
  success: (res) => console.log(res),
  fail: (res) => console.log(res),
});


/****************************************************************************
 * 图像接口
 ****************************************************************************/

wx.chooseImage({
  count: 10,
  sizeType: [ 'original', 'compressed' ],
  sourceType: [ 'album', 'camera' ],
  complete: (res) => {
    const { localIds } = res;
    console.log(localIds);
  },
});
wx.previewImage({
  current: '123', // 当前显示图片的http链接
  urls: ['123'] // 需要预览的图片http链接列表
});
wx.uploadImage({
  localId: '123',
  isShowProgressTips: false,
  success: (res) => console.log(res),
  cancel: (res) => console.log(res),
});
wx.downloadImage({
  serverId: '234',
  isShowProgressTips: true,
});
wx.getLocalImgData({
  localId: '123',
  success: (res) => console.log(res),
});

/****************************************************************************
 * 音频接口
 ****************************************************************************/

wx.startRecord();
wx.stopRecord({
  success: (res) => console.log(res),
});
wx.onVoiceRecordEnd({
  success: (res) => console.log(res),
});
wx.playVoice({
  localId: '123',
});
wx.pauseVoice({
  localId: '123',
});
wx.stopVoice({
  localId: '123',
});
wx.onVoicePlayEnd({
  success: (res) => console.log(res),
});
wx.uploadVoice({
  localId: '123',
  isShowProgressTips: true,
});
wx.downloadVoice({
  serverId: '234',
  isShowProgressTips: true,
});

/****************************************************************************
 * 智能接口
 ****************************************************************************/

wx.translateVoice({
  localId: '123',
  isShowProgressTips: true,
  success: (res) => console.log(res),
});

/****************************************************************************
 * 设备信息
 ****************************************************************************/

wx.getNetworkType({
  success: (res) => console.log(res),
});

/****************************************************************************
 * 地理信息
 ****************************************************************************/

wx.openLocation({
  latitude: 0.2,
  longitude: 0.3,
  name: '深圳',
  address: '科兴科学园',
  scale: 2,
  infoUrl: 'http://kxq.io',
});
wx.getLocation({
  type: 'wgs84',
  success: (res) => console.log(res),
});

/****************************************************************************
 * 摇一摇周边
 ****************************************************************************/

wx.startSearchBeacons({
  ticket: '567',
});
wx.stopSearchBeacons({
  success: (res) => console.log(res),
});
wx.onSearchBeacons({
  success: (res) => console.log(res),
});

/****************************************************************************
 * 界面操作 
 ****************************************************************************/

wx.closeWindow();
wx.hideMenuItems({
  menuList: [
    'menuItem:exposeArticle',
    'menuItem:setFont',
    'menuItem:dayMode',
  ],
});
wx.showMenuItems({
  menuList: [
    'menuItem:exposeArticle',
    'menuItem:setFont',
    'menuItem:dayMode',
  ],
});
wx.hideAllNonBaseMenuItem();
wx.showAllNonBaseMenuItem();

/****************************************************************************
 * 微信扫一扫
 ****************************************************************************/

wx.scanQRCode({
  needResult: 0,
  scanType: ['qrCode', 'barCode'],
  success: (res) => console.log(res),
});

/****************************************************************************
 * 微信小店
 ****************************************************************************/

wx.openProductSpecificView({
    productId: '789', // 商品id
    viewType: 0, // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
});

/****************************************************************************
 * 微信卡券
 ****************************************************************************/

wx.chooseCard({
  shopId: '123', // 门店Id
  cardType: '234', // 卡券类型
  cardId: '456', // 卡券Id
  timestamp: 0, // 卡券签名时间戳
  nonceStr: '567', // 卡券签名随机串
  signType: 'SHA1', // 签名方式，默认'SHA1'
  cardSign: '678', // 卡券签名
  success: (res) => {
    const { cardList } = res;
    console.log(cardList);
  },
});
wx.addCard({
  cardList: [{
    cardId: '123',
    cardExt: '234',
  }],
  success: (res) => {
    const { cardList } = res;
    console.log(cardList);
  },
});
wx.openCard({
  cardList: [{
      cardId: '123',
      code: '234',
  }],
  success: (res) => {
    const { cardList } = res;
    console.log(cardList);
  },
});

/****************************************************************************
 * 微信支付
 ****************************************************************************/

wx.chooseWXPay({
  timestamp: '345', // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
  nonceStr: '123', // 支付签名随机串，不长于 32 位
  package: '234', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
  signType: 'SHA1', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
  paySign: '345', // 支付签名
  success: (res) => console.log(res),
});
