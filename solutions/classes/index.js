// @flow
class ScrollView {
  x: number;
  y: number;
  items: string[];
  constructor(x: number, y: number, items: string[]) {
    this.x = x;
    this.y = y;
    this.items = items;
  }
}

console.log(new ScrollView(0, 10, ['item one', 'item two', 'item three']));
