/** 开发环境 */
import {HttpMsg} from "./HttpMsg";

const env = "dev-kzjwk"

declare interface Platform {
    /**  登录 */
    login()

    /** 分享    */
    share(title?, imageUrl?, query?)

    /**  获取用户授权  */
    getUserInfo()

    /**  访问绑定客服  */
    getService()

    /**  提示信息 */
    showToast(tip, duration?)

    /**  显示loading */
    showLoading(title?, mask?)

    /** 隐藏loading */
    hideLoading()

    /** 前台 */
    showApp(callBack)

    /** 后台 */
    hideApp(callBack)

    /** 显示广告 */
    showAd()

    /** 获取用户信息 */
    getPath(callBack)

    /** 设置右上角分享开关 */
    showShareMenu()

    gameStart(uid, gk)

    gameEnd(uid, xj)

    propGet(uid)

    propUp(uid, propId)

    BossStart(uid)

    showAdView()

}

class WxPlatform implements Platform {
    login() {
        wx.cloud.init({env: env})
        return new Promise((resolve, reject) => {
            wx.login({
                success: (res) => {
                    console.log('login', res)
                    if (res.code) {
                        wx.cloud.callFunction({
                            // 要调用的云函数名称
                            name: 'login',
                            // 传递给云函数的event参数
                            data: {
                                env: env,
                                code: res.code
                            }
                        }).then(res => {
                            resolve(res)
                        }).catch(err => {
                        })

                    } else {
                        cc.log('登录失败！', res)
                        reject(res)
                    }
                }
            })
        })
    }

    propUp(uid, propId) {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'propLogic',
                // 传递给云函数的event参数
                data: {
                    $url: "propUp",
                    uid: uid,
                    propId: propId
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
            })
        })
    }

    propGet(uid) {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'propLogic',
                // 传递给云函数的event参数
                data: {
                    $url: "propGet",
                    uid: uid,
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
            })
        })
    }

    BossStart(uid) {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'gameLogic',
                // 传递给云函数的event参数
                data: {
                    $url: "BossStart",
                    uid: uid,
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
            })
        })
    }


    gameEnd(uid, xj) {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'gameLogic',
                // 传递给云函数的event参数
                data: {
                    $url: "gameEnd",
                    uid: uid,
                    xj: xj
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
            })
        })
    }

    gameStart(uid, gk) {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'gameLogic',
                // 传递给云函数的event参数
                data: {
                    $url: "gameStart",
                    uid: uid,
                    gk: gk
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
            })
        })
    }

    async showShareMenu() {
        wx.showShareMenu({
            withShareTicket: true,
            // menus: ['shareAppMessage', 'shareTimeline']
        })
    }

    getPath(callBack) {
        let obj
        try {
            obj = wx.getEnterOptionsSync()
        } catch (e) {
            obj = wx.getLaunchOptionsSync()
        }
        console.log('启动小程序的路径:', obj.path)
        console.log('启动小程序的场景值:', obj.scene)
        console.log('启动小程序的 query 参数:', obj.query)
        console.log('来源信息:', obj.shareTicket)
        console.log('来源信息参数appId:', obj.referrerInfo.appId)
        console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)
        callBack(obj)
    }

    showAd() {

    }

    showApp(callBack) {
        wx.onShow(callBack)
    }

    hideApp(callBack) {
        wx.onHide(callBack)
    }

    showToast(tip: string, duration: number = 1500) {
        wx.showToast({
            title: tip,
            duration: duration,
            icon: "none"
        });
    }

    showLoading(title: string = "加载中", mask: boolean = true) {
        wx.showLoading({title: title, mask: mask});
    }

    hideLoading() {
        wx.hideLoading({});
    }

    share(title = "", imageUrl = "", query = "") {
        wx.shareAppMessage({
            title: title,
            imageUrl: imageUrl,        // 分享图片要放在 wechatgame/res/raw-assers 路径下
            query: query  // key1=val1&key2=val2
        });
    }

    getService() {
        wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageImg: "",
            success: function (data) {
                cc.log("success =", data)
            },

            fail: function (data) {
                cc.log("fail =", data)
            },

            complete: function (data) {
                cc.log("complete =", data)
            }
        })

    }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            let visibleSize = cc.view.getVisibleSize();
            const button = wx.createUserInfoButton({
                type: 'text',
                text: '获取用户信息',
                style: {
                    left: 0,
                    top: 0,
                    width: visibleSize.width,
                    height: visibleSize.height,
                    lineHeight: 40,
                    backgroundColor: '#00000000',
                    color: '#00000000',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4
                }
            })
            platform.showToast("点击屏幕授权")
            button.onTap((res) => {
                cc.log(res)
                wx.getUserInfo({
                    success: (res) => {
                        cc.log("获取用户授权成功", res.userInfo)
                        button.destroy()
                        resolve({
                            Icon: res.userInfo.avatarUrl,
                            name: res.userInfo.nickName,
                        })
                    }
                })
            })
        })
    }

    showAdView() {
    }
}

