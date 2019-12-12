const _Node = require('./node')

// 1. Create a linked list class
class LinkedList {
    constructor() {
        //initially setting head to null; empty list
        this.head = null
    }

    insertFirst(item) {
        //to insert an item into the beginning of a list, set this.head as a new node instance, passing in the item to store and the location
        this.head = new _Node(item, this.head)
        console.log(`${this.head.value} was added to the beginning of the list`)
    }

    insertLast(item) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let tempNode = this.head
            // loop through the list until you reach the last node, which will have a next pointer of null
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            // once tempNode is set to the last item of the list, set it's next pointer to the new node instance
            tempNode.next = new _Node(item, null)
            console.log(`${tempNode.next.value} was added to the end of the list`)
        }
    }

    insertLastWithCycle(item) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let tempNode = this.head
            // loop through the list until you reach the last node, which will have a next pointer of null
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            // once tempNode is set to the last item of the list, set it's next pointer to the new node instance
            tempNode.next = new _Node(item, this.head)
            console.log(`${tempNode.next.value} was added to the end of the list`)
        }
    }

    insertBefore(item, key) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let currNode = this.head
            // tracks previous node to use when we find place to store the new item
            let previousNode = this.head
            // loop through the list; if not the last node and not the node to insert the item before, set currNode to the next node and previousNode to current
            while ((currNode !== null) && (currNode.value !== key)) {
                previousNode = currNode
                currNode = currNode.next
            }
            // if you reach the end of the list and the key of the item to insert before is not found, print 'Cannot insert before nonexistent item'
            if (currNode === null) {
                console.log('Cannont insert before nonexistent item')
                return
            }
            // once found, insert the new item before the given key by setting the previous nodes next pointer to the new node instance, passing the new node a next pointer of the current node
            previousNode.next = new _Node(item, currNode)
            console.log(`${previousNode.next.value} was added before ${key}`)
        }
    }

    insertAfter(item, key) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let currNode = this.head
            // loop through the list; if not the last node and not the node to insert the item after, set currNode to the next node
            while ((currNode !== null) && (currNode.value !== key)) {
                currNode = currNode.next
            }
            // if you reach the end of the list and the key of the item to insert after is not found, print 'Cannot insert after nonexistent item'
            if (currNode === null) {
                console.log('Cannont insert after nonexistent item')
                return
            }
            // once found, insert the new item after the given key by setting the current node's next pointer to the new node instance, passing the new node a next pointer of the current node's old next pointer
            let nextNode = currNode.next
            currNode.next = new _Node(item, nextNode)
            console.log(`${currNode.next.value} was added after ${key}`)
        }
    }

    insertAt(item, index) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let currNode = this.head
            // tracks previous node to use when we find place to store the new item
            let previousNode = null
            // if given the index of 0, insert the item at the beginning of the list
            if (index === 0) {
                this.insertFirst(item)
            }
            // loop through index; for every i before 1 before index, set the current node to the next node
            for (let i = 0; i < index; i++) {
                // loop through index; for every i before 1 before index, set the current node to the next node
                if (i < (index - 1)) {
                    currNode = currNode.next
                }
                // when i gets to the index just before the given index, set the previous node to the current node and the current node to the next node
                if (i === (index - 1)) {
                    previousNode = currNode
                    currNode = currNode.next
                }
            }
            // set the next pointer of the previous node to the new node instance, passing the new instance the current node as the next pointer
            previousNode.next = new _Node(item, currNode)
            console.log(`${previousNode.next.value} was inserted at position ${index + 1}`)
        }
    }

    find(item) {
        // start at the beginning of the list
        let currNode = this.head
        // if list is empty, return null
        if (!this.head) {
            return null
        }
        // loop through the list, comparing each item to the item to find
        while (currNode.value !== item) {
            // if you reach the end of the list and the item was not found, return null
            if (currNode.next === null) {
                console.log(`${item} was NOT found`)
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        // once found, return item
        console.log(`${item} was found in the list`)
        return currNode
    }

    remove(item) {
        // if the list is empty, return null
        if (!this.head) {
            return null
        }
        // if the item to remove is at the beginning of the list, set the head to the next item in the list
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // start at the beginning of the list
        let currNode = this.head
        // tracks previous node to use when we find the node to remove
        let previousNode = this.head
        // loop through the list; if not the last node and not the node to remove, set currNode to the next node and previousNode to the current 
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        // if you reach the end of the list and the item was not found, print 'Item not found'
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        // once found, remove the node by skipping it; setting the previousNode's next pointer to currNode's next pointer
        previousNode.next = currNode.next
        console.log(`${item} was removed from the list`)
    }
}


// --------------------------------------------------------------------------------
// 2. Create a singly linked list

function main() {
    const SLL = new LinkedList
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('squirrel')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 2)
    SLL.remove('Tauhida')
    SLL.find('Boomer')
    SLL.find('Tauhinda')
    SLL.find('Athena')
    SLL.find('Hotdog')
    SLL.find('Kat')
    console.log(display(SLL)) // display function
    // console.log(size(SLL)) // size function
    // console.log(isEmpty(SLL)) // isEmpty function
    // console.log(findPrevious(SLL, 'Kat')) // findPrevious function
    // console.log(findLast(SLL)) // findLast function
    console.log(reverseList(SLL)) // reverseList function
    // console.log(find3rdFromEnd(SLL)) // find3rdFromEnd function
}

