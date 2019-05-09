class AsyncAwait {
    static delayFetch(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(url), 10000);
        });
    }
    static main() {
        async function loadData() {
            //var promise1 = AsyncAwait.delayFetch('https://api.com/123123/123123');
            //var promise2 = AsyncAwait.delayFetch('https://api.com/456456/456456');
            //var response1 = await promise1;
            //var response2 = await promise2;
            var response1 = await AsyncAwait.delayFetch('https://api.com/123123/123123');
            var response2 = await AsyncAwait.delayFetch('https://api.com/456456/456456');
            return `${response1} ${response2}`;
        }
        loadData().then((result) => console.log(`Done - ${result}`));
    }
}
AsyncAwait.main();
