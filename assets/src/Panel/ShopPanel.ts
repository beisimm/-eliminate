import UI_ShopPanel from "../fui/main/UI_ShopPanel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopPanel extends cc.Component {
    private View:UI_ShopPanel

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        console.log("Show")
        this.View = args.view
    }

}
