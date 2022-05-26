<template>
  <div class="buttom-box">
    <div class="buttom-box-item23" @mouseleave="mouseleaveButtom()">
        <div class="buttom-box-item bd1" style=" border-right: 1px solid #dfdfdf; width: 100%; height: 100%; ">
            <div class="buttom-box-item-top">
                <div class="buttom-box-item-top-left">
                    <span style="font-weight: 700; font-size: 14px" >联系我们</span>
                    <span>如果你有需求，别犹豫现在拨打电话</span>
                </div>
                <img src="../../../public/img/fot/8.png" alt="" class="buttom-box-item-top-right"/> 
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
                                {{ _item.tel }} {{ _item.url }}
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
            <img src="../../../public/img/fot/5.png" alt="" class="buttom-box-item-top-right"/>  
        </div>
        <div class="buttom-box-item-but">
            鲁非&nbsp;&nbsp;Fei.Lu@cicc.com.cn
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
            <img src="../../../public/img/fot/6.png" alt=""  class="buttom-box-item-top-right"/>
        </div>
        <div class="buttom-box-item-but">帮助文档</div>
    </div>
    <div class="buttom-box-item bd2">
        <div class="buttom-box-item-top">
            <div class="buttom-box-item-top-left">
                <span style="font-weight: 700; font-size: 14px">建议反馈</span>
                <span>在此反馈您对苍穹云的任何建议，苍穹云未来会更好</span>
            </div>
            <img src="../../../public/img/fot/7.png" alt="" class="buttom-box-item-top-right"/>   
        </div>
        <div class="buttom-box-item-but">聆听体验反馈</div>
    </div>
</div>
</template>

<script>
import { yunlsit } from "../datas/index"
export default {
    name:'ButtomBox',
    data () {
        return {
            yunlsit,
            isMouseleaveButtom: true,
            mouseenterButtomIndex: null,
        }
    },
    methods:{
         mouseleaveButtom() {
            this.isMouseleaveButtom = true;
        },
        mouseenterButtom(index, e) {
            this.mouseenterButtomIndex = index;
            this.isMouseleaveButtom = false;
        },
    }
}
</script>

<style lang='less' scoped>
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
</style>