export default class ProductItem extends HTMLElement {
  constructor() {
    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

    this.openDetails();
  }

  openDetails() {
    const body = document.querySelector("body");
    const button = this.shadowObj.querySelector(".cover .actions .action.view");
    const content = `<modal-product></modal-product>`;

    if (body && button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        body.insertAdjacentHTML("beforebegin", content);
      });
    }
  }

  getTemplate() {
    // Show HTML Here
    return `
      ${this.getBody()}
      ${this.getStyles()}
    `;
  }

  getBody() {
    return `
      <a href="" class="cover">
				<span class="offer">-30%</span>
				<img src="img/product/product-1.webp" alt="Product Image" class="image">
				<div class="actions">
				  <span class="action wishlist" title="Wishlist">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M2.92178 12.4464C1.84878 9.09644 3.10378 4.93144 6.62078 3.79944C8.47078 3.20244 10.7538 3.70044 12.0508 5.48944C13.2738 3.63444 15.6228 3.20644 17.4708 3.79944C20.9868 4.93144 22.2488 9.09644 21.1768 12.4464C19.5068 17.7564 13.6798 20.5224 12.0508 20.5224C10.4228 20.5224 4.64778 17.8184 2.92178 12.4464Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M15.7886 7.56415C16.9956 7.68815 17.7506 8.64515 17.7056 9.98615" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<span class="action cart" title="Add to cart">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.3638 6.87003C16.3638 4.48403 14.4298 2.55003 12.0438 2.55003C9.65783 2.53903 7.71583 4.46503 7.70483 6.85103V6.87003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M14.9727 11.3739H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M9.14165 11.3739H9.09565" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path fill-rule="evenodd" clip-rule="evenodd"	d="M12.0342 21.4896C5.52619 21.4896 4.77719 19.4396 3.31619 14.0226C1.85019 8.58863 4.79119 6.55563 12.0342 6.55563C19.2772 6.55563 22.2182 8.58863 20.7522 14.0226C19.2912 19.4396 18.5422 21.4896 12.0342 21.4896Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<span class="action view" title="Quick view">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
              <circle cx="11.7666" cy="11.7667" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M18.0183 18.4853L21.5423 22.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
				  </span>
			  </div>
			</a>
			<p class="name">${this.getAttribute('product-name')}</p>
			<span class="price">
				<span class="item now">Ksh ${this.getAttribute('current-price')}</span>
				<span class="item was">Ksh ${this.getAttribute('previous-price')}</span>
			</span>
    `;
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }

      :host{
        /* border: 1px solid blue; */
        text-decoration: none;
        height: max-content;
        display: flex;
        flex-flow: column;
        width: 200px;
        max-width: 215px;
        gap: 5px;
        justify-content: center;
      }

      p.name {
        margin: 5px 0 0 0;
        line-height: 1.4;
        color: #6d6d6d;
        font-weight: 500;
      }

      .price {
        color: #6d6d6d;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .price .now {
        color: #333333;
        font-weight: 600;
      }

      .price .was {
        text-decoration-line: line-through;
        font-weight: 400;
        font-size: 0.9rem;
      }

      .cover {
        border: 1px solid #80808017;
        text-decoration: none;
        height: 230px;
        width: 200px;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }

      .cover img.image {
        /* border: 1px solid rgb(190, 176, 42); */
        background-color: #ffffff;
        height: 100%;
        width: 100%;
        object-fit: contain;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }

      .cover span.offer {
        background-color: #519f10;
        border-radius: 100px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        font-weight: 700;
        left: 10px;
        line-height: 1;
        position: absolute;
        top: 10px;
        height: 45px;
        width: 45px;
        line-height: 45px;
        text-align: center;
      }

      .cover .actions {
        /* border: 1px solid red; */
        position: absolute;
        bottom: 0;
        padding: 0 10px 12px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 5px;
      }

      .cover .actions .action {
        background-color: #f1f1f1;
        color: #404040;
        font-size: 18px;
        cursor: pointer;
        height: 40px;
        line-height: 44px;
        margin: 0 2px;
        transform: scaleY(0);
        transition: all 0.4s ease-in-out 0s;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cover:hover .actions .action {
        transform: scaleY(1);
      }

      .cover .actions .action:hover {
        background-color: #519f10;
        color: #fff;
      }

      .cover .actions .action svg {
        width: 22px;
        height: 22px;
      }

      .cover .actions .action.view svg {
        width: 20px;
        height: 20px;
      }
      
    </style>
    `;
  }
}
