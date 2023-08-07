//요소 습득
let result = document.getElementById("text-result");
let buttonReset = document.getElementById("change-text1");
let buttonAdd = document.getElementById("change-text2");
let buttonSub = document.getElementById("change-text3");

//값을 문자열과 정수로 변환
const BASE_TEXT = "値："

//계산 결과를 수납하는 변수
let resultValue = 0;

//값을 표시하는 메소드
function changeResultText(){
    result.innerHTML = BASE_TEXT + resultValue;
}

//값을 계산하는 메소드
function calculateResultValue(setValue){
    resultValue = resultValue + setValue;
}

//초기화 버튼 
buttonReset.addEventListener('click',()=>{
    resultValue = 0;
    changeResultText();
});
//+1버튼
buttonAdd.addEventListener('click',()=>{
    calculateResultValue(1);
    changeResultText();
});
//-1버튼
buttonSub.addEventListener('click',()=>{
    calculateResultValue(-1);
    changeResultText();
});

