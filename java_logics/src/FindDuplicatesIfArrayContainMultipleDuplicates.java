import java.util.HashMap;
import java.util.Map;

public class FindDuplicatesIfArrayContainMultipleDuplicates {
    // How do you find duplicate numbers in an array if it contains multiple duplicates?
    public static void main (String[] args) {

        int[] intArray = {3, 6, 17, 2, 9, 2, 8, 7, 8, 7, 8, 2 ,45};
        Map<Integer, Integer> numbersMap = new HashMap<Integer , Integer>();
        int prevValue = 1;

        // If hashmap doen't contain the value , put it into the hashmap, if contains the value then increase the key value by +1 (O(n))
        for (int i=0; i < intArray.length; i++){
            if(numbersMap.containsKey(intArray[i])){
                prevValue = numbersMap.get(intArray[i]) ;
                numbersMap.put(intArray[i] , prevValue + 1);
                System.out.println("Duplicate values are : "+ intArray[i] + ", " +  (prevValue + 1));
            }
            else {
                numbersMap.put(intArray[i] , 1);
            }
        }
    }

}


