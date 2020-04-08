package binarytree;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

// create node class with node value , leftNode and rightNode
class Node{
        int value;
        Node right, left;

        public Node(int value){
            this.value = value;
        }

}

public class BinaryTree {

    Node rootNode = null;

    // Insert elements to tree
    public void insert(int value){
        if(rootNode == null){
            rootNode = new Node(value);
        }
        else{
            insert(rootNode , value);
        }
    }

    private void insert(Node current , int value){

        if (value < current.value ){ // left side to the root node
            if(current.left  == null ){
                current.left = new Node(value);
            }
            else{
                insert(current.left , value);
            }
        }
        else{ // right side to the root node
            if(current.right  == null ){
                current.right = new Node(value);
            }
            else{
                insert(current.right , value);
            }
        }
    }

    // Depth first Search
    public void printDepthFirst(){
        printDepthFirstInPreOrder(rootNode);

    }

    public void printDepthFirstInPreOrder(Node current){
        if(current != null){
            printDepthFirstInPreOrder(current.left);
            System.out.print(" " + current.value);
            printDepthFirstInPreOrder(current.right);
        }
    }

    // Breadth First Search
    public void printBreadthFirst(){
        printBreadthFirstSample(rootNode);
    }

    public void printBreadthFirstSample(Node current){
        Queue<Node> treeQueue = new LinkedList<>();

        if(current != null){
            treeQueue.add(current);
        }

        while(!treeQueue.isEmpty()){

            Node node = treeQueue.remove();
            System.out.print(" " + node.value);
            if (node.left != null){
                treeQueue.add(node.left);
            }
            if (node.right != null){
                treeQueue.add(node.right);
            }
        }

    }

    public void printBreadthFirstReverseTree(){
        printBreadthFirstReverseTreeSample(rootNode);

    }

    public void printBreadthFirstReverseTreeSample(Node current){
        Queue<Node> treeQueue = new LinkedList<>();

        if(current != null){
            treeQueue.add(current);
        }

        while(!treeQueue.isEmpty()){

            Node node = treeQueue.remove();
            System.out.print(" " + node.value);
            if (node.right != null){
                treeQueue.add(node.right);
            }
            if (node.left != null){
                treeQueue.add(node.left);
            }
        }

    }

    public void printDepthFirstReverseTree(){
        printDepthFirstReverseTreeSample(rootNode);

    }

    public void printDepthFirstReverseTreeSample(Node current){
        if(current != null){
            printDepthFirstReverseTreeSample(current.right);
            System.out.print(" " + current.value);
            printDepthFirstReverseTreeSample(current.left);
        }
    }

}


