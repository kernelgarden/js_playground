class PromiseTest {
    public static main() : void {
        const promise = new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}

PromiseTest.main();