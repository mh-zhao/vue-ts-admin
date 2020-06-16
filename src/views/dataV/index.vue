<template>
  <div class="dataV">
    <div class="top">
      <h1>业务报表</h1>
      <a-button @click="onReportFormFullscreen" type="primary" size="small" :icon="this.$store.state.common.reportFormFullscreen ? 'fullscreen-exit' : 'fullscreen'">
        全屏
      </a-button>
    </div>
    <div class="main">
      <div 
      :class="this.$store.state.common.reportFormFullscreen ? 'report-form-wrap fullscreen' : 'report-form-wrap'"
      >
        <!-- <Chart></Chart> -->
        <div class="report-form-head">
          <h1>全国疫情图表</h1>
        </div>
        <div class="report-form-main">
          <div class="column">
            <div class="panel">
              <h3>图表</h3>
              <div class="chart">
                <chart chartType='bar' :data="data" />
              </div>
              <div class="panel-foot"></div>
            </div>
            <div class="panel">
              <h3>图表</h3>
              <div class="chart">
                <chart chartType='line' :data='lineData' />
              </div>
              <div class="panel-foot"></div>
            </div>
            <div class="panel">
              <h3>图表</h3>
              <div class="chart">
                <chart chartType='pie' :data="barData" />
              </div>
              <div class="panel-foot"></div>
            </div>
          </div>
          <div class="column">
            <div class="data-wrap">
              <ul class="data-list">
                <li class="data-item">
                  <div class="data-text">累计确诊</div>
                  <div class="data-num">
                    <countTo :startVal='0' :endVal='84567' :duration='3000'></countTo>
                  </div>
                  <div class="data-add-num">较昨日<span>+1</span></div>
                </li>
                <li class="data-item">
                  <div class="data-text">累计治愈</div>
                  <div class="data-num">
                    <countTo :startVal='0' :endVal='78654' :duration='3000'></countTo>
                  </div>
                  <div class="data-add-num">较昨日<span>+1</span></div>
                </li>
                <li class="data-item">
                  <div class="data-text">累计死亡</div>
                  <div class="data-num">
                    <countTo :startVal='0' :endVal='4565' :duration='3000'></countTo>
                  </div>
                  <div class="data-add-num">较昨日<span>+1</span></div>
                </li>
                <li class="data-item">
                  <div class="data-text">先有确诊</div>
                  <div class="data-num">
                    <countTo :startVal='0' :endVal='124' :duration='3000'></countTo>
                  </div>
                  <div class="data-add-num">较昨日<span>+1</span></div>
                </li>
                <li class="data-item">
                  <div class="data-text">境外输入确诊</div>
                  <div class="data-num">
                    <countTo :startVal='0' :endVal='1780' :duration='3000'></countTo>
                  </div>
                  <div class="data-add-num">较昨日<span>+1</span></div>
                </li>
                <li class="data-item">
                  <div class="data-text">现有疑似</div>
                  <div class="data-num">
                    <countTo :startVal='0' :endVal='3' :duration='3000'></countTo>
                  </div>
                  <div class="data-add-num">较昨日<span>+1</span></div>
                </li>
              </ul>
            </div>
            <div class="map-wrap">
              <div class="map-bg map-bg1">
                <img src="../../assets/images/map.png" alt="">
              </div>
              <div class="map-bg map-bg2">
                <img src="../../assets/images/lbx.png" alt="">
              </div>
              <div class="map-bg map-bg3">
                <img src="../../assets/images/jt.png" alt="">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="panel">
              <h3>图表</h3>
              <div class="chart">
                <chart chartType='radar'  />
              </div>
              <div class="panel-foot"></div>
            </div>
            <div class="panel">
              <h3>图表</h3>
              <div class="chart">
                <chart chartType='calendar' :data="calendarData"  />
              </div>
              <div class="panel-foot"></div>
            </div>
            <div class="panel">
              <h3>图表</h3>
              <div class="chart">
                <chart chartType='graph' :data="calendarData"  /> 
              </div>
              <div class="panel-foot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chart from '../../components/charts/index.vue'
