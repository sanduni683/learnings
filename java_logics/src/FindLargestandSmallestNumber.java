public class FindLargestandSmallestNumber {
    //How do you find the largest and smallest number in an unsorted integer array?
    public static void main(String [] args){

        int[] intArray = {35, 66, 7, 52, 19, 32, 18, 74, 68, 47, 150};
        int largestNumber = intArray[0] ;
        int smallestNumber = intArray[0] ;

        for (int i=0; i <intArray.length; i++){

            if(largestNumber < intArray[i]){
                largestNumber = intArray[i];
            }
            if(smallestNumber > intArray[i]){
                smallestNumber = intArray[i];
            }

        }
        System.out.println("Largest number : "+ largestNumber);
        System.out.println("Largest number : "+ smallestNumber);
    }

}
