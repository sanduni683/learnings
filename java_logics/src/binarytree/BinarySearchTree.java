package binarytree;


class NodeTest {
    int value;
    NodeTest left;
    NodeTest right;

    public NodeTest(int value) {
        this.value = value;
        left = null;
        right = null;
    }
}

class BinarySearchTreeExample {

    //Insert values to the tree
    public void insert(NodeTest current, int value) {

        if (value < current.value) {
            if (current.left == null) {
                current.left = new NodeTest(value);
            }
            else{
                insert(current.left , value);
            }
        } else if (value > current.value) {
            if (current.right == null) {
                current.right = new NodeTest(value);
            }
            else{
                insert(current.right , value);
            }
        }
    }

    //Traverse the tree in In-order type
    public void traverseInOrder(NodeTest current) {
        if(current != null) {
            traverseInOrder(current.left);
            System.out.print(" " + current.value);
            traverseInOrder(current.right);
        }
    }

    //Traverse the tree in Pre-order type
    public void traversePreOrder(NodeTest current) {
        if(current != null) {
            System.out.print(" " + current.value);
            traversePreOrder(current.left);
            traversePreOrder(current.right);
        }
    }

    //Traverse the tree in Post-order type
    public void traversePostOrder(NodeTest current) {
        if(current != null) {
            traversePostOrder(current.left);
            traversePostOrder(current.right);
            System.out.print(" " + current.value);
        }
    }

    //finding an element
    public boolean containsNodeRecursive(NodeTest current, int value){
        if(current == null){
            return false;
        }
        if(current.value == value){
            return true;
        }
        return value < current.value ? containsNodeRecursive(current.left, value) : containsNodeRecursive(current.right , value);
    }
}

public class BinarySearchTree {
    public static void main(String[] args) {

        BinarySearchTreeExample binaryTree1 = new BinarySearchTreeExample();
        NodeTest root = new NodeTest(5);
        binaryTree1.insert(root, 2);
        binaryTree1.insert(root, 4);
        binaryTree1.insert(root, 6);
        binaryTree1.insert(root, 8);
        binaryTree1.insert(root, 7);
        binaryTree1.insert(root, 3);
        binaryTree1.insert(root, 9);

        //Traverse the tree
        System.out.println("\ntraverseInOrder ======================================================");
        binaryTree1.traverseInOrder(root);
        System.out.println("\ntraversePreOrder ======================================================");
        binaryTree1.traversePreOrder(root);
        System.out.println("\ntraversePostOrder ======================================================");
        binaryTree1.traversePostOrder(root);
        System.out.println("\nFinding an element ======================================================");
        System.out.println(binaryTree1.containsNodeRecursive(root, 4));
        System.out.println("\nDeleting an element ======================================================");

    }
}