public class ReverseArray {

    //How do you reverse an array in place in Java?
    public static void main(String[] args){
        int[] numbersArray = {13, 6, 17, 2, 4, 56 , 39, 9, 27, 81, 74, 48, 11 ,45};

        int[] result = solution(numbersArray);
        for(int i=0; i<result.length; i++){
            System.out.print(result[i] + ", ");
        }
    }

    private static int[] solution(int[] numbersArray){

        for(int i=0; i< numbersArray.length/2; i++){

            // swaping values
            int tempValue = numbersArray[i];
            numbersArray[i] = numbersArray[(numbersArray.length -1)-i];
            numbersArray[(numbersArray.length -1)-i] = tempValue;
         }

    return numbersArray;
    }
}
