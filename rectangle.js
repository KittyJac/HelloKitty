function Rectangle() {

    var mousePosition;
    var offset = [0,0];
    var div;
    var isDown = false;
    
    div = document.createElement("IMG");
    div.src = "images/kitty.png";
    div.style.position = "absolute";
    div.style.left = Math.floor((Math.random() * screen.width) + 1) + "px";
    div.style.top =  Math.floor((Math.random() * screen.height) + 1) + "px";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.color = "blue";
    
    document.body.appendChild(div);
    
    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);
    
    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
        
                x : event.clientX,
                y : event.clientY
        
            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}
