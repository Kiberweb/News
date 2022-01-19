<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title bottom-underline"><slot name="title"></slot></h4>
            <badges :tags="hashtag" :path="'hashtag/'" />
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Badges from "./Badges";

export default {
    name: 'Post',
    components: {
        Badges,
    },
    props: {
        hashtag: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style scoped>
.card {
    border: none;
    margin-bottom: 15px;
    border: 2px solid #b7b7b7;
    border-width: 2px 0;
}
.bottom-underline {
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,.125);
}
h4 a {
    color: #5f5f60;
    text-decoration: none;
}
</style>
