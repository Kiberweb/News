<template>
    <div>
        <div :class="'alert alert-' + type" role="alert">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        type: {
            type: String,
            require: true,
            default: 'primary',
        }
    },
}
</script>

<style scoped>

</style>
