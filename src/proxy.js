class ProxyTest {
    static main() {
        const target = {};
        const handler = {
            get(obj, name) {
                return `test ${name}`;
            }
        };
        const proxy = new Proxy(target, handler);
        console.log(proxy.zero);
    }
}
ProxyTest.main();
