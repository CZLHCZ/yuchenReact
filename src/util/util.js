// 判断是否在小程序内
function miniReady() {
    console.log('isMiniProgram', window.__wxjs_environment === 'miniprogram');
    window.isMiniProgram = window.__wxjs_environment === 'miniprogram';
}
if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
    document.addEventListener('WeixinJSBridgeReady', miniReady, false);
} else {
    miniReady();
}