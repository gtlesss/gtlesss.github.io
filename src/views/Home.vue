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
                        :id="index == 4&&'headerActives'"
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
        <main class="home-box" ref="iaasLs">
            <div class="it">
                <div class="it-box" @mouseleave="mouseleave(1)" @mouseenter="mouseenter(1)">
                    <div v-if="mouseenter1">
                        <div class="it-box-top">
                            <img src="../../public/img/1.png" alt="" class="it-box-img"/>
                            <div>
                                <div class="it-box-lable">支撑业务快速发展的IT 基础设施</div>
                                <div class="it-box-text">多云融合 / 运营高效 / 开放共享</div>
                            </div>
                        </div>
                        <div class="it-buttom" @click="jwap(1)">了解详情</div>
                    </div>
                    <div v-else class="it-box-top2">
                        <ul>
                            <li>
                                伴随中金「数字化、区域化、国际化」的战略推进，「业务系统」开发规模、「
                                IT 基础设施」规模都在快速增长。IT
                                基础设施服务、治理压力越来越大，现有「IT
                                服务管理模式、工具」需快速变化，支撑业务快速发展。
                            </li>
                            <li>
                                2021年6月，IT
                                基础运维团队打造“多云融合、运营高效、开放共享”的苍穹云平台，为业务发展提供高效、稳定、协同的资源平台。
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="it-box" style="margin-left: 16px" @mouseleave="mouseleave(2)" @mouseenter="mouseenter(2)">
                    <div v-if="mouseenter2">
                        <div class="it-box-top">
                            <img src="../../public/img/2.png" alt="" class="it-box-img"/>
                            <div>
                                <div class="it-box-lable">丰富的 IAAS 资源</div>
                                <div class="it-box-text">私有云 / 容器资源池 / 公有云 / 云管平台 /运维服务</div>  
                            </div>
                        </div>
                        <div class="it-buttom" @click="jwap(2)">了解详情</div>
                    </div>
                    <div v-else class="it-box-top2">
                        <ul>
                            <li>私有云：云主机、裸金属、存储、网络资源</li>
                            <li>容器资源池 ；</li>
                            <li>公有云：阿里云、腾讯云、华为云 ；</li>
                            <li>
                                云管平台：资源统一纳管、服务编排调度，针对云主机、存储、物理机，提供计量计费，提供财务分摊依据；
                            </li>
                            <li>
                                运维服务：数据库服务、备份服务、安全服务、堡垒机服务、监控服务、告警服务、日志服务。
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: center; width: 100%">
                <div ref="platformIt"
                    style=" margin: 80px 0 16px 0; font-size: 28px;font-family: PingFang SC-Regular, PingFang SC; font-weight: 400;line-height: 36px; "
                >苍穹云平台 · 下一代IT基础设施 
                </div>
            </div>
        </main>
        <!-- 表格切换 -->
        <div class="layout" >
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
                                    <span class="bor">容量管理</span>>
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
                                    <span style="background: #f8f8f8; border-bottom: none;" class="bor" >北京望京IDC（建设中）</span>  
                                   <span style="border-bottom: none" class="bor"  >腾讯云</span>  
                                </div>
                            </div>
                            <div class="table-right">
                                <div class="table-right-lable">
                                    <div class="countents">
                                        <span>运维保障</span>
                                    </div>
                                    <div class="tright-conent">
                                        <span>CMDB</span><span>监控</span>
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
                                <div :class="!(tablelist[tabletIndex].titList||tablelist[tabletIndex].url)&&'tableb-buttom-actives'"  @mouseleave="detailTopsLeave" @mouseenter="detailsTopEnter" >查看详情
                                    <div @mouseleave="deitals = false" @mouseenter="deitals = true" v-if="detailsTopIndex ==tabletIndex&& detailsTopVytsd && (tablelist[tabletIndex].titList||tablelist[tabletIndex].url)" class="buttom-box-item1 buttom-box-item2"
                                            style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                            <div class="itme-url" v-if="tablelist[tabletIndex].url" @click="jwap(tablelist[tabletIndex].url)">
                                                <span>{{tablelist[tabletIndex].url}}</span>
                                                <div class="triangle"></div>
                                            </div>
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
                                <div @click="jwap(tablelist[tabletIndex].basurl)">知识库</div>
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
                                    <div :class="!(item.titList||item.url)&&'tableb-buttom-actives'" @mouseenter="detailsEnter(index)" >
                                        查看详情
                                        <div @mouseleave="detailsLeave" v-if="detailsButtoms &&index == detailsIndex && (item.titList||item.url)" class="buttom-box-item1 buttom-box-item2"
                                            style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                            <div class="itme-url" v-if="item.url" @click="jwap(item.url)">
                                                <span>{{item.url}}</span>
                                                <div class="triangle"></div>
                                            </div>
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
                                    <div  @click="jwap(item.basurl)">知识库</div>
                                </div>
                                <div v-if="item.buttonType == 2" class="tableb-buttom">
                                    <span>申请流程</span>
                                </div>
                                <div v-if="item.buttonType == 4" class="tableb-buttom1 tableb-buttom">
                                    <div :class="!(item.titList||item.url)&&'tableb-buttom-actives'" @mouseenter="detailsEnter(index)">查看详情
                                        <div @mouseleave="detailsLeave" v-if="detailsButtoms &&index == detailsIndex && (item.titList||item.url)" class="buttom-box-item1 buttom-box-item2"
                                            style="position: absolute;z-index: 9;bottom: 40px;left: 17px;"   
                                        >
                                            <div class="itme-url" v-if="item.url" @click="jwap(item.url)">
                                                <span>{{item.url}}</span>
                                                <div class="triangle"></div>
                                            </div>
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
                                    <div @click="jwap(item.basurl)">知识库</div>
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
        <div class="cang-qiaong">
            <div style="margin: 0 0 4px 0">苍穹</div>
            <div>全球资产可视化管理</div>
            <div>
                统一管理中心公司及海外基础设施，涵盖私有云、公有云资源，<br />
                纳管<b style="font-size: 12px">29</b
                >个数据中心，云主机达到<b>11561</b>台，新纳管<b>7</b>个境外中心：香港、新加坡、法兰克福、伦敦、旧金山、纽约、香林斯顿
            </div>
        </div>
        <div class="count-list">
            <div>
                <span class="lable color">29</span>
                <span class="title">数据中心</span>
            </div>
            <div>
                <span class="lable color">7</span>
                <span class="title">境外数据中心</span>
            </div>
            <div>
                <span class="lable color">115561</span>
                <span class="title">云主机总量</span>
            </div>
            <div>
                <span class="lable">3450</span>
                <span class="title">物理主机总量</span>
            </div>
            <div>
                <span class="lable">12000TB+</span>
                <span class="title">存储资源</span>
            </div>
            <div>
                <span class="lable">50GB+</span>
                <span class="title">带宽总量</span>
            </div>
        </div>
        <!-- 地图 -->
        <img src="../../public/img/map.png" alt="" class="count-img" />
        <div class="count-but">全方位的无忧专属上云服务</div>
        <div class="buttom-box">
            <div class="buttom-box-item23" @mouseleave="mouseleaveButtom()">
                <div class="buttom-box-item bd1" style=" border-right: 1px solid #dfdfdf; width: 100%; height: 100%; ">
                    <div class="buttom-box-item-top">
                        <div class="buttom-box-item-top-left">
                            <span style="font-weight: 700; font-size: 14px" >联系我们</span>
                            <span>如果你有需求，别犹豫现在拨打电话</span>
                        </div>
                        <img src="../../public/img/fot/8.png" alt="" class="buttom-box-item-top-right"/> 
                    </div>
                    <div class="buttom-box-item-but">
                        <span
                            @mouseenter="(e) => mouseenterButtom(index, e)"
                            :class="index == 8 ? '_nowas' : ''"
                            class="buttom-box-item-but-lable"
                            v-for="(item, index) in yunlsit"
                            :key="index"
                        >
                            {{ item.lable }}
                            <div v-if="!isMouseleaveButtom &&index == mouseenterButtomIndex" class="buttom-box-item1"
                                style="position: absolute;z-index: 9;bottom: 20px;left: -5px;"   
                            >
                                <div
                                    v-for="(_item, _index) in yunlsit[mouseenterButtomIndex].children"
                                    :key="_index"
                                >
                                    <div class="chil_1">{{ _item.name }}</div>
                                    <div class="chil_2">
                                        {{ _item.tel }}} {{ _item.url }}
                                    </div>
                                </div>
                                <div class="buttom-box-item1-bor"></div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="buttom-box-item bd1">
                <div class="buttom-box-item-top">
                    <div class="buttom-box-item-top-left">
                        <span style="font-weight: 700; font-size: 14px">专家服务</span>
                        <span>上万名技术专家为企业量身打造适合业务发展的专业服务</span> 
                    </div>
                    <img src="../../public/img/fot/5.png" alt="" class="buttom-box-item-top-right"/>  
                </div>
                <div class="buttom-box-item-but">
                    鲁飞&nbsp;&nbsp;Fei.Lu@cicc.com.cn
                    &nbsp;&nbsp;&nbsp;严飞&nbsp;&nbsp;Fei.Yan@cicc.com.cn <br />
                    张禹&nbsp;&nbsp;Yuc.Zhang@cicc.com.cn&nbsp;&nbsp;&nbsp;张桂元&nbsp;&nbsp;Guiyuan.Zhang@cicc.com.cn
                </div>
            </div>
            <div class="buttom-box-item">
                <div class="buttom-box-item-top">
                    <div class="buttom-box-item-top-left">
                        <span style="font-weight: 700; font-size: 14px">文档与工具</span>
                        <span>为您提供全面的产品文档，新手教程及工具</span>
                    </div>
                    <img src="../../public/img/fot/6.png" alt=""  class="buttom-box-item-top-right"/>
                </div>
                <div class="buttom-box-item-but">帮助文档</div>
            </div>
            <div class="buttom-box-item bd2">
                <div class="buttom-box-item-top">
                    <div class="buttom-box-item-top-left">
                        <span style="font-weight: 700; font-size: 14px">建议反馈</span>
                        <span>在此反馈您对苍穹云的任何建议，苍穹云未来会更好</span>
                    </div>
                    <img src="../../public/img/fot/7.png" alt="" class="buttom-box-item-top-right"/>   
                </div>
                <div class="buttom-box-item-but">聆听体验反馈</div>
            </div>
        </div>
        <!-- footer -->
        <footer class="footer" ref="fotter">
            <div class="footer-top">
                <div>
                    <img src="../../public/img/fot/1.png" alt="" />
                    <span>7*24小时服务</span>
                </div>
                <div>
                    <img src="../../public/img/fot/2.png" alt="" />
                    <span>免费备案</span>
                </div>
                <div>
                    <img src="../../public/img/fot/3.png" alt="" />
                    <span>自助退订</span>
                </div>
                <div>
                    <img src="../../public/img/fot/4.png" alt="" />
                    <span>全周期专业服务</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { headerList, ITlist, tablelist, yunlsit } from "./datas/index";
