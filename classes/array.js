Array.prototype.isEqual = function (array){
     return this.every(el => array.includes(el))
    }