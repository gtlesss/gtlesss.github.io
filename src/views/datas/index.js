
export const tablelist = [
    {
        name: "云计算",
        img: require("../../../public/img/table/1.png"),
        children:{
            tit:'云主机在线扩缩云计算服务，整合计算、存储与网络资源，实现分钟级交付。',
            code:['云主机交付','回收云主机','云主机规格变更','添加磁盘','查看云主机日志','重启/关闭云主机','修改云主机名字'],
            type:1,
            list:[
                {
                    img:require("../../../public/img/tables/1/1.png"),
                    lable:'云主机',
                    value:'云主机在线扩缩云计算服务，整合计算、存储与网络资源，实现分钟级交付。',
                    buttonType:1
                },
                {
                    img:require("../../../public/img/tables/1/2.png"),
                    lable:'裸金属',
                    value:'云上物理服务器，结合云主机，助力业务在核心数据库、大数据、高性能计算等场景关键业务云上创新 ',
                    buttonType:1
                },
                {
                    img:require("../../../public/img/tables/1/3.png"),
                    lable:'GPU服务器',
                    value:'提供 GPU 算力的物理机，超强算力，服务于深度学习、科学计算、图形可视化、视频处理多种应用场景。',
                    buttonType:1
                },
                {
                    img:require("../../../public/img/tables/1/4.png"),
                    lable:'操作系统',
                    value:'提供云主机的操作系统，支持常用 Linux 发行版和 Windows Server 版本，提供 yum 源、NTP server，提供操作系统相关问题技术支持 ',
                    buttonType:1
                },
                {
                    img:require("../../../public/img/tables/1/5.png"),
                    lable:'通用软件',
                    value:'或称中间件，介于应用系统和系统软件。使用系统软件的基础服务，衔接网络应用系统的不同应用，完成资源共享、功能共享。 ',
                    buttonType:1
                }
            ]
        }
    },
    {
        name: "储存",
        img: require("../../../public/img/table/2.png"),
        children:{
            tit:' 稳定、安全、高性能的存储产品。以及不同类型、不同使用场景的存储选型参考及解决方案',
            code:['块存储','NAS存储'],
            type:5,
            list:[
                {
                    img:require("../../../public/img/tables/2/1.png"),
                    lable:'块存储',
                    value:'提供低时延、持久性、高可靠的块级存储；适用面向数据库，虚拟化类关键交易类应用结构化数据存储，对性能及可靠性要求高的场景；',
                    buttonType:2
                },
                {
                    img:require("../../../public/img/tables/2/2.png"),
                    lable:'NAS存储',
                    value:'适用面向邮件、文档管理类非结构化/半结构化文件应用数据存储，对性能要求较高，数据规模相对较小（数据文件量在一百万以内',
                    buttonType:2
                }
            ]
        }
    },
    {
        name: "网络",
        img: require("../../../public/img/table/3.png"),
        children:{
            tit:'基于网络各基础资源软件平台进行顶层抽象，完成对各平台的统一认证登录，通过对接各底层平台促进整网的自动化能力提升，结合流转审批流程完成网络自服务场景的建设。平台支持全局监控告警、日志审计、变更审计、自动化配置下发、认证授权管理等特性，是公司网络自服务的统一平台。 ',
            code:['负载均衡服务','域名解析服务','访问关系服务','网络接入服务 '],
            type:2,
            list:[
                {
                    img:require("../../../public/img/tables/3/1.png"),
                    lable:'多厂商平台统一门户管理',
                    value:'',
                    buttonType:3
                },
                {
                    img:require("../../../public/img/tables/3/2.png"),
                    lable:'自动化运维服务目录',
                    value:'',
                    buttonType:3
                },
                {
                    img:require("../../../public/img/tables/3/3.png"),
                    lable:'网络统一监控与运营数据分析',
                    value:'',
                    buttonType:3
                }
            ],
            img:require("../../../public/img/tables/3/4.png"),
            imgtype:1
        }
    },
    {
        name: "容器服务",
        img: require("../../../public/img/table/4.png"),
        children:{
            tit:'基于 K8S （中金自有）的容器基础设施平台',
            code:['容器项目申请','项目配额扩容','项目资源回收','NFS持久化卷','成员与角色管理','监控服务','告警通知','日志查询','服务暴露 '],
            type:2,
            list:[
                {
                    img:require("../../../public/img/tables/4/1.png"),
                    lable:'采用优质的K8S认证服务提供商',
                    value:'',
                    buttonType:3
                },
                {
                    img:require("../../../public/img/tables/4/2.png"),
                    lable:'功能优势',
                    value:'',
                    buttonType:3
                }
            ],
            img:require("../../../public/img/tables/4/3.png"),
            imgtype:2
        }
    },
    {
        name: "数据库",
        img: require("../../../public/img/table/5.png"),
        children:{
            tit:'在算力资源之上交付数据库资源，支持oracle、mysql等数据库类型，并提供后续相关技术支持 ',
            code:['支持oracle','myspl'],
            type:5,
            list:[
                {
                    img:require("../../../public/img/tables/5/1.png"),
                    lable:'oracle',
                    value:'Oracle是世界上使用最广泛的关系数据库管理系统，系统可移植性好、使用方便、功能强，是一种高效率的、可靠性好的、适应高吞吐量的数据库方案，适用于核心交易系统。 ',
                    buttonType:5,
                    test:'开放性 / 安全性 / 高性能 / 高生产率 / 使用风险低'
                },
                {
                    img:require("../../../public/img/tables/5/2.png"),
                    lable:'mysql',
                    value:'MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS应用软件之一，现属于Oracle旗下产品，提供免费的社区版供用户使用 ',
                    buttonType:5,
                    test:'简单易用 / 成本低 / 轻量小巧 / 高兼容性 / 速度快 / 服务稳'
                }
            ]
        }
    },
    {
        name: "备份",
        img: require("../../../public/img/table/6.png"),
        children:{
            tit:'目前公司的备份系统以 Veritas Netbackup 备份软件（简称NBU）为核心，配备Veritas备份一体机或DELL x86服务器作为NBU备份服务器，外连物理磁带库设备，来实现系统数据在线+离线的统一备份。',
            code:['数据备份','数据恢复','备份方案咨询'],
            type:2,
            list:[
                {
                    img:require("../../../public/img/tables/6/1.png"),
                    lable:'高兼容性',
                    value:'',
                    buttonType:3
                },
                {
                    img:require("../../../public/img/tables/6/2.png"),
                    lable:'低成本',
                    value:'',
                    buttonType:3
                },
                {
                    img:require("../../../public/img/tables/6/3.png"),
                    lable:'高性能',
                    value:'',
                    buttonType:3
                },{
                    img:require("../../../public/img/tables/6/4.png"),
                    lable:'安全性',
                    value:'',
                    buttonType:3
                },
                {
                    img:require("../../../public/img/tables/6/5.png"),
                    lable:'离线归档',
                    value:'',
                    buttonType:3
                }
            ]
        }
    },
    {
        name: "运维服务",
        img: require("../../../public/img/table/9.png"),
        children:{
            tit:'',
            code:[],
            type:6,
            list:[
                {
                    img:require("../../../public/img/tables/7/1.png"),
                    lable:'堡垒机',
                    value:'堡垒机，是对数据中心运维操作行为进行管控和审计的系统，通过身份认证、访问授权、行为控制和安全审计，实现对运维操作行为的管控、审计和分析。',
                    buttonType:4
                },
                {
                    img:require("../../../public/img/tables/7/2.png"),
                    lable:'监控',
                    value:'主机：可提供OS层面相关指标，包括ping、cpu、内存、磁盘空间等使用情况 ;告警通知，支持邮件、短信；阈值调整 。',
                    buttonType:1
                }, {
                    img:require("../../../public/img/tables/7/3.png"),
                    lable:'portal-cmdb',
                    value:'CMDB查询服务，CMDB包含了配置项全生命周期的信息以及配置项之间的关系，可提供各配置项的查询服务 ',
                    buttonType:1
                }, {
                    img:require("../../../public/img/tables/7/4.png"),
                    lable:'智能日志',
                    value:'智能日志中心平台可一站式解决日志数据的采集、清洗、存储、搜索、分析、告警、可视化及报表等需求，应用机器虚线、AI智能算法，快速预测和定位故障，实时展现业务运行健康度，提升企业IT智能运营水平。 ',
                    buttonType:1
                }, {
                    img:require("../../../public/img/tables/7/5.png"),
                    lable:'DNS解析服务',
                    value:'提供安全、快速、稳定、可靠的权威DNS解析管理服务。',
                    buttonType:4
                }, {
                    img:require("../../../public/img/tables/7/6.png"),
                    lable:'SSL证书服务',
                    value:'SSL证书（SSL Certificates）为网站和移动应用（APP）及小程序提供数据 HTTPS 加密协议访问，保障数据的安全。',
                    buttonType:1
                }, {
                    img:require("../../../public/img/tables/7/7.png"),
                    lable:'安全',
                    value:'堡垒机，是对数据中心运维操作行为进行管控和审计的系统，通过身份认证、访问授权、行为控制和安全审计，实现对运维操作行为的管控、审计和分析。',
                    buttonType:4
                }
            ]
        }
    },
];
export const ITlist = [
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

export  const headerList = [
    "主页",
    "服务目录",
    "解决方案",
    "选型指引",
    "费用评估",
    "联系方式",
];