console.log(main())


// --------------------------------------------------------------------------------
// 3. Supplemental functions for a linked list

function display(list) {
    let currNode = list.head
    toDisplay = []
    while (currNode !== null) {
        toDisplay.push(currNode.value)
        currNode = currNode.next
    }
    return toDisplay
}

function size(list) {
    let size = 0
    let currNode = list.head
    while (currNode !== null) {
        size++
        currNode = currNode.next
    }
    return `There are ${size} items in the list`
}

function isEmpty(list) {
    if (!list.head) {
        return `The list is empty`
    }
    else {
        return `The list is not empty`
    }
}

function findPrevious(list, item) {
    if (!item) {
        return `Cannot find previous of undefinded`
    }
    if (!list.head) {
        return `There are no items in the list`
    }
    let currNode = list.head
    let previousNode = list.head
    while (currNode.value !== item) {
        if (currNode.next === null) {
            return `Cannot find previous of item not in the list`
        }
        else {
            previousNode = currNode
            currNode = currNode.next
        }
    }
    return previousNode
}

function findLast(list) {
    if (!list.head) {
        return `There are no items in the list`
    }
    let currNode = list.head
    while (currNode !== null) {
        if (currNode.next === null) {
            return currNode
        }
        else {
            currNode = currNode.next
        }
    }
}


// --------------------------------------------------------------------------------
// 4. Mystery Program

