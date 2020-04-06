import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class FindMissingNumberOfSortedArray {
    // How do you find the missing number in a given integer unsorted array of 1 to 100 ?
    public static void main(String[] args){

        // By normal array o(n2)
        int[] intArray = new int[100];

        for (int i=1; i<=100; i++){
            intArray[i-1] = i ;
        }

        //Remove an element from array
        intArray[69] = 71;

        for (int i = 1; i <= 100; i++){
            if (i != intArray[i-1]){
                System.out.println("Missing number : " + i);
                break;
            }

        }

        // By HashSet - HashSet only keeps key and this array doesn't have a value , only the key.
        Set<Integer> hashSet = new HashSet<Integer>();

        for (int i=1; i<=100; i++){
             hashSet.add(i);
        }
        //Remove an element from HashSet
        hashSet.remove(59);
        hashSet.remove(46);
        hashSet.remove(82);

        // Checking missing number by using for loop o(n)
        for (int i=1; i<=100; i++){
            if(!hashSet.contains(i)){
                System.out.print("Missing number : " + i);
            }
        }
    }
}