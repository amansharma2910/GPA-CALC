package main

import "fmt"
var gpa float64

func main() {
	// Schema
	var totalCredit float64
	var totalSubjects int
	var letterGrade string
	var credit float64
	var score float64
	var totalScore float64
	// Takes value of credits and subjects from user
	fmt.Print("Enter total credits")
	_, _ =  fmt.Scan(&totalCredit)
	fmt.Print("Enter total number of subjects")
	_, _ =  fmt.Scan(&totalSubjects)
	n := totalSubjects


	for i:=0; i < n; i++ {
		fmt.Println("Enter letterGrade")
		_, _ = fmt.Scanf("%s", &letterGrade)
		fmt.Println("Enter credits")
		_, _ = fmt.Scan(&credit)
		if letterGrade == "S" || letterGrade == "s" {
			score = credit * 10
		} else if letterGrade == "A" || letterGrade == "a" {
			score = credit * 9
		} else if letterGrade == "B" || letterGrade == "b" {
			score = credit * 8
		} else if letterGrade == "C" || letterGrade == "c" {
			score = credit * 7
		} else if letterGrade == "D" || letterGrade == "d" {
			score = credit * 6
		} else if letterGrade == "E" || letterGrade == "e" {
			score = credit * 5
		} else if letterGrade == "F" || letterGrade == "f" {
			score = credit * 0
		}
		totalScore += score
	}
	gpa = totalScore / totalCredit
	fmt.Println(gpa)
}

