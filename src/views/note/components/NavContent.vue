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
                :style="index === navIndex? 'backgroundColor: #eee': ''"
                @click="clickNavItem(item, index)"
            ><span class="text-log" v-show="index === navIndex"></span>{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [],
            navIndex: 0, // 选中的index是多少
        };
    },
    mounted() {
        this.getNavList();
    },
    methods: {
        async getNavList() {
            let res = await this.axios.post("getMarkdownNavList");
            this.navList = res.data.data;
        },
        async clickNavItem(item, index){
          this.navIndex = index
          let res = await this.axios.post('/getMarkdown', {filename: item})
          this.$emit('innerNote', res.data.data)
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
        width: 100%;
        height: 40px;
        padding-left: 10px;
        box-sizing: border-box;
        text-align: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow:ellipsis;
        .text-log{
          width: 10px;
          height: 100%;
          background-color: #000;
          display: inline-block;
          margin: 0 20px 0 -10px;
        }
      }
    }
}
</style>