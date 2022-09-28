# Trees

- Hierarchical data structure composed of nodes
- Each node can have many children but only one parent (the root, which is the top node of a tree, has no parent)
- Nodes can't be their own ancestors, and they can only point to a child
- The constraints above means there's no cycles or loops in trees - this makes recursion useful technique for tree traversal

## Binary Search Trees

<small>Insertion - average Θ(logn), worst O(n), Search - Θ(logn)</small>

- Each parent can have no more than two children
- Stores data that are sortable
- For each parent node, its left child's value is always less than the parent's value and its right child's value is always greater than the parent's value

## Use Cases

- File systems, natural language processing, Document Object Models of XML and HTML documents, etc.
