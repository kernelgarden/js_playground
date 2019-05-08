const func1 = (x, ...y) => {
    console.log(x);
    console.log(y);
};
func1(1, 2, 3, 4);
let array = [1, 2, 3];
let x = 10;
let func2 = function (x, y, z) {
    console.log(x + y + z);
};
func2.apply(null, array);
