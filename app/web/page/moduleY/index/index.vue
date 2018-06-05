<template>
    <div>
        <h1 class="title">
        我是moduleY的index
        </h1>
        <router-link to="/moduleX/list">列表</router-link>
        <h2>我是骨架</h2>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import moduleYStore from '../../../store/moduleY';
export default {
    asyncData({ store }) {
        return store.registerModule( 'moduleY', moduleYStore );
    },
    data( ) {
        return {
            show: true
        };
    },
    created( ) {

    },
    mounted( ) {
        
    },
    destroyed () {
        this.$store.unregisterModule('moduleY')
    }
} as any;
</script>
<style lang="less" scoped>
@import './index.less';
</style>

