<template>
    <div>
        <div id="nav" :class="active">
            <header>
                <a @click="choose(0)">首页</a>
                <span>{{currentPage}}</span>
            </header>
            <div class="footer">
                <ul>
                    <li v-for="(item,index) in footerNav" :key="index+'nl'" @click="choose(index)"
                                  :class="{activeColor:active==item.name}">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="routerbar">
            <transition name="fade">
                <!--<router-view/>-->
            </transition>
        </div>
    </div>
</template>

<style>

    header,.footer{
        height:1rem;
        background: #afa7e2;
        position: fixed;
        width:100%;
        line-height:1rem;
        text-align: center;
        z-index: 99;
    }
    header{
        top:0;
        font-size:0.4rem;
        font-weight:bold;
        color:#fff;
    }
    header a{
        position: absolute;
        left:0.3rem;
        color:#fff;
        font-size:0.25rem;
    }
    .footer{
        bottom:0;
        font-size:0.25rem;
    }
    .footer ul{
        display:flex;
    }
    .footer li{
        float:left;
        color:#2e2e2e;
        flex-grow:1;
    }
    .movie header,.movie .footer{
        background: #afa7e2 !important;
    }
    .music header,.music .footer{
        background: #E2B9A9 !important;
    }
    .book header,.book .footer{
        background: #83A2DA !important;
    }
    .photo header,.photo .footer{
        background: #84bf8e !important;
    }
    .activeColor{
        color:#fff !important;
    }

</style>

<script>
    export default {
        name: 'Nav',
        props:['title'],
        mounted(){
            this.$nextTick(function () {
                this.footerNav.forEach(val => {
                    if(val.name == this.title) {
                        this.active = val.name;
                        this.currentPage = val.title;
                    }
                })
            })
        },
        data(){
            return{
               currentPage:'电影',
               active:"movie",
               footerNav:[
                   {
                       name:"movie",
                       title:'电影',
                       url:'/'
                   },
                   {
                       name:"music",
                       title:'音乐',
                       url:'/music'
                   },
                   {
                       name:"book",
                       title:'书籍',
                       url:'/book'
                   },
                   {
                       name:"photo",
                       title:'图片',
                       url:'/photo'
                   },
               ]
            }
        },
        methods: {
            choose(index){
                this.currentPage = this.footerNav[index].title;
                this.active = this.footerNav[index].name;
                this.$router.push(this.footerNav[index].url);
            }
        }
    }
</script>
