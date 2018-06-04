<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import moduleXStore from '../../../store/moduleX';
export default {

    asyncData({ store }) {
        store.registerModule('moduleX', moduleXStore );
        console.log('?!!!!');
    }

} as any;
</script>
<style lang="less" scoped>

</style>

