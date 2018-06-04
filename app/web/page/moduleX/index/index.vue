<template>
    <div>
        <h1 class="title">
        我是moduleX的index
        </h1>
        <router-link to="/moduleX/list">列表</router-link>
        <h2 v-if="show">我是骨架</h2>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import moduleXStore from '../../../store/moduleX';
export default {
    asyncData({ store }) {
        return store.registerModule( 'moduleX', moduleXStore );
    },
    data( ) {
        return {
            show: true
        };
    },
    created( ) {

    },
    mounted( ) {
        setTimeout(( ) => this.show = false, 5000 );
    },
    destroyed () {
        this.$store.unregisterModule('moduleX')
    }
} as any;
</script>
<style lang="less" scoped>
@import './index.less';
</style>

