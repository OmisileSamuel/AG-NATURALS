const product = [
    {
        id: 0,
        image: 'image/1.jpg',
        title: 'HAIR GROWTH SPRAY',
        price: 4000,
    },
    {
        id: 1,
        image:
        title:LEAVE-IN CONDITIONER
        price:#3500($5)
    },
    {
        id: 2
        image:
        title:ROSEMARY SHAMPOO
        price:#3500($5)
    },
    {
        id: 3
        image:
        title:FRUITY DEEP-CONDITIONER
        price:#4000($6)
    },
    {
        id: 4
        image:
        title:HAIR BUTTER
        price:#3500($5)
    },
    {
        id: 5
        image:
        title:HAIR GROWTH OIL
        price:#3500($5)
    },
    {
        id: 6
        image:
        title:BEARD OIL
        price:#12000($18)
    },
    {
        id: 7
        image:
        title:TOTAL PACKAGE
        price:#20000($30)
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=#{image}></img>
                </div>
                <div class='bottom'>
                    <p>#{title}</p>
                    <h2># #{price}.00</h2>`+
                    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>`
        )
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHtml = "Your cart is empty";
            document.getElementById("total").innerHTML = "# "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total=price;
                document.getElementById("total").innerHTML = "# "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-image'>
                    <img class='rowing' src=$(image)>
                    </div>
                    <p style='font-size:12px;'>#(title)</p>
                    <h2 style='font-size: 15px;'># #(price).00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
                )
            }).join('');
        }
    }