import {platform} from "./cc/Platform";
import {User} from "./UserPorxy";
import {ViewMgr} from "./cc/ViewMgr";
import {addTask, TaskMgr} from "./cc/TaskMgr";
import {MusicMgr} from "./cc/MusicMgr";
import {ResMgr} from "./cc/ResMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    NodeList: cc.Node[] = []

    onLoad() {

    }

    start() {
        ResMgr._Inst()
        ViewMgr.getInstance()
        ViewMgr.getInstance().setFullView(this.NodeList)
        platform.login()?.then(res => {
            console.log("login", res)
            User.init(res.result.user)
        })


    }

    // update (dt) {}
}
