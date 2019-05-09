class PromiseTest {
    public static main() : void {
        const delayTest = (time : number) => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, time);
            });
        };

        delayTest(1000)
        .then(() => {
            console.log("after 1000ms");
            return delayTest(2000);
        })
        .then(() => console.log("after another 2000ms"))
        .then(function() {
            console.log("step 4 (next Job)");
            return delayTest(5000);
        })
    }
}

PromiseTest.main();