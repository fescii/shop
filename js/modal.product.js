export default class ModalProduct extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();

  }


  render() {
    // this.shadowObj.innerHTML = this.getTemplate();
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

  }

  disconnectedCallback() {
    // console.log('We are inside disconnectedCallback');
    this.enableScroll()
  }

  disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    document.body.classList.add("stop-scrolling");

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    document.body.classList.remove("stop-scrolling");
    window.onscroll = function () { };
  }

  getTemplate() {
    // Show HTML Here
    return `
      <div class="overlay"></div>
      <div class="content">
        <span class="close" title="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
        ${this.getImages()}
        ${this.getDetails()}
      </div>
    ${this.getStyles()}`;
  }

  getImages() {
    return `
      <div class="images">
				<div class="current-image">
					<img src="img/explore/shots/shot4.jpg" alt="Product Image">
				</div>
				<div class="images-selector">
					<span class="image current">
						<img src="img/product/furits/10.jpg" alt="Image">
					</span>
					<span class="image">
						<img src="img/product/furits/12.jpg" alt="Image">
					</span>
					<span class="image">
						<img src="img/product/furits/18.jpg" alt="Image">
					</span>
					<span class="image">
						<img src="img/product/furits/18.jpg" alt="Image">
					</span>
					<span class="image">
						<img src="img/product/furits/16.jpg" alt="Image">
					</span>
				</div>
			</div>
    `
  }

  getDetails() {
    return `
      <div class="details">
				<div class="body">
					<div class="title">
						<h2 class="name">Product name</h2>
						<span class="line"></span>
					</div>
					<p class="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in quae consequuntur doloremque quo ad voluptate
						nesciunt et sit quas ducimus ullam, architecto aliquam quos totam dignissimos odit dolores. Magnam.
					</p>
					<div class="price">
						<div class="price-list">
							<span class="now">Ksh. 234.00</span>
							<span class="was">Ksh. 523.00</span>
						</div>
						<span class="save">Save Ksh. 289.00</span>
					</div>
				</div>
				<div class="actions">
					<div class="top-actions">
						<span class="action">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M2.92178 12.4464C1.84878 9.09644 3.10378 4.93144 6.62078 3.79944C8.47078 3.20244 10.7538 3.70044 12.0508 5.48944C13.2738 3.63444 15.6228 3.20644 17.4708 3.79944C20.9868 4.93144 22.2488 9.09644 21.1768 12.4464C19.5068 17.7564 13.6798 20.5224 12.0508 20.5224C10.4228 20.5224 4.64778 17.8184 2.92178 12.4464Z"
									stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M15.7886 7.56415C16.9956 7.68815 17.7506 8.64515 17.7056 9.98615" stroke="currentColor" stroke-width="1.5"
									stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<span class="text">Wishlist</span>
						</span>
						<a href="#" class="action inquire">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M11.4933 12.4383C11.4933 12.4383 -0.483351 9.96068 3.6786 7.55813C7.19075 5.53083 19.2947 2.04528 20.9857 2.94588C21.8863 4.63688 18.4007 16.7408 16.3734 20.253C13.9709 24.4149 11.4933 12.4383 11.4933 12.4383Z"
									stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M11.4934 12.4383L20.9858 2.94589" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
							<span class="text">Inquire</span>
						</a>
					</div>
					<span class="add action">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.3638 6.87003C16.3638 4.48403 14.4298 2.55003 12.0438 2.55003C9.65783 2.53903 7.71583 4.46503 7.70483 6.85103V6.87003"
								stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M14.9727 11.3739H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M9.14165 11.3739H9.09565" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M12.0342 21.4896C5.52619 21.4896 4.77719 19.4396 3.31619 14.0226C1.85019 8.58863 4.79119 6.55563 12.0342 6.55563C19.2772 6.55563 22.2182 8.58863 20.7522 14.0226C19.2912 19.4396 18.5422 21.4896 12.0342 21.4896Z"
								stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="text">Add to cart</span>
					</span>
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
        border: none;
        background-color: rgba(25, 25, 28, 0.671);
        padding: 0;
        justify-self: end;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        z-index: 12;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }

      div.overlay {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 12;
        cursor: pointer;
        /* background-color: #000; */
      }

      .content {
        background-color: #ffffff;
        padding: 20px;
        z-index: 20;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
        width: 750px;
        height: 500px;
        max-height: max-content;
        min-height: min-content;
        height: max-content;
        border-radius: 25px;
        position: relative;
      }

      .content > span.close {
        cursor: pointer;
        position: absolute;
        top: -30px;
        left: -30px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white-color);
        color: #808080;
        border-radius: 50px;
      }

      .content > span.close:hover {
        color: #f75a5a;
      }

      .content > span.close > svg {
        width: 24px;
        height: 24px;
      }

      .content .images {
        /* border: 1px solid #ff0000; */
        min-width: 50%;
        width: 50%;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        /* border-top-left-radius: 25px;
        border-bottom-left-radius: 25px; */
      }

      .content .images .current-image {
        border-top: 2px solid #85bd02c4;
        width: 80%;
        height: 60%;
        min-height: 320px;
        max-height: 320px;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        /* border-radius: 10px; */
      }

      .content .images .current-image img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: 10px;
      }

      .content .images .images-selector {
        border-top: 1px solid #80808017;
        padding: 15px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 10px;
      }

      .content .images .images-selector .image {
        /* border: 1px solid rgb(0, 0, 0); */
        width: 50px;
        height: 50px;
        min-width: 50px;
        max-height: 50px;
        min-width: 50px;
        max-height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0 1px 1px rgba(109, 117, 141, 0.1);
      }

      .content .images .images-selector .image.current {
        border: 2px solid #85bd028a;
      }

      .content .images .images-selector .image img {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;
        border-radius: 8px;
      }

      .content .images .images-selector .image:hover {
        border: 1px solid #80808027;
      }

      .content .details {
        /* border: 1px solid #ff0000; */
        height: 100%;
        width: 50%;
        display: flex;
        flex-flow: column;
        align-items: start;
        gap: 15px;
        justify-content: space-between;
      }

      .content .details  > .body {
        /* border: 1px solid #ff0000; */
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: start;
        gap: 15px;
      }

      .content .details > .body > .title {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: start;
        gap: 10px;
      }

      .content .details > .body > .title h2.name {
        font-size: 1.3rem;
        color: var(--color-two);
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 600;
      }

      .content .details > .body > .title span.line {
        display: inline-block;
        height: 4px;
        width: 30px;
        background-color: var(--color-two);
        opacity: .7;
        border-radius: 5px;
      }

      .content .details > .body > p.description {
        font-size: 1rem;
        color: #404040;
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 500;
      }

      .content .details  > .body > .price {
        /* border: 1px solid red; */
        background-color: #f7f7f7;
        padding: 10px 10px;
        width: 100%;
        display: flex;
        flex-flow: column;
        gap: 8px;
        border-radius: 10px;
      }

      .content .details > .body > .price .price-list {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 500;
        color: #808080;
      }

      .content .details > .body > .price .price-list .now {
        /* border: 1px solid red; */
        color: var(--main-color);
        font-size: 1.2rem;
        font-weight: 600;
      }

      .content .details > .body > .price .price-list .was {
        /* border: 1px solid red; */
        font-size: 0.9rem;
        text-decoration: line-through;
        text-decoration-style: solid;
        text-decoration-color: #808080;
      }

      .content .details > .body > .price .save {
        /* border: 1px solid red; */
        /* font-size: 0.9rem; */
        color: #404040;
        font-weight: 500;
        /* text-align: center; */
      }

      .content .details > .actions {
        /* border: 1px solid red; */
        padding: 0 0 5px 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        gap: 20px;
        /* justify-content: center; */
      }

      .content .details > .actions > .top-actions {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
      }

      .content .details > .actions .action {
        position: relative;
        text-align: center;
        text-decoration: none;
        padding: 5px 12px 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 50px;
        letter-spacing: 1px;
        color: #404040;
        font-size: 1rem;
        cursor: pointer;
        border: 1px solid #80808017;
        /* background-color: var(--color-two); */
        /* background-color: var(--main-color); */
      }

      .content .details > .actions > .top-actions .action:hover {
        color: var(--color-two);
      }

      .content .details > .actions > .action {
        overflow: hidden;
        border: none;
        color: var(--white-color);
        font-weight: 500;
        background-color: var(--main-color);
      }

      .content .details > .actions > .action svg,
      .content .details > .actions > .action span.text {
        z-index: 10;
      }

      .content .details > .actions > .action:before {
        transition: all 1s ease;
        -o-transition: all 1s ease;
        -webkit-transition: all 1s ease;
        position: absolute;
        width: 200%;
        height: 300%;
        content: "";
        top: -300%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        border-radius: 50%;
        z-index: 1;
        background: var(--color-two);
      }

      .content .details > .actions > .action:hover:before {
        top: -10px;
      }

      .content .details > .actions .action svg {
        width: 24px;
        height: 24px;
      }

      .content .details > .actions .action.inquire svg {
        margin: 2px 0 0 0;
      }

      .content .details > .actions .action span.text {
        /* font-weight: 600; */
        font-size: 1.1rem;
      }

      </style>
    `;
  }
}