import UI_StartPanel from "../fui/main/UI_StartPanel";
import {platform} from "../cc/Platform";
import {User} from "../UserPorxy";
import {ViewMgr} from "../cc/ViewMgr";
import {fullView, PanelName} from "../cc/typeEm";
import {GameTemp} from "../cc/GameTemp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartPanel extends cc.Component {
    private View: UI_StartPanel
    private par

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        console.log("StartPanel", args)
        this.View = args.view
        this.par = args.par
        this.View.m_GoBtn.on(fgui.Event.CLICK, this.GameStartClick, this)

    }

    GameStartClick() {
        // ViewMgr.getInstance().openFullView(fullView.game)
        // ViewMgr.getInstance().closeViewByName(PanelName.StartPanel)
        platform.gameStart(User.uid, GameTemp.idx +1 ).then(res => {
            console.log("GameStartClick", res)
            if (res.result.code == 200) {
                ViewMgr.getInstance().openFullView(fullView.game)
                ViewMgr.getInstance().closeViewByName(PanelName.StartPanel)
            }else{
                platform.showToast(res.result.msg)
            }
        })


    }

}
