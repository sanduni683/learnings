import java.util.*;

public class RemoveDuplicatesFromAnArray {

    // How are duplicates removed from a given array in Java?
    public static void main (String[] args) {
        int[] numbersArray = {13, 6, 17, 2, 9, 9, 9, 7, 8, 7, 8, 13 ,45};

        // If hashmap contain duplicate values, then remove . Time complexity : O(n)
        Set<Integer> nonDuplicateValuesSet = new HashSet<Integer>();

        for (int i=0; i < numbersArray.length; i++){
            nonDuplicateValuesSet.add(numbersArray[i]);
        }
        System.out.println("Result Array : " + nonDuplicateValuesSet.toString());

    }

}
