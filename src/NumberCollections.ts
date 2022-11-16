import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
    constructor(public data: number[]) {
        super()
    }

    get length() {
        return this.data.length
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx]
    }

    swap(leftIdx: number, rightIdx: number): void {
        let leftHand = this.data[leftIdx];
        this.data[leftHand] = this.data[rightIdx] 
        this.data[rightIdx] = leftHand
    }
 
} 