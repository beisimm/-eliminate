/**
 *   Http请求类
 *   author: 鹿财
 *   describe: GetAndPost请求封装
 * */


export class HttpMsg {
    /**
     * get请求
     * @param {string} url
     * @param {function} callback
     */
    static get(url, callback) {
        let xhr = new XMLHttpRequest()
        xhr.responseType = "json"
        console.log("Status: Send Get Request to " + url);
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Content-Type", "applocation/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                callback(true, xhr.responseText);
            }
        };
        xhr.send();
    }

    static numbers = [404, 500, 503, 400];

    /**
     * post请求
     */
    static post(url, body, callBack, err) {
        let xhr = new XMLHttpRequest()
        xhr.responseType = "json"
        // let param = this.getParam(pra);
        // url = `${url}${pra ? "?" : ""}${param}`
        xhr.open("POST", url);
        xhr.timeout = 5000
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Content-Type", "applocation/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            console.log(xhr)
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                callBack(xhr.response)
            }
            if (this.numbers.includes(xhr.status)) {
                err(xhr)
            }
        };
        xhr.ontimeout = () => {
            err("超时", xhr)
            console.log("超时", xhr)
        }
        // data: {
        //     $url: "gameStart",
        //         uid: uid,
        //         gk: gk
        // }
        xhr.send(JSON.stringify(body))

        // xhr.send();
    }

    static getParam(data) {
        let url = ''
        for (let k in data) {
            let value = data[k] !== undefined ? data[k] : '';
            url += `&${k}=${value}`
        }
        return url ? url.substring(1) : ''
    }


}


