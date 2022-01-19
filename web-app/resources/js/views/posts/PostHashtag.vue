<template>
    <div>
        <page>
            <br/>
            <div v-if="posts.length === 0">
                <h5 class="text-center">Новостей нету</h5>
            </div>
            <div v-else>
                <card v-for="post in posts" :key="post.id" :post="post" />
            </div>
        </page>
    </div>
</template>

<script>
import Page from '../../components/Page';
import Card from '../../components/Card';
import Resource from '../../api/resource';

const HashtagHaveNews = new Resource('news-to-hashtag');

export default {
    name: 'PostHashtag',
    components: {
        Page,
        Card,
    },
    data() {
        return {
            posts: [],
        }
    },
    created() {
        this.getPost();
    },
    methods: {
        getPost() {
            const NAME = this.$route.params.name;

            if (NAME !== '') {
                HashtagHaveNews
                    .list({
                        hashtag: NAME,
                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.posts = response.data.data;
                        }
                    })
                    .catch(error => {});
            }
        },
    },
}
</script>

<style scoped>

</style>
