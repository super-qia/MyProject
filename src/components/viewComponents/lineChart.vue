<template>
    <div class='proCharts' id='lineChart'></div>
</template>
  
<script>
export default {
    name: 'lineChart',
    data() {
        return {
            // 折线图
            option: {
                color: ['#6d3cfe', '#00c7da'],
                title: {
                    text: '',
                },
                // 提示框
                tooltip: {
                    trigger: 'axis',
                },
                // 图例的类型
                legend: {
                    type: 'scroll',
                    // 图例icon图标
                    icon: 'roundRect',
                    data: [
                        {
                            name: '上年',
                            textStyle: {
                                color: '#00c7da'
                            }
                        },
                        {
                            name: '本年',
                            textStyle: {
                                color: '#00c7da'
                            }
                        },
                    ],
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '17%',
                    containLabel: true // grid区域是否包含坐标轴的刻度标签
                },
                xAxis: {
                    type: 'category', // 坐标轴类型。
                    boundaryGap: false, // 坐标轴两边留白策略
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    // 坐标轴刻度标签的相关设置
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#00c7da',
                            fontSize: 10
                        },
                    },
                    // 坐标轴轴线相关设置
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#00c7da'
                        }
                    },
                    // 坐标轴刻度相关设置。
                    axisTick: {
                        show: true,
                    }
                },
                yAxis: {
                    type: 'value',
                    // x轴的坐标文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#00c7da' // 文字的颜色
                        },
                    },
                    max: 100, // 最大值100
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
                // 线条数据
                series: [
                    {
                        name: '上年',
                        type: 'line',
                        data: [],
                        lineStyle: {
                            color: '#6d3cfe'  // 线的颜色
                        }
                    },
                    {
                        name: '本年',
                        type: 'line',
                        data: [],
                        lineStyle: {
                            color: '#00c7da' // 线的颜色
                        }
                    }
                ]
            },
        }
    },

    created() { },

    methods: {
        initChart() {
            let myChart = this.$echarts.init(document.getElementById('lineChart'));
            myChart.setOption(this.option)
            // 图表自适应
            window.addEventListener('resize', function () {
                myChart.resize()  // myChart 是实例对象
            })
        },
    },

    mounted() {
        let this_ = this // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
            // 折线图动态数据
            this_.option.series[0].data = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
            this_.option.series[1].data = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
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
    height: 80%;
}
</style>
  