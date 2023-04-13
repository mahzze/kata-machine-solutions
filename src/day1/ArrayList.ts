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
            }
        }
        if (index) {
            for (; index < length - 1; index++) {
                this.array[index] = this.array[index + 1];
            }
        }
        return result;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }
        return this.array[idx]
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }
        return this.array[idx];
    }
}
