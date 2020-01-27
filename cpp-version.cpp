//
// Created by Neel on 1/7/2020.
//

#include <iostream>
using namespace std;

class GPA {
public:
    int i{};
    // Respective grade score
    const float S = 10.0;
    const float A = 9.0;
    const float B = 8.0;
    const float C = 7.0;
    const float D = 6.0;
    const float E = 5.0;
    const float F = 0.0;

    string letterGrade;
    string subject;
    float credit{};
    float score{};
    float totalScore{};
    int totalSubjects{};
    float totalCredits{};
    float gpa{};

    void get() {
        cout << "Enter total credits for the sem" << endl;
        cin >> totalCredits;
        cout << "Enter total subjects" << endl;
        cin >> totalSubjects;
    }

    void put() {
        for (i = 0; i < totalSubjects; i++) {
            cout << "Enter Subject" << endl;
            cin >> subject;
            cin.ignore();
            cout << " Enter Letter Grade : " << endl;
            cin >> letterGrade;
            for (auto &c : letterGrade) c = toupper(c);
            cin.ignore();
            cout << "Enter course credit : " << endl;
            cin >> credit;
            if (letterGrade == "S" ) {
                score = credit * S;
            } else if (letterGrade == "A" ) {
                score = credit * A;
            } else if (letterGrade == "B" ) {
                score = credit * B;
            } else if (letterGrade == "C" ) {
                score = credit * C;
            } else if (letterGrade == "D"  ) {
                score = credit * D;
            } else if (letterGrade == "E" ) {
                score = credit * E;
            } else if (letterGrade == "F" ) {
                score = credit * F;
            }
            totalCredits = totalCredits + credit;
            totalScore = totalScore + score;
        }
        gpa = (totalScore / totalCredits) * 2 ;
        cout << gpa;
    }
};

int main() {
    GPA g;
    g.get();
    g.put();
}