import Swioer from "./components/Swiper.vue";
export default {
    name: "Home",
    components: {
        Swioer,
    },
    data() {
        return {
            yunlsit,
            headerList,
            tablelist,
            ITlist,
            platformIndex: 2,
            headerIndex: 0,
            opacity: 1,
            tabletIndex: 0,
            show: true,
            show1: true,
            mouseenter1: true,
            mouseenter2: true,
            isMouseleaveButtom: true,
            mouseenterButtomIndex: null,
            offsetWidths: 0,
            ScrollTopArr: [],
            detailsTopVytsd:false,
            deitals:false,
            detailsTopIndex:0,
            detailsIndex:0,
            detailsButtoms:false
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
        onClickHeader(i){
            if(i!=4) this.headerIndex = i;
            if(i == 0) {
                location.reload([false])
            }else if(i == 1) {
                window.scrollTo({ top: this.ScrollTopArr[0], left: 0, behavior: 'smooth' })
            }else if(i == 2) {
                window.scrollTo({ top: this.ScrollTopArr[1], left: 0, behavior: 'smooth' })
            }else if(i == 3) {
                window.scrollTo({ top: this.ScrollTopArr[2], left: 0, behavior: 'smooth' })
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
            this.detailsButtoms = false
        },
        detailsEnter(index){
            this.detailsIndex = index;
            this.detailsButtoms = true
            console.log(2);
        },
        // 鼠标离开
        mouseleave(type) {
            if (type == 1) {
                this.mouseenter1 = true;
            } else {
                this.mouseenter2 = true;
            }
        },
        clickEvent(i) {
            if (this.platformIndex == i) return;
            this.platformIndex = i;
            this.show1 = false;
            setTimeout(() => {
                this.show1 = true;
            });
        },
        mouseenter(type) {
            if (type == 1) {
                this.mouseenter1 = false;
            } else {
                this.mouseenter2 = false;
            }
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
        mouseleaveButtom() {
            this.isMouseleaveButtom = true;
        },
        mouseenterButtom(index, e) {
            this.mouseenterButtomIndex = index;
            this.isMouseleaveButtom = false;
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
    .layout-cil {
        width: 962px;
        margin: 0 auto;
    }
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
    main {
        .it {
            margin-top: 16px;
            display: flex;
            .it-box {
                background: #f8f8f8;
                width: 472px;
                box-sizing: border-box;
                height: 196px;

                cursor: pointer;
                .it-box-top2 {
                    color: #ffffff;
                    background: #be8c4b;
                    width: 100%;
                    height: 100%;
                    padding: 22px 43px 20px 43px;
                    box-sizing: border-box;
                    > ul > li {
                        font-size: 14px !important;
                    }
                    line-height: 22px;
                    animation: identifier 0.5s linear;
                }
                @keyframes identifier {
                    from {
                        opacity: 0.5;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .it-box-lable {
                    font-weight: bold;
                    font-family: PingFang SC-Medium, PingFang SC;
                    font-size: 20px;
                    line-height: 28px;
                }
                .it-box-text {
                    color: #666666;
                    font-size: 14px;

                    line-height: 22px;
                    margin-top: 4px;
                }
            }
            .it-box-img {
                width: 48px;
                height: 48px;
                margin: 0 16px 0 24px;
            }
            .it-box-top {
                display: flex;
                margin-top: 32px;
            }
            .it-buttom {
                cursor: pointer;
                width: 88px;
                padding: 4px 0;
                background: #be8c4b;
                color: #ffffff;
                line-height: 22px;
                text-align: center;
                margin: 44px 0 36px 88px;
                font-size: 14px;
            }
        }
    }
    .platform {
        color: #666666;
        span {
            font-size: 14px;
        }
        font-weight: 400;
        font-family: PingFang SC-Regular, PingFang SC;
        height: 338px;
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
                    background: url(../../public/img/Group1.png) no-repeat;
                    background-size: cover;
                    color: #999999;
                }
                .table-left-bck2 {
                    background: url(../../public/img/Group2.png) no-repeat;
                    background-size: cover;
                    color: #000000;
                }
                .table-left-bck3 {
                    background: url(../../public/img/Group4.png) no-repeat;
                    background-size: cover;
                    color: #000000;
                }
                .table-left-bck4 {
                    background: url(../../public/img/Group3.png) no-repeat;
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
                            height: 71.1px;
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
    .cang-qiaong {
        margin: 80px auto 0 auto;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        :nth-child(1) {
            font-size: 28px;
            line-height: 36px;
        }
        :nth-child(2) {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 16px;
        }
        :nth-child(3) {
            font-size: 12px;
            color: #666666;
            b {
                color: #000000;
            }
        }
        :nth-child(4) {
            font-size: 12px;
            color: #666666;
            b {
                color: #000000;
            }
        }
        > div {
            text-align: center;
        }
    }
    .count-list {
        display: flex;
        justify-content: space-between;
        width: 962px;
        margin: 32px auto;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            .lable {
                font-weight: bold;
                color: #000000;
                font-size: 28px;
                line-height: 36px;
            }
            .title {
                color: #888888;
                font-size: 12px;
                line-height: 20px;
                margin-top: 4px;
            }
            .color {
                color: #bd8c4a;
            }
        }
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
    .buttom-box {
        display: flex;
        flex-wrap: wrap;
        width: 962px;
        margin: 32px auto 0 auto;
        .bd1 {
            border-top: 1px solid #dfdfdf;
            border-bottom: 1px solid #dfdfdf;
        }
        .bd2 {
            border-left: 1px solid #dfdfdf;
        }
        > div {
            width: 480px;
            height: 150px;
        }
        .buttom-box-item23 {
            width: 480px;
            height: 150px;
        }
        @keyframes identifierbuttom {
            from {
                opacity: 0.5;
            }
            to {
                opacity: 1;
            }
        }
        .buttom-box-item-but-lable {
            margin-right: 8px;
            position: relative;
            cursor: pointer;
        }
        ._nowas {
            margin-right: 0;
        }
        
        .buttom-box-item {
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            box-sizing: border-box;
            &-top {
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &-left {
                    display: flex;
                    flex-direction: column;
                    font-size: 12px;
                    font-family: PingFang SC-Regular, PingFang SC;
                    :nth-child(1) {
                        color: #000000;
                        line-height: 22px;
                    }
                    :nth-child(2) {
                        color: #666666;
                        line-height: 20px;
                        margin-top: 12px;
                    }
                }
                &-right {
                    width: 48px;
                    height: 48px;
                }
            }
            &-but {
                color: #bd8c4a;
                font-size: 12px;
                line-height: 20px;
            }
        }
    }
    .footer {
        width: 100%;
        height: 300px;
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
        &-c {
            width: 100%;
            border-top: 1px solid rgba(223, 223, 223, 0.1);
            border-bottom: 1px solid rgba(223, 223, 223, 0.1);
            margin-bottom: 24px;
        }
        &-cont {
            width: 1440px;
            margin: 0 auto;
            height: 52px;
            display: flex;
            align-items: center;
            > span {
                color: #999999;
                font-size: 12px;
                margin: 0 20px;
            }
        }
        &-b {
            line-height: 18px;
            color: #999999;
            text-align: center;
            margin-top: 72px;
        }
    }
}
</style>
