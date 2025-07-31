// 복습
{
  interface Stack {
    readonly size: number;
    push: (value: string) => void;
    pop: () => string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size = 0;  // 외부에서쓰는 것과 내부에서 쓰는 것이 이름이 동일하면 _를 사용함
    private head?: StackNode;

    constructor(private capacity: number) {}
    get size() {  // public 생략 가능
      return this._size;
    }
    push(value: string) {
      if (this._size >= this.capacity) {
        throw new Error('stack is full!');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop() {
      if (!this.head) {
        throw new Error('Stack is empty!');
      }

      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push('a');
  stack.push('b');
  console.log(stack.size);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}
