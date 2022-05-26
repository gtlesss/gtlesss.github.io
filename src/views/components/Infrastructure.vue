<template>
    <div class="it">
        <div class="it-box" @mouseleave="mouseleave(1)" >
            <div v-if="mouseenter1">
                <div class="it-box-top">
                    <img src="../../../public/img/1.png" alt="" class="it-box-img"/>
                    <div>
                        <div class="it-box-lable">支撑业务快速发展的IT 基础设施</div>
                        <div class="it-box-text">多云融合 / 运营高效 / 开放共享</div>
                    </div>
                </div>
                <div class="it-buttom" @mouseenter="mouseenter(1)">了解详情</div>
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
        <div class="it-box" style="margin-left: 16px" @mouseleave="mouseleave(2)" >
            <div v-if="mouseenter2">
                <div class="it-box-top">
                    <img src="../../../public/img/2.png" alt="" class="it-box-img"/>
                    <div>
                        <div class="it-box-lable">丰富的 IAAS 资源</div>
                        <div class="it-box-text">私有云 / 容器资源池 / 公有云 / 云管平台 /运维服务</div>  
                    </div>
                </div>
                <div class="it-buttom" @mouseenter="mouseenter(2)">了解详情</div>
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
</template>

<script>
export default {
    name:'infrastructure',
    data () {
        return {
            mouseenter1: true,
            mouseenter2: true,
        }
    },
    methods:{
        // 鼠标离开
        mouseleave(type) {
            if (type == 1) {
                this.mouseenter1 = true;
            } else {
                this.mouseenter2 = true;
            }
        },
          mouseenter(type) {
            if (type == 1) {
                this.mouseenter1 = false;
            } else {
                this.mouseenter2 = false;
            }
        },
    }
}
</script>

<style lang='less' scoped>
     .it {
            margin-top: 16px;
            display: flex;
            .it-box {
                background: #f8f8f8;
                width: 472px;
                box-sizing: border-box;
                height: 196px;

                
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
</style>