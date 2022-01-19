<template>
    <div>
        <page>
            <post :hashtag="post.hashtag">
                <template v-slot:title>
                    {{ post.title }}
                </template>
                {{ post.text }}
            </post>
        </page>
    </div>
</template>

<script>
import Page from '../../components/Page';
import Post from '../../components/Post';
import Resource from '../../api/resource';

const Articles = new Resource('news');

export default {
    name: 'Posts',
    components: {
        Page,
        Post,
    },
    data() {
        return {
            post: {},
        }
    },
    created() {
        this.getPost();
    },
    methods: {
        getPost() {
            const NAME = this.$route.params.name;

            if (NAME !== '') {
                Articles
                    .get(NAME)
                    .then(response => {
                        if (response.status === 200) {
                            this.post = response.data.data[0];
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
