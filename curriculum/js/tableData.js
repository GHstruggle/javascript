
/**
 * 表头数据
 */
//设置属性 
const styles = {
    'width': '100%',
    'cellspacing': '0',
    'cellpadding': '0',
    'boder': '0',
    'id': 'table-data-wrap'
}
const tableTheadData = [
    { label: '头像' },
    { label: '姓名' },
    { label: '性别' },
    { label: '年龄' },
    { label: '手机号'},
    { label: '国籍' },
    { label: '爱好',
      width: '200',
      id: 'aaa'
    },
    { label: '头衔' },
    { label: '操作' }
];


/**
 * 主体数据
 */
const tableTbodyData = [
    {
        face: {
            gender: 'boy',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'
        },
        name: {
            trueName: '小龙女',
            nickName: '昵称：夏末的晨曦'
        },
        age: {
            number: 25
        },
        phone: {
            code: '+86',
            number: 1333333333
        },
        country: {
            National_flag: 'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',
            name: '中国',
            color: 'red'
        },
        like: [
            {tag: '跑步', color: '#468d9c'},
            {tag: '看电影', color: '#457d9c'},
            {tag: '二次元', color: '#446d9c'},
            {tag: '小猫小狗', color: '#434d9c'},
            {tag: '小说', color: '#423d9c'}
        ],
        title: {
            titleName: '小白',
            level: 2 
        }
    },
    {
        face: {
            gender: 'girl',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'
        },
        name: {
            trueName: '小龙女',
            nickName: '昵称：夏末的晨曦'
        },
        age: {
            number: 25
        },
        phone: {
            code: '+86',
            number: 1333333333
        },
        country: {
            National_flag: 'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',
            name: '中国',
            color: 'red'
        },
        like: [
            {tag: '跑步', color: '#468d9c'},
            {tag: '看电影', color: '#457d9c'},
            {tag: '二次元', color: '#446d9c'},
            {tag: '小猫小狗', color: '#434d9c'},
            {tag: '小说', color: '#423d9c'}
        ],
        title: {
            titleName: '小白',
            level: 1 
        }
    },
]