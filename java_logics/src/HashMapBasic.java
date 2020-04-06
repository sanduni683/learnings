import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.Map;

class Book {
    int id;
    String name,author,publisher;
    int quantity;
    public Book(int id, String name, String author, String publisher, int quantity) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }
}

public class HashMapBasic {

    public static void main(String[] args){

        HashMap<Integer, String> hashMap = new HashMap<Integer, String>();

        System.out.println("Initial hashmap elements: " + hashMap);

        // add elements methds in Hashmap are , put(), putAll(), putIfAbsent()
        hashMap.put(1, "Cat");
        hashMap.put(2, "Dog");
        hashMap.put(3, "Elephant");
        hashMap.put(4, "Bird");

        hashMap.putIfAbsent(6, "Monkey"); // putifAbsent method

        System.out.println("hashmap elements: " + hashMap);

        for(Map.Entry m : hashMap.entrySet()){
            System.out.println("Iteration of hashmap elements: " + m.getKey() + " " + m.getValue());
        }
        System.out.println("===================================================================");

        Map<Integer, String> hashMap2 = new HashMap<Integer, String>();

        hashMap2.put(5, "Loin");

        hashMap2.putAll(hashMap); //putAll method

        for(Map.Entry m : hashMap2.entrySet()){
            System.out.println("Hashmap elements after PutAll method: " + m.getKey() + " " + m.getValue());
        }
        System.out.println("===================================================================");

        // Remove elemnts from key or key-value pairs
        hashMap2.remove(1);
        hashMap2.remove(2, "Dog");

        for(Map.Entry m : hashMap2.entrySet()){
            System.out.println("Hashmap elements after PutAll method: " + m.getKey() + " " + m.getValue());
        }
        System.out.println("===================================================================");

        hashMap2.replace(3, "Horse");
        hashMap2.replace(4, "Bird" , "Butterfly");

        for(Map.Entry m: hashMap2.entrySet()){
            System.out.println("Hashmap elements after replace method: " + m.getKey() + " " + m.getValue());
        }
        System.out.println("===================================================================");

        hashMap2.replaceAll((k,v) -> "owl");

        for (Map.Entry m : hashMap2.entrySet()){
            System.out.println("Hashmap elements after replaceAll method: " + m.getKey() + " " + m.getValue());
        }
        System.out.println("===================================================================");

        Map<Integer , Book> bookMap = new HashMap<Integer, Book>();

        Book b1=new Book(101,"Let us C","Yashwant Kanetkar","BPB",8);
        Book b2=new Book(102,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);
        Book b3=new Book(103,"Operating System","Galvin","Wiley",6);

        int p =1; //autoboxing to Integer object
        bookMap.put(p, b1);
        bookMap.put(2, b2);
        bookMap.put(3, b3);

        // Travesing map
        for(Map.Entry<Integer , Book> book : bookMap.entrySet()){
            int key = book.getKey();
            Book b = book.getValue();
            System.out.println(key + " " + b.id + " " + b.name + " " + b.author + " " + b.publisher + " " + b.quantity );
        }

        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        for (int i=0; i <= (array.length-1) - i; i++){
            int temp = array[i];
            array[i] = array[(array.length-1) - i];
            array[(array.length-1) - i] = temp ;
        }
        for (int i=0; i < array.length; i++){
            System.out.println(array[i]);

        }

    }
}


