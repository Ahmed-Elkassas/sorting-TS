class NumberCollection {
    constructor(public data: number[]) {}

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