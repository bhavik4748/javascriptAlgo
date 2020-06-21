
class Node {
    constructor() {
        this.weight;
        this.key;
    }
}

class BinaryMinHeap {
    constructor() {
        this.allNodes = [];
        this.nodePosition = new Map();
    }

    add(weight, key) {
        let node = new Node();
        node.weight = weight;
        node.key = key;
        this.allNodes.push(node);
        let size = this.allNodes.length;
        let current = size - 1;
        let parentIndex = Math.floor((current - 1) / 2);
        this.nodePosition.set(node.key, current);

        while (parentIndex >= 0) {
            let parentNode = this.allNodes[parentIndex];
            let currentNode = this.allNodes[current];
            if (parentNode.weight > currentNode.weight) {
                [this.allNodes[parentIndex], this.allNodes[current]] = [this.allNodes[current], this.allNodes[parentIndex]];
                this.updatePositionMap(parentNode.key, currentNode.key, parentIndex, current);
                current = parentIndex;
                parentIndex = Math.floor((parentIndex - 1) / 2);
            }
            else
                break;
        }
    }

    decrease(data, newWeight) {
        let position = this.nodePosition.get(data);
        this.allNodes[position].weight = newWeight;
        let parent = Math.floor((position - 1) / 2);
        while (parent >= 0) {
            if (this.allNodes[parent].weight > this.allNodes[parent].weight) {
                [this.allNodes[parent], this.allNodes[position]] = [this.allNodes[position], this.allNodes[parent]];
                this.updatePositionMap(this.allNodes[parent].key, this.allNodes[position].key, parent, position);
                position = parent;
                parent = Math.floor((parent - 1) / 2);
            }
            else
                break;
        }
    }

    printHeap() {
        for (let n of this.allNodes) {
            console.log(n.weight + " " + n.key);
        }
    }

    printPositionMap() {
        console.log(this.nodePosition);
    }

    updatePositionMap(data1, data2, pos1, pos2) {
        this.nodePosition.delete(data1);
        this.nodePosition.delete(data2);
        this.nodePosition.set(data1, pos1);
        this.nodePosition.set(data2, pos2);
    }

}

let heap = new BinaryMinHeap();
heap.add(3, "Tushar");
heap.add(4, "Ani");
heap.add(8, "Vijay");
heap.add(10, "Pramila");
heap.add(5, "Roy");
heap.add(6, "NTF");
heap.add(2, "AFR");

heap.printHeap();
console.log();
heap.printPositionMap();

