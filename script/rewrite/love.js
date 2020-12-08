/*
更新：2020-12-07
破解收费
QX:
^https:\/\/lovezbapi\.zjjieneng\.cn\/api\/public\/\?service=.* url script-request-header https://raw.githubusercontent.com/976504184/qx/master/script/rewrite/love.js
MITM = lovezbapi.zjjieneng.cn
*/

let obj = JSON.parse($response.body);

if (obj.data.info) {
	for(const info of obj.data.info){
           info.type = "0";
           info.type_val = "0";          
    }
}
$done({
	body: JSON.stringify(obj)
});
