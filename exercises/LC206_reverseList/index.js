/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/


const reverseList = head => {
    // Create a PREV variable and set it to NULL
    let prev = null;
    // Create a CURRENT varialbe and set it to the HEAD
    let current = head;

    // WHILE LOOP stating that while we have a CURRENT or CURRENT !== NULL
    while (current) {
        let temp = current.next;

        // Change the direction of the pointer
        current.next = prev;

        // Move PREV and CURRENT up by 1
        prev = current;
        current = temp;
    }

    // At the end of our WHILE LOOP, PREV will be the value of the
    // last item in the linked list which is now the HEAD.
    // [1 -> 2 -> 3]  PREV -> CURRENT -> TEMP
    // If we are on '3', while(current) means that it will be on '3'.  
    // temp = current.next (now temp in at 'null') so we will break out of 'while loop' on the next iteration.////
    return prev;
};

module.exports = reverseList;
////

/*
Time Complexity: O(n) - We traverse through the Linked List just once.
Space Complexity: O(1)
*/////