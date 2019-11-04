
function readMouseMove(e){
    var div_container = document.getElementById('central-text');
    var diff_x = 100-(50 - Math.round((950 - e.clientX)/120));
    var diff_y = 100-(50 - Math.round((550 - e.clientY)/170)); 
    div_container.style.top = diff_x.toString().concat('%')
    div_container.style.left = diff_y.toString().concat('%')
}
document.onmousemove = readMouseMove;