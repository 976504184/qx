/*  
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#桃子去广告
^http:\/\/api\.taozishipin02\.xyz\/fast-cloud\/ads\/fetch url script-response-body taozi.js

[mitm]
hostname = api.taozishipin02.xyz,
*/

var obj = JSON.parse($response.body);
obj.data = 0;


$done({body: JSON.stringify(obj)}); 
