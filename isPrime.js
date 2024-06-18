const num = 4;

function isPrime(num){
    if(num%2==0 ||num%3==0|| num%4==0||num%5==0||num%6==0){
        return 'is prime'
    } else 'not prime'
}

console.log(isPrime(num))