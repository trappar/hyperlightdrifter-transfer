$(function(){
    var from = $("#fromsave");
    var to = $("#tosave");
    var result = $("#resultsave");
    var error = $("#error");

    $(".form-control").on('input propertychange', function() {
        var fromVal = from.val();
        var toVal = to.val();
        if (fromVal.length > 10 && toVal.length > 10) {
            var fromCompSave = fromVal.match(/eyAibWFwTW9kIjo.*/);
            var toCompID = toVal.match(/^(.*)eyAibWFwTW9kIjo/);
            if (fromCompSave && toCompID) {
                result.val(toCompID[1]+fromCompSave[0]);
                error.hide();
            } else {
                result.val('');
                error.show();
            }
        }
    });
});