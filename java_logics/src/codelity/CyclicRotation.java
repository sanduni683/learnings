package codelity;

public class CyclicRotation {

    public static void main(String[] args) {

        int shiftNum = 3;
        int[] array = {};

        if(array.length == 0 || array == null){
            System.out.println("not a valid input");
        }
        else{
            shiftNum = shiftNum % array.length ;
            int breakPoint = array.length - shiftNum;

            //First rotation
            for(int i=0; i < breakPoint; i++){
                if(i < breakPoint/2 ){
                    int tempValue = array[i];
                    array[i] = array[(breakPoint-1) -i];
                    array[(breakPoint-1) -i] = tempValue ;
                }
            }
            for(int i=0; i < array.length; i++){
                System.out.print(array[i] +", ");
            }
            System.out.println("===================================");


            //Second rotation
            for(int i= breakPoint; i < array.length; i++){
                int num = (array.length+(breakPoint -1)) -i ;
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
}
