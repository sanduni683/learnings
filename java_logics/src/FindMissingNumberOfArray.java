import java.util.HashSet;

public class FindMissingNumberOfArray {
    // How do you find the missing number in a given integer unsorted array of 1 to 100 ?
    public static void main(String[] args) {

        // By using array normal way (o(n2))
        int[] intArray = {3, 6, 7, 2, 9, 1, 8, 5};

        for (int i = 1; i <= 9; i++) {
            for (int j = 0; j < intArray.length; j++) {
                // If array already has the number then break the loop
                if (i == intArray[j]) {
                    break;
                }
                // If array comes to the end without finding the number , then that's the missing number.
                if(j == intArray.length -1 ){
                    System.out.println("Missing number : " + i);
                }
            }
        }

        // By HashSet -HashSet only keeps key and this array doesn't have a value , only the key. 0(n)
        HashSet<Integer> hashSet = new HashSet<>();

        hashSet.add(23);
        hashSet.add(1);
        hashSet.add(10);
        hashSet.add(15);
        hashSet.add(25);
        hashSet.add(11);
        hashSet.add(7);
        hashSet.add(2);
        hashSet.add(20);
        hashSet.add(13);

        for (int i=1; i<=25; i++){
            if(!hashSet.contains(i)){
               System.out.println("Missing number hashSet : " + i);
            }
        }
    }

}
