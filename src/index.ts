interface Sortable {
    swap(leftIdx: number, rightIdx: number): void;
    compare(leftIdx: number, rightIdx: number): boolean;
    length: number
}

class Sort {
    constructor(public collection: Sortable) {}

    sorter(): void {
        const {length} = this.collection
        for(let i = 0; i < length; i++) {
            for(let j = 0; j < length - i - 1; j++) {
                if(this.collection.compare(j, j + 1)) {
                    // let temp = this.collection[j];
                    // this.collection[j] = this.collection[j + 1];
                    // this.collection[j + 1] = temp
                    this.collection.swap(j, j+ 1)
                }
            }
        }
    }
}

const numbers = new NumberCollection([10, -1, 3, 0])

const sort = new Sort(numbers)
sort.sorter()
console.log(sort.collection)