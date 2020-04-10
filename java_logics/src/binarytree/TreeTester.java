package binarytree;

public class TreeTester {

    public static void main(String[] args){
        BinaryTree tree = new BinaryTree();
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

        // Depth First search
        System.out.println("printDepthFirst");
        tree.printDepthFirst();

        // Breadth First search
        System.out.println("printBreadthFirst");
        tree.printBreadthFirst();

        // Depth First search in reverse order
        System.out.println("printBreadthFirstReverseTree");
        tree.printBreadthFirstReverseTree();

        // Breadth First search in reverse order
        System.out.println("printDepthFirstReverseTree");
        tree.printDepthFirstReverseTree();

        // Search a Node in Binary Search Tree
        System.out.println("searchANodeinBinaryTree");
        System.out.println(tree.searchANodeinBinaryTree(17));

        // Sum of Binary Search Tree
        System.out.println("sumOfBinarySearchTree");
        tree.sumOfBinarySearchTree();

        // Sum of all the levels in a Binary Search Tree
        System.out.println("sumOfBinarySearchTreeAllLevels");
        tree.sumOfBinarySearchTreeAllLevels();

        // Maximum depth of tree
        System.out.println("maximumDepthOfTree");
        tree.maximumDepthOfTree();

    }
}
