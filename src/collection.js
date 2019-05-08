class Collection {
    static main() {
        let map = new Map([['default', 'default']]);
        map.set('hero', 'Hero');
        console.log(map.get('hero'));
    }
}
Collection.main();
