<template>
  <view class="index">
    <view>*****组件*****</view>
    <view>==input==</view>
    <input type="text" placeholder="请输入" />
    <view>==button==</view>
    <button>按钮</button>
    <view>==text==</view>
    <text>文本</text>
    <view>==view==</view>
    <view>内容块</view>
    <view>*****接口*****</view>
    <button @tap="() => handleTap('getSystemInfoSync')">wx.getSystemInfoSync</button>
    <button @tap="() => handleTap('navigateTo')">wx.navigateTo</button>
    <button @tap="() => handleTap('showToast')">wx.showToast</button>
    <button @tap="() => handleTap('setStorageSync')">wx.setStorageSync</button>
    <button @tap="() => handleTap('getStorage')">wx.getStorage</button>
    <view class="pre">{{ successApis }}</view>
    <view>*****生命周期*****</view>
    <view class="pre">{{ orderOfLifetime }}</view>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.less'
import Taro from '@tarojs/taro'

export default {
  setup() {
    const msg = ref('Hello world')
    const orderOfLifetime = ref('')
    const successApis = ref('')
    function handleTap(apiName) {
      if (apiName === 'getSystemInfoSync') {
        const value = Taro.getSystemInfoSync()
        if (value) {
          this.successApis += 'getSystemInfoSync,'
        }
      }
      if (apiName === 'showToast') {
        Taro.showToast({ title: '测试弹窗', icon: 'none' }).then(() => {
          this.successApis += 'showToast,'
        })
      }
      if (apiName === 'navigateTo') {
        Taro.navigateTo({ url: 'pages/log/index' }).then(() => {
          this.successApis += 'navigateTo,'
        })
      }
      if (apiName === 'setStorageSync') {
        Taro.setStorageSync('testabc', 'testabcValue')
        this.successApis += 'setStorageSync,'
      }
      if (apiName === 'getStorage') {
        Taro.getStorage({ key: 'testabc' }).then((res) => {
          if (res.data === 'testabcValue') {
            this.successApis += 'getStorage,'
          }
        })
      }
    }
    return {
      msg,
      orderOfLifetime, // 生命周期顺序
      successApis, // 成功 Api 列表
      handleTap,
    }
  },
  onLoad() {
    this.orderOfLifetime += `onLoad:${Date.now()},`
  },
  onReady() {
    this.orderOfLifetime += `onReady:${Date.now()},`
  },
  onShow() {
    this.orderOfLifetime += `onShow:${Date.now()},`
  },
  onHide() {
    this.orderOfLifetime += `onHide:${Date.now()},`
  },
}
</script>
