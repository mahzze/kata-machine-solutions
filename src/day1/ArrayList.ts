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

  }

  insertAt(item: T, idx: number): void {

  }

  append(item: T): void {
    this.length++;
    if (this.length === this.capacity) {
      this.capacity = this.capacity * 2;
      let arr = new Array(this.capacity)
      for (let i = 0; i < this.length - 1; i++) {
        arr[i] = this.array[i];
      }
      this.array = arr
    }
    this.array[this.length] = item
  }

  remove(item: T): T | undefined {
    for (let i = 0; i < this.length; i++) {
      if (item === this.array[i]) {
        length--
        return this.array[i]
      }
    }
    return undefined
  }

  get(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }
    return this.array[idx]
  }

  removeAt(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined
    }
  }
}
