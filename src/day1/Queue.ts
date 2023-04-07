type QNode<T> = {
  value: T
  next?: QNode<T>
}

export default class Queue<T> {
  public length: number;
  private head?: QNode<T>
  private tail?: QNode<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = { value: item } as QNode<T>
    this.length++

    if (!this.tail) {
      this.tail = this.head = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--

    const head = this.head
    this.head = this.head.next
    head.next = undefined
    // In C, here would be where free(head) would be, but js has a garbage collector

    return head.value
  }

  peek(): T | undefined {
    return this.tail?.value
  }
}
