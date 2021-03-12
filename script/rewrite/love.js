/*
更新：2021-02-16
破解收费
QX:
^https:\/\/lovezbapi\.dydfdzjs\.com\.cn\/api\/public\/\?.*&service=(Home|Live)\.(?!getConfig).* url script-response-body https://raw.githubusercontent.com/976504184/qx/master/script/rewrite/love.js
MITM = lovezbapi.dydfdzjs.com.cn
*/

let obj = JSON.parse($response.body);

if (obj.data.info) {
    for (const info of obj.data.info) {
        info.type = "0";
        info.type_val = "0";
        info.level = "2";
        info.real_type = "0";
        info.type_msg = "";
    }
    //console.log(obj.data.info);
}
$done({
    body: JSON.stringify(obj)
});
