export enum Layout {
  N,
  Z
}

function toGrid<T>(arr: T[], numOfColumns: number, layout: Layout = Layout.Z): T[][] {
  let result = [] as T[][];
  const numOfRows = Math.ceil(arr.length / numOfColumns)
  arr.forEach((it, index ) => {
    let rowIndex, columnIndex;
    if (layout === Layout.Z) {
      rowIndex = Math.floor(index / numOfColumns);
      columnIndex = index % numOfColumns;
    } else {
      rowIndex = index % numOfRows;
      columnIndex = Math.floor(index / numOfRows);
    }
    result[rowIndex] = result[rowIndex] || [];
    result[rowIndex][columnIndex] = it;
  })
  return result;
}

export default toGrid;
