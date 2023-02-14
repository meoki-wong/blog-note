<template>
    <div class="inner-content-container">
        <p v-html="article"></p>
    </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
export default {
    props: {
        article: {
            type: String,
            default: "",
        },
    },
    watch: {
        article(val) {
            if (val) {
                this.$nextTick(()=>{
                  hljs.configure({
                    ignoreUnescapedHTML: true, // 忽略未经转义的字符
                });
                const code = document.querySelectorAll("pre code");
                code.forEach((el) => {
                    console.log("--测试");
                    hljs.highlightElement(el);
                });
                })
            }
        },
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.inner-content-container {
    width: 85%;
    height: 100vh;
    overflow-y: auto;
    padding: 50px 20px 20px;
    box-sizing: border-box;
    /deep/ul{
      padding-left: 20px;
      box-sizing: border-box;
    }
}
</style>