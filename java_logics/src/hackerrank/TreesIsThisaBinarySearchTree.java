package hackerrank;

import java.util.ArrayList;
import java.util.List;

public class TreesIsThisaBinarySearchTree {

    class Node{
        int value ;
        Node left, right;

        public Node(int value) {
            this.value = value;
            left = null;
            right = null;
        }
    }

    Node rootNode = null;

    public void insert(int value){
        if(rootNode == null){
            rootNode = new Node(value);
        }
        else {
            insert(rootNode , value);
        }
    }

    public void insert(Node current , int value){
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

    public void isThisBinarySearchTree(){
        List<Integer> valuesList = new ArrayList<>();
        List<Integer> resultValueList =  isThisBinarySearchTreeSample(rootNode , valuesList);
        for(int i =0; i<resultValueList.size()-1; i++){
            if(resultValueList.get(i) >= resultValueList.get(i+1)){
                System.out.println("Not a binary search tree");
                break;
            }
        }
    }

    public List<Integer> isThisBinarySearchTreeSample(Node current, List<Integer> valuesList){
        if(current != null) {
            isThisBinarySearchTreeSample(current.left, valuesList);
            System.out.print(" " + current.value);
            valuesList.add(current.value);
            isThisBinarySearchTreeSample(current.right, valuesList);
        }
        return valuesList;
    }

    public static void main(String[] args){
        TreesIsThisaBinarySearchTree tree = new TreesIsThisaBinarySearchTree();
        tree.insert(4);
        tree.insert(21);
        tree.insert(66);
        tree.insert(21);
        tree.insert(34);
        tree.insert(51);
        tree.insert(7);

        //checking tree is a binary search tree or not
        tree.isThisBinarySearchTree();

    }
}
