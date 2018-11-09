<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>
<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        components:{
            swipe:Swipe,
            'swipe-item':SwipeItem
        },
        created(){
            this.$emit('routerChange','book');
        },

    }
</script>

<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background: url('../../assets/img/a.jpg') no-repeat center/cover;
        color: #fff;
    }

    .slide2 {
        background: url('../../assets/img/b.jpg') no-repeat center/cover;
        color: #000;
    }

    .slide3 {
        background: url('../../assets/img/c.jpg') no-repeat center/cover;
        color: #fff;
    }
</style>
