/*
更新：2021-03-16
屏蔽更新提示
QX:
^http:\/\/hot\.ios\.mitaozhibo\.org\/version\.json url script-response-body https://raw.githubusercontent.com/976504184/qx/master/script/rewrite/love_version.js
MITM = hot.ios.mitaozhibo.org
*/

let obj = JSON.parse($response.body);

if (obj) {
    obj.dev.version='1.16.1.0';
    obj.test.version='1.16.1.0';
    obj.production.version='1.16.1.0';
}
$done({
    body: JSON.stringify(obj)
});
