export default class ProductClassic extends HTMLElement {
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
    
    this.openDetails()
  }

  openDetails() {
    const body = document.querySelector('body')
    const button  = this.shadowObj.querySelector('.content > h5')
    const content = `<modal-product></modal-product>`

    if (body && button) {
      button.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()

        body.insertAdjacentHTML('beforebegin', content)
      })
    }
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
      <div class="product-img">
				<img src="${this.getAttribute('product-image')}" alt="">
			</div>
			<div class="content">
			  <h5><a>${this.getAttribute('name')}</a></h5>
				<div class="price">
					<span>Ksh ${this.getAttribute('price')}</span>
					<span class="old">Ksh ${this.getAttribute('old-price')}</span>
				</div>
				<a href="#">Add to cart →</a>
			</div>
    `
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }

      :host {
        /* border: 3px solid red; */
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        max-height: max-content;
        gap: 0;
        padding: 0;
        border-radius: 15px;
      }

      .product-img {
        border: none;
        background-color: #fdfdfd;
        padding: 0;
        margin: 0;
        width: 114px;
        height: 114px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 15px;
      }

      .product-img > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        mix-blend-mode: multiply;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .content {
        /* border: 1px solid red; */
        width: calc(100% - 114px);
        padding: 0 0 0 18px;
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: start;
        gap: 7px;
      }

      .content>h5 {
        color: #434343;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.2px;
        margin: 0;
        cursor: pointer;
      }
      .content>h5:hover {
        color: var(--main-color);
      }

      .content>.price{
        display: flex;
        align-items: center;
        /* flex-flow: column; */
        gap: 5px;
      }

      .content>.price>span {
        color: var(--main-color);
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 0.2px;
      }

      .content>.price>span.old {
        color: #9e9e9e;
        font-size: 14px;
        text-decoration: line-through;
      }

      .content>a {
        color: #434343;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.2px;
      }

      .content>a:hover {
        color: var(--main-color);
      }
      
    </style>
    `
  }
}