h = '***';
function setTimer(timePicker) {
    leo = new Date().toDateString();
    var date2 = new Date();
    var date1 = new Date(leo + ' ' + document.querySelector('#' + timePicker.parentNode.id + ' input').value +
        ':00');
    var inter = Math.floor((date1 - date2) / 1000);
    if (inter >= 0) reste(inter, timePicker.parentNode.id);
    console.log(inter);
}

function reste(zetime, nom_id) {
    var nid = nom_id;
    if (zetime > 0) {
        var heures = Math.floor(zetime / 3600);
        var minutes = Math.floor(((zetime / 3600) - Math.floor(zetime / 3600)) * 60);
        var secondes = zetime - ((Math.floor(zetime / 60)) * 60);
        document.getElementById(nid + 'h').innerHTML = heures + ":" + minutes + ":" + secondes;
        var restant = zetime - 1;
        setTimeout("reste(" + restant + ",'" + nid + "')", 1000);
    } else {
        location.href = h + getters(nid);
    }
}

function getters(ST) {
    getter = ST == 'ST1' ? '/4/' : '/5/';
    getter += document.querySelector('#' + ST + ' button').innerText == 'ON' ? 'off' : 'on';
    return getter;
}