function WhatDoesThisProgramDo(lst) {
    // this function accepts a list input and sets current to the start of the list
    let current = lst.head;
    // loops over the list until current equals null, signifying the end of the list
    while (current !== null) {
        // newNode is set to current so that it may be used in another loop
        let newNode = current;
        // loops over the list again until the node after newNode is the last node in the list
        while (newNode.next !== null) {
            // compares the current value and the value after the current value
            if (newNode.next.value === current.value) {
                // if the nodes have the same value, the second node is removed by setting the value of the next pointer to the value of the next pointer's next pointer, essentially bypassing the duplicate value
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// In conclusion, this function is looping through a list, determining if there are any duplicate values; if there are duplicate values, it bypasses the second value, essential removing it
// The time complexity of this algorithm is O(n^2), do to the fact that it has a nested while loop


// --------------------------------------------------------------------------------
// 5. Reverse a list

function reverseList(list) {
    let currNode = list.head
    let previous = null
    while(currNode !== null) {
        let temp = currNode.next
        currNode.next = previous
        previous = currNode
        currNode = temp
    }
    return previous
}


// --------------------------------------------------------------------------------
// 6. 3rd from the end

function find3rdFromEnd(list) {
    let currNode = list.head
    while (currNode.next.next.next !== null) {
        currNode = currNode.next
    }
    return currNode.value
}


// --------------------------------------------------------------------------------
// 7. Middle of a list

function findMiddle(list) {
    let currNode = list.head
    let count = 0
    while (currNode !== null) {
        count++
    }
}


// --------------------------------------------------------------------------------
// 8. Cycle in a list

function createCycleList() {
    CycleList = new LinkedList
    CycleList.insertFirst('1')
    CycleList.insertLast('2')
    CycleList.insertLast('3')
    CycleList.insertLastWithCycle('4')
    console.log(doesListCycle(CycleList))
}

// console.log(createCycleList())

function doesListCycle(list) {
    let originalHeadValue = list.head.value
    let currNode = list.head.next
    while (currNode !== null) {
        if (currNode.next.value === originalHeadValue) {
            return `This list has a cycle`
        }
        else {
            currNode = currNode.next
        }
    }
    return `This list does not cycle`
}


// --------------------------------------------------------------------------------
// 9. Doubly linked list

class DoublyLinkedList {
    constructor() {
        //initially setting head to null; empty list
        this.head = null
        this.tail = null
    }

    insertFirst(item) {
        //to insert an item into the beginning of a list, set this.head as a new node instance, passing in the item to store and the location
        let node = new _Node(item)
        this.head = node
        this.tail = node
        console.log(`${this.head.value} was added to the beginning of the list`)
    }

    insertLast(item) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let tempNode = this.head
            // loop through the list until you reach the last node, which will have a next pointer of null
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            // once tempNode is set to the last item of the list, set it's next pointer to the new node instance
            tempNode.next = new _Node(item, null)
            console.log(`${tempNode.next.value} was added to the end of the list`)
        }
    }

    insertLastWithCycle(item) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let tempNode = this.head
            // loop through the list until you reach the last node, which will have a next pointer of null
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            // once tempNode is set to the last item of the list, set it's next pointer to the new node instance
            tempNode.next = new _Node(item, this.head)
            console.log(`${tempNode.next.value} was added to the end of the list`)
        }
    }

    insertBefore(item, key) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let currNode = this.head
            // tracks previous node to use when we find place to store the new item
            let previousNode = this.head
            // loop through the list; if not the last node and not the node to insert the item before, set currNode to the next node and previousNode to current
            while ((currNode !== null) && (currNode.value !== key)) {
                previousNode = currNode
                currNode = currNode.next
            }
            // if you reach the end of the list and the key of the item to insert before is not found, print 'Cannot insert before nonexistent item'
            if (currNode === null) {
                console.log('Cannont insert before nonexistent item')
                return
            }
            // once found, insert the new item before the given key by setting the previous nodes next pointer to the new node instance, passing the new node a next pointer of the current node
            previousNode.next = new _Node(item, currNode)
            console.log(`${previousNode.next.value} was added before ${key}`)
        }
    }

    insertAfter(item, key) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let currNode = this.head
            // loop through the list; if not the last node and not the node to insert the item after, set currNode to the next node
            while ((currNode !== null) && (currNode.value !== key)) {
                currNode = currNode.next
            }
            // if you reach the end of the list and the key of the item to insert after is not found, print 'Cannot insert after nonexistent item'
            if (currNode === null) {
                console.log('Cannont insert after nonexistent item')
                return
            }
            // once found, insert the new item after the given key by setting the current node's next pointer to the new node instance, passing the new node a next pointer of the current node's old next pointer
            let nextNode = currNode.next
            currNode.next = new _Node(item, nextNode)
            console.log(`${currNode.next.value} was added after ${key}`)
        }
    }

    insertAt(item, index) {
        // check for items already in the list; if none, insert the item at the start of the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at the beginning of the list
            let currNode = this.head
            // tracks previous node to use when we find place to store the new item
            let previousNode = null
            // if given the index of 0, insert the item at the beginning of the list
            if (index === 0) {
                this.insertFirst(item)
            }
            // loop through index; for every i before 1 before index, set the current node to the next node
            for (let i = 0; i < index; i++) {
                // loop through index; for every i before 1 before index, set the current node to the next node
                if (i < (index - 1)) {
                    currNode = currNode.next
                }
                // when i gets to the index just before the given index, set the previous node to the current node and the current node to the next node
                if (i === (index - 1)) {
                    previousNode = currNode
                    currNode = currNode.next
                }
            }
            // set the next pointer of the previous node to the new node instance, passing the new instance the current node as the next pointer
            previousNode.next = new _Node(item, currNode)
            console.log(`${previousNode.next.value} was inserted at position ${index + 1}`)
        }
    }

    find(item) {
        // start at the beginning of the list
        let currNode = this.head
        // if list is empty, return null
        if (!this.head) {
            return null
        }
        // loop through the list, comparing each item to the item to find
        while (currNode.value !== item) {
            // if you reach the end of the list and the item was not found, return null
            if (currNode.next === null) {
                console.log(`${item} was NOT found`)
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        // once found, return item
        console.log(`${item} was found in the list`)
        return currNode
    }

    remove(item) {
        // if the list is empty, return null
        if (!this.head) {
            return null
        }
        // if the item to remove is at the beginning of the list, set the head to the next item in the list
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // start at the beginning of the list
        let currNode = this.head
        // tracks previous node to use when we find the node to remove
        let previousNode = this.head
        // loop through the list; if not the last node and not the node to remove, set currNode to the next node and previousNode to the current 
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        // if you reach the end of the list and the item was not found, print 'Item not found'
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        // once found, remove the node by skipping it; setting the previousNode's next pointer to currNode's next pointer
        previousNode.next = currNode.next
        console.log(`${item} was removed from the list`)
    }
}















// function insertInSortedOrder(list, item) {
//     if (list.head === null || item < list.head.value) {
//         list.head = new _Node(item, list.head)
//         return list
//     }
//     let currNode = list.head
//     let previous = list.head
//     while (currNode.value < item && currNode.value !== null) {
//         previous = currNode
//         currNode = currNode.next
//     }
//     previous.next = new _Node(item, currNode)
//     return list
// }

