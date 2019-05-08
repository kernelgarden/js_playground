function* myGen() {
    const x = yield 1;
    const y = yield (x + 1);    // rvalue와 상관 없이 next로 주입받은 값이 lvalue로 바인딩 된다.
    const z = yield (y + 2);

    return x + y + z;
}

const myItr = myGen();
console.log(myItr.next());
console.log(myItr.next(10));
console.log(myItr.next(20));
console.log(myItr.next(30));

function* myItr2(start : number, stop : number) {
    for (var i = start; i < stop; i++) {
        yield i;
    }
}

for (var i of myItr2(15, 30)) {
    console.log(i);
}