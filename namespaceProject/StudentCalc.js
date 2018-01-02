var StudentCalc;
(function (StudentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    StudentCalc.AnualFeeCalc = AnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
