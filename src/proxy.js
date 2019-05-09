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
class ProxyTest2 {
    static main() {
        const target = (a, b) => a + b;
        const handler = {
            apply(target, thisArg, argList) {
                return target.apply(thisArg, argList);
            }
        };
        const proxy = new Proxy(target, handler);
        proxy(3, 5);
    }
}
ProxyTest.main();
ProxyTest2.main();
