import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class ShopeeInterviewQuestion {

    public static  void main(String[] args) {

        //reading numbers
        Scanner in = new Scanner(System.in);
        List<Integer> arrivalList = new ArrayList<Integer>();
        List<Integer> exitList = new ArrayList<Integer>();

        while(in.hasNext()){
            arrivalList.add(in.nextInt());
            exitList.add(in.nextInt());
        }

        Integer[] arrivals = (Integer[]) arrivalList.toArray();
        Integer[] exit= (Integer[])exitList.toArray();

        Arrays.sort(arrivals);
        Arrays.sort(exit);

        int minArrival = arrivals[0] ;
        int maxExit = exit[exit.length-1];

        int count= 0;
        int maxCount = 0 ;

        int pointArrival = 0;
        int pointExit = 0 ;

        for(int i= minArrival ; i <= maxExit ; i++  ){

            while(arrivals[pointArrival] == i && pointArrival < arrivals.length){
                count++ ;
                pointArrival++;
            }

            while(exit[pointExit] == i && pointExit < exit.length){
                count++;
                pointExit++;
            }

            if(count> maxCount){
                maxCount = count;
            }
        }

        System.out.println(maxCount);

    }

}



