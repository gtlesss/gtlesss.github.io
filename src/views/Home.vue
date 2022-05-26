<template>
    <div class="home">
        <!-- 顶部导航 -->
        <div class="home-box">
            <header>
                <img src="../../public/img/Frame.png" alt="" class="home-box-img"/>
                <div class="header-right" v-if="ScrollTopArr.length>0">
                    <span
                        @click="onClickHeader(index)"
                        :class="headerIndex == index ? 'headerActive' : ''"
                        v-for="(item, index) in headerList"
                        :key="index"
                        >{{ item.tit }}
                    </span>
                </div>
            </header>
        </div>
        <!-- 轮播图 -->
        <div class="layout">
            <Swioer />
        </div>
        <!-- 支撑业务快速发展的IT 基础设施 -->
        <div class="home-box" ref="iaasLs">
            <Infrastructure/>
            <div style="display: flex; justify-content: center; width: 100%">
                <div ref="platformIt"
                    style=" margin: 80px 0 16px 0; font-size: 28px;font-family: PingFang SC-Regular, PingFang SC; font-weight: 400;line-height: 36px; "
                >苍穹云平台 · 下一代IT基础设施 
                </div>
            </div>
        </div>
        <!-- 表格切换 -->
        <div class="layout" >
            <LayoutTable />
        </div>
        <!-- 丰富的 IAAS 资源 -->
        <div ref="IAAS" style="margin: 80px auto 19px auto;color: #000000;font-size: 28px;font-weight: 400;line-height: 33px;" >丰富的 IAAS 资源</div>
        <!-- 丰富的 IAAS 资源 table 切换 -->
        <div class="tablelist">
            <div
                v-for="(item, index) in tablelist"
                :key="index"
                @click="onClickTab(index)"
            >
                <img :src="item.img" alt="" class="tablelist-img" />
                <span
                    :class="tabletIndex == index ? '__active' : ''"
                    class="tablelist-title"
                    >{{ item.name }}</span
                >
            </div>
        </div>
        <div class="layout tableb-box">
            <transition name="fade">
                <div v-if="show">
                    <div>
                        <div class="tableb-box-tit" v-if="tablelist[tabletIndex].children.tit" >
                            {{ tablelist[tabletIndex].children.tit }}
                        </div>
                        <div class="tableb-box-btnm" v-if="tablelist[tabletIndex].children.tit">
                            <div class="tableb-box-code">
                                <span
                                    v-for="(item_, index_) in tablelist[tabletIndex].children.code"
                                    :key="index_"
                                    >{{ item_ }}</span
                                >
                            </div>
                            <div class="tableb-buttom" v-if="tablelist[tabletIndex].children.typebut != 1" >
                                <div @click="jwap(tablelist[tabletIndex].url)" :class="!(tablelist[tabletIndex].url)&&'tableb-buttom-actives'" >
                                    查看详情
                                </div>
                                <div @click="jwapEvebt(tablelist[tabletIndex].titList?tablelist[tabletIndex].titList.length:null,tablelist[tabletIndex].titList?tablelist[tabletIndex].titList[0].url:null)" @mouseleave="detailTopsLeave" @mouseenter="detailsTopEnter" >
                                    知识库
                                    <div @mouseleave="deitals = false" @mouseenter="deitals = true" 
                                        v-if="detailsTopIndex ==tabletIndex&& detailsTopVytsd && (tablelist[tabletIndex].titList&&tablelist[tabletIndex].titList.length>1)" 
                                        class="buttom-box-item1 buttom-box-item2"
                                        style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                        <div
                                            v-for="(_item, _index) in tablelist[tabletIndex].titList"
                                            :key="_index"
                                        >
                                            <div class="chil_1" @click="jwap(_item.url)">
                                                <span>{{_item.tit}}</span>
                                                <div class="triangle"></div>
                                            </div>
                                        </div>
                                        <div class="buttom-box-item1-bor"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div v-if="tablelist[tabletIndex].children.type == 2" class="advantage" >平台优势</div>
                        <div class="advantage-box"
                            :class="
                                (tablelist[tabletIndex].children.type == 6 &&
                                    'advantage-box6') ||
                                (tablelist[tabletIndex].children.type == 5 &&
                                    'advantage-box5') ||
                                (tablelist[tabletIndex].children.type == 2 &&
                                    'advantage-box2')
                            "
                        >
                            <div
                                @mouseleave="detailsLeave"
                                v-for="(item, index) in tablelist[tabletIndex].children.list" 
                                :key="index"
                                class="advantage-box-item"
                                :class="
                                    tablelist[tabletIndex].children.imgtype ==
                                        2 
                                        ? 'advantage-box-item1'
                                        : ''
                                "
                            >
                                <img :src="item.img" alt="" class="advantage-box-item-img"/>
                                <div class="advantage-box-item-lable">{{ item.lable }}</div>
                                <div class="advantage-box-item-value">{{ item.value }}</div>
                                <div v-if="item.test" class="advantage-box-item-test" :class="item.testl == 6? 'advantage-box-item-test-marg': '' ">
                                    <span
                                        v-for="(item_s, index_s) in item.test"
                                        :key="index_s"
                                    >
                                        {{ item_s }}
                                    </span>
                                </div>
                                <div v-if="item.buttonType == 1" class="tableb-buttom">
                                    <div @mouseenter="detailsEnters(index)" @click="jwapEvebt(item.urlList?item.urlList.length:1,item.urlList?item.urlList[0].url:item.url)" 
                                        :class="!(item.url)&&'tableb-buttom-actives'" >
                                        查看详情
                                        <div @mouseleave="detailsLeave" v-if="detailsButtomss &&index == detailsIndexs && (item.urlList&&item.urlList.length>1)" 
                                            class="buttom-box-item1 buttom-box-item2"
                                            style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                            <div
                                                v-for="(_item, _index) in item.urlList"
                                                :key="_index"
                                            >
                                                <div class="chil_1" @click="jwap(_item.url)">
                                                    <span>{{ _item.tit }}</span>
                                                    <div class="triangle"></div>
                                                </div>
                                            </div>
                                            <div class="buttom-box-item1-bor"></div>
                                        </div>
                                    </div>
                                    <div @mouseenter="detailsEnter(index)" @click="jwapEvebt(item.titList?item.titList.length:null,item.titList?item.titList[0].url:null)">
                                        知识库
                                        <div @mouseleave="detailsLeave" v-if="detailsButtoms &&index == detailsIndex && (item.titList&&item.titList.length>1)" 
                                            class="buttom-box-item1 buttom-box-item2"
                                            style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                            <div
                                                v-for="(_item, _index) in item.titList"
                                                :key="_index"
                                            >
                                                <div class="chil_1" @click="jwap(_item.url)">
                                                    <span>{{ _item.tit }}</span>
                                                    <div class="triangle"></div>
                                                </div>
                                            </div>
                                            <div class="buttom-box-item1-bor"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="item.buttonType == 2" class="tableb-buttom">
                                    <span>申请流程</span>
                                </div>
                                <div v-if="item.buttonType == 4" class="tableb-buttom1 tableb-buttom">
                                    <div @click="jwap(item.url)" :class="!item.url&&'tableb-buttom-actives'" >
                                        查看详情
                                        
                                    </div>
                                    <div @mouseenter="detailsEnter(index)" @click="jwapEvebt(item.titList?item.titList.length:null,item.titList?item.titList[0].url:null)">
                                        知识库
                                        <div @mouseleave="detailsLeave" v-if="detailsButtoms &&index == detailsIndex && (item.titList&&item.titList.length>1)" 
                                            class="buttom-box-item1 buttom-box-item2"
                                            style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                            <div
                                                v-for="(_item, _index) in item.titList"
                                                :key="_index"
                                            >
                                                <div class="chil_1" @click="jwap(_item.url)">
                                                    <span>{{ _item.tit }}</span>
                                                    <div class="triangle"></div>
                                                </div>
                                            </div>
                                            <div class="buttom-box-item1-bor"></div>
                                        </div>
                                    </div>
                                    <!-- <span>下载申请表单</span> -->
                                </div>
                            </div>
                        </div>
                        <img
                            :class="
                                (tablelist[tabletIndex].children.imgtype == 1 &&
                                    'table-img1') ||
                                (tablelist[tabletIndex].children.imgtype == 2 &&
                                    'table-img2')
                            "
                            v-if="tablelist[tabletIndex].children.img"
                            :src="tablelist[tabletIndex].children.img"
                            alt=""
                        />
                    </div>
                </div>
            </transition>
        </div>
        <!-- 苍穹 -->
        <CangQiaong/> 
        <!-- 地图 -->
        <img src="../../public/img/map.png" alt="" class="count-img" />
        <div class="count-but">全方位的无忧专属上云服务</div>
        <!-- footer -->
        <ButtomBox/>
        <footer class="footer" ref="fotter">
            <div class="footer-top">
                <div>
                    <img src="../../public/img/fot/1.png" alt="" />
                    <span>高可靠性</span>
                </div>
                <div>
                    <img src="../../public/img/fot/2.png" alt="" />
                    <span>易扩展性</span>
                </div>
                <div>
                    <img src="../../public/img/fot/3.png" alt="" />
                    <span>数据智能</span>
                </div>
                <div>
                    <img src="../../public/img/fot/4.png" alt="" />
                    <span>专业服务</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { headerList, tablelist } from "./datas/index";
