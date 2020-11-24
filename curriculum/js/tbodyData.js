/**
 * 创建头像
 */
function creatFace (data){
    let html = '';
    html = `<td>
                <div class="face">
                    <span class="gender icon-${data.face.gender}"></span>
                    <img src="${data.face.img}" alt="">
                </div>
            </td>`
    return html;
}
/**
 * 姓名
 */
function creatName (data){
    let html = '';
    html = `<td>
                <div class="people-name">
                    <h4 class="name">${data.name.trueName}</h4>
                    <span class="nickname option-05 fs-12">${data.name.nickName}</span>
                </div>
            </td>`
    return html;
}
/**
 * 性别
 */
function creatGender (data){
    let html = '';
    html = `<td>
                <div class="gender-wrap">
                    <span class="gender icon-girl  ${data.face.gender == 'girl' ? '' : 'option-05'}"></span>
                    <span class="gender icon-boy ${data.face.gender == 'boy' ? '' : 'option-05'}"></span>
                </div>
            </td>`
    return html;
}
/**
 * 年龄
 */
function creatAge (data){
    let html = '';
    html = `<td>
            <div class="age text-center">
                <p>${data.age.number}</p>
                <span class="option-05 fs-12">（单身狗）</span>
            </div>
        </td>`
    return html;
}
/**
 * 手机号
 */
function creatPhone (data){
    let html = '';
    html = `<td>
                <div class="phone">
                    +${data.phone.code}<span class="option-05">（中国）</span><br />
                    ${data.phone.number}
                </div>
            </td>`
    return html;
}
function creatCountry (data){
    let html = '';
    html = `<td>
                <div>
                    <img src="${data.country.National_flag}" alt="中国">
                    <p class="country-name" style="color:${data.country.color}">${data.country.name}</p>
                </div>
            </td>` 
    return html;
}
/**
 * 爱好
 */
function creatLike (data){
    let html = '<td><div class="likes">';
    data.like.forEach((item)=>{
        html += `<span style="background-color: ${item.color};">${item.tag}</span>`
    })
    html += `</div"></td>`
    return html;
}
/**
 * 头衔
 */
function creatTitleName (data){
    const NUMBER = 16.6666;
    let html ='';
    html = `<td>
                <div class="grade">
                    <span class="role-name">${data.title.titleName}</span>
                    <div class="grade-wrap icon-grade">
                        <div class="grade-high icon-grade" style="width: ${data.title.level * NUMBER}%;"></div>
                    </div>
                </div>
            </td>`
    return html;
}
/**
 * 操作
 */
function creatOperation (){
    let html = '';
    html = `<td>
                <div class="operation">
                    <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                        <a href="javascript: void(0);">编辑</a>
                        <a href="javascript: void(0);">删除</a>
                        <a href="javascript: void(0);">锁定</a>
                        <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
            </td>`
    return html;
}

/**
 * 主体数据
 */
function creatTbodyData (){
        /**
         * tbody数据
         */
        let tbodyHtml = '<tbody>';
        let trHtml = ''
        for(let i=0; i<tableTbodyData.length; i++) {
            const data = tableTbodyData[i];
            trHtml += '<tr>'
            //头像
            trHtml += creatFace(data);
            //姓名
            trHtml += creatName(data);
            //性别
            trHtml += creatGender(data);
            //年龄
            trHtml += creatAge(data);
            //手机号
            trHtml += creatPhone(data);
            //国籍
            trHtml += creatCountry(data);
            //爱好
            trHtml += creatLike(data);
            //头衔
            trHtml += creatTitleName(data);
            //操作
            trHtml += creatOperation();

            trHtml += '</tr>'

        }

        tbodyHtml +=trHtml + '</tbody>';
        return tbodyHtml;

}