class ProxyTest {
    public static main() : void {
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
    public static main() : void {
        const target = (a : number, b : number) => a + b;
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