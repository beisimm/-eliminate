export enum boxType {
    无 = 0,  //无
    行 = 1, //行
    列 = 2, // 列
    全 = 3, //田字
}

export enum gkType {
    不可解锁 = 0,
    未解锁 = 1,
    一星 = 2,
    二星 = 3,
    三星 = 4
}
export enum GameDj {
    randomAll = 0,
    addBs = 1,
    一星 = 2,
    二星 = 3,
}

export enum fullView {
    game = "game",
    main = "main"
}

/** 视窗名称 */
export enum PanelName {
    StartPanel = "StartPanel",  // 地图选点击弹窗
    EndPanel = "EndPanel", // 游戏结束弹出页
    propPanel = "propPanel", // 道具页弹窗
    ShopPanel = "ShopPanel" // 道具页弹窗
}

/** 事件名称 */
export enum EventName {
    MAP_REFRESH = "MAP_REFRESH", // 刷新地图界面
    GAME_START = "GAME_START", //游戏界面刷新
}



