<template>
    <div class='proCharts' id='barGraph'></div>
</template>
  
<script>
export default {
    name: 'barGraph',
    data() {
        return {
            // 柱状图
            option: {
                color: ['#6d3cfe', '#00c7da'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '2%',
                    right: '5%',
                    bottom: '25%',
                    top: '7%',
                    containLabel: true // grid区域是否包含坐标轴的刻度标签
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                    max: 400, // 最大值100
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
                    },
                    // 坐标在grid区域的分割线
                    splitLine: {
                        // 设置分割线的样式(图表横线颜色)
                        lineStyle: {
                            color: ['#00c7da']
                        }
                    }
                },
                series: [
                    {
                        name: '直接访问',
                        // 图类型
                        type: 'bar',
                        barWidth: '35%',
                        data: []
                    },
                    {
                        name: '间接访问',
                        type: 'bar',
                        barWidth: '35%',
                        data: []
                    }
                ]
            },
        }
    },

    created() { },

    methods: {
        initChart() {
            var myChart = this.$echarts.init(document.getElementById('barGraph'))
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
            this_.option.series[0].data = [Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400)]
            this_.option.series[1].data = [Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 400), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
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
    height: 100%;
}
</style>
  