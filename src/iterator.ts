class RangeIterator {
    private value : number;
    private stop : number;

    constructor(start : number, stop : number) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        let value = this.value;

        if (value < this.stop) {
            this.value += 1;
            return {done: false, value: value};
        } else {
            return {done: true, value: undefined};
        }
    }
}

function range(start : number, stop : number) {
    return new RangeIterator(start, stop);
}

for (var i of range(10, 20)) {
    console.log(i);
}