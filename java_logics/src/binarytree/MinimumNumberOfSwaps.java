package binarytree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MinimumNumberOfSwaps {

    // A binary tree node has data, pointer to
    //left child && a pointer to right child /
    static class Node {
        int data;
        Node left, right;
    }

    // Helper function that allocates a new node with the
    //given data && null left && right pointers. /
    static Node newNode(int data) {
        Node node = new Node();
        node.data = data;
        node.left = node.right = null;
        return (node);
    }

    // Minimum swap required to convert binary tree to binary search tree



    public static void minimumNumberOfSwaps(Node root) {

        List<Integer> arr1 = new ArrayList<Integer>();
        List<Integer> arr2 = new ArrayList<Integer>();
        int numOfSwaps = 0;

        minimumNumberOfSwapsSample(root, arr1 ,arr2);

        Collections.sort(arr2); //sort the List collection arr2
        // Now arr1 is not sorted and arr2 is sorted.
        for(int i=0; i<arr1.size(); i++){
            System.out.println(arr1.get(i) + " - " +arr2.get(i));
            if(!arr1.get(i).equals(arr2.get(i))) {
                numOfSwaps += 1;
            }
        }
        System.out.print("Minimum Number Of Swaps : " + numOfSwaps);
    }

    public static void minimumNumberOfSwapsSample(Node current , List<Integer> arr1, List<Integer> arr2) {
        if (current != null) {
            minimumNumberOfSwapsSample(current.left, arr1 , arr2);
            arr1.add(current.data);
            arr2.add(current.data);
            minimumNumberOfSwapsSample(current.right, arr1 , arr2);
        }
    }

    public static void main(String[] args) {

        Node root = newNode(3);
        root.left = newNode(2);
        root.right = newNode(5);
        root.right.left = newNode(1);
        root.left.left = newNode(1);
        root.left.right = newNode(4);
        root.left.right.right = newNode(6);


        // Minimum swap required to convert binary tree to binary search tree
        System.out.println("minimumNumberOfSwaps");
        minimumNumberOfSwaps(root);

    }
}
