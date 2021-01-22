
[rewrite_local]
#桃子视频解锁会员去广告
^http:\/\/api\.taozishipin02\.xyz\/fast-cloud\/user\/info url script-response-body https://raw.githubusercontent.com/976504184/qx/master/tz/tz.js
^http:\/\/api\.taozishipin02\.xyz\/fast-cloud\/ads\/fetch url script-response-body https://raw.githubusercontent.com/976504184/qx/master/tz/taozi.js

[mitm]
hostname = api.taozishipin02.xyz
