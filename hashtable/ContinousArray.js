/*
525. Contiguous Array
Medium



Share
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
Input: [1,1,1,0,0,1,0]
Output: 6

Note: The length of the given binary array will not exceed 50,000.
*/


const contiguousArray = (arr) => {
    let m = new Map();
    let n = arr.length, count = 0, res = 0;
    m.set(0, -1);
    for (let i = 0; i < n; i++) {
        if (arr[i] == 1)
            count += 1;
        else
            count -= 1;

        if (m.has(count)) {
            res = Math.max(res, i - m.get(count))
        } else {
            m.set(count, i);
        }
    }

    return res;
}
console.log('contiguousArray:', '[1, 1, 1, 0, 0, 1, 0]' );
console.log(contiguousArray([1, 1, 1, 0, 0, 1, 0]));

export default contiguousArray;