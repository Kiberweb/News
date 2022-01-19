<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title bottom-underline">
                <router-link :to="path + post.link">{{ post.title || post.name }}</router-link>
            </h4>
            <badges v-if="post.hashtag" :tags="post.hashtag" :path="'post/hashtag/'"/>
            <p v-if="post.text" class="card-text" v-html="post.text.substr(0, 255)">
                <slot></slot>
            </p>
            <p v-if="hideLink" style="text-align: right;">
                <router-link :to="path + post.link" class="btn-link">Читать новость</router-link>
            </p>
            <div>
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Badges from './Badges';

export default {
    name: 'Card',
    components: {
        Badges,
    },
    props: {
        path:{
            type: String,
            default: '/post/',
        },
        post: {
            type: Object,
            require: true,
            default: {},
        },
        hideLink: {
            type: Boolean,
            default: true,
        },
    },
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
