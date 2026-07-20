class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity){
            this.resize();
        }
        this.array[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size--;
        return this.array[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        
        // 2. Create a new array with the new capacity
        const newArray = new Array(this.capacity);
        
        // 3. Copy elements over using direct index assignment (NOT .push())
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        
        // 4. Point this.array to the newly created array
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