import Swioer from "./components/Swiper.vue";
import Infrastructure from "./components/Infrastructure.vue";
import LayoutTable from "./components/LayoutTable.vue";
import ButtomBox from "./components/ButtomBox.vue";
import CangQiaong from "./components/CangQiaong.vue"
export default {
    name: "Home",
    components: {
        Swioer,
        Infrastructure,
        LayoutTable,
        ButtomBox,
        CangQiaong
    },
    data() {
        return {
            headerList,
            tablelist,
            headerIndex: 0,
            opacity: 1,
            tabletIndex: 0,
            show: true,
            offsetWidths: 0,
            ScrollTopArr: [],
            detailsTopVytsd:false,
            deitals:false,
            detailsTopIndex:0,
            detailsIndex:0,
            detailsIndexs:0,
            detailsButtoms:false,
            detailsButtomss:false
        };
    },
    mounted () {
        let documentScrollTop = [
            Math.ceil(this.$refs.iaasLs.getBoundingClientRect().top),
            Math.ceil(this.$refs.platformIt.getBoundingClientRect().top),
            Math.ceil(this.$refs.IAAS.getBoundingClientRect().top),
            Math.ceil(this.$refs.fotter.getBoundingClientRect().top)]
        this.ScrollTopArr =documentScrollTop;
    },
    methods: {
        jwapEvebt(type,url){
            console.log(type);
            if(type == 1&&url) {
                window.open(url);
            }
        },
        onClickHeader(i){
            this.headerIndex = i;
            if(i == 0) {
                location.reload([false])
            }else if(i == 1) {
                window.scrollTo({ top: this.ScrollTopArr[0], left: 0, behavior: 'smooth' })
            }else if(i == 2) {
                window.scrollTo({ top: this.ScrollTopArr[1], left: 0, behavior: 'smooth' })
            }else if(i == 5) {
                window.scrollTo({ top: this.ScrollTopArr[3], left: 0, behavior: 'smooth' })
            }
        },
        jwap(url) {
            console.log(url);
            if(url) {
                window.open(url);
            }
        },
        detailTopsLeave(){
            setTimeout(()=>{
                if(!this.deitals) {
                    this.detailsTopVytsd = false
                }
            },200)
        },
        detailsTopEnter(){
            this.detailsTopIndex = this.tabletIndex;
            this.detailsTopVytsd = true
        },
        detailsLeave(){
            this.detailsButtoms = false;
            this.detailsButtomss = false;
        },
        detailsEnter(index){
            this.detailsIndex = index;
            this.detailsButtoms = true
        },
        detailsEnters(index) {
            this.detailsIndexs = index;
            this.detailsButtomss = true;
        },
        onClickTab(i) {
            if (this.tabletIndex == i) return;
            this.tabletIndex = i;
            this.show = false;
            setTimeout(() => {
                this.tabletIndex = i;
                this.show = true;
            });
        },
       
    },
};
</script>
<style lang='less' scoped>
a {
    text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.home {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: PingFang SC-Regular, PingFang SC;
    color: #000000;
    box-sizing: border-box;
    
    .home-box {
        width: 962px;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 70px;
            .home-box-img {
                width: 106px;
                height: 38px;
                object-fit: cover;
            }
            .header-right {
                font-size: 14px;
                font-weight: 400;
                // :hover {
                //     color: #be8c4b;
                //     cursor: pointer;
                // }
                > span {
                    cursor: pointer;
                    margin-left: 32px;
                    font-size: 14px;
                   
                    &.headerActive {
                        color: #be8c4b;
                    }
                    &#headerActives {
                        color:#B3B3B3;
                    }
                }
            }
        }
    }
    .layout {
        background: #f8f8f8;
        width: 100%;
    }
    .tablelist {
        margin: 0 auto;
        display: flex;
        width: 962px;
        justify-content: space-between;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
        }
        .tablelist-img {
            width: 64px;
            height: 64px;
        }
        .tablelist-title {
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 48px;
            text-align: center;
            width: 100%;
            &.__active {
                border-bottom: 4px solid #bd8c4a;
            }
        }
    }
    .tableb-box {
        padding-bottom: 60px;
        &-tit {
            margin-top: 30px;
            margin-bottom: 12px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 24px;
        }
        &-code {
            display: flex;
            margin-bottom: 12px;
            > span {
                white-space: nowrap;
                padding: 4px 6px;
                border: 1px solid #be8c4b;
                color: #be8c4b;
                font-size: 12px;
                margin-right: 9px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                border-radius: 2px;
            }
        }
        .tableb-box-btnm {
            display: flex;
            justify-content: space-between;
            padding-bottom: 18px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            flex-wrap: wrap;
        }
        > div {
            margin: 0 auto;
            width: 962px;
        }
        .advantage {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 20px;
            color: #000000;
            line-height: 23px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            margin-top: 30px;
        }
        .table-img1 {
            height: 293px;
            width: 100%;
            margin-top: 32px;
        }
        .table-img2 {
            width: 100%;
            height: 440px;
            margin-top: 32px;
        }
        .advantage-box {
            display: flex;
            flex-wrap: wrap;

            &-item {
                margin-top: 34px;
                width: 302px;
                margin-right: 18px;
                &-img {
                    width: 48px;
                    height: 48px;
                    margin-bottom: 8px;
                }
                &-lable {
                    font-size: 20px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 700;
                    color: #000000;
                    line-height: 23px;
                }
                &-value {
                    font-size: 12px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #878787;
                    margin: 12px 0 8px 0;
                    line-height: 20px;
                }
                .advantage-box-item-test-marg {
                    margin-top: 27px;
                }
                &-test {
                    font-size: 12px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #878787;
                    margin-top: 6px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    > span {
                        border: 1px solid #bd8c4a;
                        padding: 2px 6px;
                        font-size: 14px;
                        font-family: PingFang SC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #bd8c4a;
                        line-height: 22px;
                        margin-right: 10px;
                        margin-top: 10px;
                        white-space: nowrap;
                    }
                }
            }
        }
        .advantage-box6 {
            :nth-child(4) {
                margin-right: 0 !important;
            }
            :nth-child(2) {
                .advantage-box-item-value {
                    margin-bottom: 30px;
                }
            }
            :nth-child(3) {
                .advantage-box-item-value {
                    margin-bottom: 30px;
                }
            }
            :nth-child(5) {
                .advantage-box-item-value {
                    margin-bottom: 44px;
                }
            }
            :nth-child(6) {
                .advantage-box-item-value {
                    margin-bottom: 30px;
                }
            }

            > div {
                width: 228px !important;
                margin-right: 16px !important;
            }
        }
        .advantage-box5 {
            width: 100% !important;
            display: flex !important;
            justify-content: space-between !important;
            flex-wrap: wrap;

            .advantage-box-item {
                width: 47%;
                margin-right: 0;
            }
        }
        .advantage-box2 {
            display: flex;
            justify-content: space-between;
            padding: 0 25px;
            box-sizing: border-box;
            .advantage-box-item {
                margin-right: 0;
                display: flex;
                width: auto;
                align-items: center;
                margin-top: 32px;
              
            }
            .advantage-box-item-img {
                width: 40px;
                height: 40px;
            }
            .advantage-box-item-lable {
                font-size: 16px;
                margin-left: 8px;
            }
        }
        .advantage-box-item1 {
            flex: 1;
            box-sizing: border-box;
            display: flex;
           justify-content: center;
        }
    }
    .tableb-buttom1 {
        > span {
            width: 72px;
            height: 26px;
            margin-right: 3px;
            position: relative;
            left: -3px;
        }
        >a {
            width: 72px;
            height: 26px;
            margin-right: 3px;
            position: relative;
            left: -3px;
        }
        :last-child {
            margin-right: 0 !important;
        }
    }
    .tableb-buttom {
        display: flex;
        :nth-child(1) {
            background: #bd8c4a;
           
            color: #ffffff;
            cursor: pointer;
        }
        > div {
            width: 78px;
            height: 28px;
            background: rgba(189, 140, 74, 0.1);
            color: #bd8c4a;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            position: relative;
            cursor: pointer;
        }
        > span {
            width: 78px;
            height: 28px;
            background: rgba(189, 140, 74, 0.1);
            color: #bd8c4a;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        }
    }
    .tableb-buttom-actives {
            opacity: 0.7;
    }    
    .count-img {
        width: 962px;
        height: 500px;
        margin-bottom: 80px;
    }
    .count-but {
        margin: 0 auto;
        font-weight: 400;
        color: #000000;
        line-height: 36px;
        font-size: 28px;
        font-family: PingFang SC-Regular, PingFang SC;
    }
    .triangle {
      position: relative;
    }
    .triangle:before{
      content:  '';
      position: absolute;
      height: 5px;
      width:5px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      color: #ffffff;
      /* 根据这个来控制箭头方向 */
      transform: rotate(-45deg);
      right: 5px;
    }
    .buttom-box-item1 {
        background: #be8c4b;
        color: #ffffff;
        border-radius: 4px;
        width: 257px;
        animation: identifierbuttom 0.2s linear;
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
        padding-bottom: 16px;
        .itme-url {
            display: flex;
            align-items: center;
            justify-content: space-between;
              margin-top: 16px;
            >span {
                font-size: 14px;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                -o-text-overflow:ellipsis;
                width: 85%;
            }
        }
        &-bor {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #be8c4b;
            bottom: -4px;
            transform: rotate(45deg);
        }
        .chil_1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
            >span {
                font-size: 14px;
                font-family: PingFang SC-Medium, PingFang SC;
                font-weight: 500;
                color: #ffffff;
                line-height: 22px;
            }
        }
        .chil_2 {
            font-size: 12px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 20px;
        }
    }
    .footer {
        width: 100%;
        
        background: #181818;
        &-top {
            width: 962px;
            height: 140px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            align-items: center;
            > div {
                display: flex;
                align-items: center;
                > img {
                    width: 40px;
                    height: 40px;
                    margin-right: 12px;
                }
                > span {
                    font-weight: bold;
                    color: #ffffff;
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        }
    }
}
</style>
