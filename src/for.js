class For {
    static main() {
        let str = 'string';
        for (let i in str) {
            console.log(i);
        }
        for (let i of str) {
            console.log(i);
        }
        let arr = [3, 5, 7];
    }
}
For.main();
