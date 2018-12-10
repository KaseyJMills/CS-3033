(function() {
    function main() {
        $("#btnCheckOut").click(function(e){
            $.post("/checkOut", function(data) {
            });
        });
    };
    main();
})();