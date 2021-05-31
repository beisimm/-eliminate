export class TaskMgr {
    taskList: any[];
    count: number;
    maxNum: any;

    constructor(maxNum) {
        this.taskList = [];
        this.count = 0;
        this.maxNum = maxNum;
    }

    async add(promiseCreator) {
        if (this.count >= this.maxNum) {
            await new Promise((resolve) => {
                this.taskList.push(resolve)
            })
        }
        this.count++;
        const result = await promiseCreator();
        this.count--;
        if (this.taskList.length > 0) {
            this.taskList.shift()();
        }
        return result;
    }
}

export const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

export const TaskMsg = new TaskMgr(99);
export const addTask = (time, func) => {
    TaskMsg.add(() => {
        return timeout(time).then(() => {
            // console.log(val)
            func()
        })
    })
}
