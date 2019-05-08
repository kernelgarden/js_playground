class PromiseTest {
    static main() {
        const promise = new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}
PromiseTest.main();
