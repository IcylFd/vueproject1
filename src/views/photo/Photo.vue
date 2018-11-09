<template>
    <div class="container">
        <ul class='photos'>
            <li v-for="(item,index) in photoList" :key="index+'pl'" @click="goDetail(index)">
                <img :src="item.src" alt="">
            </li>
        </ul>
    </div>

</template>
<style scoped>
    .photos li{
        height:4.1rem;
        width:50%;
        float:left;
    }
</style>

<script>
    import axios from 'axios';

    export default {
        created(){
            this.$emit('routerChange','photo');
            this.getData();
        },
        data(){
           return{
                photoList:[]
            }
        },
        methods:{
            getData(){
                axios.get('./data/photodata.json')
                    .then((res)=>{
                        this.photoList = res.data.photoData;
                    })
                    .catch(()=>{

                    })
            },
            goDetail(index){
                this.$store.commit('changeIndex',index);
                this.$store.commit('changeLength',this.photoList.length);
                this.$router.push('/photo/photodetail');
            }

        }
    }
</script>
