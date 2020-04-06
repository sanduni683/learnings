package hackerrank;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
public class HashTablesRansomNote {

        // Complete the checkMagazine function below.
        static void checkMagazine(String[] magazine, String[] note) {
            Map<String, Integer> wordSet = new HashMap<String, Integer>();
            String st = "Yes";

            for(int i=0; i<magazine.length; i++){
                if(wordSet.containsKey(magazine[i])){
                    wordSet.replace(magazine[i], (wordSet.get(magazine[i])+1));
                }
                else{
                    wordSet.put(magazine[i], 1);
                }
            }

            for(int i=0; i<note.length; i++){
                if(wordSet.containsKey(note[i]) && wordSet.get(note[i])>0){
                    wordSet.replace(note[i], (wordSet.get(note[i])-1));
                }
                else{
                    st = "No";
                    break;
                }
            }
            System.out.println(st);

        }

        private static final Scanner scanner = new Scanner(System.in);

        public static void main(String[] args) {
            String[] mn = scanner.nextLine().split(" ");

            int m = Integer.parseInt(mn[0]);

            int n = Integer.parseInt(mn[1]);

            String[] magazine = new String[m];

            String[] magazineItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int i = 0; i < m; i++) {
                String magazineItem = magazineItems[i];
                magazine[i] = magazineItem;
            }

            String[] note = new String[n];

            String[] noteItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int i = 0; i < n; i++) {
                String noteItem = noteItems[i];
                note[i] = noteItem;
            }

            checkMagazine(magazine, note);

            scanner.close();
        }

}
