const expect = require('chai').expect;
const index = require('../dist/index.js');

const {
  Layout,
  default: toGrid
} = index;

describe('number of columns to be one', () => {
  const arr = [1, 2, 3];
  const numOfColumns = 1;

  it("N layout without dataSource", () => {
    const result = toGrid([], numOfColumns, Layout.N);
    expect(result).to.eql([]);
  });

  it('N layout with dataSource', () => {
    const result = toGrid(arr, numOfColumns, Layout.N);
    expect(result).to.eql([
      [1],
      [2],
      [3]
    ]);
  });

  it("Z layout without dataSource", () => {
    const result = toGrid([], numOfColumns, Layout.Z);
    expect(result).to.eql([]);
  });

  it('Z layout with dataSource', () => {
    const result = toGrid(arr, numOfColumns, Layout.Z);
    expect(result).to.eql([
      [1],
      [2],
      [3]
    ]);
  });
});

describe('number of columns to be more than one', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const numOfColumns = 3;

  it("N layout without dataSource", () => {
    const result = toGrid([], numOfColumns, Layout.N);
    expect(result).to.eql([]);
  });

  it('N layout with dataSource', () => {
    const result = toGrid(arr, numOfColumns, Layout.N);
    expect(result).to.eql([
      [1, 4, 7],
      [2, 5],
      [3, 6]
    ]);
  });

  it("Z layout without dataSource", () => {
    const result = toGrid([], numOfColumns, Layout.Z);
    expect(result).to.eql([]);
  });

  it('Z layout with dataSource', () => {
    const result = toGrid(arr, numOfColumns, Layout.Z);
    expect(result).to.eql([
      [1, 2, 3],
      [4, 5, 6],
      [7]
    ]);
  });
});