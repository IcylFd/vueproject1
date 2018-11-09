<template>
    <div>
        电影名称：{{this.$route.params.id}}
    </div>
</template>

<script>
    export default{
        created(){
            this.getData();
            this.$emit('routerChange','moviedetails')
        },
        methods:{
            getData(){
                axios.get(API_PROXY+"https://api.douban.com/v2/movie/subject/"+this.$route.params.id)
                    .then((res)=>{
                        console.log(res);
                    })
                    .catch(()=>{

                    })
            }
        }
    }
</script>