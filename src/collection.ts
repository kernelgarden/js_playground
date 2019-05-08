class Collection {
    public static main() : void {
        let map = new Map([['default', 'default']]);
        map.set('hero', 'Hero');
        console.log(map.get('hero'));
    }
}

Collection.main();