/**
 * 资源管理
 * @author Lucai
 */

import {MusicMgr} from "./MusicMgr";

export class ResMgr {
    private static instance

    public static _Inst(): ResMgr {
        if (this.instance == null) {
            this.instance = new ResMgr();
        }
        // window["ResMgr"] = this.instance
        return this.instance;
    }


    constructor() {
        this.getBundleS();
    }

    private async getBundleS() {
        console.log("加载分包开始")
        await Promise.all(this.bundleList.map(async (val) => {
            this.loadResP(val)
        }))
        console.log("加载资源包完成", )
    }

    /**
     * 资源包列表
     */
    public bundleList = [
        // "resources",
        // "Config",
        // "prefab",
        "music",
        // "ViewSrc",
    ]

    loadRes(bundleName: string) {
        cc.assetManager.loadBundle(bundleName, (err: Error, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                cc.log('Error ', err);
            } else {
                console.log("res", bundle)
            }
            return;
        })
    }

    loadResP(bundleName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadBundle(bundleName, (err: Error, bundle: cc.AssetManager.Bundle) => {
                    if (err) {
                        cc.log('Error ', err);
                        reject(err)
                        return;
                    } else {
                        if (bundleName == "music") MusicMgr.inst()
                        resolve(bundle)
                    }
                }
            );
        })
    }

    getRes(name: string, bundleName: string, type?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle(bundleName)
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        resolve(asset)
                    }
                })
        })
    }

    /**
     * 获取预制体
     */
    getPrefab(name: string): Promise<cc.Prefab> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("prefab")
         .load(name, (err: Error, asset: cc.Prefab) => {
                if (err) {
                    cc.log('Error url [' + err + ']');
                    reject(err)
                    return;
                } else {
                    resolve(asset)
                }
            })
        })
    }

    /**
     * 获取配置文件
     */
    getConfig(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("Config")
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        console.log("asset", asset["text"])
                        // console.log("assetToJson", Util.csvToJson(asset["text"]))
                        resolve(asset)
                    }
                })
        })
    }

    /**
     * 获取配置文件
     * @param name 文件名
     * @param id 单条id
     */
    getConfigById(name: string, id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("Config")
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        // let optionalParams = Util.csvToJson(asset["text"]);
                        // let find = optionalParams.find((val, idx, arr) => {
                        //     return val.id == id
                        // });
                        // resolve(find)
                    }
                })
        })

    }

    /**
     * 通过图片名称拿图片
     * @param name 图片名称, 不带后缀
     */
    getPicP(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("resources")
                .load(`tex/${name}`, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        console.log(asset)
                        resolve(asset)
                    }
                })
        })
    }

    getPic(name: string) {
        cc.assetManager
            .getBundle("resources")
            .load(`tex/${name}`, (err: Error, asset) => {
                if (err) {
                    cc.log('Error url [' + err + ']');
                    return;
                } else {
                    console.log(asset)
                    return asset
                }
            })
    }

    /**
     * 通过表名, Id 获取图片
     * @param name 文件名
     * @param id 单条id
     */
    getPicByIdP(name: string, id: number) {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("Config")
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        // let optionalParams = Util.csvToJson(asset["text"]);
                        // let findPicName = optionalParams.find((val, idx, arr) => {
                        //     return val.id == id
                        // }).pic;
                        // this.getPicP(findPicName).then(res => {
                        //     console.log(res)
                        //
                        // })
                        // resolve()
                    }
                })
        })
    }

    getPicById(csvName: string, id: number) {
        cc.assetManager
            .getBundle("Config")
            .load(csvName, (err: Error, asset) => {
                if (err) {
                    cc.log('Error url [' + err + ']');
                    return;
                } else {
                    // let optionalParams = Util.csvToJson(asset["text"]);
                    // let findPicName = optionalParams.find((val, idx, arr) => {
                    //     return val.id == id
                    // }).pic;
                    // let picTex = findPicName;
                    // this.getPic(picTex)
                    // console.log(picTex)
                    // return this.getPic(picTex)
                }
            })
    }

}
