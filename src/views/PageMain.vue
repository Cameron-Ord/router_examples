<template>
    <div>

        <page-header></page-header>

        <nav>

            <router-link to="/menu">MENU</router-link>

        </nav>
        <h1>Hello</h1>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';
    export default {

        components:{

            PageFooter,
            PageHeader

        }
        
    }
</script>

<style lang="scss" scoped>

</style>