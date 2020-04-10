import java.util.HashMap;
import java.util.Map;

class ScoreInfo{
    int total = 0 ;
    int numOfSubjects = 0 ;

    public ScoreInfo(int total, int numOfSubjects){
        this.total = total;
        this.numOfSubjects = numOfSubjects;
    }

}

public class MaximumAverageStudent {

    //student marks.
    //find the maximum average student name
    static String[][] marks = {{"nimal", "60"}, {"gayan", "200"}, {"nimal", "70"}, {"kamal", "30"}, {"nimal", "90"}, {"gayan", "30"}};

    public static void main(String[] args) {
        System.out.println(marks.length);
        System.out.println(marks[0].length);

        for (int i = 0; i < marks.length; i++) {
            for (int j = 0; j < marks[0].length; j++) {
                System.out.print(marks[i][j] + " ");
            }
        }

        // Maximum Total Student with name and max marks
        int maxValue = 0;
        String name = "" ;
        Map<String, Integer> valuesMap = new HashMap<>();
        for (int i = 0; i < marks.length; i++) {

            if (valuesMap.containsKey(marks[i][0])) {
                valuesMap.put(marks[i][0], valuesMap.get(marks[i][0]) + Integer.parseInt(marks[i][1]));
            } else {
                valuesMap.put(marks[i][0], Integer.parseInt(marks[i][1]));
            }
        }

        for (Map.Entry e : valuesMap.entrySet()) {
            if ((int)e.getValue() > maxValue) {
                maxValue = (int)e.getValue();
                name = (String) e.getKey();
            }
        }
        System.out.println("\n" + name + " " + maxValue);

        // Average marks of Student with name and average marks
        int avrValue = 0;
        int maxAvrValue = 0 ;
        String stuName = "" ;
        Map<String, ScoreInfo> averageValuesMap = new HashMap<>();
        for (int i = 0; i < marks.length; i++) {

            if (averageValuesMap.containsKey(marks[i][0])) {
                averageValuesMap.put(marks[i][0], new ScoreInfo( averageValuesMap.get(marks[i][0]).total + Integer.parseInt(marks[i][1]), averageValuesMap.get(marks[i][0]).numOfSubjects + 1));
            } else {
                averageValuesMap.put(marks[i][0], new ScoreInfo(Integer.parseInt(marks[i][1]) , 1 ));
            }
        }

        for (Map.Entry e : averageValuesMap.entrySet()) {

            ScoreInfo scoreInfo = (ScoreInfo) e.getValue(); //casting object ScoreInfo to get its values(total and numOfSubjects)
            avrValue = scoreInfo.total / scoreInfo.numOfSubjects; //find average marks

           if (avrValue > maxAvrValue) {
                maxAvrValue = avrValue;
                stuName = (String) e.getKey();
            }
        }
        System.out.println("\n" + stuName + " " + maxAvrValue);
    }
}

