    <div class="row">
        {{#products}}
        <div class ="box card" style="width: 18rem; margin-bottom:10px; margin-right:10px" id="{{id}}">
            <div class="card-body">
                <h5 class ="card-title" style="font-style:italic">{{name}}</h5>
                <h5 class = "price">${{price}}.00</h5>
                <h5 class = "rating">Rating: {{rating}}</h5>
                <h5 class = "stock">Stock: {{stock}}</h5>
                {{#stocked}}
                    <button id={{id}} class="btn btn-primary">Add to Cart</button>
                {{/stocked}}
                {{^stocked}}
                    <button id="btnAdd" class="btn btn-primary" disabled>Out of stock</button>
                {{/stocked}}
            </div>
        </div>
        {{/products}}
    </div>

