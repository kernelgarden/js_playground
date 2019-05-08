class For {
    public static main() : void {
        let str:any = 'string';
        for (let i in str) { console.log(i); }
        for (let i of str) { console.log(i); }

        let arr:any = [3, 5, 7];
    }
}

For.main();