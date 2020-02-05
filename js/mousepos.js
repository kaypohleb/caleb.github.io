
function readMouseMove(e){
    var div_container = document.getElementById('central-text');
    var diff_x = 100-(50 - Math.round((950 - e.clientX)/120));
    var diff_y = 100-(50 - Math.round((550 - e.clientY)/170)); 
    div_container.style.top = diff_x.toString().concat('%')
    div_container.style.left = diff_y.toString().concat('%')
}
document.onmousemove = readMouseMove;

function showTerminal(){
    if (document.getElementById('btn1').value == 'Show Terminal') {
        document.getElementById('central-text').style.display = 'none';
        document.getElementById('term').style.display = 'inline';
        document.getElementById('btn1').value = 'Hide Terminal';
        
    }else if (document.getElementById('btn1').value == 'Hide Terminal') {
        document.getElementById('central-text').style.display = 'inline';
        document.getElementById('term').style.display = 'none';  
        document.getElementById('btn1').value = 'Show Terminal';  
    }
}
