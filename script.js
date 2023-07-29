function calculateMinCost() {
  //your code here function calculateMinCost() {
      const ropeLengthsInput = document.getElementById('ropeLengths');
      const ropeLengths = ropeLengthsInput.value.split(',').map(Number);

      const minCost = findMinimumCost(ropeLengths);

      const resultElement = document.getElementById('result');
      resultElement.textContent = `Minimum cost of connecting ropes: ${minCost}`;
    }

    function findMinimumCost(ropeLengths) {
      if (ropeLengths.length === 0) {
        return 0;
      }

      // Use a priority queue (min heap) to efficiently find the minimum ropes to connect
      const priorityQueue = [];
      ropeLengths.forEach(length => {
        priorityQueue.push(length);
      });

      // Build the connected rope with minimum cost
      let totalCost = 0;
      while (priorityQueue.length > 1) {
        const firstRope = priorityQueue.shift(); // Get the smallest rope
        const secondRope = priorityQueue.shift(); // Get the second smallest rope

        const combinedRopeLength = firstRope + secondRope;
        totalCost += combinedRopeLength;

        // Add the combined rope back to the priority queue
        priorityQueue.push(combinedRopeLength);
        priorityQueue.sort((a, b) => a - b); // Re-sort the priority queue (min heap)
      }

      return totalCost;
    }








  
  
  
}  
