/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return l1;
    let list = new ListNode(-1);
    let current = list;
    let curL1 = l1;
    let curL2 = l2;
    
    while (curL1 && curL2) {
        if (curL1.val < curL2.val) {
            current.val = curL1.val;
            curL1 = curL1.next;
        } else if (curL1.val > curL2.val) {
            current.val = curL2.val;
            curL2 = curL2.next;            
        } else {
            current.val = curL1.val;
            current.next = new ListNode();
            current.next.val = curL1.val;
            current = current.next;
            curL1 = curL1.next;
            curL2 = curL2.next;  
        }

        if (curL1 || curL2) {
            current.next = new ListNode();
            current = current.next;
        }
    }
    
    while(curL1) {
       current.val = curL1.val;
       curL1 = curL1.next;
       if (curL1) { 
           current.next = new ListNode();
           current = current.next; 
       }
    }
    
    while(curL2) {
       current.val = curL2.val;
       curL2 = curL2.next;
       if (curL2) {
           current.next = new ListNode();
           current = current.next;
       }
    }
    
    return list;
};
