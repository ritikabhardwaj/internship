window.onload = populateSelect();

function populateSelect() {

    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        url = "menu.json";        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            // PARSE JSON DATA.
            var food = JSON.parse(xhr.responseText);

            var ele = document.getElementsByClassName('sel');
            console.ele
            console.log(ele)
            for (var j = 0; j < ele.length; j++) {
                element = ele.item(j);
                for (var i = 0; i < food.length; i++) {
                    // BIND DATA TO <select> ELEMENT.
                    element.innerHTML = element.innerHTML +
                        '<option value="' + food[i].ID + '">' + food[i].english  + '    '+
                        food[i].tamil +'</option>';
                }
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}