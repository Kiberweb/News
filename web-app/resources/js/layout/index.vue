<template>
    <div>
        <page>
            <app-main />
            <template v-slot:sidebar>
                <sidebar
                    v-if="items.length !== 0"
                    title="Hashtags:"
                    :items="items"
                />
            </template>
        </page>
    </div>
</template>

<script>
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import { AppMain } from './components';
import Resource from '../api/resource';

const Hashtags = new Resource('hashtag');

export default {
    name: 'Layout',
    components: {
        Page,
        AppMain,
        Sidebar,
    },
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.getHashtags();
    },
    methods: {
        getHashtags() {
            Hashtags.list(this.query).then(response => {
                if (response.status === 200) {
                    this.items = response.data.data.data;
                }
            }).catch(error=>{
                console.log(error);
            });
        },
    }
}
</script>

<style scoped>

</style>
