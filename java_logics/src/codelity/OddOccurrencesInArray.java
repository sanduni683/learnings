package codelity;

import java.util.HashMap;
import java.util.Map;

public class OddOccurrencesInArray {

    public static void main(String[] args){
        int[] A = {5, 3 ,3, 3, 5};

        System.out.println("Result : " + solution(A));
    }

    public static int solution(int[] A) {

        Map<Integer, Integer> numMap = new HashMap<>();
        int resultValue = 0;

        for(int i=0; i<A.length; i++){
            if(numMap.containsKey(A[i])){
                numMap.replace(A[i] , numMap.get(A[i]) + 1);
            }
            else{
                numMap.put(A[i] , 1);
            }
        }

        for(Map.Entry m : numMap.entrySet()){

            if((int)m.getValue()%2 == 1){
                resultValue = (int)m.getKey();
                break;
            }
        }
        return resultValue;

    }

}
