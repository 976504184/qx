'use strict';
(function(value) {
    value[_0xb483[0]] = _0xb483[1];
})(_a);
/** @type {!Array} */
var __Oxb227b = ["isNode", "crypto-js", "98c14c997fde50cc18bdefecfd48ceb7", "parse", "Utf8", "enc", "ea653f4f3c5eda12", "ciphertext", "CBC", "mode", "Pkcs7", "pad", "encrypt", "AES", "Hex", "stringify", "Base64", "decrypt", "length", "map", "sort", "keys", "gift", "pet", "includes", "&", "join", "=", "?", "indexOf", "common/", "replace", "header", "url", "reqSource=h5", "assign", "method", "GET", "data", "toLowerCase", "keyCode", "content-type", "Content-Type", "", "get", "post", "application/x-www-form-urlencoded",
    "_", "undefined", "log", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"
];
/**
 * @param {?} obj
 * @return {?}
 */
function taroRequest(obj) {
        const C = $.isNode() ? require('crypto-js') : CryptoJS;
        const artistTrack = '98c14c997fde50cc18bdefecfd48ceb7';
        const pw_salt = C.enc.Utf8.parse(artistTrack);
        const iv = C.enc.Utf8.parse('ea653f4f3c5eda12');
        let tiledImageBRs = {
            "AesEncrypt": function _0xColorToHex(color) {
                var defaultForegroundColor = C.enc.Utf8.parse(color);
                return C.AES.encrypt(defaultForegroundColor, pw_salt, {
                    "iv": iv,
                    "mode": C.mode.CBC,
                    "padding": C.pad.Pkcs7
                }).ciphertext.toString();
            },
            "AesDecrypt": function testHashFn(key) {
                var level = C.enc.Hex.parse(key);
                var ent = C.enc.Base64.stringify(level);
                return C.AES.decrypt(ent, pw_salt, {
                    "iv": iv,
                    "mode": C.mode.CBC,
                    "padding": C.pad.Pkcs7
                }).toString(C.enc.Utf8).toString();
            },
            "Base64Encode": function make_row(level) {
                var numberOfTiles = C.enc.Utf8.parse(level);
                return C.enc.Base64.stringify(numberOfTiles);
            },
            "Base64Decode": function _0xColorToHex(color) {
                return C.enc.Base64.parse(color).toString(C.enc.Utf8);
            },
            "Md5encode": function md5(message) {
                return C.MD5(message).toString();
            },
            "keyCode": '98c14c997fde50cc18bdefecfd48ceb7'
        };
        const resizeOnLoad = function cb(obj, ret) {
            if (obj instanceof Array) {
                ret = ret || [];
                /** @type {number} */
                var i = 0;
                for (; i < obj.length; i++) {
                    ret[i] = cb(obj[i], ret[i]);
                }
            } else {
                if (!(obj instanceof Array) && obj instanceof Object) {
                    ret = ret || {};
                    Object.keys(obj).sort().map(function(key) {
                        ret[key] = cb(obj[key], ret[key]);
                    });
                } else {
                    /** @type {string} */
                    ret = obj;
                }
            }
            return ret;
        };
        const resolve = function exports(execFile_opt) {
            /** @type {!Array} */
            var nextIdLookup = ['gift', 'pet'];
            /** @type {boolean} */
            var hashTablePair = false;
            /** @type {number} */
            var indexLookupKey = 0;
            for (; indexLookupKey < nextIdLookup.length; indexLookupKey++) {
                var currentIndex = nextIdLookup[indexLookupKey];
                if (execFile_opt.includes(currentIndex) && !hashTablePair) {
                    /** @type {boolean} */
                    hashTablePair = true;
                }
            }
            return hashTablePair;
        };
        const _time2int = function jsonFixer(value, obj) {
            if (obj && Object.keys(obj).length > 0) {
                var widgetId = Object.keys(obj).map(function(key) {
                    return key + '=' + obj[key];
                }).join('&');
                return value.indexOf('?') >= 0 ? value + '&' + widgetId : value + '?' + widgetId;
            }
            return value;
        };
        const prettyTime = function exports(console) {
            var PL$13 = iv;
            /** @type {number} */
            var PL$17 = 0;
            for (; PL$17 < PL$13.length; PL$17++) {
                var msg = PL$13[PL$17];
                if (console.includes(msg) && !console.includes('common/' + msg)) {
                    console = console.replace(msg, 'common/' + msg);
                }
            }
            return console;
        };
        var inobj = obj;
        var portalSelfUrl = (inobj.header, inobj.url);
        portalSelfUrl = portalSelfUrl + ((portalSelfUrl.indexOf('?') > -1 ? '&' : '?') + 'reqSource=h5');
        var _0x1226x17 = function show(args) {
            var time = args.url;
            var name = args.method;
            var unzipName = void 0 === name ? 'GET' : name;
            var target = args.data;
            var key = args.header;
            var attr = void 0 === key ? {} : key;
            var _0x1226x1a = unzipName.toLowerCase();
            var tiledImageBR = tiledImageBRs.keyCode;
            var _0x1226x1c = attr.content-type || attr.Content-Type || '';
            var _0x1226x1d = '';
            /** @type {number} */
            var exists = +new Date;
            return _0x1226x1d = 'get' !== _0x1226x1a && ('post' !== _0x1226x1a || 'application/x-www-form-urlencoded' !== _0x1226x1c.toLowerCase() && target && Object.keys(target).length) ? tiledImageBRs.Md5encode(tiledImageBRs.Base64Encode(tiledImageBRs.AesEncrypt('' + JSON.stringify(resizeOnLoad(target)))) + '_' + tiledImageBR + '_' + exists) : tiledImageBRs.Md5encode('_' + tiledImageBR + '_' + exists), resolve(time) && (time = _time2int(time, {
                "lks": _0x1226x1d,
                "lkt": exists
            }), time = prettyTime(time)), Object.assign(args, {
                "url": time
            });
        }(obj = Object.assign(obj, {
            "url": portalSelfUrl
        }));
        return _0x1226x17;
    }
    (function(oldValue, canCreateDiscussions, _, out, err, object) {
        object = 'undefined';
        /**
         * @param {(Array|HTMLCollection|Node|NodeList|Window|string)} a
         * @return {undefined}
         */
        out = function(a) {
            if (typeof alert !== object) {
                alert(a);
            }
            if (typeof console !== object) {
                console.log(a);
            }
        };
        /**
         * @param {(Object|number)} cesiumWidget
         * @param {!Object} options
         * @return {?}
         */
        _ = function(cesiumWidget, options) {
            return cesiumWidget + options;
        };
        err = _('删除', _(_('版本号，js会定', '期弹窗，'), '还请支持我们的工作'));
        try {
            oldValue = __encode;
            if (!(typeof oldValue !== object && oldValue === _('jsjia', 'mi.com'))) {
                out(err);
            }
        } catch (e) {
            out(err);
        }
    })({});
