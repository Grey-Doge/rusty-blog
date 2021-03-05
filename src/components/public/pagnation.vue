<template>
  <div>
    <ul class="pagenation">
        <li :class="[{'disable' : index === 1}]" @click="first">
            ««
        </li>
        <li v-show="showPreMore" @click="prev">
            «
        </li>
        
        <li 
            v-for="page in pagers" 
            :key="page" 
            @click="switchPage(page)"
            :class="[{'page-item-active': index === page}, 'page-item']"
        >
            {{page}}
        </li>
        <li v-show="showNextMore" @click="next">
            »
        </li>
        <li :class="[{'disable' : index === pages}]" @click="last">
            »»
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'pagenation',
    data: function() {
        return {
            index: this.currentPage || 1,//当前页面;
            limit: this.pageSize,//单页显示数据条数;
            size: this.total || 1,//总数据条数;
            showPreMore: false,
            showNextMore: false
        }
    },
    props: {
        //页面中的可见页码，其他的以...替代, 必须是奇数
        perPages : { 
            type : Number,
            default : 5 
        },
        // 当前页码
        currentPage : {
            type : Number,
            default : 1
        },
        // 每页显示的数据条数
        pageSize: {
            type: Number,
            default: 10
        },
        // 数据总条数
        total : {
            type: Number,
            default: 1
        }
    },
    methods: {
        first() {
            this.switchPage(1);
        },
        prev() {
            this.index -= 1;
            this.switchPage(this.index);
        },
        next() {
            this.index += 1;
            this.switchPage(this.index);
        },
        last() {
            this.switchPage(this.pages);
        },
        switchPage(val) {
            this.index = val;
            this.$emit('current-change', this.index);
        }
    },
    computed: {
        // 计算总页码;
        pages() {
            console.log('计算属性pages发生改变');
            return Math.ceil(this.total / this.limit);
        },

        // 渲染分页数组;
        pagers() {
            const array = [];
            // 分页组件最多可同时显示多少页;
            const perPages = this.perPages;
            // 当前总共有多少分页;
            const pageCount = this.pages;
            // 当前分页位置;
            let current = this.index;
            // 取中间数
            const _offset = Math.floor((perPages - 1) / 2);

            console.log(`_offset=${_offset}`);
            const offset = {
                start: current - _offset,
                end: current + _offset
            }

            if (offset.start < 1) {
                offset.end = offset.end + (1 - offset.start);
                offset.start = 1;
            }

            if (offset.end > pageCount) {
                offset.start = offset.start - (offset.end - pageCount);
                offset.end = pageCount;
            }

            if (offset.start < 1) {
                offset.start = 1;
            }

            this.showPreMore = (offset.start > 1);
            this.showNextMore = (offset.end < pageCount);

            for (let i = offset.start;i <= offset.end; i++) {
                array.push(i);
            }
            return array;
        }
    },
    watch: {
        currentPage(val) {
            this.index = val || 1;
        },
        pageSize(val) {
            this.limit = val || 10;
        },
        total(val) {
            this.size = val || 1;
        }
    }
}
</script>

<style lang="less" scoped>

.pagenation{
    margin-top: 30px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    line-height: 1.5;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .disable {
        color: #c0c4cc;
        pointer-events: none;
    }
    .disable:hover {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: not-allowed;
        color: #c0c4cc;
    }
    .page-item-active {
        background-color: #d83c07;
        color: #fff;
        pointer-events: none;
    }
    .page-item-active:hover {
        color: #fff;
        cursor: default;
    }
    li:hover {
        color: #d83c07;
    }
    li {
        display: inline;
        margin: 0 5px;
        padding: 0 4px;
        background: #f4f4f5;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        color: #606266;
        min-width: 30px;
        border-radius: 2px;
    }
    
    
    
}
</style>
