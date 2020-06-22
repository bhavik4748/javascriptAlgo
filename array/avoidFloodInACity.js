
/* 1488. Avoid Flood in The City  */
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
    if (rains.length < 2)
        return rains;

    let m = new Map();
    let dryDays = [];
    let ans = [];
    for (let r in rains) {
        if (rains[r] === 0) {
            if (m.size > 0)
                dryDays.push(+r);
            ans.push(1);
        } else {
            if (!m.has(rains[r])) {
                ans.push(-1);
                m.set(+rains[r], +r);
            } else {
                if (dryDays.length < 1)
                    return [];
                else {
                    let day = dryDays[0];
                    if (day < r) {
                        ans.push(-1);
                        let prevPos = m.get(rains[r]);
                        let flag = false;
                        for (let i = 0; i <= dryDays.length; i++) {
                            let dryDay = dryDays[i];
                            if (prevPos < dryDay) {
                                ans[dryDay] = rains[r];
                                m.set(+rains[r], +r);
                                flag = true;
                                dryDays.splice(i, 1);
                                break;
                            }
                        }
                        if (!flag)
                            return [];
                    }
                    else
                        return [];
                }
            }
        }
    }
    return ans;
};

//let arr = [1, 0, 2, 3, 0, 1, 2];
let arr = [0, 0, 0, 28663, 0, 0, 0, 0, 0, 0, 0, 0, 95827, 0, 0, 85637, 0, 0, 0, 45506, 95827, 85637, 0, 0, 45506, 0, 0, 0, 28663, 0, 0, 0, 0, 60812, 0, 0, 0, 0, 60812, 0, 0, 0, 0, 0, 0, 0, 0];
//let arr= [1,0,2,0,2,1];
let res = avoidFlood(arr);
console.log(res);



