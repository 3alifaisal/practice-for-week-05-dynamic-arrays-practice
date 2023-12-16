class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.data = [];
    this.data.length = defaultSize;
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {

    return this.data[index];
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize(); // Double the array size if it's full
    }
   
    // Shift elements to make room for the new element at the beginning
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

  resize() {


    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }

}


module.exports = DynamicArray;