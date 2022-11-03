# Backtracking

<small>Time: O(n!)</small><br/>
<small>Space - O(n)</small>

- Brute-force approach that finds solutions to constraint satisfaction problems such as crosswords, verbal arithmetic, Sudoku, etc.
- It recursively looks for a solution among all the available options and abandons a possible option (backtracks) if the option fails to satisfy the constraints.

## How It's Implemented

- Incrementally builds candidates to the solutions and abandons the candidate as soon as it determines that the candidate cannot be a valid solution.
- Partial candidates are represented as the nodes of a tree and backtracking uses depth-first search to traverse the tree recursively.
- It checks each node and skips (prunes) the sub-tree rooted at a node if that node cannot be completed to a valid solution.

## Advantages

- Can be used to find all the existing solutions for a problem
- Easy to write and debug

## Disadvantages

- Slow and requires lost of computational resource.
- Cannot be used when locating a value in an unordered table.
