var StudentCalc;
(function (StudentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    StudentCalc.AnualFeeCalc = AnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
/// <reference path='./StudentCalc.ts'/>
var calc = StudentCalc.AnualFeeCalc(1000, 4);
console.log(calc);
