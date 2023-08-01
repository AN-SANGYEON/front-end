//메소드
function printHello(){
    console.log("hello");
}

//메소드 출력
printHello();

//return 있음
function sum(a,b){
    return a + b;
}

console.log(sum(1,2));

//디폴트 파라매터
function print(str1,str2="世界",str3="!!!!"){
    console.log(str1+" "+str2+" "+str3);
}
print("お昼寝");
print("お昼寝", "眠い");
print("お昼寝", "眠い", "横");

//람다식
let add = (x,y)=>x+y;
console.log(add(2,3));

//정수는 const
const CALC_NUM = 100;

function isPrime(x) {
    for(let i = 2; x > i; i++){
        if (x%i==0){
            return false;
        }
    }
    return true;
}

function main(){
    let primes = new Array(CALC_NUM);
    let k = 0;
    for(let i = 2; k<CALC_NUM; i++){
        if(isPrime(i)){
            primes[k++] = i;
        }
    }
    console.log(primes);
}

main();