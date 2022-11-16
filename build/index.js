"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// const numbers = new NumberCollection([10, -1, 3, 0])
// const characters = new StringSort('hAnpm')
const linkedList = new LinkedList_1.LinkedList();
linkedList.push(2);
linkedList.push(-1);
linkedList.push(5);
linkedList.push(0);
linkedList.push(-10);
linkedList.sort();
linkedList.print();
