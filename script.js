window.onload=function(){
    document.getElementById("colorbutton").addEventListener("click", change_color);
}

function change_color(){
    document.getElementById('colorbutton').removeAttribute("class")
    var class_array = ["bluebutton", "yellowbutton", "greenbutton", "redbutton"]
    var max_val = class_array.length
    index = Math.floor(Math.random() * (max_val-0) + 0)
    console.log(index)
    var new_class = class_array[index]
    console.log(new_class) 

    document.getElementById('colorbutton').setAttribute("class", new_class);
}