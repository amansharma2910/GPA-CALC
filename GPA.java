//created by Aayush on 27-9-2020//
import java.util.Scanner;
public class GPA
{  
    double S = 10.0;
    double A = 9.0;
    double B = 8.0;
    double C = 7.0;
    double D = 6.0;
    double E = 5.0;
    double F = 0.0;

    String letterGrade;
    String subject;
    double credit;
    double score;
    double totalScore;
    int totalSubjects;
    double totalCredits;
    double gpa;
    
    public void get_info()
    {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the total credits for the sem:");
        totalCredits = sc.nextDouble();
        System.out.println("Enter the total subjects:");
        totalSubjects = sc.nextInt();
    }
    public void calc_gpa()
    {
        for (int i = 0; i < totalSubjects; i++) 
        {
            Scanner sc= new Scanner(System.in);
            System.out.println("Enter the Subject:");
            subject  = sc.nextLine();
            System.out.println("Enter the letter Grade:");
            letterGrade = sc.nextLine().toUpperCase();
            System.out.println("Enter the Course credit:");
            credit = sc.nextDouble();
            if (letterGrade.equals("S")){
                score = credit * S;
            } else if (letterGrade.equals("A")) {
                score = credit * A;
            } else if (letterGrade.equals("B")) {
                score = credit * B;
            } else if (letterGrade.equals("C")) {
                score = credit * C;
            } else if (letterGrade.equals("D") ) {
                score = credit * D;
            } else if (letterGrade.equals("E")) {
                score = credit * E;
            } else if (letterGrade.equals("F")) {
                score = credit * F;
            }
            totalCredits = totalCredits + credit;
            totalScore = totalScore + score;
        }
        gpa = (totalScore / totalCredits) * 2 ;
        System.out.println("The CGPA is : " + gpa);
    }
    public void  main()
    {
        GPA obj = new GPA();
        obj.get_info();
        obj.calc_gpa();
    }
}
 
