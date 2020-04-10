package binarytree;

import java.util.*;

// create node class with node value , leftNode and rightNode
class Node {
    int value;
    Node right, left;

    public Node(int value) {
        this.value = value;
    }
}

public class BinaryTree {

    Node rootNode = null;
    int sumBinaryTree =0;
    int maxHeight =0;

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

    // Depth first Search
    public void printDepthFirst() {
        printDepthFirstInPreOrder(rootNode);

    }

    public void printDepthFirstInPreOrder(Node current) {
        if (current != null) {
            printDepthFirstInPreOrder(current.left);
            System.out.print(" " + current.value);
            printDepthFirstInPreOrder(current.right);
        }
    }

    // Breadth First Search
    public void printBreadthFirst() {
        printBreadthFirstSample(rootNode);
    }

    public void printBreadthFirstSample(Node current) {
        Queue<Node> treeQueue = new LinkedList<>();

        if (current != null) {
            treeQueue.add(current);
        }

        while (!treeQueue.isEmpty()) {

            Node node = treeQueue.remove();
            System.out.print(" " + node.value);
            if (node.left != null) {
                treeQueue.add(node.left);
            }
            if (node.right != null) {
                treeQueue.add(node.right);
            }
        }

    }

    public void printBreadthFirstReverseTree() {
        printBreadthFirstReverseTreeSample(rootNode);

    }

    public void printBreadthFirstReverseTreeSample(Node current) {
        Queue<Node> treeQueue = new LinkedList<>();

        if (current != null) {
            treeQueue.add(current);
        }

        while (!treeQueue.isEmpty()) {

            Node node = treeQueue.remove();
            System.out.print(" " + node.value);
            if (node.right != null) {
                treeQueue.add(node.right);
            }
            if (node.left != null) {
                treeQueue.add(node.left);
            }
        }

    }

    public void printDepthFirstReverseTree() {
        printDepthFirstReverseTreeSample(rootNode);

    }

    public void printDepthFirstReverseTreeSample(Node current) {
        if (current != null) {
            printDepthFirstReverseTreeSample(current.right);
            System.out.print(" " + current.value);
            printDepthFirstReverseTreeSample(current.left);
        }
    }

    // Search a Node in Binary Tree
    public boolean searchANodeinBinaryTree(int value) {
        return searchANodeinBinaryTreeSample(rootNode, value);
    }

    public boolean searchANodeinBinaryTreeSample(Node current, int value) {
        if(current == null){
            return false;
        }
        if (current.value == value){
            return true;
        }

        return value < current.value ? searchANodeinBinaryTreeSample(current.left, value) : searchANodeinBinaryTreeSample(current.right , value);
    }

    // Sum Of Binary Search Tree
    public void sumOfBinarySearchTree(){
        sumOfBinarySearchTreeSample(rootNode);
        System.out.println("Sum of the Binary Search Tree : " + sumBinaryTree);

    }

    public void sumOfBinarySearchTreeSample(Node current) {
        if(current != null){
            sumBinaryTree += current.value;
            sumOfBinarySearchTreeSample(current.left);
            sumOfBinarySearchTreeSample(current.right);
        }
    }

    // Sum Of Binary Search Tree All Levels
    public void sumOfBinarySearchTreeAllLevels(){
        int heightLevel =0;
        Map<Integer , Integer> levelValueMap = new HashMap<>();
        Map<Integer , Integer> result = sumOfBinarySearchTreeAllLevelsSample(rootNode ,levelValueMap, heightLevel);
        for(Map.Entry e : result.entrySet()){
            System.out.println("Level : " + e.getKey() + " , Sum : " + e.getValue() );
        }
    }

    public Map<Integer, Integer> sumOfBinarySearchTreeAllLevelsSample(Node current, Map<Integer, Integer> levelValueMap, int heightLevel){

        if (current == null)
            return levelValueMap;

        // recursive method call to left tree
        if (current.left != null)
            sumOfBinarySearchTreeAllLevelsSample(current.left , levelValueMap, heightLevel+1);

        // recursive method call to right tree
        if (current.right != null)
            sumOfBinarySearchTreeAllLevelsSample(current.right, levelValueMap, heightLevel+1);

        // put key and value to hashmap(key is height level of tree and value is crreunt node values total)
        if(levelValueMap.containsKey(heightLevel)){
            levelValueMap.put(heightLevel , current.value + levelValueMap.get(heightLevel) );
        }
        else{
            levelValueMap.put(heightLevel,current.value);
        }
        return levelValueMap;

    }

    // Maximum Depth Of Tree
    public void maximumDepthOfTree(){
        maxHeight = maximumDepthOfTreeSample(rootNode);
        System.out.println("Maximum Depth Of Tree : " +  maxHeight);
    }

    public int maximumDepthOfTreeSample(Node current){
        /*
        if (current != null) {
            maxHeight = (Math.max(maximumDepthOfTreeSample(current.left) , maximumDepthOfTreeSample(current.right))+1);
            return maxHeight;
        }
        else{
            return 0;
        }
        */
        if (current == null)
            return 0;

        int left = 0;
        if (current.left != null)
            left = maximumDepthOfTreeSample(current.left);

        int right = 0;
        if (current.right != null)
            right = maximumDepthOfTreeSample(current.right);

        return (Math.max(left, right) + 1);
    }

}


