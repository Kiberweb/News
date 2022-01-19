<template>
    <p>
        <router-link v-for="tag in tags" :key="tag.id" :to="path + tag.link">
            <span class="badge bg-info text-dark">#{{ tag.name }}</span>
        </router-link>
    </p>
</template>

<script>
export default {
    name: 'Badges',
    props: {
        tags: {
          type: Array,
          require: true,
          default: [],
        },
        path: {
            type: String,
            default: '#',
        },
    },
}
</script>

<style scoped>
.badge {
    margin-right: 10px;
}
</style>
