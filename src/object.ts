const a = 1;
const b = 'wow';
const sayYeah = () => {
    console.log('yeah');
}

const object2 = {
    sayHello() {
        console.log('hello');
    },
    sayYeah,
    [a + 3]: 'four',
    ['say' + b]() {
        console.log('wow');
    }
}

object2.sayHello();
object2.sayYeah();
console.log(object2[a + 3]);