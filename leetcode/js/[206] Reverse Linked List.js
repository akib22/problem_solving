/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* Approach
  -> store every node of the linked-list in an array
  -> make anther linked-list using that array from end node
  -> return the linked-list
*/
var reverseList = function(head) {
    const nodes = []
   
    while(head) {
        nodes.push(head)
        head = head.next
    }
    
    let reverseList = null
    let runner = null
   
    for (let i = nodes.length - 1; i >= 0; i -= 1) {
      const node = nodes[i]
      node.next = null // avoiding Error - Found cycle in the ListNode
      
      if (reverseList) {
        runner.next = node
        runner = runner.next
      } else {
        reverseList = node
        runner = reverseList
      }
    }
    
    return reverseList
};