import countTo from 'vue-count-to'
import { setFullScreen, debounce } from '../../utils/utils'
@Component({
  components: {
    Chart,
    countTo
  },
  
})
export default class HelloWorld extends Vue {
  // initial data
  scale:number = 0;
  data:any[] = [5000, 2600, 1300, 1300, 1250, 1500]
  barData:any[] = [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
  lineData:any[] = [80, 93, 91, 94, 100, 110, 120, 91, 94, 100, 91, 94]
  calendarData:any[] = []
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    window.addEventListener('resize',this.checkFull)
  }
  private destroyed(): void {
    window.removeEventListener('resize',this.checkFull)
  }
  // methods
  onReportFormFullscreen() {
    let reportFormFullscreen = setFullScreen(this.$store.state.common.reportFormFullscreen);
    this.$store.commit('SET_STATE',{reportFormFullscreen})
    this.getScale();
  }
  checkFull() {
    const {reportFormFullscreen} = this.$store.state.common;
    if (!reportFormFullscreen) return;
    this.setScale();
    let el:any;
    el = document;
    let isFull=!!(el.webkitIsFullScreen || el.mozFullScreen || 
        el.msFullscreenElement || el.fullscreenElement
    );
    if (!isFull) {
      this.$store.commit('SET_STATE',{reportFormFullscreen: false})
    }
  }
  getScale() {
    // 设计稿基数
    let ww = window.innerWidth / 1920;
    let wh = window.innerHeight / 1080;
    let scale = ww < wh ? ww : wh;
    this.scale = scale;
  }
  setScale() {
    debounce(this.getScale)
  }
  
  
}
</script>

<style scoped lang="less">
.dataV {
  width: 100%;
  // height: 500px;
  // background: green;
  .top {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
    text-align: right;
    h1 {
      float: left;
      font-size: 15px;
    }
  }
  .main {
    overflow: hidden;
  }
  .report-form-wrap {
    padding: 15px;
    background: url('../../assets/images/bg.jpg') center center;
    .report-form-head {
      height: 100px;
      line-height: 100px;
      text-align: center;
      background: url('../../assets/images/head_bg.png');
      background-size: 100% 100%;
      h1 {
        color: #fff;
      }
    }
    .report-form-main {
      display: flex;
      .column {
        flex: 3;
        // width: 310px;
        color: #fff;
        &:nth-child(2) {
          flex: 5;
          padding: 0 10px;
        }
        .panel {
          position: relative;
          height: 310px;
          padding: 10px;
          margin-bottom: 25px;
          background: rgba(255,255,255,.04) url('../../assets/images/line.png')  100% 100%;
          border: 1px solid rgba(25, 83, 66, 0.17);
          h3 {
            color: #fff;
            font-size: 16px;
            text-align: center;
            // line-height: 40px;
            font-weight: 400;
          }
          .chart {
            height: 250px;
          }
          &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 10px;
            height: 10px;
            content: ' ';
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &::before {
            position: absolute;
            top: 0;
            right: 0;
            width: 10px;
            height: 10px;
            content: ' ';
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
          .panel-foot {
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 100%;
            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 10px;
              height: 10px;
              content: ' ';
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &::before {
              position: absolute;
              top: 0;
              right: 0;
              width: 10px;
              height: 10px;
              content: ' ';
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }
        }
        .data-wrap {
          width: 100%;
          padding: 10px;
          background: rgba(101, 132, 226, 0.1);
        }
        .data-list {
          position: relative;
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          border: 1px solid rgba(25, 186, 139, 0.17);
          &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 10px;
            content: ' ';
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &::before {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 20px;
            height: 10px;
            content: ' ';
            border-bottom: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
        }
        .data-item {
          text-align: center;
          width: 33.333%;
          padding: 10px 0;
          .data-text {

          }
          .data-num {
            font-size: 28px;
            color: #00f7f2;
            font-weight: 700;
            font-family: "electronicFont";
          }
          .data-add-num {
            font-size: 12px;
            color: gary;
            span {
              color: #de1344;
            }
          }
        }
        .map-wrap {
          position: relative;
          height: 643px;
          margin-top: 80px;
        }
        .map-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .map-bg1 {
          width: 518px;
          height: 518px;
        }
        .map-bg2 {
          width: 643px;
          height: 643px;
          animation: rotatel 15s linear infinite;
        }
        .map-bg3 {
          width: 566px;
          height: 566px;
          animation: antiClockwise 15s linear infinite;
        }
      }
    }
  }
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100%;
    // height: 100%;
    // transform: translate(-50%,-50%);
    transition: .2s;
  }
  
}
@keyframes rotatel {
  form {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes antiClockwise {
  from {
    transform: translate(-50%,-50%) rotate(360deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-0deg);
  }
}
@media screen and (max-width:1440px) {
  .dataV .report-form-wrap .report-form-main .column .map-wrap{
    height: 443px !important;  
  }
  .map-bg1 {
    width: 318px !important;
    height: 318px !important;
  }
  .map-bg2 {
    width: 443px !important;
    height: 443px !important;
  }
  .map-bg3 {
    width: 366px !important;
    height: 366px !important;
  }
}
</style>
