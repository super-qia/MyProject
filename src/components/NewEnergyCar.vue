<template>
  <div class="newEnergyCar">
    <!-- 地图页面（位于最底层） -->
    <div :class="leftTabList[0].style == true ? 'show' : 'none'">
      <div class="header">
        <h1 class="header-title">数据可视化大屏</h1>
      </div>
      <div class="wrapper">
        <div class="content">
          <div class="col col-l">
            <div class="xpanel-wrapper xpanel-wrapper-40">
              <div class="xpanel xpanel-l-t">
                <div class="title">1</div>
                123
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-60">
              <div class="xpanel xpanel-l-b">
                <div class="title">2</div>
                123
              </div>
            </div>
          </div>
          <div class="col col-c">
            <div class="xpanel-wrapper xpanel-wrapper-75">
              <div class="xpanel no-bg">
                <amap :zoom="15" :center="position" cache-key="home-map"
                  map-style="amap://styles/296109f9239f716f074bc2f4d19d1a47">
                  <amap-marker :position="position" :label="{
                    content: '普通坐标点',
                    direction: 'bottom',
                  }" draggable />
                  <amap-marker :position="position" :offset="[-22, -40]" :label="{
                    content: '使用自定义Icon的Marker',
                    direction: 'bottom',
                  }" :icon="markerIcon" />
                </amap>
              </div>
            </div>
            <!-- <div class="xpanel-wrapper xpanel-wrapper-25">
              <div class="xpanel xpanel-c-b">
                <div class="title title-long">4</div>
              </div>
            </div> -->
          </div>
          <div class="col col-r">
            <div class="xpanel-wrapper xpanel-wrapper-25">
              <div class="xpanel xpanel-r-t">
                <div class="title">5</div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-30">
              <div class="xpanel xpanel-r-m">
                <div class="title">6</div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-45">
              <div class="xpanel xpanel-r-b">
                <div class="title">7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页面二（位于最底层） -->
    <div :class="leftTabList[1].style == true ? 'show' : 'none'"></div>
    <!-- 页面三（位于最底层） -->
    <div :class="leftTabList[2].style == true ? 'show' : 'none'" style="background: url() #458B00 center 0 no-repeat;">
    </div>
    <!-- 页面四（位于最底层） -->
    <div :class="rightTabList[0].style == true ? 'show' : 'none'" style="background: url() #8B8B7A center 0 no-repeat;">
    </div>
    <!-- 页面五（位于最底层） -->
    <div :class="rightTabList[1].style == true ? 'show' : 'none'" style="background: url() #8B658B center 0 no-repeat;">
    </div>
    <!-- 页面六（位于最底层） -->
    <div :class="rightTabList[2].style == true ? 'show' : 'none'" style="background: url() #FFFF00 center 0 no-repeat;">
    </div>
    <!-- tab页面（位于最上层） -->
    <div class="mainPage">
      <div class="tabLeft">
        <div v-for="item in leftTabList" :key="item.title" :class="item.style == false ? 'defaultTab' : 'changeTab'"
          @click="enterLeft(item.title)">
          {{ item.desc }}
        </div>
      </div>
      <div style="flex: 1;text-align: center;">
        {{ dateFormat(date) }}
      </div>
      <div class="tabRight">
        <div v-for="item in rightTabList" :key="item.title" :class="item.style == false ? 'defaultTab' : 'changeTab'"
          @click="enterRight(item.title)">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewEnergyCar',
  data() {
    return {
      // 坐标点经纬度
      position: [113.397181, 22.528115],
      // 坐标点样式
      markerIcon: '',
      // 当前时间
      date: new Date(),
      // 左边tab栏
      leftTabList: [
        { title: '0', desc: '首页', style: true },
        { title: '1', desc: '左边第二', style: false },
        { title: '2', desc: '左边第三', style: false }
      ],
      // 右边tab栏
      rightTabList: [
        { title: '0', desc: '右边第一', style: false },
        { title: '1', desc: '右边第二', style: false },
        { title: '2', desc: '右边第三', style: false }
      ]
    }
  },
  created() { },
  methods: {
    // 显示当前时间
    dateFormat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /**
       * 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       */
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    },

    // 鼠标移入左边tab栏
    enterLeft(title) {
      var this_ = this
      // 初始化tab的style属性
      for (var i = 0; i < this.leftTabList.length; i++) {
        this_.leftTabList[i].style = false
      }
      for (var i = 0; i < this.rightTabList.length; i++) {
        this_.rightTabList[i].style = false
      }
      this.leftTabList[title].style = true
    },

    // 鼠标移入右边tab栏
    enterRight(title) {
      var this_ = this
      // 初始化tab的style属性
      for (var i = 0; i < this.leftTabList.length; i++) {
        this_.leftTabList[i].style = false
      }
      for (var i = 0; i < this.rightTabList.length; i++) {
        this_.rightTabList[i].style = false
      }
      this.rightTabList[title].style = true
    }
  },

  mounted() {
    //显示当前日期时间
    let this_ = this// 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      this_.date = new Date(); // 修改数据date
    }, 1000)
  },

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style scoped>
.none {
  display: none;
}

.show {
  position: fixed;
  width: 100%;
  height: 95%;
  margin-top: 40px;
}

