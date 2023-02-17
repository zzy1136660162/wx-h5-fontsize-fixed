import {defineComponent, ExtractPropTypes, onMounted, useSlots} from "vue";

const fontsizeFixedProps = {
    enable: {type: Boolean, default: true, required: true}
}
declare global {
    var WeixinJSBridge: any;

    interface Window {
        WeixinJSBridge: any
    }

    interface Document {
        attachEvent: any
    }
}
export type FontsizeFixedProps = ExtractPropTypes<typeof fontsizeFixedProps>
export default defineComponent({
    name: 'fontsize-fixed',
    props: fontsizeFixedProps,
    setup: (props) => {
        const getInitFunc = () => {
           const  WeixinJSBridge = window.WeixinJSBridge
            if (props?.enable) {
                var style = "body {\n" +
                    "  -webkit-text-size-adjust: 100% !important;\n" +
                    "  text-size-adjust: 100% !important;\n" +
                    "  -moz-text-size-adjust: 100% !important;\n" +
                    "}\n";
                var ele = document.createElement("style");
                ele.innerHTML = style;
                document.getElementsByTagName('head')[0].appendChild(ele);
                (function () {
                    console.log(WeixinJSBridge,'wxh5-WeixinJSBridge')
                    if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
                        handleFontSize()
                    } else {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', handleFontSize)

                            document.attachEvent('onWeixinJSBridgeReady', handleFontSize)
                        }
                    }

                    function handleFontSize() {
                        // 设置网页字体为默认大小
                        WeixinJSBridge.invoke('setFontSizeCallback', {fontSize: 0})
                        // 重写设置网页字体大小的事件
                        WeixinJSBridge.on('menu:setfont', () => {
                            WeixinJSBridge.invoke('setFontSizeCallback', {fontSize: 0})
                        })
                    }
                })()
            }
        }
        onMounted(async () => {
            getInitFunc()
        })
        const slots = useSlots()
        return () => {
            return (
                <>
                    {slots?.default?.()}
                </>
            )
        }
    }
})
