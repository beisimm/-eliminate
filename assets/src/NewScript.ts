import UI_Component1 from "./fui/main/UI_Component1";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    private once: any;
    private to: number;

    start() {
        console.log(111111)
        fgui.UIPackage.loadPackage("UI/main", this.onUILoaded.bind(this));
    }

    random(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    a
    i1 = 6

    // y1 = 8

    onUILoaded() {
        let a = []
        this.a = a
        // let i1 = 6
        // let y1 = 6
        for (let i = 0; i < this.i1; i++) {
            a.push(new Array(this.i1))
            for (let j = 0; j < this.i1; j++) {
                // console.log(i, j)
                let item = UI_Component1.createInstance()
                this.node.addChild(item.node)
                item.node.on(cc.Node.EventType.TOUCH_END, this.nodeOn, this)
                item.node.x = i * 64 - 200
                item.node.y = j * 64 - 200
                // @ts-ignore
                item.node.idx1 = i
                // @ts-ignore
                item.node.idx2 = j
                item.node.name = `${i}${j}`
                let selectedIndex = this.random([6, 1, 2, 3, 4, 5]);
                item.m_c1.selectedIndex = selectedIndex
                a[i][j] = {
                    x: i,
                    y: j,
                    type: selectedIndex
                };
            }
        }
        this.loop()

        console.log(a)
    }

    nodelist = [null, null]
    idx = 0
    time = 0.1

    nodeOn(e) {
        console.log(e)
        // this.iter().next()
        let node = e.target;
        let item = <UI_Component1>(node.$gobj)
        item.m_c2.selectedIndex = 1
        this.nodelist[this.idx] = node

        function initNodelist() {
            this.nodelist[0].$gobj.m_c2.selectedIndex = 0
            this.nodelist[1].$gobj.m_c2.selectedIndex = 0
            this.nodelist = [null, null]
            this.idx -= 2
        }

        if (this.idx == 1) {
            if (Math.abs(this.nodelist[0].idx1 - this.nodelist[1].idx1 + this.nodelist[0].idx2 - this.nodelist[1].idx2) == 1) {
                [this.nodelist[0].$gobj.m_c1.selectedIndex, this.nodelist[1].$gobj.m_c1.selectedIndex] = [this.nodelist[1].$gobj.m_c1.selectedIndex, this.nodelist[0].$gobj.m_c1.selectedIndex];
                [this.a[this.nodelist[0].idx1][this.nodelist[0].idx2].type, this.a[this.nodelist[1].idx1][this.nodelist[1].idx2].type] = [this.a[this.nodelist[1].idx1][this.nodelist[1].idx2].type, this.a[this.nodelist[0].idx1][this.nodelist[0].idx2].type]
                // console.log(this.a)
                let promise = this.find(this.nodelist[0].idx1, this.nodelist[0].idx2);
                let promise1 = this.find(this.nodelist[1].idx1, this.nodelist[1].idx2);
                console.log("promise", promise, promise1, this.idx)
                if (promise == false && promise1 == false) { // 没有消除的时候换回原来的位置
                    console.log("两个都查找失败", this.nodelist);
                    this.scheduleOnce(() => {
                        [this.nodelist[0].$gobj.m_c1.selectedIndex, this.nodelist[1].$gobj.m_c1.selectedIndex] = [this.nodelist[1].$gobj.m_c1.selectedIndex, this.nodelist[0].$gobj.m_c1.selectedIndex];
                        [this.a[this.nodelist[0].idx1][this.nodelist[0].idx2].type, this.a[this.nodelist[1].idx1][this.nodelist[1].idx2].type] = [this.a[this.nodelist[1].idx1][this.nodelist[1].idx2].type, this.a[this.nodelist[0].idx1][this.nodelist[0].idx2].type]
                        initNodelist.call(this);
                    }, this.time)
                } else {
                    initNodelist.call(this);
                }

            } else {
                console.log("交互失败,距离不为1")
                initNodelist.call(this);
            }
        }
        this.idx++
    }

    find(idx1, idx2) {
        let item = this.a[idx1][idx2]
        // while ()
        let list1 = [item]
        let list2 = [item]
        for (let i = 1; i < this.i1; i++) { // 往下查找
            let item1 = this.a[idx1][idx2 + i]
            console.log(item1)
            if (!item1) break
            if (item1.type == item.type) list1.push(item1)
            else break
        }
        for (let i = 1; i < this.i1; i++) {  //往上查找
            let item1 = this.a[idx1][idx2 - i]
            console.log(item1)
            if (!item1) break
            if (item1.type == item.type) list1.push(item1)
            else break
        }
        for (let i = 1; i < this.i1; i++) { // 往右查找
            let aElement = this.a[idx1 + i];
            if (!aElement) break
            let item3 = aElement[idx2]
            // console.log(item1)
            if (!item3) break
            if (item3.type == item.type) list2.push(item3)
            else break
        }
        for (let i = 1; i < this.i1; i++) { // 往左查找
            let aElement1 = this.a[idx1 - i];
            if (!aElement1) break
            let item1 = aElement1[idx2]
            if (!item1) break
            // console.log(item1)
            if (item1.type == item.type) list2.push(item1)
            else break
        }

        console.log("查找结束纵向", list1)
        console.log("查找结束横向", list2)
        this.joint(list1)
        this.joint(list2)

        if (list2.length > 2 || list1.length > 2) return true
        else return false
    }

    b = []
    count = 0

    joint(list: Array<any>) {
        // console.log("拼接", this.b, this.count)
        if (list.length > 2) {
            this.b = Array.from(new Set(this.b.concat(list)))
        }
        if (this.count == 1) {
            this.eliminateA(this.b)
            this.b = []
            this.count -= 2
        }
        this.count++
    }

    eliminateA(list: Array<any>) {
        console.log("eliminateA", list)
        let obj = {}
        list.forEach((val, idx, arr) => { // 分离出每一列需要消除的元素
            if (obj[val.x]) {
                obj[val.x].push(val)
            } else {
                obj[val.x] = [val]
            }
        })
        console.log(obj)
        let values = Object.values(obj);
        // console.log("values", values);
        values.forEach((val, idx, arr) => {
            this.eliminate(val)
        })
    }

    eliminate(list) {
        let time = this.time
        list.forEach((val, idx, arr) => { // 消除
            // @ts-ignore
            this.node.getChildByName(`${val.x}${val.y}`).$gobj.m_c1.selectedIndex = 0
            this.a[val.x][val.y].type = 0
        })
        list.sort((a, b) => {
            return a.y - b.y
        })
        let len = list.length
        let num = this.i1 - 1 - list[len - 1].y
        this.scheduleOnce(() => {
            let x = list[0].x; // 起点
            let y = list[0].y; // 起点
            for (let i = 0; i < num; i++) {  // 位移
                // @ts-ignore
                [this.node.getChildByName(`${x}${y + i}`).$gobj.m_c1.selectedIndex, this.node.getChildByName(`${x}${y + len + i}`).$gobj.m_c1.selectedIndex] = [this.node.getChildByName(`${x}${y + len + i}`).$gobj.m_c1.selectedIndex, this.node.getChildByName(`${x}${y + i}`).$gobj.m_c1.selectedIndex];
                [this.a[x][y + i].type, this.a[x][y + len + i].type] = [this.a[x][y + len + i].type, this.a[x][y + i].type]
                // console.log(this.a)
            }
            this.scheduleOnce((val, idx, arr) => {
                // console.log("填充", list)
                list.forEach((val, idx, arr) => { // 填充
                    let selectedIndex = this.random([6, 1, 2, 3, 4, 5]);
                    // @ts-ignore
                    this.node.getChildByName(`${val.x}${val.y + num}`).$gobj.m_c1.selectedIndex = selectedIndex
                    this.a[val.x][val.y + num].type = selectedIndex
                },)
                clearTimeout(this.to)
                this.to = setTimeout(() => {
                    this.loop()
                }, 1000)

            }, time)
        }, time)
    }


    iteri = 0;
    iterj = 0;

    * iter() {
        if (this.iteri == this.i1 - 1) {
            this.iteri -= this.i1
            this.iterj++
        }
        this.iteri++
        console.log("iter", this.iteri, this.iterj)
    }

    loop() {
        let boolean = this.find(this.iteri, this.iterj);
        if (!boolean && this.iteri == this.i1 - 1 && this.iterj == this.i1 - 1) {
            console.log("跳出循环")
            this.iteri = 0
            this.iterj = 0
            return
        } else if (!boolean && (this.iteri != this.i1 - 1 || this.iterj != this.i1 - 1)) {
            console.log("未循环完")
            this.iter().next()
            this.loop()
        } else if (boolean) {
            console.log("查找到目标重新查找")
            this.iteri = 0
            this.iterj = 0
            return
        }
    }


}

