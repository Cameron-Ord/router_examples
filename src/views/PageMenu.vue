<template>
    <div>
<page-header></page-header>

<nav> <router-link to="/">HOME</router-link></nav>
        <h1>menu</h1>
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

<style scoped>

</style>