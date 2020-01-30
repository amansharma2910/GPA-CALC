package main

import (
	"fmt"
	"strings"
)

var gpa float64

var matrix = map[string]float64{
	"s": 10,
	"a": 9,
	"b": 8,
	"c": 7,
	"d": 6,
	"e": 5,
	"f": 0,
}

func main() {
	var totalCredit float64
	var totalSubjects int
	var letterGrade string
	var credit float64
	var score float64
	var totalScore float64

	// Takes value of credits and subjects from user
	fmt.Print("Enter total credits: ")
	_, _ = fmt.Scan(&totalCredit)

	fmt.Print("Enter total number of subjects: ")
	_, _ = fmt.Scan(&totalSubjects)

	for i := 0; i < totalSubjects; i++ {
		fmt.Println("Enter letterGrade: ")
		_, _ = fmt.Scanf("%s", &letterGrade)

		fmt.Println("Enter credits: ")
		_, _ = fmt.Scan(&credit)

		score = credit * matrix[strings.ToLower(letterGrade)]
		totalScore += score
	}

	gpa = totalScore / totalCredit
	fmt.Println(gpa)
}
