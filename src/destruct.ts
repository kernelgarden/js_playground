class Destruct {
    public static main() : void {
        const [c, , d] = [1, 2, 3];
        console.log(c);
        console.log(d);
    }
}

Destruct.main();