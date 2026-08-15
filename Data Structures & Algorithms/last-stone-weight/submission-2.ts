class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            const x = maxHeap.dequeue();
            const y = maxHeap.dequeue();
            const diff = x - y;

            if (diff > 0) maxHeap.enqueue(diff);
        }

        return maxHeap.size() === 1 ? maxHeap.front() : 0;
    }
}
