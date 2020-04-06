import java.util.HashSet;
import java.util.Set;

public class RemoveDuplicatesFromAnArrayInPlace {

        // How do you remove duplicates from an array in place?
        public static void main (String[] args) {
            int[] numbersArray = {13, 6, 17, 2, 9, 9, 9, 7, 8, 7, 8, 13 ,45};

            int[] reultArray = removeDuplicate(numbersArray);

            for (int i=0; i < reultArray.length; i++){
                System.out.println("Result Array : " + reultArray[i]);
            }
        }

        public static int[] removeDuplicate(int[] numbersArray){
            // If hashmap contain duplicate values, then assign the value to 0. Time complexity : O(n)
            Set<Integer> nonDuplicateValuesSet = new HashSet<Integer>();

            for (int i=0; i < numbersArray.length; i++){
                if(nonDuplicateValuesSet.contains(numbersArray[i])){
                    numbersArray[i] = -1;
                }
                else{
                    nonDuplicateValuesSet.add(numbersArray[i]);
                }
            }
            return numbersArray;
        }

}
