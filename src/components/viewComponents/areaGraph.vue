<template>
    <div class='proCharts' id='areaGraph'></div>
</template>
  
<script>
export default {
    name: 'areaGraph',
    data() {
        return {
            // 平滑折线面积图
            option: {
                title: {
                    text: '',
                    x: '100px'
                },
                tooltip: { trigger: 'axis' },
                legend: {
                    type: 'scroll',
                    orient: 'horizontal',
                    x: 'right',
                    y: 'top',
                    data: [
                        {
                            name: '进入停车场流水',
                            textStyle: {
                                color: '#00c7da'
                            }
                        },
                        {
                            name: '离开停车场流水',
                            textStyle: {
                                color: '#00c7da'
                            }
                        },
                    ],
                },
                grid: {
                    top: '15%',
                    left: '5%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    name: '时间',
                    type: 'category',
                    boundaryGap: false, // 坐标轴两边留白策略
                    data: ['2020-08-20 09:30:00', '2020-08-20 11:20:00', '2020-08-20 13:30:00', '2020-08-20 15:20:00', '2020-08-20 16:30:20', '2020-08-20 18:00:20', '2020-08-20 21:00:00'],
                    axisLabel: {
                        rotate: 80, // 倾斜度
                        interval: 0,
                        lineStyle: {
                            color: 'rgba(0,0,255,0.5)'
                        },
                        textStyle: {
                            color: '#00c7da' // 文字的颜色
                        },
                    },
                    // 坐标轴轴线相关设置
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#00c7da'
                        }
                    },
                },
                yAxis: {
                    name: '车流量',
                    type: 'value',
                    // x轴的坐标文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#00c7da' // 文字的颜色
                        },
                    },
                    max: 50, // 最大值100
                    // 坐标轴轴线相关设置
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#00c7da'
                        }
                    },
                    // 坐标轴刻度相关设置。
                    axisTick: {
                        show: false,
                    },
                    // 坐标在grid区域的分割线
                    splitLine: {
                        // 设置分割线的样式(图表横线颜色)
                        lineStyle: {
                            color: ['#00c7da']
                        }
                    }
                },
                series: [{
                    name: '进入停车场流水',
                    type: 'line',
                    smooth: true,
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#6d3cfe',
                            lineStyle: {
                                color: '#6d3cfe',
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear', // 设置线性渐变
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#6d3cfe' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#6d3cfe' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                        }
                    },
                },
                {
                    name: '离开停车场流水',
                    type: 'line',
                    smooth: true,
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#00c7da',
                            lineStyle: {
                                color: '#00c7da',
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear', // 设置线性渐变
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#00c7da' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#00c7da' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                        }
                    },
                }]
            },
        }
    },

    created() { },

    methods: {
        initChart() {
            var myChart = this.$echarts.init(document.getElementById('areaGraph'));
            myChart.setOption(this.option);
            // 图表自适应
            window.addEventListener('resize', function () {
                myChart.resize()  // myChart 是实例对象
            })
        },
    },

    mounted() {
        let this_ = this // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
            // 停车场进出车次流水
            this_.option.series[0].data = [Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50)]
            this_.option.series[1].data = [Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50), Math.round(Math.random() * 50)]
            this.initChart()
        }, 2000)
    },

    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
    }
}
</script>

<style scoped>
.proCharts {
    width: 100%;
    height: 90%;
}
</style>
  