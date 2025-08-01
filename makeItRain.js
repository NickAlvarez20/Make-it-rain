//where rain should start
var xPositions = [200];
var yPositions = [0];
var r = random(0,255);
var g = random(0,255);
var b = random(0,255);
var bodyColor = color(r, g, b);
//main for loop for rain
for(var j = 0; j < 140; j++){
    xPositions.push (random(0,395));
    yPositions.push (random(0,-400));
    
}
//draw canvas for rain
draw = function() {
    background(3, 209, 245);
    noStroke();
//changes direction of rain
    for (var i = 0; i < xPositions.length; i++) { 
        fill(random(color(r, g, b)));
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 7;
        xPositions[i] += -1;
        if(yPositions[i] > 400){ yPositions[i] = 0;}
        if(xPositions[i] < 0){ xPositions[i] = 400;}
    }
    
};
