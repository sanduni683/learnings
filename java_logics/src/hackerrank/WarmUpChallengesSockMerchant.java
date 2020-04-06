package hackerrank;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class WarmUpChallengesSockMerchant {

    // Complete the sockMerchant function below.
    static int sockMerchant(int n, int[] ar) {
        Map<Integer, Integer> hashMap = new HashMap<>();
        int numberOfPairs = 0;

        // Create the hashmap
        for(int i=0; i < n; i++){
            if(hashMap.containsKey(ar[i])){
                hashMap.replace(ar[i] , (hashMap.get(ar[i])+1) );
            }
            else{
                hashMap.put(ar[i] , 1 );
            }
        }

        // Revoke the hashmap to find the pairs
        for(Map.Entry m : hashMap.entrySet()){
            numberOfPairs += (int)m.getValue()/2 ;
        }

        return numberOfPairs;

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("result"));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] ar = new int[n];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arItem = Integer.parseInt(arItems[i]);
            ar[i] = arItem;
        }

        int result = sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
