<template>
  <div>
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
  </div>
</template>

<script>
export default {
    name:'CangQiaong'
}
</script>

<style lang='less' scoped>
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
</style>