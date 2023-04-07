interface LNode<T> {
  value: T
  next?: LNode<T>
}

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: LNode<T>
  private tail?: LNode<T>

  constructor() {
    this.length = 0
  }

  prepend(item: T): void {
    const node = { value: item } as LNode<T>
    this.length++

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    this.head.prev = node
    node.next = this.head
    this.head = node
  }
  insertAt(item: T, idx: number): void {

  }
  append(item: T): void {

  }
  remove(item: T): T | undefined {

  }
  get(idx: number): T | undefined {

  }
  removeAt(idx: number): T | undefined {

  }
}
