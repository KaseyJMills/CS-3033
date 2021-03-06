
<!doctype html>
<html lang="en"> 
    <head>
        <!-- 
            Kasey Mills
            Web Apps
            CS 3033
            Project 1 
            -->
        <!-- Required doctype -->
        <!-- Required meta tags, both charset and viewport -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS, comes from the Bootstrap starter tempalte -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="lib/style.css">

		<style type="">
			.box:hover {
				box-shadow: 0 0 16px rgba(33,33,33,.2); 
			}
		</style>
        <!-- Title of the project -->
        <title>Project 1</title>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between" style="z-index:1000" >
            <div class="navbar-nav" >
                <a class="nav-link" href="#" style="color:#5fabf3; font-weight: bold; font-size: 26px">ZmaZon</a>
            </div>
            <div class="navbar-nav">
                <a class="nav-link" href="#">Departments</a>
            </div>
            
            <div class="collapse navbar-collapse justify-content-end" >
                <!-- Search Bar -->
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn" style="background-color:#5fabf3" type="submit" >Search</button>
                </form>

                 <ul class="navbar-nav text-right">
                    <!-- Account -->
                    <li class="nav-item" >
                        <a class="nav-link" href="#" >Account</a>
                    </li>
               
                    <!-- Localization -->
                    <li class="nav-item">
                        <a class="nav-link" href="#" >Localization</a>
                    </li>
               
                    <!-- Checkout button -->
                    <li class="nav-item">
                        <a class="nav-link" href="#" >Checkout</a>

                    </li>
                </ul> 
            </div>
        </nav>   
    </head>


<!-- Body -->
    <body>
     
        <div class="row">
            <div class="col" style="max-width:20%;">
            <nav class=" d-none d-md-block">
                <div class="sidenav">
                        <!-- Sidebar//Filter -->
                        <header class="card-header">
                            <h5 class="title">Refine by</h5>
                
                            <div class="card">
                                <!-- Sidebar//Availability -->
                                <article class="card-group-item">
                                    <header class="card-header" style="background-color:#5fabf3">
                                        <h6 class="title">Availability</h6>
                                    </header>
                                    <div class="filter-content">
                                        <div class="card-body">
                                            <label class="form-check">
                                            <input class="checkbox" type="checkbox" id="available" value="">
                                                <span class="form-check-label">
                                                    Available
                                                </span>
                                            </label> <!-- form-check.// -->
                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="unavailable" value="">
                                                <span class="form-check-label">
                                                    Unavailable
                                                </span>
                                            </label>  <!-- form-check.// -->
                                        </div> <!-- card-body.// -->
                                    </div>
                                </article> <!-- card-group-item.// -->
                                

                                <!-- Sidebar//Price -->
                                <article class="card-group-item" id="price">
                                    <header class="card-header" style="background-color:#5fabf3">
                                        <h6 class="title" >Price</h6>
                                    </header>
                                    <div class="filter-content">
                                        <div class="card-body">
                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="zero" value="">
                                                    <span class="form-check-label">
                                                        $0-$25
                                                    </span>
                                            </label>
                                            
                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="middle" value="">
                                                <span class="form-check-label">
                                                    $25-$50
                                                </span>
                                            </label>

                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="high" value="">
                                                <span class="form-check-label">
                                                    $50-$100
                                                </span>
                                            </label>
                                        </div> <!-- card-body.// -->
                                    </div>
                                </article> <!-- card-group-item.// -->
                                
                                
                                <!-- Sidebar//Rating -->
                                <article class="card-group-item">
                                    <header class="card-header" style="background-color:#5fabf3">
                                        <h6 class="title">Rating</h6>
                                    </header>
                                    
                                    <!-- thumbs -->
                                    <div class="filter-content">
                                        <div class="card-body">
                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="thmb0" value="">
                                                <span class="form-check-label">
                                                    +0 thumbs-up
                                                </span>
                                            </label>

                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="thmb1" value="">
                                                <span class="form-check-label">
                                                    +1 thumbs-up
                                                </span>
                                            </label>

                                            <label class="form-check">
                                                <input class="checkbox" type="checkbox" id="thmb2" value="">
                                                <span class="form-check-label">
                                                +2 thumbs-up
                                                </span>
                                            </label>
                                        </div>
                                    </div> 
                                </article> 

                            </div> <!-- card.// -->
                        </header>
                    </div>
                </nav>
            </div>
            <div class="col" style="margin-top:80px;">
                <div id="cartView">
                
                <div class="row">
                {{#cart}}
                    <div class ="box card" style="width: 18rem; margin-bottom:10px; margin-right:10px" id="{{id}}">
                        <div class="card-body">
                            <h5 class ="card-title" style="font-style:italic">{{name}}</h5>
                            <h5 class = "price">${{price}}.00</h5>
                            <h5 class = "rating">Rating: {{rating}}</h5>
                            <h5 class = "stock">Stock: {{stock}}</h5>
                        </div>
                    </div>
                    {{/cart}}
                </div>
                
                
                <div class="row">
                    <div class="col-12 text-center">
                        <a href="\"><button ID="btnCheckOut" class="btn btn-success">Check Out</button></a>
                    </div>
                </div>
                </div>
            </div>
        
            
       
    </div>
	<footer class="footer fixed-bottom">
        <nav class="navbar navbar-expand-lg justify-content-center navbar-dark bg-dark">
            <ul class="navbar-nav">
                    <div class="footer-content text-white">
                        <div class="row">
						<h4>Resources</h4>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </div>
                   </div> 
            </ul>
        </nav>
    </footer>
	<!-- JQuery first, then Popper.js, then Bootstrap JS, comes from the Bootstrap starter template -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        <!-- Firebase next, comes from the Firebase documentation -->
        <script src="https://www.gstatic.com/firebasejs/5.5.4/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.5.4/firebase-database.js"></script>

        <!-- Custom JS comes last, should only be single entry point -->
        <script src="/cart.js"></script>
        <script src="/mustache.js"></script>
        
    </body>
    
     

<!-- Footer -->
    <!-- <footer>
        <div class="footer container-fluid text-md-left">
        
            <div class="row">
                <hr class="clearfix d-md-1 pb-3">
                <div class="col-2 pt-2">
                   
                    <h6 class="text-uppercase">Resources</h6>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#!" style="font-size:12px" >About Us</a>
                        </li>

                        <li>
                            <a href="#!" style="font-size:12px">Contact Us</a>
                        </li>
                    </ul>
                </div>   
            </div>   

  

        </div>
  
    </footer> -->


</html>
