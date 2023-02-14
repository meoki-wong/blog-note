<template>
    <div class="nav-content-container">
        <p class="tabs-list">
            <span>文件</span>
            <span>目录</span>
        </p>
        <ul class="nav-list">
            <li
                v-for="(item, index) in navList"
                :key="index"
                @click="clickNavItem(item)"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [],
        };
    },
    mounted() {
        this.getNavList();
    },
    methods: {
        async getNavList() {
            let res = await this.axios.post("getMarkdownNavList");
            this.navList = res.data.data;
            console.log("---res", res);
        },
        clickNavItem(item){
          console.log('0', item);
        }
    },
};
</script>

<style lang="less" scoped>
.nav-content-container {
    width: 15%;
    border-right: 1px solid #eee;
    height: 100vh;
    .tabs-list {
        border-bottom: 2px solid #eee;
        display: flex;
        span {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            height: 50px;
        }
    }
    .nav-list{
      li{
        cursor: pointer;
        height: 40px;
        width: 100%;
        line-height: 40px;
        padding-left: 10px;
      }
    }
}
</style>