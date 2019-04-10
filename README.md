> An utility to group items in order

# Usage

```
npm i --save to-grid
```

```
let { Order, default: toGrid} = require('omit.js');
toGrid([1,2,3,4,5,6,7], 3, Order.N);
```

# API

enum Order {
  N,
  Z
}

toGrid<T>(arr: T[], numOfColumns: number, order: Order = Order.Z): T[][]

# Z Ordering

> left-to-right, top-to-bottom

E.g. 

[1,2,3,4,5,6,7] with 3 groups will result in:

```
[[1, 2, 3], [4, 5, 6], [7]]
```

i.e.

```
1 2 3
4 5 6
7
```

# N Ordering

> top-to-bottom -> left-to-right

E.g. 

[1,2,3,4,5,6,7] with 3 groups will result in:

```
[1, 4, 7], [2, 5], [3, 6]])
```

i.e.

```
1 4 7
2 5 
3 6
```