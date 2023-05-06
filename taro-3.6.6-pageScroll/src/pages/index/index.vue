<template>
  <view class="index">
    <text>{{ msg }}</text>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
    <view class="block">block</view>
  </view>
</template>

<script>
import "./index.less";
export default {
  data() {
    return {
      msg: "pageScroll",
    };
  },
  onPageScroll(e) {
    console.warn("onPageScroll", e);
  },
  onPullDownRefresh() {
    console.warn("onPullDownRefresh");
  },
};
</script>
