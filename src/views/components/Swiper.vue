<template>
    <div class="swiper">
        <!--基础存放容器-->
        <div class="swiper-container">
            <!-- 需要进行轮播的部分 -->
            <div class="swiper-wrapper">
                <!-- 每个节点 -->
                <!-- <div class="swiper-slide">
                    <div class="swiper-slide-left">
                        <div class="swiper-slide-lable">
                            支撑业务快速发展的IT 基础设施
                        </div>
                        <div class="swiper-slide-text">
                            伴随中金「数字化、区域化、国际化」的战略推进，「业务系统」开发规模、「
                            IT 基础设施」规模都在快速增长。IT
                            基础设施服务、治理压力越来越大，现有「IT
                            服务管理模式、工具」需快速变化，支撑业务快速发展。
                        </div>
                        <span class="swiper-slide-but">了解详情</span>
                    </div>
                    <img :src="require('../../../public/img/swiper-2.jpg')" alt="" class="swiper-slide-img" />
                </div> -->
                <div
                    v-for="(item, index) in list"
                    :key="index"
                    class="swiper-slide"
                >
                    <img :src="item.img" alt="" class="swiper-slide-img" />
                </div>
            </div>
            <!--如果需要使用分页器-->
            <div class="swiper-pagination swiper-pagination-white"></div>
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </div>
    </div>
</template>

<script>
const list = [
    {
        img: require("../../../public/img/banner-1/banner-01.png"),
    },
    {
        img: require("../../../public/img/banner-1/banner-02.png"),
    },
    {
        img: require("../../../public/img/banner-1/banner-03.png"),
    },
];
import swiper from "swiper";
export default {
    name: "swiper",
    data() {
        return {
            list,
        };
    },
    mounted() {
        new Swiper(".swiper-container", {
            //设置轮播的循环方式
            loop: true,
            //设置自动播放间隔时间
            autoplay: 2000,
            // 轮播效果,默认为平滑轮播
            effect: "fade",
            fade: {
                crossFade: true,
            },
            //分页器
            pagination: ".swiper-pagination",
            paginationType: "bullets",
            paginationClickable: true,
            //前进后退按钮
            // prevButton: ".swiper-button-prev",
            // nextButton: ".swiper-button-next",
            // 用户中断轮播后续播
            autoplayDisableOnInteraction: false,
        });
    },
};
</script>

<style lang='less' scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper {
    width: 962px;
    margin: 0 auto;
    height: 430;
    background: #F8F8F8;
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        display: flex;
        justify-content: space-between;
        // padding-top: 21px;
        box-sizing: border-box;
        .swiper-slide-left {
            margin-top: 41px;
            width: 477px;
            .swiper-slide-lable {
                font-size: 32px;
                font-family: PingFang SC-Medium, PingFang SC;
                font-weight: 500;
                color: #000000;
                line-height: 40px;
            }
            .swiper-slide-text {
                font-size: 14px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
                line-height: 22px;
                margin: 16px 0 36px 0;
            }
            .swiper-slide-but {
                background: #be8c4b;
                width: 160px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                font-size: 16px;
            }
        }
    }
    .swiper-slide-img {
        object-fit: cover;
        image-rendering: -moz-crisp-edges; /* Firefox */
        image-rendering: -o-crisp-edges; /* Opera */
        image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    }
    .swiper-pagination {
        width: 110px;
        bottom: 70px;
        // position: absolute;
        // left: 174px;
    }
    ::v-deep.swiper-pagination-bullet {
        width: 26px;
        height: 4px;
        display: inline-block;
        border-radius: 0;
        background: #bd8c4a;
        margin-right: 4px;
        text-align: left;
    }
    ::v-deep.swiper-pagination-bullet-active {
        background-color: #be8c4b;
    }
}
</style>