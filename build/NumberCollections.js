"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    swap(leftIdx, rightIdx) {
        let leftHand = this.data[leftIdx];
        this.data[leftHand] = this.data[rightIdx];
        this.data[rightIdx] = leftHand;
    }
}
exports.NumberCollection = NumberCollection;
