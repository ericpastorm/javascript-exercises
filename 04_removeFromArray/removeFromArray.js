const removeFromArray = function(array, ...remove) {
    for (let i = 0; i < array.length; i++) {
        if(remove.length > 1){
            for (let z = 0; z < remove.length; z++) {
                if(array[i] === remove[z]){
                    array.splice(i, 1);
                    i+=-1;
                }
            }
        } else {
            if(array[i] === remove[0]){
                array.splice(i, 1);
                i+=-1;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
