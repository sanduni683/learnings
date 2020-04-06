package hackerrank;

public class ArraysLeftRotation {


    public static void main(String[] args){
        int shiftNum = 4;
        int[] array = {1, 2, 3, 4, 5, 1, 2, 3, 4, 9};

        //First rotation
        for(int i=0; i < shiftNum; i++){
            if(i < shiftNum/2 ){
                int tempValue = array[i];
                array[i] = array[(shiftNum-1) -i];
                array[(shiftNum-1) -i] = tempValue ;
            }
        }
        for(int i=0; i < array.length; i++){
            System.out.print(array[i] +", ");
        }
        System.out.println("===================================");


        //Second rotation
        for(int i=shiftNum ; i < array.length; i++){
            int num = (array.length+(shiftNum -1)) -i ;
            int tempValue = array[i];

            if(i < num ){
                array[i] = array[num];
                array[num] = tempValue ;
            }
        }
        for(int i=0; i < array.length; i++){
            System.out.print(array[i] +", ");
        }
        System.out.println("===================================");


        //Third rotation
        for(int i=0; i < array.length; i++){
            if(i < array.length/2 ){
                int tempValue = array[i];
                array[i] = array[(array.length-1) -i];
                array[(array.length-1) -i] = tempValue ;
            }
        }

        for(int i=0; i < array.length; i++){
            System.out.print(array[i] +", ");
        }

    }

}
