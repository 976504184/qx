/*
更新：2020-11-01
小小影视 unlock Vip&免广告
QX:
^https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index) url script-response-body https://raw.githubusercontent.com/976504184/qx/master/script/rewrite/xxys.js

Surge:
http-response https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/976504184/qx/master/script/rewrite/xxys.js
MITM = *.xxjjappss.com,*.huaerdadi.com,*.xjwdapps.com
*/

const path = "/init";
const path1 = "/ucp/index";
const ad = 'ssp-svr/ssp/list3';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path) != -1) {
    obj.data.user.isvip = "1";
    obj.data.user.gid = "5";
    obj.data.user.gicon = "V5";
    obj.data.user.goldcoin = "666";
}

if ($request.url.indexOf(path1) != -1) {
    obj.data.uinfo.down_daily_remainders = "666";
    obj.data.uinfo.play_daily_remainders = "666";
    obj.data.uinfo.curr_group.gid = "5";
    obj.data.user.isvip = "1";
    obj.data.user.gid = "5";
    obj.data.user.gicon = "V1";
    obj.data.user.goldcoin = "666";
}

if ($request.url.indexOf(ad) != -1) {
    delete obj.data.pmap
}

$done({ body: JSON.stringify(obj) });