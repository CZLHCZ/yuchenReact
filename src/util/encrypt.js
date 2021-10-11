// eslint-disable-next-line
/**
 * @Descrption 加密工具类
 * @refer CryptoJS & JSEncrypt
 */
// operator-linebreak
const RSA_PUBLIC_KEY =
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCe4JuweoMJLVYe/37IvHsCtX4h" +
    "ygUz/mMCi28C3gEZYW3zzTUan1SBRV0fYWUJiPIHHdAuZ1pZBcYBGZUGTPL3TG84" +
    "xDvKFAtEb0un6um8RFuHosv3Tbb/4422Swl5EqTh8OIobR2ZoXCJxGEfQsqwhY8N" +
    "ObRwoxiNksmmmVHWewIDAQAB";

const CryptoJS = require("crypto-js");
const JSEncrypt = require("jsencrypt/bin/jsencrypt.min.js");
var Encryption = {
    /**
     * @description 产生任意长度随机字母数字组合
     * @param randomFlag 是否任意长度
     * @param min 任意长度最小位[固定位数]
     * @param max 任意长度最大位
     * @returns {string}
     */
    generateRandomKey: function (randomFlag, min, max) {
        var pos,
            str = "",
            range = min,
            arr = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
            ];

        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    },

    /**
     * @description 3DES加密
     * @param param
     * @param key
     * @returns {*|CipherParams}
     */
    encryptParamWith3DES: function (param, key) {
        return CryptoJS.TripleDES.encrypt(param, key);
    }