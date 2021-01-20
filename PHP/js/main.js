$(document).on({

    mouseenter: function () {

        var rgba_str = $(./ css / main).css("background-color");
var new_rgba_str = "rgba(" + rgba_str.substring(rgba_str.lastIndexOf("(") + 1, rgba_str.lastIndexOf(",")) + ", 0.5)";

$(./ css / main).css("background-color", new_rgba_str); 
       },

mouseleave: function() {

    var rgba_str = $(./css/main).css("background-color");

    var new_rgba_str = "rgba(" + rgba_str.substring(rgba_str.lastIndexOf("(") + 1, rgba_str.lastIndexOf(",")) + ", 0.8)";
    $(this).css("background-color", new_rgba_str);

}

}, '.highlighted');