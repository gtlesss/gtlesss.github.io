<template>
  <transition name="fade">
    <div class="platform layout-cil" v-if="show1">
        <div class="table">
            <div v-if="platformIndex == 1" style="display: flex"  key="fade1" >
                <div class="table-left">
                    <div class="table-left-bck1" @click="clickEvent(2)">场景</div>
                    <div class="table-left-bck2" @click="clickEvent(1)">苍穹云</div>   
                </div>
                <div class="table-cont">
                    <div class="table-cont-lable countents">
                        <span>云管理平台</span>
                    </div>
                    <div class="table-cont-lable">
                        <span>云门户</span>
                        <span class="bor">计量计费</span>
                        <span class="bor">服务编排</span>
                    </div>
                    <div class="table-cont-lable">
                        <span>服务目录</span>
                        <span class="bor">容量管理</span>
                        <span class="bor">自动化管理</span>
                    </div>
                    <div class="table-cont-lable countents">
                        <span>私有云资源池</span>
                        <span class="bor">容器资源池</span>
                        <span class="bor">公有云</span>
                    </div>
                    <div class="table-cont-lable1">
                        <span>生产</span>
                        <span class="bor">研发</span>
                        <span class="bor">生产</span>
                        <span class="bor">研发</span>
                        <span class="bor spanms_">华为云</span>
                    </div>
                    <div class="table-cont-lable2">
                        <span>IDC</span>
                        <span class="bor">阿里云</span>
                    </div>
                    <div class="table-cont-lable">
                        <span style="border-bottom: none">北京中嘉IDC</span> 
                        <span style="background: #f8f8f8; border-bottom: none;" class="bor" >北京望京IDC</span>  
                        <span style="border-bottom: none" class="bor"  >腾讯云</span>  
                    </div>
                </div>
                <div class="table-right">
                    <div class="table-right-lable">
                        <div class="countents">
                            <span>运维保障</span>
                        </div>
                        <div class="tright-conent">
                            <span>CMDB</span>
                            <span>监控</span>
                            <span>安全</span>
                            <span>堡垒机</span>
                            <span style="border-bottom: none">日志</span>  
                        </div>
                    </div>
                </div>
            </div>
            <div v-else style="display: flex" key="fade2">
                <div class="table-left">
                    <div class="table-left-bck3" @click="clickEvent(2)">场景</div>
                    <div class="table-left-bck4" @click="clickEvent(1)">苍穹云</div>   
                </div>
                <div class="it-boxs1">
                    <div class="it-boxs">
                        <div
                            v-for="(item, index) in ITlist"
                            :key="index"
                            :class="index <= 3 ? 'borno' : ''"
                        >
                            <img :src="item.img" alt="" class="it-box-img" />
                            <div class="it-box-text">
                                <span class="it-box-text-tit">{{ item.tit}}</span>
                                <span
                                    v-for="(item_, index_) in item.children"
                                    :key="index_"
                                    class="it-box-text-content"
                                >
                                    {{ item_ }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </transition>
</template>

<script>
const ITlist = [
    {
        img:require("../../../public/img/it/1.png"),
        tit: "投行业务",
        children: [
            "投行综合管理系统",
            "投行发行管理系统",
            "投行销售管理系统",
            "固收销售管理系统",
        ],
    },
    {
        img: require("../../../public/img/it/2.png"),
        tit: "投研",
        children: ["投研"],
    },
    {
        img: require("../../../public/img/it/3.png"),
        tit: "交易类",
        children: ["集中交易系统", "内存交易系统", "期权交易系统", "TS"],
    },
    {
        img: require("../../../public/img/it/5.png"),
        tit: "营销服务类",
        children: ["证券交易", "产品代销", "智能投顾", "客户管理"],
    },
    {
        img: require("../../../public/img/it/4.png"),
        tit: "销售类",
        children: ["证券交易", "产品代销", "智能投顾", "客户管理"],
    },
    {
        img: require("../../../public/img/it/6.png"),
        tit: "经济类",
        children: ["证券交易", "产品代销", "智能投顾", "客户管理"],
    },
    {
        img: require("../../../public/img/it/7.png"),
        tit: "资管（自营）",
        children: [
            "投资交易系统O32",
            "分TA" + "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u0020" + "自TA",
            "估值系统  \u00A0  \u00A0 \u00A0资金清算",
            "资管业务综合管理平台",
        ],
    },
    {
        img: require("../../../public/img/it/8.png"),
        tit: "投行业务",
        children: ["母基金", "私募"],
    },
];
export default {
    name:'LayoutTable',
    data () {
        return {
            ITlist,
            show1: true,
            platformIndex: 2,
        }
    },
    methods:{
        clickEvent(i) {
            if (this.platformIndex == i) return;
            this.platformIndex = i;
            this.show1 = false;
            setTimeout(() => {
                this.show1 = true;
            });
        },
    }
}
</script>

<style lang='less' scoped>
    .layout-cil {
        width: 962px;
        margin: 0 auto;
    }
    .platform {
        color: #666666;
        span {
            font-size: 14px;
        }
        font-weight: 400;
        font-family: PingFang SC-Regular, PingFang SC;
        height: 338px;
        
    }
    .table {
        box-sizing: border-box;
        .countents {
            background: linear-gradient(
                180deg,
                rgba(235, 236, 237, 0.66) 0%,
                rgba(235, 236, 237, 0.3) 100%
            );
            color: #000000;
            > span {
                font-size: 14px;
            }
            font-weight: bold;
            font-family: PingFang SC-Medium, PingFang SC;
        }
        &-left {
            cursor: pointer;
            width: 175px;
            .table-left-bck1 {
                background: url(../../../public/img/Group1.png) no-repeat;
                background-size: cover;
                color: #999999;
            }
            .table-left-bck2 {
                background: url(../../../public/img/Group2.png) no-repeat;
                background-size: cover;
                color: #000000;
            }
            .table-left-bck3 {
                background: url(../../../public/img/Group4.png) no-repeat;
                background-size: cover;
                color: #000000;
            }
            .table-left-bck4 {
                background: url(../../../public/img/Group3.png) no-repeat;
                background-size: cover;
                color: #999999;
            }

            > div {
                font-family: PingFang SC-Medium, PingFang SC;
                height: 169px;
                line-height: 28px;
                padding: 32px 0 0 16px;
                font-weight: bold;
                font-size: 20px;
                box-sizing: border-box;
            }
        }
        &-cont {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            > div {
                width: 587px;
                display: flex;
                height: 48px;
                align-items: center;
            }
            .table-cont-lable {
                box-sizing: border-box;
                > span {
                    flex: 1;
                    height: 100%;
                    border-bottom: 1px solid #f8f8f8;
                    display: flex;
                    align-items: center;
                    border-left: 1px solid #f8f8f8;
                    border-right: 1px solid #f8f8f8;
                    justify-content: center;
                }
            }
            .bor {
                border-left: none !important;
            }
            .table-cont-lable1 {
                > span {
                    flex: auto;
                    height: 100%;
                    border-bottom: 1px solid #f8f8f8;
                    display: flex;
                    align-items: center;
                    border-left: 1px solid #f8f8f8;
                    border-right: 1px solid #f8f8f8;
                    justify-content: center;
                }
                .spanms_ {
                    width: 121.7px;
                }
            }
            .table-cont-lable2 {
                :nth-child(1) {
                    flex: 1;
                    height: 100%;
                    border-bottom: 1px solid #f8f8f8;
                    display: flex;
                    align-items: center;
                    border-left: 1px solid #f8f8f8;
                    border-right: 1px solid #f8f8f8;
                    justify-content: center;
                }
                :nth-child(2) {
                    width: 194.5px;
                    height: 100%;
                    border-bottom: 1px solid #f8f8f8;
                    display: flex;
                    align-items: center;
                    border-left: 1px solid #f8f8f8;
                    border-right: 1px solid #f8f8f8;
                    justify-content: center;
                }
            }
        }
        &-right {
            background: #ffffff;
            width: 195px;
            .table-right-lable {
                display: flex;
                flex-direction: column;
                height: 100%;
                :nth-child(1) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 48px;
                    width: 100%;
                }
                .tright-conent {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    > span {
                        width: 100%;
                        display: block;
                        height: 57px;
                        border-bottom: 1px solid #f8f8f8;
                        display: flex;
                        align-items: center;
                        border-left: 1px solid #f8f8f8;
                        border-right: 1px solid #f8f8f8;
                        justify-content: center;
                    }
                }
            }
        }
    }
     .it-boxs1 {
        .it-boxs {
            width: 783px;
            display: flex;
            flex-wrap: wrap;
            // background: rgba(196,196,196,0.2);
            background: #ffffff;

            .it-box-img {
                width: 36px;
                height: 36px;
                margin: 20px 8px 0 20px;
            }
            .it-box-text {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                &-tit {
                    font-size: 16px;
                    font-family: PingFang SC-Medium, PingFang SC;
                    font-weight: bold;
                    color: #000000;
                    line-height: 24px;
                }
                &-content {
                    font-size: 12px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                    line-height: 20px;
                }
            }
            :nth-child(4),
            :nth-child(8) {
                border-right: none !important;
            }
            > div {
                box-sizing: border-box;
                width: 195px;
                height: 169px;
                display: flex;
                background: #ffffff;
                border-top: 1px solid #f8f8f8;
                border-right: 1px solid #f8f8f8;
                &.borno {
                    border-top: none !important;
                }
            }
        }
    }
</style>