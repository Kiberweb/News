<template>
    <div class="dashboard-container">
        <component :is="currentView" />
    </div>
</template>

<script>
import defaultDashboard from './default';

export default {
    name: 'Dashboard',
    components: {
        defaultDashboard,
    },
    data() {
        return {
            currentView: 'defaultDashboard',
        };
    },
}
</script>

<style scoped>

</style>
