
var size = prompt("Enter the size of the pyramid");


    var width = (2 * size) -1; // Always the case.
    var midpoint = Math.floor(width / 2); // Middle of pyramid.
    let level = ''; // will be reset each level loop

    for(var i = 0; i < size; i++) { // Looping through levels
        level = '';
        for(var j = 0; j < width; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += ' ';
            } else {
                level += '#';
            }
        }
        
        console.log(level);

}
