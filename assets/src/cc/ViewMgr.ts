/**
 * 视图管理
 * @author Lucai
 */
import {fullView, PanelName} from "./typeEm";
import {MusicMgr} from "./MusicMgr";


export class ViewMgr {

    private obj: fgui.GObject;
    ViewContent: fgui.GRoot;
    private AlertContent: fgui.GRoot;
    EffContent: fgui.GRoot;
    private AuideContent: fgui.GRoot;
    private static instance: ViewMgr
    FullView

    public static getInstance(): ViewMgr {
        if (this.instance == null) {
            this.instance = new ViewMgr();
        }
        return this.instance;
    }

    constructor() {
        this.FullView = {}
        this.ViewContent = fgui.GRoot.create();
        this.ViewContent.node.name = "ViewContent"
        this.EffContent = fgui.GRoot.create();
        this.EffContent.node.name = "EffContent"
        this.AlertContent = fgui.GRoot.create();
        this.AlertContent.node.name = "Alert"
        this.AuideContent = fgui.GRoot.create();
        this.AuideContent.node.name = "Auide"
        fgui.UIPackage.loadPackage("UI/main", this.onUILoaded.bind(this));
    }

    onUILoaded() {
        console.log("ViewMgr包加载完成")
    }


    xinshouyingdao() {
        // this.openAuide()
    }

    openFlag = false

    /**     * 打开指定视图     */
    public openView(openView: OpenViewModel) {
        if (this.openFlag) return
        let setTo = setTimeout(() => {
            this.openFlag = false
            clearTimeout(setTo)
        }, 500)
        this.openFlag = true
        let View = fgui.UIPackage.createObject("main", `${openView.View}`)
        View.makeFullScreen()
        View.node.name = openView.View
        let Src = View.node.addComponent(`${openView.View}`);
        Src.show({
            view: View,
            par: openView.args
        })
        this.ViewContent.addChild(View)
        this.playEff(View)
        this.viewS[openView.View] = View
        // this.openFlag = false
    }

    /**
     * 警告
     * @param title 标题
     * @param content 内容
     * @function 确认后的回调函数
     */
    // Alert(title: string = "我是标题", content: string = "我是内容", callBack?: Function) {
    //     let View = <UI_AlertView>(fgui.UIPackage.createObject("com", "AlertView"));
    //     View.makeFullScreen()
    //     let m_title = <fgui.GTextField>(View.getChild("title"));
    //     let m_content = <fgui.GTextField>(View.getChild("content"));
    //     let m_yesBtn = <UI_yesBtn>(View.getChild("yesBtn"));
    //     m_yesBtn.on(fgui.Event.CLICK, () => {
    //         this.closeViewByView(View)
    //         callBack()
    //     })
    //     m_title.text = title
    //     m_content.text = content
    //     this.AlertContent.addChild(View)
    //     this.onClose(View)
    // }

    // private openAuide() {
    //     let View = UI_AuideView.createInstance();
    //     View.makeFullScreen()
    //     this.AuideContent.addChild(View)
    //     let Src = View.node.addComponent(`AuideSrc`);
    //     Src.show({
    //         view: View,
    //         // args: openView.ags
    //     })
    // }

    // openFlag: boolean = true

    setFullView(ViewList) {
        console.log(this)
        this.FullView[fullView.main] = [ViewList[0], ViewList[1]]
        this.FullView[fullView.game] = [ViewList[2], ViewList[3]]
    }

    openFullView(fullView: fullView) {
        MusicMgr.inst().playMusic("bgm2")
        this.FullView[fullView].forEach((val: cc.Node, idx, arr) => {
            val.active = true
        })
    }

    closeFullView(fullView: fullView) {
        MusicMgr.inst().playMusic("bgm1")
        this.FullView[fullView].forEach((val: cc.Node, idx, arr) => {
            val.active = false
        })
    }


    /**
     * 播放动效
     */
    playEff(View) {
        // let m_bg = <fgui.GGraph>(View.getChild("bg"));
        // m_bg.color = cc.color(0, 0, 0, 0)
        // cc.tween(m_bg)
        //     .to(0.2, {color: cc.color(0, 0, 0, 125)})
        //     .call(() => {
        this.onClose(View)
        // })
        // .start()
    }

    viewS = {}

    /**
     * 关闭指定视图
     */
    public closeViewByName(PanelName: PanelName) {
        this.closeViewByView(this.viewS[PanelName])
    }

    /**
     * 关闭所有视图
     */
    public closeAllView() {

    }

    closeViewByView(View) {
        let m_bg = <fgui.GGraph>(View.getChild("bg"));
        // @ts-ignore
        let m_closeBtn = View.getChild("closeBtn")
        m_bg?.off(fgui.Event.CLICK)
        m_closeBtn?.off(fgui.Event.CLICK)
        View.removeFromParent()
        View.node.destroy()
    }


    /**
     *  关闭按钮监听
     */
    private onClose(View) {
        let m_closeBtn = View.getChild("closeBtn")
        let m_bg = View.getChild("bg")
        m_closeBtn && m_closeBtn.on(fgui.Event.CLICK, this.closeViewByView.bind(this, View))
        m_bg && m_bg.on(fgui.Event.CLICK, this.closeViewByView.bind(this, View))
    }


}

export interface OpenViewModel {
    View: string
    args: any
}
