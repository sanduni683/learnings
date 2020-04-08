class Node {
    int value;
    Node left;
    Node right;

    public Node(int value) {
        this.value = value;
        left = null;
        right = null;
    }
}

class BinaryTree {

    //Insert values to the tree
    public void insert(Node current, int value) {

        if (value < current.value) {
            if (current.left == null) {
                current.left = new Node(value);
            }
            else{
                insert(current.left , value);
            }
        } else if (value > current.value) {
            if (current.right == null) {
                current.right = new Node(value);
            }
            else{
                insert(current.right , value);
            }
        }
    }

    //Traverse the tree in In-order type
    public void traverseInOrder(Node current) {
        if(current != null) {
            traverseInOrder(current.left);
            System.out.print(" " + current.value);
            traverseInOrder(current.right);
        }
    }

    //Traverse the tree in Pre-order type
    public void traversePreOrder(Node current) {
        if(current != null) {
            System.out.print(" " + current.value);
            traversePreOrder(current.left);
            traversePreOrder(current.right);
        }
    }

    //Traverse the tree in Post-order type
    public void traversePostOrder(Node current) {
        if(current != null) {
            traversePostOrder(current.left);
            traversePostOrder(current.right);
            System.out.print(" " + current.value);
        }
    }

    //finding an element
    public boolean containsNodeRecursive(Node current, int value){
        if(current == null){
            return false;
        }
        if(current.value == value){
            return true;
        }
        return value < current.value ? containsNodeRecursive(current.left, value) : containsNodeRecursive(current.right , value);
    }

    //deleting an element
    public void deleteNode(Node current, int value){
        if(current == null){

        }
        if (current.value == value){

        }
    }
}

public class TreeBasic {
    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        Node root = new Node(5);
        binaryTree.insert(root, 2);
        binaryTree.insert(root, 4);
        binaryTree.insert(root, 6);
        binaryTree.insert(root, 8);
        binaryTree.insert(root, 7);
        binaryTree.insert(root, 3);
        binaryTree.insert(root, 9);

        //Traverse the tree
        System.out.println("\ntraverseInOrder ======================================================");
        binaryTree.traverseInOrder(root);
        System.out.println("\ntraversePreOrder ======================================================");
        binaryTree.traversePreOrder(root);
        System.out.println("\ntraversePostOrder ======================================================");
        binaryTree.traversePostOrder(root);
        System.out.println("\nFinding an element ======================================================");
        System.out.println(binaryTree.containsNodeRecursive(root, 4));
        System.out.println("\nDeleting an element ======================================================");

    }
}