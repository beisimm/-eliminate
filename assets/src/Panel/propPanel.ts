import UI_propPanel from "../fui/main/UI_propPanel";
import {platform} from "../cc/Platform";
import {User} from "../UserPorxy";
import UI_propItem from "../fui/main/UI_propItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class propPanel extends cc.Component {
    private View: UI_propPanel

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        console.log("propPanel", args)
        this.View = args.view
        this.getProp();
    }

    private getProp() {
        platform.propGet(User.uid).then((res) => {
            console.log(res)
            res.result.prop.forEach((val, idx, arr) => {
                console.log(val)

                let UI_propItem = <UI_propItem>(this.View.getChild(`${val.id}`));
                UI_propItem.m_lv.text = `${val.lv}`
                if (val.num > 29) {
                    UI_propItem.m_content.text = "兑换"
                    UI_propItem.m_content.off(cc.Node.EventType.TOUCH_START)
                    UI_propItem.m_content.on(cc.Node.EventType.TOUCH_START, () => {
                        platform.propUp(User.uid, val.id).then((res1) => {
                            console.log(res1)
                            if (res.result.code == 200) {
                                this.getProp()
                            }else {
                                platform.showToast(res.result.msg)
                            }
                        })
                    })

                } else {
                    UI_propItem.m_content.text = `${val.num}/30`
                }
            })
        })
    }
}
