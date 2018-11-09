<template>
    <div class="container">
        <aplayer v-if="isLoaded" showLrc :music="dataList[0]" :list="dataList"/>
    </div>
</template>
<style scoped>
    .container{
        margin-top:1.1rem;
    }
</style>
<script>
    import axios from 'axios'
    import Aplayer from 'vue-aplayer'

    export default {
        components:{
            Aplayer
        },
        data(){
            return{
                dataList:[],
                isLoaded:false
            }
        },
        created(){
            this.$emit('routerChange','music');
            this.getData()
        },
        methods:{
            getData(){
                axios.get('./data/musicdata.json')
                    .then((res)=>{
                        this.dataList = res.data.musicData;
                        this.isLoaded = true;
                        for(let i = 0; i < res.data.musicData.length; i++){
                            this.dataList[i].lrc = location.origin + location.pathname + res.data.musicData[i].lrc;
                        }
                    })
                    .catch(()=>{

                    });
            },

        }
    }

</script>