export default class ProductContainer extends HTMLElement {
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
    const button  = this.shadowObj.querySelector('.btn-style-two')
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
      <div class="image">
				<img src="img/product/furits/14.jpg" alt="Product" srcset="">
			</div>
			<div class="details">
				<p class="name">Pinapple Freash</p>
				<p class="price">Ksh. 335.00</p>
				<!-- Button Box -->
				<div class="button-box">
					<a class="btn-style-one theme-btn">
						<div class="btn-wrap">
							<span class="text-one">Buy</span>
							<span class="text-two">Buy</span>
						</div>
					</a>
					<a class="btn-style-two theme-btn">
						<div class="btn-wrap">
							<span class="text-two">View</span>
						</div>
					</a>
				</div>
			</div>
    `
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }

      :host{
        /* border: 1px solid #80808037; */
        background-color: #ffffff;
        box-shadow: 0 5px 25px rgba(109, 117, 141, 0.1);
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0;
        padding: 15px 0 0 0;
        width: 200px;
        border-radius: 15px;
      }

      .image {
        /* border: 2px solid red; */
        height: 114px;
        width: 114px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .image img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }

      .details {
        /* border: 2px solid red; */
        width: 100%;
        padding: 5px 10px 10px 5px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0px;
      }

      .details p {
        margin: 5px 0 0 0;
        text-align: center;
        color: #404040;
        font-weight: 500;
        font-size: 1.12rem;
        line-height: 1.2;
        letter-spacing: 0.2px;
      }

      .details p.price {
        color: #85bd02;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.2px;
      }

      .details > .button-box {
        /* border: 1px solid red; */
        margin: 10px 0 0 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
      }

      /* Btn Style One */
      .btn-style-one {
        border: none;
        position: relative;
        font-weight: 500;
        overflow: hidden;
        text-align: center;
        padding: 3px 12px 5px;
        display: inline-block;
        border-radius: 50px;
        letter-spacing: 1px;
        color: var(--white-color);
        font-size: 1rem;
        text-transform: capitalize;
        cursor: pointer;
        background-color: var(--color-two);
      }

      .btn-style-one:before {
        -webkit-transition-duration: 800ms;
        transition-duration: 800ms;
        position: absolute;
        width: 200%;
        height: 200%;
        content: "";
        top: -200%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        border-radius: 50%;
        z-index: 1;
        background: var(--main-color);
      }

      .btn-style-one:hover:before {
        top: 0%;
      }

      .btn-style-one .btn-wrap {
        position: relative;
        z-index: 1;
        float: left;
        overflow: hidden;
        /* display: inline-block; */
      }

      .btn-style-one .btn-wrap .text-one {
        position: relative;
        display: block;
        color: var(--white-color);
        transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      .btn-style-one:hover .btn-wrap .text-one:first-child {
        -webkit-transform: translateY(-150%);
        -ms-transform: translateY(-150%);
        transform: translateY(-150%);
      }

      .btn-style-one .btn-wrap .text-two {
        position: absolute;
        top: 100%;
        display: block;
        color: var(--white-color);
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .btn-style-one:hover .btn-wrap .text-two {
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      .btn-style-one:hover .btn-wrap .text-two {
        color: var(--white-color);
      }

      .btn-style-one:hover:before {
        top: -40%;
      }

      /* Btn Style Two */
      .btn-style-two {
        position: relative;
        border: 1px solid #80808027;
        font-weight: 500;
        overflow: hidden;
        text-align: center;
        padding: 3px 12px 5px;
        display: inline-block;
        border-radius: 50px;
        letter-spacing: 1px;
        color: #808080;
        font-size: 1rem;
        text-transform: capitalize;
        cursor: pointer;
        /* background-color: var(--color-two); */
      }

      .btn-style-two .btn-wrap .text-one {
        position: relative;
        display: block;
        /* color: #808080; */
        transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      .btn-style-two:hover {
        color: var(--color-two);
      }
      
    </style>
    `
  }
}