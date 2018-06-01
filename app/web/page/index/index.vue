<template>
    <div class="title">123123</div>
</template>
<script lang="ts">
export default {
    created( ) {
        const s: string = 'created!!!!'
        console.log( s );
    },
    mounted( ) {
        console.log('mounted!!!!');
    }
};
</script>
<style scoped lang="less">
@import './index.less';
</style>
