export default class CartContainer extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    // this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();
  }

  // Define observed attributes
  static get observedAttributes() {
    return ['empty'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render()
  }


  render() {
    // this.shadowObj.innerHTML = this.getTemplate();
    this.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

    this.updateTotal()
  }

  getTemplate() {
    // Show HTML Here
    return `
      ${this.checkIfEmpty()}
      ${this.getStyles()}
    `
  }

  updateTotal() {
    const total = this.querySelector('.cart-items .totals > h1.title .ammount')
    const items = this.querySelectorAll('cart-item')

    let totalAmmount = 0.00

    if (total && items) {
      items.forEach(item => {
        let quanity = item.getAttribute('quantity') || 1
        let price = item.getAttribute('price')

        totalAmmount += (parseInt(quanity) * parseFloat(price))
      })

      total.textContent = totalAmmount
    }
  }

  getItems(){
    return`
      <div class="cart-items">
        <p class="head">Your Cart Items: Name, Quantity & Price</p>

        <cart-item name="Pinapple Freash" quantity="1" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Some other item" quantity="2" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Avacado" quantity="2" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Pinapple Freash" quantity="1" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Pinapple Freash" quantity="1" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Pinapple Freash" quantity="1" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Pinapple Freash" quantity="1" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>
        <cart-item name="Pinapple Freash" quantity="1" price="33.25" image-src="img/product/furits/18.jpg"></cart-item>

        <div class="totals">
          <p class="head">Total</p>
          <h1 class="title">
            <span class="curr">Ksh.</span>
            <span class="ammount">0.0</span>
          </h1>
          <p class="text">
            The above is your total ammout, proceed to checkout in order to pay for the items
          </p>
          <a href="#" class="action">Proceed to checkout</a>
        </div>
      </div>
    `
  }

  getEmpty() {
    return `
      <div class="empty">
        <p class="head">Cart</p>
        <h1 class="title">Your cart is empty!</h1>
        <p class="text">
          Please go to products page, home page or search for disired producrt then add it to 
          the cart/buy then come check the cart later.
        </p>
        <a href="#" class="action">Shop now</a>
      </div>
    `
  }

  checkIfEmpty() {
    if (this.getAttribute('empty') === 'true') {
      return this.getEmpty()
    }
    else {
      return this.getItems()
    }
  }


  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }

      .empty {
        /* border: 1px solid #808080; */
        margin: 0;
        width: 50%;
        min-height: 100%;
        /* padding: 50px 10% 20px 10%; */
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        color: #404040;
        text-align: center;
        gap: 20px;
      }

      .empty > p.head {
        width: max-content;
        color: #ffffff;
        margin: 0 0 30px 0;
        padding: 5px 12px;
        background: rgb(223, 121, 26);
        background: linear-gradient(
          0deg,
          rgb(223, 121, 26) 0%,
          rgb(240, 156, 78) 100%
        );
        background-color: rgb(247, 145, 162);
        border-radius: 50px;
      }

      .empty > h1.title {
        line-height: 1.3;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.116);
        margin: 0;
        font-size: 2.5rem;
        /* font-family: var(--font-alt); */
        font-family: "Inter Custom", sans-serif;
        line-height: 1.3;
        font-weight: 500;
      }

      .empty > p.text {
        font-family: "Inter Custom", sans-serif;
        margin: 0;
        bottom: 40px;
        font-size: 1.15rem;
        line-height: 1.5;
        font-style: normal;
        text-align: center;
      }

      .empty > .action {
        margin: 15px 0;
        padding: 10px 15px;
        text-decoration: none;
        font-family: var(--font-alt);
        font-size: 1.1rem;
        font-weight: 600;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s linear;

        background: linear-gradient(
          0deg,
          rgb(193, 236, 241) 0%,
          rgb(255, 255, 255) 100%
        );
        color: rgb(68, 77, 107);
        backdrop-filter: blur(84px);
        -webkit-backdrop-filter: blur(84px);
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.158);
        /* color: #fafafa; */
      }


      .cart-items {
        /* border: 1px solid #808080; */
        margin: 0;
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        color: #404040;
        text-align: center;
        gap: 0;
      }

      .cart-items > p.head {
        width: max-content;
        color: #ffffff;
        /* text-transform: uppercase; */
        font-weight: 500;
        margin: 0 0 25px 0;
        padding: 5px 12px;
        background: linear-gradient(#53595f, #627ea0);
        border-radius: 50px;
      }


      .cart-items > .totals {
        border-top: 1px solid #80808017;
        padding: 50px 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        color: #404040;
        text-align: center;
        gap: 20px;
      }

      .cart-items .totals > p.head {
        width: max-content;
        color: #ffffff;
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0;
        padding: 5px 15px;
        background: rgb(223, 121, 26);
        background: linear-gradient(
          0deg,
          rgb(223, 121, 26) 0%,
          rgb(240, 156, 78) 100%
        );
        background-color: rgb(247, 145, 162);
        border-radius: 50px;
      }

      .cart-items .totals > h1.title {
        line-height: 1.3;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.116);
        margin: 0;
        font-size: 2.5rem;
        /* font-family: var(--font-alt); */
        font-family: "Inter Custom", sans-serif;
        line-height: 1.3;
        font-weight: 500;
      }

      .cart-items .totals > p.text {
        font-family: "Inter Custom", sans-serif;
        margin: 0;
        bottom: 40px;
        font-size: 1.15rem;
        line-height: 1.5;
        font-style: normal;
        text-align: center;
      }

      .cart-items .totals > .action {
        margin: 15px 0;
        padding: 15px 18px;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 600;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s linear;

        background: linear-gradient(#53595f, #627ea0);
        /* color: rgb(68, 77, 107); */
        color: #ffffff;
        backdrop-filter: blur(84px);
        -webkit-backdrop-filter: blur(84px);
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.158);
      }
      
    </style>
    `
  }
}