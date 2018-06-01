<template>
    <h1 class="title">
        我是moduleX的index
    </h1>
</template>
<script lang="ts">
export default {
    created( ) {
        console.log('我是moduleX的index cccccccc');
    },
    mounted( ) {
        console.log('我是moduleX的index mmmmmmmm');
    }
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>

