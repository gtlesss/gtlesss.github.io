
export const tablelist = [
    {
        name: "云计算",
        img: require("../../../public/img/table/1.png"),
        url:'',
        basurl:'',
        children:{
            tit:'云主机在线扩缩云计算服务，整合计算、存储与网络资源，实现分钟级交付。',
            code:['云主机交付','回收云主机','云主机规格变更','添加磁盘','查看云主机日志','重启/关闭云主机','修改云主机名字'],
            type:1,
            typebut:1,
            list:[
                {
                    img:require("../../../public/img/tables/1/1.png"),
                    lable:'云主机',
                    value:'云主机在线扩缩云计算服务，整合计算、存储与网络资源，实现分钟级交付。',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=vm-service&url=/server/list',
                    basurl:'',
                    titList:[
                        {
                            tit:'云主机资源池',
                            url:'https://rbnqidugqp.feishu.cn/wiki/wikcn20fZCAjcGCT9QcWfWRMAYd'
                        }
                    ]
                },
                {
                    img:require("../../../public/img/tables/1/2.png"),
                    lable:'裸金属',
                    value:'云上物理服务器，结合云主机，助力业务在核心数据库、大数据、高性能计算等场景关键业务云上创新 ',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/?_module=physical-machine&url=/environment/product',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/1/3.png"),
                    lable:'GPU服务器',
                    value:'提供 GPU 算力的物理机，超强算力，服务于深度学习、科学计算、图形可视化、视频处理多种应用场景。',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=vm-service&url=/server/list',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/1/4.png"),
                    lable:'操作系统',
                    value:'提供云主机的操作系统，支持常用 Linux 发行版和 Windows Server 版本，提供 yum 源、NTP server，提供操作系统相关问题技术支持 ',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=vm-service&url=/catalog-product/list',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/1/5.png"),
                    lable:'通用软件',
                    value:'或称中间件，介于应用系统和系统软件。使用系统软件的基础服务，衔接网络应用系统的不同应用，完成资源共享、功能共享。 ',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=vm-service&url=/catalog-product/list',
                    basurl:'',
                    titList:[
                        {
                            tit:'中间件交付',
                            url:'https://rbnqidugqp.feishu.cn/wiki/wikcn2Rw7DaXAG9zXN8UfmlCXbf'
                        }
                    ]
                }
            ]
        }
    },
    {
        name: "存储",
        img: require("../../../public/img/table/2.png"),
        url:'',
        basurl:'',
        children:{
            tit:' 稳定、安全、高性能的存储产品。以及不同类型、不同使用场景的存储选型参考及解决方案',
            code:['块存储','对象存储','云主机','NAS存储'],
            type:5,
            list:[
                {
                    img:require("../../../public/img/tables/2/1.png"),
                    lable:'块存储',
                    value:'提供低时延、持久性、高可靠的块级存储；适用面向数据库，虚拟化类关键交易类应用结构化数据存储，对性能及可靠性要求高的场景；',
                    buttonType:2,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/2/2.png"),
                    lable:'对象存储',
                    value:'适用面向海量文件（数据文件量在一百万以上），互联网等应用的非结构化文件数据存储，对数据安全、合规、扩展性较高要求的场景。',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=ticket-center&url=/ticket/apply',
                    basurl:'https://note.youdao.com/s/JRKnHHpH',
                },
                {
                    img:require("../../../public/img/tables/2/3.png"),
                    lable:'分布式存储',
                    value:'适用面向大数据分析，数仓等大规模数据平台应用，对扩展性要求高的场景',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=ticket-center&url=/ticket/apply',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/2/4.png"),
                    lable:'NAS存储',
                    value:'适用面向邮件、文档管理类非结构化/半结构化文件应用数据存储，对性能要求较高，数据规模相对较小（数据文件量在一百万以内',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=ticket-center&url=/ticket/apply',
                    basurl:'',
                }
            ]
        }
    },
    {
        name: "网络",
        img: require("../../../public/img/table/3.png"),
        url:'http://cicccloud.cicc.com.cn/dashboard/?_module=vm-service&url=/server/list',
        basurl:'',
        titList:[
            {
                tit:'网络知识图谱(架构版)',
                url:'https://rbnqidugqp.feishu.cn/docs/doccnoqeWPXOMhzzFfiBHOCKTfh'
            },
            {
                tit:'私有云NSX知识库',
                url:'https://rbnqidugqp.feishu.cn/docs/doccnm7bIxKJvvmwVGTQi5iq8wf'
            }
        ],
        children:{
            tit:'基于网络各基础资源软件平台进行顶层抽象，完成对各平台的统一认证登录，通过对接各底层平台促进整网的自动化能力提升，结合流转审批流程完成网络自服务场景的建设。平台支持全局监控告警、日志审计、变更审计、自动化配置下发、认证授权管理等特性，是公司网络自服务的统一平台。 ',
            code:['负载均衡服务','域名解析服务','访问关系服务','网络接入服务 '],
            type:2,
            list:[
                {
                    img:require("../../../public/img/tables/3/1.png"),
                    lable:'多厂商平台统一门户管理',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/3/2.png"),
                    lable:'自动化运维服务目录',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/3/3.png"),
                    lable:'网络统一监控与运营数据分析',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                }
            ],
            img:require("../../../public/img/tables/3/4.png"),
            imgtype:1
        }
    },
    {
        name: "容器服务",
        img: require("../../../public/img/table/4.png"),
        url:'http://cicccloud.cicc.com.cn/dashboard/?_module=container-service&url=/dashboard',
        basurl:'https://rbnqidugqp.feishu.cn/wiki/wikcnxgsoKJWEY5ge8KJddSajAh',
        titList:[
            {
                tit:'容器平台',
                url:'https://rbnqidugqp.feishu.cn/wiki/wikcnxgsoKJWEY5ge8KJddSajAh'
            }
        ],
        children:{
            tit:'基于 K8S （中金自有）的容器基础设施平台',
            code:['容器项目申请','项目配额扩容','项目资源回收','NFS持久化卷','成员与角色管理','监控服务','告警通知','日志查询','服务暴露 '],
            type:2,
            list:[
                {
                    img:require("../../../public/img/tables/4/1.png"),
                    lable:'采用优质的K8S认证服务提供商',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/4/2.png"),
                    lable:'功能优势',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                }
            ],
            img:require("../../../public/img/tables/4/3.png"),
            imgtype:2
        }
    },
    {
        name: "数据库",
        img: require("../../../public/img/table/5.png"),
        url:'http://10.110.81.120/',
        basurl:'',
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
                    // test:'开放性 / 安全性 / 高性能 / 高生产率 / 使用风险低',
                    test:['开放性','安全性','高性能','高生产率','使用风险低'],
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/5/2.png"),
                    lable:'mysql',
                    value:'MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS应用软件之一，现属于Oracle旗下产品，提供免费的社区版供用户使用 ',
                    buttonType:5,
                    // test:'简单易用 / 成本低 / 轻量小巧 / 高兼容性 / 速度快 / 服务稳',
                    test:['简单易用','成本低','轻量小巧','高兼容性','速度快','服务稳',],
                    testl:6,
                    url:'',
                    basurl:'',
                }
            ]
        }
    },
    {
        name: "备份",
        img: require("../../../public/img/table/6.png"),
        url:'https://192.168.150.57/opscenter',
        basurl:'',
        children:{
            tit:'目前公司的备份系统以 Veritas Netbackup 备份软件（简称NBU）为核心，配备Veritas备份一体机或DELL x86服务器作为NBU备份服务器，外连物理磁带库设备，来实现系统数据在线+离线的统一备份。',
            code:['数据备份','数据恢复','备份方案咨询'],
            type:2,
            list:[
                {
                    img:require("../../../public/img/tables/6/1.png"),
                    lable:'高兼容性',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/6/2.png"),
                    lable:'低成本',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/6/3.png"),
                    lable:'高性能',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },{
                    img:require("../../../public/img/tables/6/4.png"),
                    lable:'安全性',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/6/5.png"),
                    lable:'离线归档',
                    value:'',
                    buttonType:3,
                    url:'',
                    basurl:'',
                }
            ]
        }
    },
    {
        name: "运维服务",
        img: require("../../../public/img/table/9.png"),
        url:'',
        basurl:'',
        children:{
            tit:'',
            code:[],
            type:6,
            list:[
                {
                    img:require("../../../public/img/tables/7/1.png"),
                    lable:'堡垒机',
                    value:'堡垒机，是对数据中心运维操作行为进行管控和审计的系统，通过身份认证、访问授权、行为控制和安全审计，实现对运维操作行为的管控、审计和分析。',
                    buttonType:4,
                    url:'https://ciccmc.cicc.com.cn/',
                    basurl:'',
                },
                {
                    img:require("../../../public/img/tables/7/2.png"),
                    lable:'监控',
                    value:'主机：可提供OS层面相关指标，包括ping、cpu、内存、磁盘空间等使用情况 ;告警通知，支持邮件、短信；阈值调整 。',
                    buttonType:1,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=ticket-center&url=/ticket/apply',
                    basurl:'',
                }, {
                    img:require("../../../public/img/tables/7/3.png"),
                    lable:'portal-cmdb',
                    value:'CMDB查询服务，CMDB包含了配置项全生命周期的信息以及配置项之间的关系，可提供各配置项的查询服务 ',
                    buttonType:1,
                    url:'http://cmdb.cicc.com.cn/',
                    basurl:'',
                }, {
                    img:require("../../../public/img/tables/7/4.png"),
                    lable:'智能日志',
                    value:'智能日志中心平台可一站式解决日志数据的采集、清洗、存储、搜索、分析、告警、可视化及报表等需求，应用机器虚线、AI智能算法，快速预测和定位故障，实时展现业务运行健康度，提升企业IT智能运营水平。 ',
                    buttonType:1,
                    url:'http://10.110.163.110/',
                    basurl:'',
                    urlList:[
                        {
                            tit:'日志易',
                            url:'http://10.110.163.110/'
                        },
                        {
                            tit:'容器',
                            url:'http://10.110.160.120/'
                        }
                    ],
                }, {
                    img:require("../../../public/img/tables/7/5.png"),
                    lable:'DNS解析服务',
                    value:'提供安全、快速、稳定、可靠的权威DNS解析管理服务。',
                    buttonType:4,
                    url:'',
                    basurl:'',
                }, {
                    img:require("../../../public/img/tables/7/6.png"),
                    lable:'SSL证书服务',
                    value:'SSL证书（SSL Certificates）为网站和移动应用（APP）及小程序提供数据 HTTPS 加密协议访问，保障数据的安全。',
                    buttonType:1,
                    url:'',
                    basurl:'',
                }, {
                    img:require("../../../public/img/tables/7/7.png"),
                    lable:'安全',
                    value:'资产管理、入侵检测、风险预警,精准预测、实时监测、快速检测、多维分析、自动响应,定位实时入侵事件，持续隔离与阻断恶意行为。可在知识库了解更多',
                    buttonType:4,
                    url:'http://cicccloud.cicc.com.cn/dashboard/?_module=vm-service&url=/catalog-product/list',
                    basurl:'',
                    titList:[
                        {
                            tit:'主机安全防护能力',
                            url:'https://rbnqidugqp.feishu.cn/docs/doccnDISTAEEwq2phsKBRcn9qfc'
                        },
                        {
                            tit:'应用系统防火墙(WAF)监控',
                            url:'https://rbnqidugqp.feishu.cn/docs/doccnM0CTJwXO4QufRQPpg9AmUd'
                        },
                        {
                            tit:'系统漏洞修复',
                            url:'https://rbnqidugqp.feishu.cn/docs/doccnwDO3YH3PB9u3XpsdXRvZOc'
                        }
                    ]
                }
            ]
        }
    },
];
export const headerList = [
    {
        tit:"主页",
        url:''
    },
    {
        tit:"服务目录",
        url:''
    },
    {
        tit:"解决方案",
        url:''
    },
    {
        tit:"选型指引",
        url:''
    },
    {
        tit: "费用评估",
        url:''
    },
    {
        tit :"联系方式",
        url:''
    }
];
export const yunlsit = [
    {   
        lable:'云主机',
        children:[
            {name:'简婧玮',tel:'18910893163',url:'Jingwei.Jian@cicc.com.cn'}
        ]
    },
    {   
        lable:'裸金属',
        children:[
            {name:'刘洋',tel:'18613831525 ',url:'Jingwei.Jian@cicc.com.cn'},
            {name:'高满',tel:'18600943657 ',url:'Man.Gao@cicc.com.cn'}
        ]
    },
    {   
        lable:'容器',
        children:[
            {name:'鲁非',tel:'13811632075 ',url:'Fei.Lu@cicc.com.cn'},
            {name:'严飞',tel:'15600748776',url:'Fei.Yan@cicc.com.cn'},
        ]
    },
    {   
        lable:'天梯(CD)',
        children:[
            {name:'鲁非',tel:'13811632075 ',url:'Fei.Lu@cicc.com.cn'},
            {name:'曲植',tel:'13488642338',url:'Zhi.Qu@cicc.com.cn'},
        ]
    },
    {   
        lable:'GPU服务',
        children:[
            {name:'刘洋',tel:'18613831525',url:'Jingwei.Jian@cicc.com.cn'},
            {name:'高满',tel:'18600943657 ',url:'Man.Gao@cicc.com.cn'}
        ]
    },
    {   
        lable:'操作系统',
        children:[
            {name:'刘洋',tel:'18613831525',url:'Jingwei.Jian@cicc.com.cn'},

        ]
    },
    {   
        lable:'通用软件',
        children:[
            {name:'曲植',tel:'13488642338',url:'Zhi.Qu@cicc.com.cn'},

        ]
    },
    {   
        lable:'存储',
        children:[
            {name:'刘帅',tel:'18647144496',url:'Shuai.Liu@cicc.com.cn'},

        ]
    },
    {   
        lable:'网络',
        children:[
            {name:'梁红伟',tel:'13910195082',url:'Hongwei.Liang@cicc.com.cn'},

        ]
    },
    
    {   
        lable:'数据库',
        children:[
            {name:'杨盼',tel:'18910968781',url:'Pan.Yang@cicc.com.cn'},
            {name:'刘帅',tel:'18647144496',url:'Shuai.Liu@cicc.com.cn'},

        ]
    },
    {   
        lable:'备份',
        children:[
            {name:'杨盼',tel:'18910968781',url:'Pan.Yang@cicc.com.cn'},
           
        ]
    },
    {   
        lable:'堡垒机',
        children:[
            {name:'杨文杰',tel:'15989426333',url:'Wenjie.Yang@cicc.com.cn'},
           
        ]
    },
    {   
        lable:'监控',
        children:[
            {name:'刘洋',tel:'18613831525',url:'Jingwei.Jian@cicc.com.cn'},
            {name:'刘帅',tel:'18647144496',url:'Shuai.Liu@cicc.com.cn'},
            {name:'杨盼',tel:'18910968781',url:'Pan.Yang@cicc.com.cn'},
            {name:'严飞',tel:'15600748776',url:'Fei.Yan@cicc.com.cn'},
            
        ]
    },
    {   
        lable:'日志',
        children:[
            {name:'杨文杰',tel:'15989426333',url:'Wenjie.Yang@cicc.com.cn'},
        ]
    },
    
    {   
        lable:'安全',
        children:[
            {name:'曲植',tel:'13488642338',url:'Zhi.Qu@cicc.com.cn'},
            {name:'程乾',tel:'13801309038',url:'Qian.Cheng@cicc.com.cn'},
            
        ]
    },
    {   
        lable:'SSJ证书服务',
        children:[
            {name:'刘洋',tel:'18613831525',url:'Jingwei.Jian@cicc.com.cn'},
           
        ]
    },
     {   
        lable:'域名DNS服务',
        children:[
            {name:'刘洋',tel:'18613831525 ',url:'Jingwei.Jian@cicc.com.cn'},
        ]
    },
]