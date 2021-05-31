import {EventMsg} from "./cc/EventMgr";
import {EventName} from "./cc/typeEm";
import {platform} from "./cc/Platform";

export class UserPorxy {

    private static instance

    public static _int(): UserPorxy {
        if (this.instance == null) {
            this.instance = new UserPorxy();
        }
        return this.instance;
    }

    prop: { id: string, num: number, lv: number } [] = [{
        id: "30001",
        num: 1,
        lv: 1
    }]
    uid
    coin = 0
    tl = 20
    gk = [4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    constructor() {
    }

    init(data) {
        this.uid = data.uid
        this.coin = data.coin
        this.tl = data.tl
        this.gk = data.gk
        EventMsg.emit(EventName.MAP_REFRESH)
        platform.propGet(this.uid).then(res => {
            if (res.result.code == 200) {
                this.prop = res.result.prop
            } else {
                console.log("获取装备列表失败")
            }
        })
    }


}

export let User = UserPorxy._int()
