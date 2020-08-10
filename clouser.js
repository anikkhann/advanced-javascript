function stopWatch() {
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2=stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

//kono ekta function theke jodi kono r ekta function ke call kori or return kori taholese ekta closed environment toiri kore.ebong se jodi tar bairer kono ekta variable access kore use korbo tokh sei function tar nijessoekta value rakhbe.aitakei bola hoi clouser.