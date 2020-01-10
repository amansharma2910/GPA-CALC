course_points = 0
total_credit = 0
grade_map = {"s":10, "a":9, "b":8, "c":7, "d":6, "e":5, "f":0}
n = int(input("Enter the number of subjects: "))
print("Now, enter the grade and credit in the following pattern: grade credit")
for i in range(n):
    grade, credit = input("Subject {} : ".format(i+1)).split()
    total_credit += int(credit)
    course_points += grade_map[grade.lower()] * int(credit)
print("GPA = {:.2f}".format(course_points / total_credit))

