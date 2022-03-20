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
var addTwoNumbers = function(l1, l2) {
    let carry = 0,
        dummy = new ListNode(0),
        currentNode = dummy
    
    while(l1 || l2) {
      let n1 = 0, n2 = 0

      if (l1) {
        n1 = l1.val
        l1 = l1.next
      }
      
      if (l2) {
        n2 = l2.val
        l2 = l2.next
      }

      let sum =  n1 + n2 + carry
      
      carry = Math.floor(sum / 10)
      currentNode.next = new ListNode(sum % 10)  
      currentNode = currentNode.next
    }
  
    if (carry) {
      currentNode.next = new ListNode(carry)  
    }
  
    return dummy.next
};
