<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
<!--            <keep-alive :include="cachedViews">-->
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.fullPath;
        },
    },
    created() {
        console.log('Key:');
        console.log(this.key);
    }
}
</script>

<style lang="scss" scoped>
.app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
}

.fixed-header+.app-main {
    padding-top: 50px;
}

.hasTagsView {
    .app-main {
        min-height: calc(100vh - 84px);
    }

    .fixed-header+.app-main {
        padding-top: 84px;
    }
}
</style>
