<template>
    <amap :zoom="15" :center="position" cache-key="home-map" map-style="amap://styles/296109f9239f716f074bc2f4d19d1a47">
        <amap-marker :position="position" :label="{
            content: '普通坐标点',
            direction: 'bottom',
        }" draggable />
        <amap-marker :position="position" :offset="[-22, -40]" :label="{
            content: '使用自定义Icon的Marker',
            direction: 'bottom',
        }" :icon="markerIcon" />
    </amap>
</template>
  
<script>
export default {
    name: "gdMap",
    data() {
        return {
            // 坐标点经纬度
            position: [113.397181, 22.528115],
            // 坐标点样式
            markerIcon: '',
        }
    },

    created() { },

    methods: {},

    mounted() { },

    beforeDestroy() { }
}
</script>

<style scoped>

</style>
  