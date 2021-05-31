import tween = cc.tween;
import UI_Component2 from "../fui/main/UI_Component2";
import UI_GameTopUi from "../fui/main/UI_GameTopUi";
import UI_GamePanel from "../fui/main/UI_GamePanel";
import UI_Component1 from "../fui/main/UI_Component1";
import UI_itemBg from "../fui/main/UI_itemBg";
import {boxType, EventName, PanelName} from "../cc/typeEm";
import {GameTemp} from "../cc/GameTemp";
import {ViewMgr} from "../cc/ViewMgr";
import {EventMgr, EventMsg} from "../cc/EventMgr";
import {User} from "../UserPorxy";
import UI_Component4 from "../fui/main/UI_Component4";
import {MusicMgr} from "../cc/MusicMgr";
import {platform} from "../cc/Platform";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePanel extends cc.Component {
    @property(cc.Node)
    node1 = null
    @property(cc.Node)
    gameMain = null
    @property(cc.Node)
    BgNode = null
    @property(cc.Node)
    GameTopUi = null
    @property(cc.Font)
    font = null
    @property(cc.Asset)
    config = null
    @property(cc.Asset)
    propConfig = null
    // private scoreLabel: UI_Component2;
    a
    i1 = 7
    // items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // items = [7, 8, 9, 10, 11];
    // items = [15, 16, 17, 18, 19, 20, 21, 22];
    items = [1, 2, 3, 4, 5, 0];
    itewW = 100
    score = 0
    BossHp = 3000
    BsCount = 10 //步数


    private currentLabel: UI_Component2;
    private uiGameTopUi: UI_GameTopUi;
    private uiGamePanel: UI_GamePanel;
    private jsonElement: any;

    protected onLoad(): void {
        this.onUILoaded()
    }

    start() {
        console.log(111111)
        // fgui.UIPackage.loadPackage("UI/main", this.onUILoaded.bind(this));
        window["aaa"] = this
        // @ts-ignore
        cc.game.wozijide = () => {
            if (!this.task.length) return
            this.task.pop()()

        }

    }

    protected onEnable(): void {
        // this.GameTopUi.active = true
        this.GameStart()
    }

    protected onDisable(): void {

    }


    onUILoaded() {
        console.log("login", this.config)
        let uiGamePanel = UI_GamePanel.createInstance();
        this.uiGamePanel = uiGamePanel
        this.gameMain.addChild(uiGamePanel.node)
        this.uiGameTopUi = UI_GameTopUi.createInstance();
        this.GameTopUi.addChild(this.uiGameTopUi.node)
        let a = []
        this.a = a
        this.antoMap = new Map<any, any>()
        this.antoMap.set("up", {x: 0, y: 1})
        this.antoMap.set("down", {x: 0, y: -1})
        this.antoMap.set("lift", {x: -1, y: 0})
        this.antoMap.set("right", {x: 1, y: 0})
        // let i1 = 6
        // let y1 = 6
        if(cc.sys.platform === cc.sys.ANDROID){
            this.uiGamePanel.m_randomBtn.on(cc.Node.EventType.TOUCH_END, () => {
                if (!this.btnflag) return

                platform.showAdView()
                this.task.push(() => {
                    this.ClickrandomAll()
                })
            })
            this.uiGamePanel.m_addBtn.on(cc.Node.EventType.TOUCH_END, () => {
                if (!this.btnflag) return

                platform.showAdView()
                this.task.push(() => {
                    this.addBs()
                })
            })
            this.uiGamePanel.m_lowBtn.on(cc.Node.EventType.TOUCH_END,() => {
                if (!this.btnflag) return

                platform.showAdView()
                this.task.push(() => {
                    this.lowBtn()
                })
            })
            this.uiGamePanel.m_boomBtn.on(cc.Node.EventType.TOUCH_END,() => {
                if (!this.btnflag) return
                platform.showAdView()
                this.task.push(() => {
                    this.boomBtn()
                })
            })
        }else {
            this.uiGamePanel.m_randomBtn.on(cc.Node.EventType.TOUCH_END, this.ClickrandomAll, this)
            this.uiGamePanel.m_addBtn.on(cc.Node.EventType.TOUCH_END, this.addBs, this)
            this.uiGamePanel.m_lowBtn.on(cc.Node.EventType.TOUCH_END, this.lowBtn, this)
            this.uiGamePanel.m_boomBtn.on(cc.Node.EventType.TOUCH_END, this.boomBtn, this)
        }


        fgui.registerFont('my1', this.font);
        EventMsg.on(EventName.GAME_START, this.GameStart, this)


        // this.scoreLabel = UI_Component2.createInstance();
        // this.scoreLabel.node.on(cc.Node.EventType.TOUCH_START, this.anto, this)
        // this.scoreLabel.node.y += 500
        // this.scoreLabel.node.x -= 375
        // this.node.addChild(this.scoreLabel.node)

        // this.scoreLabel.m_score.text = `Boss血量:${this.BossHp}`
        // this.scoreLabel.m_score.text = `这是一段测试文字123456789+-`
        for (let i = 0; i < this.i1; i++) {
            a.push(new Array(this.i1))
            for (let j = 0; j < this.i1; j++) {
                let item = UI_Component1.createInstance()
                let uiItemBg = UI_itemBg.createInstance();
                this.BgNode.addChild(uiItemBg.node)
                this.node1.addChild(item.node)
                item.node.on(cc.Node.EventType.TOUCH_START, this.nodeStart, this)
                item.node.on(cc.Node.EventType.TOUCH_MOVE, this.nodeMove, this)

                let x = (i + 0.5) * this.itewW;
                let y = (j + 0.5) * this.itewW;
                uiItemBg.node.x = x - 40
                uiItemBg.node.y = y + 40
                item.node.x = x
                item.node.y = y
                item.node.name = `${i}${j}`
                item.m_c1.selectedIndex = this.random(this.items);
                a[i][j] = {
                    x: i,
                    y: j,
                    pos: item.node.position,
                    node: item.node
                };
            }
        }
        // this.loop()
    }


    btnflag = true

    btnClose(t: boolean = false) {
        this.btnflag = t
        this.uiGamePanel.m_randomBtn.enabled = t
        this.uiGamePanel.m_addBtn.enabled = t
        this.uiGamePanel.m_lowBtn.enabled = t
        this.uiGamePanel.m_boomBtn.enabled = t
    }

    boomBtn() {
        if (!this.btnflag) return
        let timeout1 = setTimeout(() => {
            this.loop(9)
            clearTimeout(timeout1)
        }, 1000 * this.time * 2 + 100);
        for (let i = 2; i < 5; i++) {
            let a = []
            for (let j = 2; j < 5; j++) {
                a.push({x: i, y: j})
            }
            this.eliminate(a)
        }
        this.btnClose()

    }

    lowBtn() {
        if (!this.btnflag) return

        let timeout1 = setTimeout(() => {
            this.loop(7)
            clearTimeout(timeout1)
        }, 1000 * this.time * 2 + 100);
        for (let i = 0; i < this.i1; i++) {
            this.eliminate([{
                x: i, y: 0,
            }])
        }
        this.btnClose()

    }

    add = 0
    strike = 0
    task = []

    GameStart() {
        if (this.a?.length > 0) this.randomAll();
        let jsonElement = this.config.json[GameTemp.idx];
        this.jsonElement = jsonElement
        console.log(jsonElement)
        this.BsCount = jsonElement.customs
        this.uiGameTopUi.m_bsLabel.text = `步数:${this.BsCount}`
        this.uiGameTopUi.m_gkLabel.text = `关卡${GameTemp.idx + 1}`
        this.score = 0
        this.uiGameTopUi.m_scoreLabel.text = `${this.score}`
        this.uiGameTopUi.m_pb.max = jsonElement.lv3
        this.uiGameTopUi.m_pb.value = 0
        this.BossHp = jsonElement.hp
        this.uiGamePanel.m_user.m_HpBp.max = this.BossHp
        this.uiGamePanel.m_user.m_HpBp.value = this.BossHp
        this.uiGamePanel.m_user.m_nameLabel.text = `${jsonElement.name}`
        this.endFlag = false
        this.gameOverFlag = true
        console.log(User)

        this.add = 0
        this.strike = 0
        User.prop?.map(async (val, idx, arr) => {
            if (val.lv <= 0) return
            let filter = this.propConfig.json.filter((val1, idx1, arr1) => {
                return val.id == val1.id && val.lv == val1.lv
            })[0];

            console.log("filter", filter)
            this.add += filter.add
            this.strike += filter.strike
            let UI_Component4 = <UI_Component4>(this.uiGamePanel.getChild(val.id))
            UI_Component4.m_c1.selectedIndex += 5
            UI_Component4.m_gj.text = `攻击加${filter.add * 100}%`
            UI_Component4.m_bg.text = `暴击加${filter.strike * 100}%`

        })
        console.log(this.add, this.strike)


        for (let i = 1; i < 4; i++) {
            this.uiGameTopUi.getChild(`z${i}`).enabled = false
        }
        this.btnClose(true)

    }

    addBs() {
        if (!this.btnflag) return

        this.BsReduce(5)
        this.btnClose()
    }

    gameOverFlag = true

    BsReduce(num: number) {
        this.BsCount += num
        this.uiGameTopUi.m_bsLabel.text = `步数:${this.BsCount}`
        if (this.BsCount == 0) {
            this.antoFlag = false
            this.gameOverFlag = false
        }

    }

    ClickrandomAll() {
        if (!this.btnflag) return
        this.randomAll()
        this.btnClose()

    }

    private randomAll() {
        for (let i = 0; i < this.i1; i++) {
            for (let j = 0; j < this.i1; j++) {
                let UI_Component1 = <UI_Component1>(this.a[i][j].node.$gobj)
                UI_Component1.m_c1.selectedIndex = this.random(this.items)
                UI_Component1.m_c3.selectedIndex = boxType.无
            }
        }
    }

    random(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    // y1 = 8
    xj = 1
    endFlag = false
    antoFlag = false

    dellHp(Num) {
        this.BossHp -= Num
        this.uiGamePanel.m_user.m_HpBp.value = this.BossHp

        this.score += Num
        this.uiGameTopUi.m_pb.value = this.score
        this.uiGameTopUi.m_scoreLabel.text = `${this.score}`


        for (let i = 1; i < 4; i++) {
            if (this.score > this.jsonElement[`lv${i}`]) {
                this.uiGameTopUi.getChild(`z${i}`).enabled = true
                this.xj = i + 1
            }
        }

        if (this.BossHp < 0) {
            if (this.endFlag) return
            this.endFlag = true
            this.antoFlag = true
            // this.anto()
            // ViewMgr.getInstance().openView({
            //     View: PanelName.EndPanel,
            //     args: {
            //         idx: 0,
            //         xj: this.xj
            //     }
            // })
        }

        // if (this.BossHp < 0) {
        // this.scoreLabel.m_score.text = `Boss死亡`
        // } else {
        // this.scoreLabel.m_score.text = `boss血量:${this.BossHp}`
        // this.scoreLabel.m_score._font = this.font
        // }
    }

    nodelist = [null, null]
    idx = 0
    time = 0.2

    getNodeCom(node) {
        return <UI_Component1>(node.$gobj)
    }

    MX = 0
    MY = 0
    moveFlag = true
    SX
    SY
    sNode
    nodelist1 = []
    idx1 = 0

    nodeStart(e) {
        if (!this.loopFlag) return
        this.MX = 0
        this.MY = 0
        this.moveFlag = true
        let node = e.target;
        let item = <UI_Component1>(node.$gobj)
        item.m_c2.selectedIndex = 1
        this.sNode = node
        this.SX = Math.round((node.x + this.itewW / 2) / this.itewW - 1)
        this.SY = Math.round((node.y + this.itewW / 2) / this.itewW - 1)
        let obj = {x: this.SX, y: this.SY};
        this.jh(obj);
    }

    private jh(obj) {
        MusicMgr.inst().playEffect("click")
        let anies = this.nodelist1.filter((val) => {
            return val == obj
        });
        if (anies.length == 0) {
            this.nodelist1.push(obj)
        }
        if (this.nodelist1.length == 2) {
            this.loopFlag = false
            if (Math.abs(this.nodelist1[0].x - this.nodelist1[1].x) + Math.abs(this.nodelist1[0].y - this.nodelist1[1].y) == 1) {
                this.chengonve();
            } else {
                console.log("交互失败,距离不为1")
                this.initNodelist()
            }
        }
    }

    private chengonve() {

        this.change(this.nodelist1[0], this.nodelist1[1], () => {
            // initNodelist.call(this);
            //
            let promise = this.find(this.nodelist1[0].x, this.nodelist1[0].y, 2);
            let promise1 = this.find(this.nodelist1[1].x, this.nodelist1[1].y, 2);
            // console.log("promise", promise, promise1, this.idx)
            if (promise == false && promise1 == false) { // 没有消除的时候换回原来的位置
                //     console.log("两个都查找失败", this.nodelist1);
                // todo 未消除交换
                this.scheduleOnce(() => {
                    this.change(this.nodelist1[0], this.nodelist1[1], () => {

                    })
                    this.initNodelist()
                }, this.time)
            } else {
                this.BsReduce(-1)
                // todo 未消除交换时,已放入loop中
                // this.initNodelist()
            }
            // console.log(this.a)
            // todo 未消除交换取消时
            // this.initNodelist()
        })
    }

    nodeMove(e) {
        if (!this.moveFlag) return
        let delta = e.touch.getDelta();
        this.MX += delta.x
        this.MY += delta.y
        if (Math.abs(this.MX) > this.itewW) {
            this.moveFlag = false
            let x = Math.round((this.sNode.x + this.MX + this.itewW / 2) / this.itewW - 1);
            if (x < 0) x = 0
            if (x > this.i1 - 1) x = this.i1 - 1
            let obj = {x: x, y: this.SY};
            // console.log(this.MX, x, this.SY)
            this.jh(obj)
        }
        if (Math.abs(this.MY) > this.itewW) {
            this.moveFlag = false
            let y = Math.round((this.sNode.y + this.MY + this.itewW / 2) / this.itewW - 1);
            if (y < 0) y = 0
            if (y > this.i1 - 1) y = this.i1 - 1
            // console.log(this.MY, this.SY, y)
            let obj = {x: this.SX, y: y};
            this.jh(obj)
        }
    }


    antoMap: Map<any, any>

    anto() {
        let any = this.findxList[0];

        let message = this.antoMap.get(any.move);
        let any1 = {
            x: any.x + message.x,
            y: any.y + message.y
        }
        let newVar = {
            x: any.x,
            y: any.y
        };
        this.nodelist1 = [
            newVar, any1
        ]
        this.chengonve();

    }

    change(a, b, callback) {
        this.loopFlag = false
        let time = 0.3
        let node1: cc.Node = this.a[a.x][a.y].node
        let node2: cc.Node = this.a[b.x][b.y].node
        tween(node1)
            .to(time, {position: this.a[b.x][b.y].pos})
            .call(() => {
                [this.a[a.x][a.y].node, this.a[b.x][b.y].node] = [this.a[b.x][b.y].node, this.a[a.x][a.y].node];
                this.getNodeCom(node1).m_c2.selectedIndex = 0
                this.getNodeCom(node2).m_c2.selectedIndex = 0
                callback()
            })
            .start()
        tween(node2)
            .to(time, {position: this.a[a.x][a.y].pos})
            .start()
        this.continuousCount = 0
    }

    initNodelist() {
        this.loopFlag = true
        this.nodelist1.forEach((val, idx, arr) => {
            let node: cc.Node = this.a[val.x][val.y].node
            let com1 = <UI_Component1>(node.$gobj);
            com1.m_c2.selectedIndex = 0
        })
        this.nodelist1 = []
    }


    getC1(item) {
        let UI_Component1 = <UI_Component1>(item.node.$gobj);
        return UI_Component1.m_c1.selectedIndex
    }

    fList = [
        {
            ori: "up",
            x: 0,
            y: 1,
            move: "down"
        },
        {
            ori: "down",
            x: 0,
            y: -1,
            move: "up"
        },
        {
            ori: "lift",
            x: -1,
            y: 0,
            move: "right"

        },
        {
            ori: "right",
            x: 1,
            y: 0,
            move: "lift"
        },
    ]

    findxList = []

    findx(x, y, nori, c1) {
        this.fList.forEach((val, idx, arr) => {
            if (val.ori != nori) {
                let Sx = x + val.x;
                let Sy = y + val.y;
                let aElement = this.a[Sx];
                if (!aElement) return
                let aElementElement = aElement[Sy];
                if (!aElementElement) return
                if (this.getC1(aElementElement) == c1) {
                    this.findxList.push({
                        move: val.move,
                        x: Sx,
                        y: Sy
                    })
                }
            }
        })
        // console.log(this.findxList)
    }


    find(idx1, idx2, t) {
        let item = this.a[idx1][idx2]
        let list1 = [item]
        let list2 = [item]
        let c1 = this.getC1(item);
        for (let i = 1; i < this.i1; i++) { // 往上查找
            let item1 = this.a[idx1][idx2 + i]
            if (!item1) break
            if (this.getC1(item1) == c1) list1.push(item1)
            else {
                if (i == 2) {
                    if (t == 3) this.findx(idx1, idx2 + i, "down", c1)
                    break
                } else break
            }
        }
        for (let i = 1; i < this.i1; i++) {  //往下查找
            let item1 = this.a[idx1][idx2 - i]
            if (!item1) break
            if (this.getC1(item1) == c1) list1.push(item1)
            else {
                if (i == 2) {
                    if (t == 3) this.findx(idx1, idx2 - i, "up", c1)
                    break
                } else break
            }
        }
        for (let i = 1; i < this.i1; i++) { // 往右查找
            let aElement = this.a[idx1 + i];
            if (!aElement) break
            let item3 = aElement[idx2]
            if (!item3) break
            if (this.getC1(item3) == c1) list2.push(item3)
            else {
                if (i == 2) {
                    if (t == 3) this.findx(idx1 + i, idx2, "lift", c1)
                    break
                } else break
            }
        }
        for (let i = 1; i < this.i1; i++) { // 往左查找
            let aElement1 = this.a[idx1 - i];
            if (!aElement1) break
            let item1 = aElement1[idx2]
            if (!item1) break
            if (this.getC1(item1) == c1) list2.push(item1)
            else {
                if (i == 2) {
                    if (t == 3) this.findx(idx1 - i, idx2, "right", c1)
                    break
                } else break
            }
        }
        // list1 =  Array.from(new Set(list1))
        // list2 =  Array.from(new Set(list2))
        // console.log("查找结束纵向", list1)
        // console.log("查找结束横向", list2)
        this.joint(list1, t)
        this.joint(list2, t)


        if (list2.length > 2) return true
        else if (list1.length > 2) return true
        else return false
    }


    b = []
    count = 0

    joint(list: Array<any>, t) {
        this.count++
        if (list.length > 2) {
            this.b = Array.from(new Set(this.b.concat(list)))
        }
        if (this.count == 2 * t) {
            if (this.b.length > 0) {
                this.eliminateA(this.b, t)
            }
            this.b = []
            this.count = 0
        }
    }

    eliminateA(list: Array<any>, t) {
        // console.log("eliminateA", list)
        let obj = {}
        list.forEach((val, idx, arr) => { // 分离出每一列需要消除的元素
            if (obj[val.x]) {
                obj[val.x].push(val)
            } else {
                obj[val.x] = [val]
            }
        })
        let keys = Object.keys(obj);
        let keysLen = keys.length;
        if (keysLen > 4) {  // 筛选出每一行有5个的行成行炸
            let mid = Math.floor(keysLen / 2)
            let key = keys[mid];
            let objElement = obj[`${key}`][0];
            this.a[objElement.x][objElement.y].node.$gobj.m_c3.selectedIndex = boxType.行
            obj[`${key}`].pop()
        }
        let values = Object.values(obj);
        values.forEach((val: Array<any>, idx, arr) => {
            val.sort((a, b) => {
                return a.y - b.y
            })
            let valLen = val.length;
            if (valLen > 4) { // 筛选出每一列有5个的行成列炸
                let valElement = val[0];
                this.a[valElement.x][valElement.y].node.$gobj.m_c3.selectedIndex = boxType.列
                val.splice(0, 1)
            } else if (valLen > 2 && keysLen > 2) {
                let valElement = val[0];
                this.a[valElement.x][valElement.y].node.$gobj.m_c3.selectedIndex = boxType.全
                val.splice(0, 1)
            }
        })

        values.forEach((val: Array<any>, idx, arr) => {
            val.forEach((val1, idx1, arr1) => {
                if (val1.node?.$gobj?.m_c3.selectedIndex == boxType.全) {  //田消除
                    MusicMgr.inst().playEffect("boom")
                    val1.node.$gobj.m_c3.selectedIndex = boxType.无
                    for (let i = val1.x - 1; i < val1.x + 2; i++) {
                        if (i < 0 || i > this.i1 - 1) continue
                        for (let j = val1.y - 1; j < val1.y + 2; j++) {
                            if (j < 0 || j > this.i1 - 1) continue
                            let objElement = obj[i];
                            if (objElement) {
                                let filter1 = objElement.filter((val3, idx3, arr3) => {
                                    return val3.x == i && val3.y == j
                                });
                                if (filter1.length > 0) continue
                            }
                            let message = {
                                x: i, y: j,
                            };
                            if (obj[i]) {
                                obj[i].push(message)
                            } else {
                                obj[i] = [message]
                            }
                        }
                    }
                }
                if (val1.node?.$gobj?.m_c3.selectedIndex == boxType.行) {  // 行消除                    MusicMgr.inst().playEffect("row")
                    MusicMgr.inst().playEffect("row")
                    val1.node.$gobj.m_c3.selectedIndex = boxType.无
                    keys.forEach((key, idx2, arr2) => {
                        let val2 = obj[key]
                        obj[key] = val2.filter((val3, idx3, arr3) => {
                            return val1.y != val3.y
                        });
                    })
                    for (let i = 0; i < this.i1; i++) {
                        let message = {
                            x: i, y: val1.y,
                        };
                        if (obj[i]) {
                            obj[i].push(message)
                        } else {
                            obj[i] = [message]
                        }
                    }
                }
                if (val1.node?.$gobj?.m_c3.selectedIndex == boxType.列) {  //列消除
                    MusicMgr.inst().playEffect("row")
                    val1.node.$gobj.m_c3.selectedIndex = boxType.无
                    let x = val1.x;
                    obj[x] = []
                    for (let i = 0; i < this.i1; i++) {
                        let message = {
                            x: x, y: i,
                        };
                        obj[x].push(message)
                    }
                }

            })
        })

        values = Object.values(obj);
        // todo 查找所有
        let Count = 0
        values.map((val: Array<any>, idx, arr) => {
            Count += val.length
            if (val.length > 0) return this.eliminate(val)
        })
        if (Count == 3) {
            MusicMgr.inst().playEffect("three")
        }
        if (Count == 4) {
            MusicMgr.inst().playEffect("four")
        }
        let timeout1 = setTimeout(() => {
            this.loop(Count)
            clearTimeout(timeout1)
        }, 1000 * this.time * 2 + 100);
    }

    eliminate(list) {
        list.sort((a, b) => {
            return a.y - b.y
        })
        let len = list.length //消除的个数
        let num = this.i1 - 1 - list[len - 1].y  // 消除上方的个数
        let count = num + len
        let x = list[0].x; // 起点
        let y = list[0].y; // 起点
        let a = []
        for (let i = 0; i < count; i++) {
            let node = this.a[x][y + i].node;
            let data = y + i
            let newVar = y + i + len;
            if (data > this.i1 - 1) data -= count;
            if (newVar > this.i1 - 1) newVar -= count;
            a.push(this.a[x][newVar].node)
            if (i < len) {
                let moveH = this.itewW * count;
                let selectedIndex = this.random(this.items);
                node.$gobj.m_c1.selectedIndex = selectedIndex
                tween(node)
                    .by(0, {y: moveH})
                    // .call(() => {
                    // })
                    .start();

            }
            let moveH1 = this.itewW * len
            // let timeout = setTimeout((val, idx, arr) => {
            tween(node)
                .delay(0.05)
                .by(this.time, {y: -moveH1})
                // .call(() => {
                //
                // })
                .start();
            // clearTimeout(timeout)
            // }, 50);

        }
        a.forEach((val, idx, arr) => {
            this.a[x][y + idx].node = val
        })

    }

    iteri = 0;
    iterj = 0;

    * iter() {
        if (this.iteri == this.i1 - 1) {
            this.iteri -= this.i1
            this.iterj++
        }
        this.iteri++
    }

    loopFlag = true
    continuousCount = 0

    loopX() {
        let i2 = this.i1 - 1
        for (let i = 0; i < i2; i++) {
            for (let j = 0; j < i2; j++) {
                this.find(i, j, 3)
            }
        }
    }

    loop(Count?) {
        let boolean = this.find(this.iteri, this.iterj, 1);
        if (!boolean && (this.iteri != this.i1 - 1 || this.iterj != this.i1 - 1)) { // 查找下一个
            this.iter().next()
            this.loop(Count)
        }
        if (boolean) {  //查找到跳出
            this.iteri = 0
            this.iterj = 0
            this.Attack(Count);
            return
        }
        if (!boolean && this.iteri == this.i1 - 1 && this.iterj == this.i1 - 1) { // 查找结束
            this.loopFlag = true
            this.iteri = 0
            this.iterj = 0
            this.Attack(Count);
            this.initNodelist()
            this.findxList = []
            this.loopX()
            // console.log(this.findxList)
            if (this.antoFlag) this.anto()
            if (!this.gameOverFlag) {
                console.log("游戏结束")
                ViewMgr.getInstance().openView({
                    View: PanelName.EndPanel,
                    args: {
                        idx: 1,
                        xj: this.xj
                    }
                })
            }
            return
        }
    }

    private Attack(Count) {


        this.continuousCount++
        // let number2 = 255 - 25 * this.continuousCount;
        // let b = number2 < 0 ? 0 : number2
        // this.scoreLabel.m_continuous.node.color = cc.color(255, 255, b)
        // this.scoreLabel.m_continuous.text = `连击${this.continuousCount}次`
        let random = Math.random();
        let bj = random < this.strike ? 2 : 1
        let number = (Count * 100 + (Count - 3) * 10) * (1 + this.add)
        let number1 = (this.continuousCount - 1) * 0.1 + 1.1;
        let Dam = Math.floor(number * number1 * bj)
        // console.log("连击", this.continuousCount, "此次消除个数", Count, "基础伤害", number, "倍率", number1, "血量减少", Dam)
        // this.scoreLabel.m_current.text = `此次消除个数为${Count}`
        this.dellHp(Dam)
    }
}

