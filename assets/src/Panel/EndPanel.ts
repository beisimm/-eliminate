import UI_EndPanel from "../fui/main/UI_EndPanel";
import {platform} from "../cc/Platform";
import {User} from "../UserPorxy";
import {GameTemp} from "../cc/GameTemp";
import {ViewMgr} from "../cc/ViewMgr";
import {EventName, fullView, PanelName} from "../cc/typeEm";
import {EventMsg} from "../cc/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EndPanel extends cc.Component {
    private View: UI_EndPanel

    start() {
    }

    protected onDestroy(): void {
        this.View.m_nextBtn.off(cc.Node.EventType.TOUCH_END)
        this.View.m_exitBtn.off(cc.Node.EventType.TOUCH_END)
        this.View.m_exitBtn2.off(cc.Node.EventType.TOUCH_END)
    }

    show(args) {
        console.log("EndPanel", args)
        this.View = args.view
        // if (args.par.idx === 0) {
            platform.gameEnd(User.uid, args.par.xj).then(res => {
                console.log("gameEnd", res)
                if (res.result.code == 200) {
                    User.init(res.result.user)
                } else {
                    platform.showToast(res.result.msg)

                }
            })
        // }

        this.View.m_nextBtn.on(cc.Node.EventType.TOUCH_END, this.nextClick, this)
        this.View.m_exitBtn.on(cc.Node.EventType.TOUCH_END, this.exitClick, this)
        this.View.m_exitBtn2.on(cc.Node.EventType.TOUCH_END, this.exitClick, this)


    }

    exitClick() {
        ViewMgr.getInstance().closeFullView(fullView.game)
        ViewMgr.getInstance().closeViewByName(PanelName.EndPanel)

    }

    nextClick() {
        console.log("点击")
        GameTemp.idx += 1

        EventMsg.emit(EventName.GAME_START)
        ViewMgr.getInstance().closeViewByName(PanelName.EndPanel)
        platform.gameStart(User.uid, GameTemp.idx + 1).then(res => {
            console.log("GameStartClick", res)
            if (res.result.code == 200) {

            } else {
                ViewMgr.getInstance().closeFullView(fullView.game)
                platform.showToast(res.result.msg)
            }
        })
    }
}
