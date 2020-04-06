package codelity;

public class CyclicRotation {

    public static void main(String[] args){
        int shiftNum = 3;
        int[] array = {3, 8, 9, 7, 6};

        //First rotation
        for(int i=0; i < (array.length - shiftNum); i++){
            if(i < shiftNum/2 ){
                int tempValue = array[i];
                array[i] = array[((array.length - shiftNum)- 1)];
                array[((array.length - shiftNum)- 1)] = tempValue ;
            }
        }
        for(int i=0; i < array.length; i++){
            System.out.print(array[i] +", ");
        }
        System.out.println("===================================");


        //Second rotation
        for(int i=array.length -1 ; i > array.length - shiftNum; i--){
            int tempValue = array[i];

            if(i < shiftNum/2 ){
                array[array.length -1] = array[array.length - shiftNum];
                array[array.length - shiftNum] = tempValue ;
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
