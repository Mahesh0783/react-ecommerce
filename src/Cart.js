import React from 'react'

function Cart(props) {
    var total=0;
    
    props.data.map((product)=>{
        return(
            total=total+ product.data.price

        )
    })


  return (
    <div class="row">
        {
            props.data.map((cartItem)=>{
                return(
                    <div class="col-4">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cartItem.data.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{cartItem.data.name}</h5>
                                <p class="card-text">{cartItem.data.desc}</p>
                                <p class="card-text">{cartItem.data.price}</p>
                                
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div>
            Total Cart Value :{total}
        </div>
        
    </div>
  )
}

export default Cart