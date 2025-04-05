//Webpack test
import './styles.css';

class Node {
    constructor(value = null) {
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    constructor() {
        this.headNode = null
        this.length = 0
    }

    append(value){
        const newNode = new Node(value) 
        if (!this.headNode) {
            this.headNode = newNode
        } else {
            let currentNode = this.headNode 
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode 
            }
            currentNode.nextNode = newNode 
        }
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value) 
        newNode.nextNode = this.headNode
        this.headNode = newNode 
        this.length++
    }

    size(){
        return this.length
    }

    head(){
        return this.headNode
    }

    tail(){
        if(!this.head) return null
        let currentNode = this.headNode 
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode 
        }
        return currentNode
    }

    at(index){
        if (index < 0 || index >= this.length) return null
        let currentNode = this.headNode 
        let counter = 0
        while(counter < index) {
            currentNode = currentNode.nextNode 
            counter++
        }
        return currentNode
    }

    pop(){
        if (!this.headNode) return null
        if (!this.headNode.nextNode) {
            this.headNode = null
        } else {
        let currentNode = this.headNode 
        while(currentNode.nextNode.nextNode) {
            currentNode  = currentNode.nextNode 
            }
        currentNode.nextNode = null
        }
        this.length--
    }

    contains(value){
        let currentNode = this.headNode 
        while (currentNode) {
            if (currentNode.value == value){
                return true
            }
            currentNode = currentNode.nextNode 
        }
        return false
    }

    find(value){
        let currentNode = this.headNode 
        let index = 0
        while (currentNode) {
            if (currentNode.value == value){
                return index
            }
            currentNode = currentNode.nextNode
            index++ 
        }
        return null
    }
    
    toString(){
        let currentNode = this.headNode 
        let result = ""
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode
            
        }
        return result + "null"
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());