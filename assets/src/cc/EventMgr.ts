/**
 * 事件类
 * @author Lucai
 */

export class EventMgr extends cc.EventTarget {
    private static instance

    public static getInstance(): EventMgr {
        if (this.instance == null) {
            this.instance = new EventMgr();
        }
        return this.instance;
    }

    constructor() {
        super()
    }

    /**
     * 监听事件, 监听要在发送之前
     */
    on(type: string, callback: Function, target?: any, useCapture?: boolean): any {
        super.on(type, callback, target, useCapture)
    }

    /**
     * 发送事件
     */
    emit(key: string, ...args): void {
        super.emit(key, ...args)
    }

    /**
     * 取消事件监听
     */
    off(type: string, callback?: Function, target?: any): void {
        super.off(type, callback, target)
    }
}

export let EventMsg = EventMgr.getInstance()
