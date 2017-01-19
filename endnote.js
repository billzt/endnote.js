function htmlEscape(str) {  // escape html chars, used for tooltip
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function unique(arr) {  // delete duplicate array items, to generate literature array
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
$().ready(function(){
    // collect all inline citations and put them in an array
    var span_array = $('.endnote');
    var literature_array = new Array();
    for (i=0; i<span_array.length; i++) {
        var literature = $(span_array[i]).html().trim().replace(/\s{2,}/g, ' ');
        literature_array.push(literature);
    }
    literature_array = unique(literature_array);
    
    // change all inline citations to number
    for (i=0; i<span_array.length; i++) {
        var literature = $(span_array[i]).html().trim().replace(/\s{2,}/g, ' ');
        var index = literature_array.indexOf(literature);
        var title = htmlEscape(literature)
        $(span_array[i]).html('<a href="#literature_' + index +'" id="cite_' + index + 
        '" title="'+ title +'" data-toggle="tooltip"><sup>[' + (index+1) + ']</sup></a>');
    }
    
    // generate a literature list in the 'endnote-reference-list' block
    for (i in literature_array) {
        $('#endnote-reference-list').append('<li><a id="literature_'+ i + '" href="#cite_'+ i +'">^ </a>'+ literature_array[i] +'</li>');
    }

});


