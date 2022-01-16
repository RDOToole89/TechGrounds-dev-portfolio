import { Sorter } from './Sorter';
class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

// LinkedList implementation in TypeScript
export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // Because swapping nodes can become really complicated because it
  // breaks the node chain we're just swapping the values.
  swap(leftIndex: number, rightIndex: number): void {
    // References to the left and right node
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    // Same kind of swapping logic except we target the data property
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let linkedListOutput: number[] = [];

    while (node) {
      linkedListOutput.push(node.data);
      console.log(node.data);
      node = node.next;
    }
    console.log('LinkedList[] ', linkedListOutput);
  }
}
