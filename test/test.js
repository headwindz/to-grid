const expect = require('chai').expect;
const index = require('../dist/index.js');

const { Order, default: toGrid } = index;

describe('number of columns to be one', () => {
  const arr = [1, 2, 3];
  const numOfColumns = 1;

  it("N ordering without dataSource", () => {
    const result = toGrid([], numOfColumns, Order.N);
    expect(result).to.eql([]);
  });

  it('N ordering with dataSource', () => {
    const result = toGrid(arr, numOfColumns, Order.N);
    expect(result).to.eql([
      [1],
      [2],
      [3]
    ]);
  });

  it("Z ordering without dataSource", () => {
    const result = toGrid([], numOfColumns, Order.Z);
    expect(result).to.eql([]);
  });

  it("Z ordering with dataSource", () => {
    const result = toGrid(arr, numOfColumns, Order.Z);
    expect(result).to.eql([[1], [2], [3]]);
  });
});

describe('number of columns to be more than one', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const numOfColumns = 3;

  it("N ordering without dataSource", () => {
    const result = toGrid([], numOfColumns, Order.N);
    expect(result).to.eql([]);
  });

  it("N ordering with dataSource", () => {
    const result = toGrid(arr, numOfColumns, Order.N);
    expect(result).to.eql([[1, 4, 7], [2, 5], [3, 6]]);
  });

  it("Z ordering without dataSource", () => {
    const result = toGrid([], numOfColumns, Order.Z);
    expect(result).to.eql([]);
  });

  it("Z ordering with dataSource", () => {
    const result = toGrid(arr, numOfColumns, Order.Z);
    expect(result).to.eql([[1, 2, 3], [4, 5, 6], [7]]);
  });
});