public class FindSecondLargestElementInArray {

    // Find 2nd largest element in array, by considering all possible user inputs.
    public static void main (String[] args) {

        int[] numbersArray = {13, 6, 17, 2, 9, 2, 8, 7, 8, 7, 8, 13, 5};
        int largestNumber = 0 ;
        int secondLargestNumber = 0;

        // find the largest number
        for(int i=0; i<numbersArray.length; i++){
            if(numbersArray[i] > largestNumber){
              //  secondLargestNumber = largestNumber;
                largestNumber = numbersArray[i];
            }
        }

        // find the second largest number by removing the largest number.
        for(int i=0; i<numbersArray.length; i++){
            if((numbersArray[i] > secondLargestNumber) && (numbersArray[i] != largestNumber) ){
                secondLargestNumber = numbersArray[i];
            }
        }
        System.out.println("Second Largest number : " + secondLargestNumber);
    }
}
