import java.util.*;

class Pair{
    int firstNumber;
    int secondNumber;

    Pair(int firstNumber , int secondNumber){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    @Override
    public String toString() {
        return "Pair{" +
                "firstNumber=" + firstNumber +
                ", secondNumber=" + secondNumber +
                '}';
    }
}

public class FindPairsWhoseSumEqualsToANumber {

    public static void main(String [] args){
        //test case 1
        int[] intArray = {3, 6, 6, 2, 5, 7, 4,9,4, 1, 5, 10, 17, 2, 9, 2, 8, 7, 5, 7, 8, 2 ,45};
        int givenNumber = 10;

        List<Pair> equalPairs = findPairs(intArray, givenNumber);

        for(Pair pr : equalPairs){
            System.out.println(pr.toString());
        }

        //test case 2
        System.out.println("Test2 cas 2 =======================================================");
        int[] intArray2 = {4,4,4};
        int givenNumber2 = 8;

        List<Pair> equalPairs2 = findPairs(intArray2, givenNumber2);

        for(Pair pr : equalPairs2){
            System.out.println(pr.toString());
        }
    }

    public static List<Pair> findPairs(int[] intArray , int givenNumber){

        List<Pair> pairList = new ArrayList<Pair>();
        Map<Integer, Integer> hashMap  = new HashMap<Integer, Integer>();

        /* BruteFore way with 2 for loops -> time complexity O(n2)
        for(int i=0; i< intArray.length-1; i++){
            if(intArray[i] != 0 || intArray[i] != intArray[i]){
                for(int j= i + 1; j< intArray.length; j++){
                    if (intArray[i] + intArray[j] == givenNumber) {
                        Pair pairOfNumbers = new Pair(intArray[i] , intArray[j]);
                        pairList.add(pairOfNumbers);
                    }
                }
            }
        }
        return pairList;
        */

        // Creating the hashmap with key and value , take array value as key and increase the number count every time for similar(same) key.
        for(int i=0; i< intArray.length; i++){
            if(hashMap.containsKey(intArray[i]) ){
                hashMap.replace(intArray[i] , (hashMap.get(intArray[i]) + 1));
            }
            else {
                hashMap.put(intArray[i] , 1);
            }
        }

        // Invoking hashmap elements
        for(Map.Entry m : hashMap.entrySet()){

            // FirstNumber should be less than half of the givenNumber. Otherwise skipp.
            if ((int)m.getKey() > (givenNumber/2)){
                continue;
            }

            int valueNeedToFind = givenNumber - (int)m.getKey() ;
            int numberOfPairs = 0;
              
            if(hashMap.containsKey(valueNeedToFind)){

                // If pairs firstnumber and secondNumber both equals, then pairs should not repeat unnesserily.
                // firstnumber and secondNumber both equals means their valueNeedToFind is also the same number.
                if((int)m.getKey() == valueNeedToFind){
                    numberOfPairs = ((int)m.getValue() * ((int)m.getValue() -1)) / 2 ;
                }
                else {
                    numberOfPairs = ((int)m.getValue()) * (hashMap.get(valueNeedToFind));
                }

                 // Add the elements to response
                for(int i=0; i < numberOfPairs; i++){
                        Pair pairOfNumbers = new Pair((int)m.getKey() ,valueNeedToFind );
                        pairList.add(pairOfNumbers);
                }
            }
        }
        return pairList;
        }
}
