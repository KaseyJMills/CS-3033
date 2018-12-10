(function()
{
    
    function main()
    {
        $.get("/load", function(view) {
            $("#productView").html(view);
            //Console.log('view is loaded into the view.js');

            $(".checkbox").each(function(ID){
                var checkbox = $(this);
                addFIlterHandler(ID, checkbox);
            });
            $(".btn-primary").click(function (e) {
                var button = $(this);
                var productID = button[0].id;
                alert("ID: " + productID + " added to cart!");
                $.post("/add", {product: productID}, function(data){

                });
            });
            $("#checkOutLink").click(function(e){
                $.get("/cart", {cart: cart}, function(view){
                    $("#cartView").html(view);
                });
            });

        });
    };
    function addFIlterHandler(ID, checkbox) {
        checkbox.change(function(){
            console.log(checkbox.attr("id"));
            var idName = checkbox.attr("id");
            var checkedValue = "false";
            if(document.getElementById(checkbox.attr("id")).checked){
                checkedValue = "true";
            }
            $.post("/update", { ID: idName, checked2: checkedValue }, function(view) {
                $("#productView").html(view);
            });
        });
    };
    main();
})();