package hackerrank;

// create node class with node value , leftNode and rightNode
class Node {
    int value;
    Node right, left;

    public Node(int value) {
        this.value = value;
    }
}

public class BinarySearchTreeLowestCommonAncestor {

    static Node rootNode = null;

    // Insert elements to tree
    public void insert(int value) {
        if (rootNode == null) {
            rootNode = new Node(value);
        } else {
            insert(rootNode, value);
        }
    }

    private void insert(Node current, int value) {

        if (value < current.value) { // left side to the root node
            if (current.left == null) {
                current.left = new Node(value);
            } else {
                insert(current.left, value);
            }
        } else { // right side to the root node
            if (current.right == null) {
                current.right = new Node(value);
            } else {
                insert(current.right, value);
            }
        }
    }


    public static Node binarySearchTreeLowestCommonAncestor(Node root, int v1, int v2) {
        return isValuesavailable(root, v1, v2);
    }

    public static Node isValuesavailable(Node current, int val1, int val2) {
        if (current == null) {
            return null;
        }

        if (current.value >= val1 && current.value <= val2) {
            return current;
        }
        else if (current.value > val1 && current.value > val2) {
            return isValuesavailable(current.left, val1, val2);
        }
        else if (current.value < val1 && current.value < val2) {
            return isValuesavailable(current.right, val1, val2);
        }
        return current;
    }

    public static void main(String[] args) {
        BinarySearchTreeLowestCommonAncestor tree = new BinarySearchTreeLowestCommonAncestor();
        tree.insert(5);
        tree.insert(3);
        tree.insert(2);
        tree.insert(1);
        tree.insert(4);
        tree.insert(8);
        tree.insert(7);
        tree.insert(6);
        tree.insert(9);
        tree.insert(10);
        tree.insert(15);

        // Binary Search Tree Lowest Common Ancestor
        System.out.println("BinarySearchTreeLowestCommonAncestor");
        System.out.println(tree.binarySearchTreeLowestCommonAncestor(rootNode, 7, 4));

    }
}
