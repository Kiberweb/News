<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="dashboard-container">
                <div class="row">
                    <div class="col-9">
                        <slot />
                    </div>
                    <div class="col-3">
                        <slot name="sidebar" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page',
}
</script>

<style scoped>

</style>
