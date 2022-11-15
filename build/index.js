"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringSort_1 = require("./StringSort");
class Sort {
    constructor(collection) {
        this.collection = collection;
    }
    sorter() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
// const numbers = new NumberCollection([10, -1, 3, 0])
const characters = new StringSort_1.StringSort('hAnpm');
const sort = new Sort(characters);
sort.sorter();
console.log(characters.data);
