<template>
    <div>
        <h5 v-if="title !== ''">{{ title }}</h5>
        <!--    Hashtags:    -->
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items" :key="item.id">
                <router-link :to="path + item.link">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        title: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: [],
        },
        path: {
            type: String,
            default: 'post/hashtag/',
        }
    },
}
</script>

<style scoped>

</style>
