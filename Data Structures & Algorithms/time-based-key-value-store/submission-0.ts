class TimeMap {
    private keyStore: Map<string, Array<[string, number]>>;
    constructor() {
        this.keyStore = new Map<string, Array<[string, number]>>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, [])
        }

        this.keyStore.get(key)!.push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const values = this.keyStore.get(key);

        if(!values) return "";

        let left = 0, right = values.length - 1;
        let result = "";

        while(left <= right){
            let mid = Math.floor((left + right)/2);

            const [midval, midtime] = values[mid];

            if(midtime === timestamp){
                return midval;
            }
            if(midtime < timestamp){
                result = midval;
                left = mid + 1;
            } else{
                right = mid - 1;
            }
        }

        return result;
    }
}