class androiodPlatform implements Platform {
    BossStart(uid) {
    }

    gameEnd(uid, xj) {
    }

    gameStart(uid, gk) {
        return new Promise((resolve, reject) => {
            let res = {
                result: {
                    code: 200
                }
            }
            resolve(res)
        })
    }

    getPath(callBack) {
    }

    getService() {
    }

    getUserInfo() {
    }

    hideApp(callBack) {
    }

    hideLoading() {
    }

    login() {
    }

    propGet(uid) {
    }

    propUp(uid, propId) {
    }

    share(title?, imageUrl?, query?) {
    }

    showAd() {
    }

    showApp(callBack) {
    }

    showLoading(title?, mask?) {
    }

    showShareMenu() {
    }

    showToast(tip, duration?) {
    }

    showAdView() {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
    }

}

let app

class localPlatform implements Platform {

    getPath(callBack) {
    }

    showAd() {
    }


    showApp(callBack) {

    }

    hideApp(callBack) {
    }


    login() {

        // wx.cloud.init({env: env})
        // return new Promise((resolve, reject) => {
        //     wx.login({
        //         success: (res) => {
        //             console.log('login', res)
        //             if (res.code) {
        //                 wx.cloud.callFunction({
        //                     // 要调用的云函数名称
        //                     name: 'login',
        //                     // 传递给云函数的event参数
        //                     data: {
        //                         env: env,
        //                         code: res.code
        //                     }
        //                 }).then(res => {
        //                     resolve(res)
        //                 }).catch(err => {
        //                 })

        // const cloudbase = require("@cloudbase/js-sdk");
        // app = cloudbase.init({
        //     env: "hel-2gtm9yoz6a3f71d8"
        // });
        // app.callFunction({
        //     name: 'gameLogic',
        //     // 传递给云函数的event参数
        //     data: {
        //         $url: "gameStart",
        //         uid: 3,
        //         gk: 3
        //     }
        // })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch(console.error);

        HttpMsg.post("https://yunhanshuceshi-4ggxhum42e2eea72-1252647115.ap-shanghai.app.tcloudbase.com/login",{
            // $url:"gameStart"
            openid:"123456"
        },res=>{
            console.log(res)
        },err=>{console.log(err)})

        return new Promise((resolve, reject) => {
            resolve(1)
        })

    }

    showLoading(title?, mask?) {
    }

    hideLoading() {
    }


    showToast(tip, duration) {
        cc.log(`${tip}`)
    }

    share(title: string) {
        cc.log("share")

    }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            cc.log("getUserInfo")
            resolve({
                Icon: "https://thirdwx.qlogo.cn/mmopen/vi_32/1syGLDqBEdN5xzWh1p9EYjvU557UZAzSMaleQ5vY1xroIolZtHianKBn5ZaPPFo5yNZom31YFjHAe8FTK50W0CQ/132",
                name: "张三",
            })
        })
    }

    getService() {
        cc.log("getService")
    }

    showShareMenu() {
    }

    gameStart(uid, gk) {
        return new Promise((resolve, reject) => {
            let res = {
                result: {
                    code: 200
                }
            }
            resolve(res)
        })
    }

    gameEnd(uid, xj) {
        return new Promise((resolve, reject) => {
            let res = {
                result: {
                    code: 200
                }
            }
            resolve(res)
        })
    }

    propGet(uid) {
    }

    propUp(uid, propId) {
    }

    BossStart(uid) {
    }

    showAdView() {
    }


}


export let platform: Platform
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
    platform = new WxPlatform()
} else if (cc.sys.platform === cc.sys.ANDROID) {
    platform = new androiodPlatform()
} else {
    platform = new localPlatform()
}

