import UI_map from "../fui/main/UI_map";
import UI_TopUi from "../fui/main/UI_TopUi";
import {User} from "../UserPorxy";
import UI_mapEleLvArr from "../fui/main/UI_mapEleLvArr";
import {EventMsg} from "../cc/EventMgr";
import {ViewMgr} from "../cc/ViewMgr";
import {EventName, fullView, gkType, PanelName} from "../cc/typeEm";
import {platform} from "../cc/Platform";
import {GameTemp} from "../cc/GameTemp";

const {ccclass, property} = cc._decorator;
@ccclass
export default class MapPanel extends cc.Component {
    @property(cc.Node)
    mapnode = null
    @property(cc.Node)
    gameNode = null
    @property(cc.Node)
    topUi = null
    private uiMap: UI_map;
    private uiTopUi: UI_TopUi;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        fgui.UIPackage.loadPackage("UI/main", this.onUILoaded.bind(this));
    }

    onUILoaded() {
        let uiMap = UI_map.createInstance();
        this.uiMap = uiMap
        uiMap.m_rightBtn.node.on(cc.Node.EventType.TOUCH_START, () => {
            uiMap.m_c1.selectedIndex++
        })
        uiMap.m_liftBtn.node.on(cc.Node.EventType.TOUCH_START, () => {
            uiMap.m_c1.selectedIndex--
        })
        this.mapnode.addChild(uiMap.node)
        let uiTopUi = UI_TopUi.createInstance();
        this.uiTopUi = uiTopUi
        this.topUi.addChild(uiTopUi.node)
        this.uiTopUi.m_djBtn.on(cc.Node.EventType.TOUCH_START, () => {
            ViewMgr.getInstance().openView({
                View: PanelName.propPanel,
                args: {}
            })
        })
        this.uiTopUi.m_sdBtn.on(cc.Node.EventType.TOUCH_START, () => {
            ViewMgr.getInstance().openView({
                View: PanelName.ShopPanel,
                args: {}
            })
            console.log("商店点击")
        })

        // @ts-ignore
        // cc.game.wozijide = () => {
        //     ViewMgr.getInstance().openView({
        //         View: PanelName.ShopPanel,
        //         args: {}
        //     })
        // }


        this.uiTopUi.m_bossBtn.on(cc.Node.EventType.TOUCH_START, () => {
            // platform.BossStart(User.uid).then(res => {
            //     console.log(res)
            //     if (res.result.code == 200) {
            //         GameTemp.isBoss = true
            //         GameTemp.idx = res.result.boss
            //         ViewMgr.getInstance().openFullView(fullView.game)
            //     } else {
            //         platform.showToast(res.result.msg)
            //     }
            // })
            // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shouChaPing", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "qqlogin", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");

        })
        // User.gk.forEach((val, idx, arr) => {
        //     let name1 = `map${number}`;
        //     let child = <UI_mapEleLvArr>(uiMap.getChild(name1));
        //     child.m_c2.selectedIndex = val
        //     child.node.on(cc.Node.EventType.TOUCH_START, () => {
        //         console.log("当前点击的地图是", name1)
        //         this.gameNode.active = true
        //     })
        // })
        this.MapRefresh()
        new Array(50).fill(null).forEach((val, idx, arr) => {
            // console.log(idx)
            let number = idx + 1;
            let name1 = `map${number}`;
            let child = <UI_mapEleLvArr>(this.uiMap.getChild(name1));
            child.m_name.text = `${number}`
            child.node.on(cc.Node.EventType.TOUCH_START, () => {
                console.log("当前点击的地图是", name1, val)
                // this.gameNode.active = true
                // GameTemp.idx = idx
                let gk = User.gk[idx];
                if (gk == 0) {
                    platform.showToast("当前关卡未解锁")
                } else {
                    GameTemp.idx = idx
                    ViewMgr.getInstance().openView({
                        View: PanelName.StartPanel,
                        args: {
                            gk: idx + 1
                        }
                    })
                }
            })
        })

        console.log("User", User)
        EventMsg.on(EventName.MAP_REFRESH, this.MapRefresh, this)
    }

    MapRefresh() {
        User.gk.forEach((val, idx, arr) => {
            let gk = idx + 1;
            let name1 = `map${gk}`;
            let child = <UI_mapEleLvArr>(this.uiMap.getChild(name1));
            child.m_c2.selectedIndex = val
            // child.m_name.text = `${gk}`

        })
        this.uiTopUi.m_coinLabel.text = `${User.coin}`
        this.uiTopUi.m_powerLabel.text = `${User.tl}`
    }

    // update (dt) {}
}
