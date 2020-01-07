# Created by amansharma2910 on Jan-07-2020

class GPA:

    def calc(self):
        course_points = 0
        total_credit = 0
        n = int(input("Enter the number of subjects: "))
        print("Now, enter the grade and credit in the following pattern: grade credit")
        for i in range(n):
            grade, credit = input("Subject {} : ".format(i+1)).split()
            credit = int(credit)
            grade = grade.lower()
            if grade == 's':
                grade = 10
            elif grade == 'a':
                grade = 9
            elif grade == 'b':
                grade = 8
            elif grade == 'c':
                grade = 7
            elif grade == 'd':
                grade = 6
            elif grade == 'e':
                grade = 5
            elif grade == 'f':
                grade = 0
            total_credit += credit
            course_points += grade*credit
        print("GPA = {:.3}".format(course_points / total_credit))

def main():
    gpa = GPA()
    gpa.calc()

main()
