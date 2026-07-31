class LRUCache {
    /**
     * @param {number} capacity
     */
    private capacity: number;
    private map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.map.has(key)){
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.map.has(key)){
            this.map.delete(key);
        } else if(this.map.size === this.capacity){
            const value = this.map.keys().next().value;
            this.map.delete(value);
        }
        this.map.set(key, value);
    }
}