.newEnergyCar {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
  overflow-y: auto;
  background: url() #142437 center 0 no-repeat;
  background-size: cover;
  min-width: 1200px;
}

.mainPage {
  position: absolute;
  display: flex;
  height: 40px;
  width: 100%;
  background: url() #142437 center 0 no-repeat;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: #174ed1 #174ed1 #174ed1 #174ed1;
  /* 水平居中 */
  text-align: center;
  /* 垂直居中关键 */
  line-height: 40px;
  font-size: 20px;
  color: rgba(187, 255, 255);
}

.tabLeft {
  flex: 1;
  text-align: center;
  display: flex;
}

.tabRight {
  flex: 1;
  text-align: center;
  display: flex;
}

.defaultTab {
  flex: 1;
}

.changeTab {
  flex: 1;
  /* background: url() #1641a1 center 0 no-repeat; */
  background: linear-gradient(to right, #1646af, #152a47);
}

/* 首页 */
/********** Global **********/
html,
body {
  width: 100%;
  height: 100%;
  font-family: "microsoft yahei", arial, sans-serif;
  background-color: #0b0f34;
  overflow-x: hidden;
  overflow-y: auto;
}

body {
  margin: 0 auto;
  min-width: 375px;
  max-width: 1920px;
}

/********** Layout **********/
.header {
  position: relative;
  height: 42px;
  box-sizing: border-box;
}

.header-title {
  margin: 0;
  padding: 0;
  line-height: 64px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  color: #e9c29d;
}

.wrapper {
  position: absolute;
  top: 36px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  padding: 10px 10px 0 10px;
  min-height: 500px;
  background: url("../imgs/img1/wrapper-bg.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}

/* PC */
@media (max-width:1919px) {
  .header {
    height: 36px;
  }

  .header-title {
    line-height: 42px;
    font-size: 22px;
  }

  .wrapper {
    top: 22px;
  }
}

/* Mobile */
@media (max-width:1279px) {
  .header-title {
    max-width: 96%;
  }

  .wrapper {
    background: none;
  }
}

/********** Content **********/
.content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 25px 15px;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
}

.col {
  margin: 0 10px;
  height: 100%;
}

.col-l {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2
}

.col-c {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
}

.col-r {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

/* PC */
@media (max-width:1919px) {
  .content {
    padding: 5px 0;
  }
}

/* Mobile */
@media (max-width:1279px) {
  .content {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .col {
    margin: 5px 0;
  }

  .col-l,
  .col-c,
  .col-r {
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
  }
}

.xpanel-wrapper {
  padding-bottom: 10px;
  box-sizing: border-box;
}

.xpanel-wrapper {
  height: 100%;
}

.xpanel-wrapper-25 {
  height: 25%;
}

.xpanel-wrapper-30 {
  height: 30%;
}

.xpanel-wrapper-40 {
  height: 40%;
}

.xpanel-wrapper-45 {
  height: 45%;
}

.xpanel-wrapper-60 {
  height: 60%;
}

.xpanel-wrapper-75 {
  height: 97.4%;
}

.xpanel {
  height: 100%;
  min-height: 100px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}

.xpanel-l-t {
  background-image: url("../imgs/img1/panel-l-t.png");
}

.xpanel-l-b {
  background-image: url("../imgs/img1/panel-l-b.png");
}

.xpanel-c-b {
  background-image: url("../imgs/img1/panel-c-b.png");
}

.xpanel-r-t {
  background-image: url("../imgs/img1/panel-r-t.png");
}

.xpanel-r-m {
  background-image: url("../imgs/img1/panel-r-m.png");
}

.xpanel-r-b {
  background-image: url("../imgs/img1/panel-r-b.png");
}

.xpanel .title {
  padding-left: 24px;
  height: 44px;
  line-height: 44px;
  font-size: 24px;
  font-weight: normal;
  color: #fff;
  background-image: url("../imgs/img1/title-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.xpanel .title-long {
  background-image: url("../imgs/img1/title-bg-long.png");
}

/* PC */
@media (max-width:1919px) {
  .xpanel .title {
    padding-left: 20px;
    height: 36px;
    line-height: 36px;
    font-size: 20px;
  }
}

/* tool */
.fill-h {
  height: 100% !important;
  min-height: 100% !important;
}

.no-margin {
  margin: 0 !important;
}

.no-padding {
  padding: 0 !important;
}

.no-bg {
  margin-top: 20px;
  background: none !important;
}

.no-border {
  border: 0 !important;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
}

.chart-title {
  height: 32px;
  font-size: 22px;
  font-weight: normal;
  color: #9aa8d4;
}

.chart-title {
  height: 24px;
  font-size: 18px;
}

/* 加载动画chart-loader */
.chart-loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  transition: all .8s;
}

.chart-loader .loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border: 3px solid transparent;
  border-top-color: #3498db;
  border-radius: 50% !important;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.chart-loader .loader:before {
  content: "";
  position: absolute;
  top: 3px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 3px solid transparent;
  border-top-color: #e74c3c;
  border-radius: 50% !important;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}

.chart-loader .loader:after {
  content: "";
  position: absolute;
  top: 9px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 3px solid transparent;
  border-top-color: #f9c922;
  border-radius: 50% !important;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

.chart-done .chart-loader {
  display: none;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}
</style>
