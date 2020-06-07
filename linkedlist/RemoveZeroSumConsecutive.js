/*
1171. Remove Zero Sum Consecutive Nodes from Linked List

Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of ListNode objects.)

Example 1:

Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

Constraints:

The given linked list will contain between 1 and 1000 nodes.
Each node in the linked list has -1000 <= node.val <= 1000.
*/

/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeZeroSumSublists = function (head) {
    if (head == null)
        return head;
    let m = new Map();

    let curr = head;
    let count = 0;
    while (curr != null) {
        count += curr.val;
        if (count == 0)
            head = curr.next;
        if (m.has(count)) {
            m.get(count).next = curr.next;
            return removeZeroSumSublists(head);
        }
        m.set(count, curr);
        curr = curr.next;
    }
  //  console.log(m);
    return head;
};


const main = () => {
     let m = [1, 2, -3, 3, 1];
  //  let m = [1, 2, 3, -3, 4]
    let head = new ListNode(m[0]);
    let prev = head;
    for (let i = 1; i < m.length; i++) {
        let t = new ListNode(m[i]);
        prev.next = t;
        prev = t;
    }

    console.log(head);
    let res = removeZeroSumSublists(head);
    console.log(res);

}

main();