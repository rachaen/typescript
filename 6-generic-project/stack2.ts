// 복습
{
  interface Stack<T> {
    readonly size: number;
    push: (value: T) => void;
    pop: () => T;
  }

  type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this._size >= this.capacity) {
        throw new Error('full');
      }
      const node: StackNode<T> = {
        value,
        next: this.head,
      };

      this.head = node;
      this._size++;
    }

    pop() {
      if (!this.head) {
        throw new Error('Stack is empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(342);
  stack2.push(13);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
