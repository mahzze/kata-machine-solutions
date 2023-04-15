export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    public array: Array<T>;

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.array = new Array(this.capacity);
    }

    prepend(item: T): void {
        this.length++;
        let tmp_arr = new Array(this.length);
        tmp_arr[0] = item;
        for (let i = 0; i < this.length; i++) {
            tmp_arr[i + 1] = this.array[i];
        }
        this.array = tmp_arr;
    }

    insertAt(item: T, idx: number): void {
        // Don't know if this should add to the array or just
        // change the value at the index. Sadly there are no
        // tests for this in __tests__/arrayList.ts, so I'll
        // just leave the logic for both below.
        //
        // if it adds to the array
        // -----------------------------------------------------------
        // this.length++;
        // if (this.length <= this.capacity && this.length > idx) {
        //     this.array[this.length - 1] = item;
        //     return;
        // }
        // let tmp_arr = new Array(this.capacity * 2);
        // for (let i = 0; i < this.length; i++) {
        //     tmp_arr[i] = this.array[i];
        // }
        //
        // if it just changes the value
        // -----------------------------------
        if (idx >= this.length || idx < 0) {
            return;
        }
        this.array[idx] = item;
    }

    append(item: T): void {
        this.length++;
        if (this.length <= this.capacity) {
            this.array[this.length - 1] = item;
            return;
        }
        let tmp_arr = new Array(this.capacity * 2);
        for (let i = 0; i < this.length; i++) {
            tmp_arr[i] = this.array[i];
        }
        tmp_arr[this.length] = item;
        this.array = tmp_arr;
    }

    remove(item: T): T | undefined {
        let result = undefined;
        let index = undefined;
        for (let i = 0; i < this.length; i++) {
            if (item === this.array[i]) {
                result = this.array[i];
                this.length--;
                index = i;
                break;
            }
        }
        // just checking for index like if (index) is insufficient, as if (0) equals false. 
        // experience in C finally coming in handy :)
        if (index != undefined) {
            for (; index < this.length - 1; index++) {
                this.array[index] = this.array[index + 1];
            }
        }
        return result;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
        const result = this.array[idx];
        for (; idx < this.length - 1; idx++) {
            this.array[idx] = this.array[idx + 1];
        }
        this.length--;
        return result;
    }
}
