package hackerrank;

import java.util.HashSet;
import java.util.Set;

public class HashTableTwoStrings {

    public static void main(String[] args) {
        String str1 = "hellokhjuu";
        String str2 =  "Wrd12457899i";
        // In If-else statements you can use the contains() method

        Set<Character> strSet = new HashSet<>();
        String st ="NO";

        for(int i=0; i<str1.length(); i++ ){
            strSet.add(str1.charAt(i));
        }

        for(int i=0; i<str2.length(); i++ ){
            if(strSet.contains(str2.charAt(i))){
                st = "YES";
                break;
            }
        }
        System.out.println(st);

    }
}
