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
				<img src="${this.getAttribute('product-image')}" alt="Product" srcset="">
			</div>
			<div class="details">
        <div class="content">
          <span class="rating">
            <span class="number">4.3</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <!-- <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4315 8.10791C21.0445 6.73624 19.3265 6.66541 17.9455 6.60791C17.0765 6.57124 16.1775 6.53457 15.8015 6.21041C15.4185 5.88041 15.1195 5.24791 14.8285 4.63624C14.2615 3.43957 13.6185 2.08374 11.9995 2.08374C10.3815 2.08374 9.73953 3.43957 9.17153 4.63624C8.88153 5.24791 8.58153 5.88041 8.19953 6.21041C7.82253 6.53457 6.92353 6.57124 6.05453 6.60791C4.67353 6.66541 2.95553 6.73624 2.56853 8.10791C2.20153 9.40957 3.34853 10.1971 4.36053 10.8921C5.05253 11.3671 5.70653 11.8171 5.85153 12.3671C5.99253 12.9012 5.78053 13.5912 5.57553 14.2596C5.22353 15.4087 4.82353 16.7104 6.15853 17.5496C6.57553 17.8121 6.99853 17.9162 7.41653 17.9162C8.32153 17.9162 9.20353 17.4296 9.95853 17.0129C10.6575 16.6279 11.3805 16.2287 11.9995 16.2287C12.6185 16.2287 13.3425 16.6279 14.0405 17.0129C15.1455 17.6221 16.5195 18.3787 17.8425 17.5496C19.1775 16.7104 18.7775 15.4079 18.4245 14.2579C18.2195 13.5904 18.0085 12.9004 18.1485 12.3671C18.2935 11.8171 18.9475 11.3679 19.6395 10.8921C20.6515 10.1971 21.7985 9.40957 21.4315 8.10791Z" fill="currentColor"/>
            </svg> -->
            <span class="people">(83)</span>
          </span>
        </div>
				<p class="name">${this.getAttribute('name')}</p>
				<p class="price">Ksh. ${this.getAttribute('price')}</p>
				<!-- Button Box -->
				<div class="button-box">
					<a class="btn-style-one theme-btn">
						<div class="btn-wrap">
							<span class="text-one">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3638 6.87003C16.3638 4.48403 14.4298 2.55003 12.0438 2.55003C9.65783 2.53903 7.71583 4.46503 7.70483 6.85103V6.87003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.9727 11.3739H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.14165 11.3739H9.09565" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0342 21.4896C5.52619 21.4896 4.77719 19.4396 3.31619 14.0226C1.85019 8.58863 4.79119 6.55563 12.0342 6.55563C19.2772 6.55563 22.2182 8.58863 20.7522 14.0226C19.2912 19.4396 18.5422 21.4896 12.0342 21.4896Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="buy">Buy</span>
              </span>
							<span class="text-two">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3638 6.87003C16.3638 4.48403 14.4298 2.55003 12.0438 2.55003C9.65783 2.53903 7.71583 4.46503 7.70483 6.85103V6.87003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.9727 11.3739H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.14165 11.3739H9.09565" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0342 21.4896C5.52619 21.4896 4.77719 19.4396 3.31619 14.0226C1.85019 8.58863 4.79119 6.55563 12.0342 6.55563C19.2772 6.55563 22.2182 8.58863 20.7522 14.0226C19.2912 19.4396 18.5422 21.4896 12.0342 21.4896Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="buy">Buy</span>
              </span>
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
        padding: 0;
        width: 200px;
        border-radius: 15px;
      }

      .image {
        /* border: 2px solid red; */
        background-color: #f3f3f3;
        height: 200px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 15px;
      }

      .image img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .details {
        /* border: 1px solid red; */
        width: 100%;
        padding: 10px;
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: center;
        gap: 0px;
      }

      .details > .content {
        /* border: 2px solid red; */
        width: 100%;
        padding: 0;
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 10px;
      }

      .details > .content .rating{
        /* border: 1px solid #404040; */
        padding: 0;
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 5px;
      }
      .details > .content .rating .number{
        /* border: 1px solid red; */
        color: #404040;
        font-size: 0.95rem;
        font-weight: 600;
      }

      .details > .content .rating svg{
        /* border: 1px solid red; */
        color: rgb(223, 121, 26);
        margin: 2px 0 0 2px;
        width: 15px;
        height: 15px;
      }

       .details > .content .rating .people{
        /* border: 1px solid red; */
        color: #404040;
        font-size: 0.95rem;
        margin: 0 0 0 10px;
      }

      .details p {
        margin: 5px 0 0 0;
        /* text-align: center; */
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
      }

      /* Btn Style One */
      .btn-style-one {
        border: none;
        width: 100%;
        position: relative;
        font-weight: 500;
        overflow: hidden;
        text-align: center;
        padding: 3px 12px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 50px;
        letter-spacing: 1px;
        color: var(--white-color);
        font-size: 1rem;
        text-transform: capitalize;
        cursor: pointer;
        background-color: var(--main-color);
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
        background: var(--color-two);
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
        /* font-weight: 400; */
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: var(--white-color);
        transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
      }

      .btn-style-one .btn-wrap .text-one svg {
        width: 21px;
        height: 21px;
      }

      .btn-style-one:hover .btn-wrap .text-one:first-child {
        -webkit-transform: translateY(-150%);
        -ms-transform: translateY(-150%);
        transform: translateY(-150%);
      }

      .btn-style-one .btn-wrap .text-two {
        position: absolute;
        top: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: var(--white-color);
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .btn-style-one .btn-wrap .text-two svg {
        width: 21px;
        height: 21px;
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