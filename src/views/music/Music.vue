<template>
    <div>
        <ul>
            <li v-for="(item,index) in dataList" :key="index+'ml'" @click="toDetail">
                <img :src="item.bg" alt="">
            </li>
        </ul>
    </div>
</template>
<style scoped>
    ul li{
        width:50%;
        float:left;
    }
    ul li img{
        width:100%;
    }
</style>
<script>
    import axios from 'axios'
    export default {
        created(){
            this.$emit('routerChange','music');
            this.getData();
        },
        data(){
            return {
                dataList:[],
            }
        },
        methods:{
            getData(){
                axios.get('./data/musiclist.json')
                    .then((res)=>{
                        console.log(res.data.albums);
                        this.dataList = res.data.albums;
                    })
                    .catch(()=>{

                    })
            },
            toDetail(){
                this.$router.push('/music/musicdetails');
                console.log(1);
            }

        }
    }
</script>
