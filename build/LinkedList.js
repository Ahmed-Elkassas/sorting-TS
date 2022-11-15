"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // add(data: number): void {
    //     const node = new Node(data)
    //     if (!this.head) {
    //         this.head = node
    //         return
    //     }
    //     let tail = this.head;
    //     while(tail.next) {
    //         tail = tail.next;
    //     }
    //     tail.next = node;
    // }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }
    get(index) {
        if (!this.head) {
            throw new Error('index is out of bounds');
        }
        let counter = 0;
        let node = this.head;
        // while (node) {
        //     if (counter === index) {
        //       return node;
        //     }
        //     counter++;
        //     node = node.next;
        //   }
        while (counter !== index) {
            node = node.next;
            counter++;
        }
        return node;
        // throw new Error('Index out of bounds');
    }
}
exports.LinkedList = LinkedList;
