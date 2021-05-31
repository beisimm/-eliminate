/**
 * 音乐管理
 */
export class MusicMgr {
    private MusicId: number;

    constructor() {
        cc.log("音乐实例化")
        Promise.all(this.MusicList.map((val, idx, arr) => {
            this.getMusicByName(val)
        }))
        cc.log("音乐加载完成", this.MusicS)
        let to = setTimeout(() => {
            // cc.audioEngine.setMaxAudioInstance(1)
            this.playMusic("bgm1")
            clearTimeout(to)
        }, 1000)
    }

    MusicFlag = true
    EffFlag = true


    MusicList = [
        "bgm1", // 主场景背景
        "bgm2", // 游戏背景
        "click",// 点击音效
        "boom",// 田字消除
        "row",// 单行消除
        "four",// 四连消
        "three",// 三连消
    ]
    MusicS = {}

    getMusicByName(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("music")
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                    } else {
                        this.MusicS[name] = asset
                        resolve(asset)
                    }
                })
        })
    }

    /**
     * 播放音乐
     */
    playMusic(name) {
        if (!this.MusicFlag) return
        let clip = this.MusicS[name]
        cc.log("playMusic", clip)
        cc.audioEngine.stopAll()
        this.MusicId = cc.audioEngine.play(clip, true, 0.5);
    }

    swichMusic() {
        if (this.MusicFlag) {
            cc.audioEngine.stopAll()
        } else {
            this.playMusic("bg2")
        }
        this.MusicFlag = !this.MusicFlag
    }

    stopMusic(){
        cc.audioEngine.stopAll()
    }

    swichEff() {
        this.EffFlag = !this.EffFlag
    }

    /**
     * 播放音效
     */
    playEffect(name) {
        if (!this.EffFlag) return
        let clip = this.MusicS[name]
        cc.audioEngine.playEffect(clip, false);
    }

    private static _inst: MusicMgr

    public static inst(): MusicMgr {
        if (this._inst == null) {
            this._inst = new MusicMgr();
        }
        return this._inst;
    }
}

