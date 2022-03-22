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
var mergeNodes = function(head) {
    const mergeList = new ListNode(0)
    let mergeListRunner = mergeList
    let runner = head

    while(runner && runner.next) {
      if (runner.val === 0) {
        mergeListRunner.next = runner.next
        mergeListRunner = mergeListRunner.next
        runner = runner.next
      } else {
        mergeListRunner.val += runner.val
      }

      runner = runner.next
    }
  
    mergeListRunner.next = null
  
    return mergeList.next
};

// Without extra space
var mergeNodes = function(head) {
    let runner = head,
        mergeRunner = head

    while(runner && runner.next) {
      if (runner.val === 0) {
        mergeRunner.next = runner.next
        mergeRunner = mergeRunner.next
        runner = runner.next
      } else {
        mergeRunner.val += runner.val
      }

      runner = runner.next
    }
  
    mergeRunner.next = null
    return head.next
};
