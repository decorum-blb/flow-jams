// @flow
const buildList = (
  listItems: string[],
  isExpanded?: boolean,
): { title: string, imageUrl: string }[] => {
  if (isExpanded) {
    // extra logic
  }
  return listItems.map(item => ({
    title: item,
    imageUrl: 'http://cats.com/image.jpg',
  }));
}

console.log(buildList(['item one', 'item two', 'item three']));
