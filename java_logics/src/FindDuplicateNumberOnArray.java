import java.util.HashSet;

public class FindDuplicateNumberOnArray {
    // How do you find the duplicate number on a given integer array?
    public static void main(String[] args) {

        int[] intArray = {3, 6, 7, 2, 9, 2, 8, 7, 8, 7};

        // By normal Array o(n2)
        /*
        for (int i =0; i < intArray.length; i++){
            for (int j =i-1 ; j >= 0; j--) {
                if (intArray[i] == intArray[j]){
                    System.out.println("Duplicated value : " + intArray[i]);
                    break;
                }
            }
        }
      */
        // By HashSet - HashSet only keeps key and this array doesn't have a value , only the key. o(n)
        HashSet<Integer> hashSet = new HashSet<Integer>();

        // traverse the hashSet
        for (int i=0; i < intArray.length; i++){
            if(hashSet.contains(intArray[i])){
                System.out.println("Duplicated value : " + intArray[i]);
            }
            hashSet.add(intArray[i]);
        }
    }
}
