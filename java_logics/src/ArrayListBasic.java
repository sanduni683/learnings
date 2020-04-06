import java.util.*;

class Student {
    int rollNo;
    String name;
    int age;

    public Student(int rollNo ,String name, int age){
        this.rollNo = rollNo;
        this.name = name;
        this.age = age;
    }
}

public class ArrayListBasic {

    public static void main(String[] args){

        ArrayList<String> stringList = new ArrayList<String>();

        // Adding elements
        stringList.add("hello");
        stringList.add("Sanduni");
        stringList.add("hello");
        stringList.add("123");
        stringList.add(4, "Amara");

        // Set element value to another
        stringList.set(3, "Dimuthu");

        // Get element value
        System.out.println(stringList.get(3));

        // Size of the array
        System.out.println("Size of the array : " + stringList.size() );

        // Is array empty ?
        System.out.println("Array is empty ? : " + stringList.isEmpty() );

        // Is array contains ?
        System.out.println("Array contains value hello ? : " + stringList.contains("hello") );

        // Invoke array elements
        System.out.println("Array elements : " + stringList );
        System.out.println("==============================================");

        //Iterating collection through the for loop
        for(int i =0; i < stringList.size(); i++){
            System.out.println("Iterator through for loop : " + stringList.get(i));
        }
        System.out.println("==============================================");

        //Iterating collection through the for-each loop
        for(String obj : stringList){
            System.out.println("Iterator through for-each : " + obj);
        }
        System.out.println("==============================================");

        //Iterating collection through Iterator Interface
        Iterator itr = stringList.iterator();
        while(itr.hasNext()){
            System.out.println("Iterator through Iterator : " + itr.next());
        }
        System.out.println("==============================================");

        //Iterating collection through ListIterator , here travesing in reverse order
        ListIterator<String> listItr = stringList.listIterator(stringList.size());
        while(listItr.hasPrevious()){
            System.out.println("Iterator through ListIterator : " + listItr.previous());
        }
        System.out.println("==============================================");

        List<Student> studentList = new ArrayList<Student>();

        Student std1 = new Student(29, "Sanduni", 29);
        Student std2 = new Student(33, "Dimuthu", 33);
        Student std3 = new Student(29, "Sanduni", 29);

        studentList.add(std1);
        studentList.add(std2);
        studentList.add(std3);

        // getting iterator
        Iterator itr2 = studentList.iterator();

        while (itr2.hasNext()){
            Student st = (Student) itr2.next();
            System.out.println("Objects of class studnt : " + st.age + st.name + st.rollNo);
        }
        System.out.println("==============================================");

        List<Student> studentCluster2 = new ArrayList<Student>();

        Student std4 = new Student(96, "Theena", 14);
        Student std5 = new Student(97, "Shenal", 12);

        studentCluster2.add(std4);
        studentCluster2.add(std5);

        studentList.addAll(studentCluster2);

        // getting iterator
        Iterator itr3 = studentList.iterator();

        while (itr3.hasNext()){
            Student st1 = (Student) itr3.next();
            System.out.println("Objects after adding the second list : " + st1.rollNo + st1.name + st1.age);
        }
        System.out.println("==============================================");

        //Iterating collection through the for-each loop
        List<Student> afterRemovingSanduniList = new ArrayList<Student>();
        for (Student student : studentList){
            if (student.name.equals("Dimuthu")){
                afterRemovingSanduniList.add(student);
                // studentList.remove(student); // this gives ConcurrentModificationException, To skip that adding elements to a new arrayList
            }
        }
        Iterator it = afterRemovingSanduniList.iterator();
        Student str = (Student) it.next();
        System.out.println("Iterator through for-each loop : " + str.rollNo + str.name + str.age);
        System.out.println("==============================================");

        //Remove an element
        studentList.remove(std4);
        studentList.remove(1);
        studentList.removeAll(studentCluster2);

        System.out.println("After removing elemets :  : " + studentList);
        System.out.println("==============================================");

    }

}
