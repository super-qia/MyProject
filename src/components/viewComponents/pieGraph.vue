<template>
    <div class='proCharts' id='pieGraph'></div>
</template>
  
<script>
export default {
    name: 'pieGraph',
    data() {
        return {
            // 折线图
            option: {
                title: {
                    // 设置饼图标题，位置设为顶部居中
                    text: "",
                    top: "0%",
                    left: "center"
                },
                series: [
                    {
                        type: "pie",
                        label: {
                            show: true,
                            formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
                        },
                        radius: ["40%", "70%"], //圆环内半径40%，外半径70%
                        data: [
                            {
                                value: 0,
                                name: "江苏"
                            },
                            {
                                value: 0,
                                name: "浙江"
                            },
                            {
                                value: 0,
                                name: "山东"
                            },
                            {
                                value: 0,
                                name: "广东"
                            },
                            {
                                value: 0,
                                name: "湖南"
                            }
                        ]
                    }
                ]
            },
        }
    },

    created() { },

    methods: {
        initChart() {
            let myChart = this.$echarts.init(document.getElementById('pieGraph'));
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
            this_.option.series[0].data[0].value = Math.round(Math.random() * 100)
            this_.option.series[0].data[1].value = Math.round(Math.random() * 100)
            this_.option.series[0].data[2].value = Math.round(Math.random() * 100)
            this_.option.series[0].data[3].value = Math.round(Math.random() * 100)
            this_.option.series[0].data[4].value = Math.round(Math.random() * 100)
            this_.initChart()
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
  