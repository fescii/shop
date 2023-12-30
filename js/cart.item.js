export default class CartItem extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();
  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

    this.calculateTotal(this.getAttribute('quantity'), this.getAttribute('price'))
    this.activateButtons()
  }

  getTemplate() {
    // Show HTML Here
    return `
      ${this.getBody()}
      ${this.getStyles()}
    `
  }

  getBody(){
    return`
      <div class="info">
        <div class="image">
          <img src="${this.getAttribute('image-src')}" alt="Product image">
        </div>
        <div class="other">
          <p class="name">${this.getAttribute('name')}</p>
          <span class="price">
            <span class="symbol">At Ksh.</span>
            <span class="money">${this.getAttribute('price')}</span>
          </span>
        </div>
      </div>
      <div class="quanity">
        <span class="q">Quantity</span>
        <div class="picker">
          <div id="left-nav" class="nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"  viewBox="0 0 16 16">
              <path fill-rule="evenodd"  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <span class="no">${this.getAttribute('quantity')}</span>
          <div id="right-nav" class="nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"  viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="totals">
        <div class="total">
          <span class="ammount">
            <span class="curr">Ksh.</span>
            <span class="no">0</span>
          </span>
        </div>
        <div class="actions">
          <span class="action remove">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8892 9.55426C18.8892 17.5733 20.0435 21.1981 12.2797 21.1981C4.5149 21.1981 5.693 17.5733 5.693 9.55426" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.3652 6.47997H4.21472" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.7149 6.47995C15.7149 6.47995 16.2435 2.71423 12.2892 2.71423C8.3359 2.71423 8.86447 6.47995 8.86447 6.47995" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="text">Remove</span>
          </span>
        </div>
      </div>
    `
  }

  calculateTotal(quanity, price) {
    const floatedPrice = parseFloat(price)
    const intQuanitity = parseInt(quanity)

    const total = this.shadowObj.querySelector('.totals .ammount span.no');

    if (total) {
      total.textContent = (floatedPrice * intQuanitity)
    }
  }

  activateButtons(){
    const self = this
    const no = this.shadowObj.querySelector('.picker span.no');
    const leftNav = this.shadowObj.querySelector('.picker #left-nav');
    const rightNav = this.shadowObj.querySelector('.picker #right-nav');

    if (no && leftNav && rightNav) {
      rightNav.addEventListener('click', (e) => {
        e.preventDefault()
        no.textContent = parseInt(no.textContent) + 1
        self.setAttribute('quantity', no.textContent)
        self.calculateTotal(no.textContent, self.getAttribute('price'))
      })

      leftNav.addEventListener('click', (e) => {
        if (parseInt(no.textContent) === 1) {
          no.textContent = 1
          self.setAttribute('quantity', no.textContent)
          self.calculateTotal(no.textContent, self.getAttribute('price'))
        }
        else{
          no.textContent = parseInt(no.textContent) - 1
          self.setAttribute('quantity', no.textContent)
          self.calculateTotal(no.textContent, self.getAttribute('price'))
        }

      })

    }
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }

      :host {
        border-top: 1px solid #80808017;
        /* background-color: #80808010; */
        padding: 15px 10px;
        width: 80%;
        /* min-width: 700px; */
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .info {
        /* border: 1px solid red; */
        display: flex;
        /* align-items: center; */
        justify-content: start;
        gap: 6px;
      }

      .info .image {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 5px;
      }

      .info .image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .info .other{
        /* border: 1px solid red; */
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: start;
        gap: 5px;
        padding: 3px 0;
      }

      .info .other p.name {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
        color: #404040;
      }

      .info .other .price {
        font-weight: 500;
        color: #808080;
        font-size: 1rem;
      }

      .info .other .price * {
        color: inherit;
      }

      .quanity {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
      }

      .quanity .q {
        /* border: 1px solid red; */
        margin: 0;
        font-weight: 500;
        color: #606060;
      }

      .quanity .picker {
        /* border: 1px solid black; */
        background-color: #80808010;
        align-self: start;
        display: flex;
        flex-flow: row;
        padding: 5px 15px;
        border-radius: 15px;
        align-items: start;
        gap: 15px;
      }

      .quanity .picker span.no {
        /* border: 1px solid black; */
        background-color: #ffffff;
        width: 30px;
        height: 30px;
        text-align: center;
        padding: 5px;
        border-radius: 50px;
        color: #099eef;
      }

      .quanity .picker > .nav {
        width: 26px;
        height: 26px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;
        border-radius: 50px;
        /* background: rgb(223, 121, 26);
        background: linear-gradient(
          0deg,
          rgb(223, 121, 26) 0%,
          rgb(240, 156, 78) 100%
        );
        background-color: rgb(247, 145, 162); */
        background: linear-gradient(#53595f, #627ea0);
      }

      .quanity .picker > .nav > svg {
        rotate: -90deg;
        width: 16px;
        height: 16px;
        stroke-width: 1.8;
      }

      .totals {
        /* border: 1px solid red; */
        width: 200px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .totals .ammount {
        font-weight: 600;
        color: var(--main-color);
        font-size: 1.1rem;
      }
       
      .totals .actions {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .totals .actions .action {
        border: 1px solid #80808017;
        padding: 3px 10px 5px 10px;
        color: #808080;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 0.95rem;
        cursor: pointer;
      }

      .totals .actions .action:hover {
        color: #ef6509;
      }

      .totals .actions .action svg {
        width: 20px;
        height: 20px;
      }
      
    </style>
    `
  }
}