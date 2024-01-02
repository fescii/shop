export default class ProductDetail extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();
  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');


  }

  getTemplate() {
    // Show HTML Here
    return `
      ${this.getBody()}
      ${this.getStyles()}
    `
  }

  getBody() {
    return `
    ${this.getQuickInfo()}
    ${this.getFullInfo()}
  
    `
  }

  getQuickInfo() {
    return `
      <div class="quick-info">
        <div class="images">
          <div class="current-image">
            <img src="img/explore/shots/shot4.jpg" alt="Product Image">
          </div>
          <div class="image-options">
            <div id="left-nav" class="nav">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </div>
            <div id="right-nav" class="nav">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <div class="images">
              <span class="image">
                <img src="img/product/furits/1.jpg" alt="Product">
              </span>
              <span class="image">
                <img src="img/product/furits/10.jpg" alt="Product">
              </span>
              <span class="image">
                <img src="img/product/furits/2.jpg" alt="Product">
              </span>
              <span class="image">
                <img src="img/product/furits/17.jpg" alt="Product">
              </span>
              <span class="image">
                <img src="img/product/furits/12.jpg" alt="Product">
              </span>
              <span class="image">
                <img src="img/product/furits/21.jpg" alt="Product">
              </span>
              <span class="image">
                <img src="img/product/furits/4.jpg" alt="Product">
              </span>
            </div>
          </div>
        </div>
        <div class="details">
          <div class="top">
            <div class="title">
              <h2 class="name">This is a very very long title for the a product that we sells in this store and others.</h2>
              <span class="line"></span>
            </div>
            <span class="rating">
              <span class="stars">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span class="number">4.3</span>
              <!-- <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4315 8.10791C21.0445 6.73624 19.3265 6.66541 17.9455 6.60791C17.0765 6.57124 16.1775 6.53457 15.8015 6.21041C15.4185 5.88041 15.1195 5.24791 14.8285 4.63624C14.2615 3.43957 13.6185 2.08374 11.9995 2.08374C10.3815 2.08374 9.73953 3.43957 9.17153 4.63624C8.88153 5.24791 8.58153 5.88041 8.19953 6.21041C7.82253 6.53457 6.92353 6.57124 6.05453 6.60791C4.67353 6.66541 2.95553 6.73624 2.56853 8.10791C2.20153 9.40957 3.34853 10.1971 4.36053 10.8921C5.05253 11.3671 5.70653 11.8171 5.85153 12.3671C5.99253 12.9012 5.78053 13.5912 5.57553 14.2596C5.22353 15.4087 4.82353 16.7104 6.15853 17.5496C6.57553 17.8121 6.99853 17.9162 7.41653 17.9162C8.32153 17.9162 9.20353 17.4296 9.95853 17.0129C10.6575 16.6279 11.3805 16.2287 11.9995 16.2287C12.6185 16.2287 13.3425 16.6279 14.0405 17.0129C15.1455 17.6221 16.5195 18.3787 17.8425 17.5496C19.1775 16.7104 18.7775 15.4079 18.4245 14.2579C18.2195 13.5904 18.0085 12.9004 18.1485 12.3671C18.2935 11.8171 18.9475 11.3679 19.6395 10.8921C20.6515 10.1971 21.7985 9.40957 21.4315 8.10791Z" fill="currentColor"/>
                </svg> -->
              <span class="people">83 Reviews</span>
            </span>
            <div class="price">
              <span class="now">
                <span class="currency">Ksh.</span>
                <span class="ammount">273.25</span>
              </span>
              <span class="was">
                <span class="currency">Ksh.</span>
                <span class="ammount">573.25</span>
              </span>
              <div class="save">50% OFF</div>
            </div>
            <div class="desc">
              <span class="title">Color</span>
              <span class="attr">As the picture</span>
            </div>
            <div class="desc">
              <span class="title">Size</span>
              <span class="attr">As the picture</span>
            </div>
            <div class="desc quantity">
              <span class="title">Quantity</span>
              <div class="picker">
                <div id="left-nav" class="nav">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
                <span class="no">1</span>
                <div id="right-nav" class="nav">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="actions">
            <!-- Button Box -->
            <div class="button-box">
              <span class="btn-style-one theme-btn action">
                <div class="btn-wrap">
                  <span class="text-one">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.3638 6.87003C16.3638 4.48403 14.4298 2.55003 12.0438 2.55003C9.65783 2.53903 7.71583 4.46503 7.70483 6.85103V6.87003"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.9727 11.3739H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.14165 11.3739H9.09565" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.0342 21.4896C5.52619 21.4896 4.77719 19.4396 3.31619 14.0226C1.85019 8.58863 4.79119 6.55563 12.0342 6.55563C19.2772 6.55563 22.2182 8.58863 20.7522 14.0226C19.2912 19.4396 18.5422 21.4896 12.0342 21.4896Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="buy">Add to cart</span>
                  </span>
                  <span class="text-two">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.3638 6.87003C16.3638 4.48403 14.4298 2.55003 12.0438 2.55003C9.65783 2.53903 7.71583 4.46503 7.70483 6.85103V6.87003"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.9727 11.3739H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.14165 11.3739H9.09565" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.0342 21.4896C5.52619 21.4896 4.77719 19.4396 3.31619 14.0226C1.85019 8.58863 4.79119 6.55563 12.0342 6.55563C19.2772 6.55563 22.2182 8.58863 20.7522 14.0226C19.2912 19.4396 18.5422 21.4896 12.0342 21.4896Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="buy">Add to cart</span>
                  </span>
                </div>
              </span>
              <span class="action wish" title="Add to wish">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.92178 12.4464C1.84878 9.09644 3.10378 4.93144 6.62078 3.79944C8.47078 3.20244 10.7538 3.70044 12.0508 5.48944C13.2738 3.63444 15.6228 3.20644 17.4708 3.79944C20.9868 4.93144 22.2488 9.09644 21.1768 12.4464C19.5068 17.7564 13.6798 20.5224 12.0508 20.5224C10.4228 20.5224 4.64778 17.8184 2.92178 12.4464Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.7886 7.56415C16.9956 7.68815 17.7506 8.64515 17.7056 9.98615" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    `
  }

  getFullInfo() {
    return `
      <div class="full-info">
        <div class="main">
          <ul id="tab" class="tab">
            <li data-element="details" class="tab-item details active">
              <span class="text">Details</span>
              <span class="line"></span>
            </li>
            <li data-element="related" class="tab-item related">
              <span class="text">Related</span>
              <span class="line"></span>
            </li>
            <li data-element="reviews" class="tab-item reviews">
              <span class="text">Reviews</span>
              <span class="line"></span>
            </li>
          </ul>

          <div class="description" id="description">
            ${this.getSpecs()}
            ${this.getDescription()}

            ${this.getReviews()}
          </div>

        </div>
        ${this.getSideTab()}
      </div>
    `
  }

  getSideTab() {
    return `
      <div class="side-tab">
          <div class="title">
            <h2 class="name">Information</h2>
          </div>
          <div class="store">
            <h2 class="store-name">This is a store/seller name</h2>
            <p class="info">Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Recus andae, amet vitae a cupiditate, dolore labore.</p>
          </div>
          <div class="contact">
            <h2>For inquiries</h2>
            <span class="contact-details">
              <a href="tel:+254713253018">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound"
                  viewBox="0 0 16 16">
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span class="text">Call</span>
              </a>
              <a href="sms:+254713253018">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send"
                  viewBox="0 0 16 16">
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                <span class="text">Sms</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp"
                  viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <span class="text">WhatsApp</span>
              </a>
              <a href="mailto:isfescii@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope"
                  viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <span class="text">Mail</span>
              </a>
            </span>
          </div>
          <div class="share">
            <h2>Share this product on</h2>
            <div class="socials">
              <a href="#" class="social" title="Whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp"
                  viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
              <a href="#" class="social" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook"
                  viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" class="social" title="Twitter X">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x"
                  viewBox="0 0 16 16">
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
    `
  }

  getSpecs() {
    return `
    <div class="specifications">
              <div class="title">
                <h2 class="name">Specifications</h2>
                <span class="line"></span>
              </div>
              <ul class="spec-lists">
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
                <li class="list">
                  <span class="key">Key</span>
                  <span class="value">Value</span>
                </li>
              </ul>
      </div>
    `
  }

  getDescription() {
    return `
      <div class="desc">
              <div class="title">
                <h2 class="name">Description</h2>
                <span class="line"></span>
              </div>

              <div class="desc-lists">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus nam molestias accusamus, sed facere impedit, expedita provident optio atque amet iure aliquid deleniti, eum perspiciatis dolores saepe iusto quod.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi quam repellat commodi aut non rem molestiae neque a laudantium maxime quia quisquam deleniti aspernatur, itaque sapiente alias inventore doloribus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias nam eveniet autem error fugit animi, ea vitae expedita dolorem! Doloremque accusantium aliquam magnam ab numquam id cum, laborum animi!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, laborum velit inventore ab quia praesentium deserunt ipsam, molestias iste architecto autem pariatur. Suscipit ad, a doloribus pariatur illo autem nisi.</p>
              </div>

            </div>
    `
  }

  getReviews() {
    return `
      <div class="reviews">
        <div class="title">
          <h2 class="name">Reviews</h2>
          <span class="line"></span>
        </div>

        <div id="reviews-container" class="reviews-container">
          <div class="stats">
            ${this.reviewsStats()}
          </div>
          <div class="user-reveiws">
          
            ${this.userReviews()}

            <div class="actions">
              <a href="" class="action explore">
                <span class="text">Show more</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8.50012C19 8.50012 14.856 15.5001 12 15.5001C9.145 15.5001 5 8.50012 5 8.50012" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `
  }

  reviewsStats() {
    return `
      <div class="total">
        <span class="of">
          <span class="score">4.3</span>
          <span class="slash"></span>
          <span class="of-total">5.0</span>
        </span>
        <span class="stars">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <p class="text">89 Total reviews</p>
      </div>
      <div class="individual-scores">
        <span class="score five">
        <span class="no">5</span>
        <span class="numbers">(45)</span>
        <span class="bar">
          <span class="progress"></span>
        </span>
      </span>
      <span class="score four">
        <span class="no">4</span>
        <span class="numbers">(11)</span>
        <span class="bar">
          <span class="progress"></span>
        </span>
      </span>
      <span class="score three">
        <span class="no">3</span>
        <span class="numbers">(3)</span>
        <span class="bar">
          <span class="progress"></span>
        </span>
      </span>
      <span class="score two">
          <span class="no">2</span>
          <span class="numbers">(2)</span>
          <span class="bar">
            <span class="progress"></span>
        </span>
      </span>
      <span class="score one">
        <span class="no">1</span>
        <span class="numbers">(1)</span>
        <span class="bar">
          <span class="progress"></span>
        </span>
      </span>
    </div>
    `
  }

  userReviews() {
    return `
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Works great</h4>
                    <p class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem enim, labore nemo itaque distinctio quidem.</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
                  </div>
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Happy customer</h4>
                    <p class="content">A short review</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path
                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
                  </div>
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Works great</h4>
                    <p class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem enim</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path
                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
                  </div>
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Happy customer</h4>
                    <p class="content">A short review</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path
                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
                  </div>
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Works great</h4>
                    <p class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem enim, labore nemo itaque
                      distinctio quidem.</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path
                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
                  </div>
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Works great</h4>
                    <p class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem enim</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path
                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
                  </div>
                  <div class="review">
                    <span class="stars">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h4 class="title">Happy customer</h4>
                    <p class="content">A short review</p>
                    <span class="footer">
                      <span class="left">
                        <span class="time">10 Jul 2022</span>
                        <span class="by">by Fredrick</span>
                      </span>
                      <span class="right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path
                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <span class="text">Verified purchase</span>
                      </span>
                    </span>
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
        /* border: 1px solid #808080; */
        padding: 20px 10% 80px 10%;
        background-color: #ffffff;
        min-height: 80vh;
        display: flex;
        flex-flow: column;
        gap: 25px;
      }

      .quick-info {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        gap: 30px;
        /* align-items: center; */
        justify-content: center;
      }

      .quick-info>.images {
        /* border-top: 1px solid #80808017; */
        /* border-right: 1px solid red; */
        padding: 15px 0 0 0;
        width: 50%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }

      .quick-info>.images>.current-image {
        /* border: 2px solid red; */
        width: auto;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* overflow: hidden; */
      }

      .quick-info>.images>.current-image img {
        /* border: 2px solid rgb(0, 255, 13); */
        width: auto;
        max-width: 100%;
        max-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: contain;
        border-radius: 10px;
      }

      .quick-info>.images>.image-options {
        border-top: 1px solid #80808017;
        position: relative;
        padding: 15px 0 0 0;
        max-width: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
      }

      .quick-info>.images>.image-options .images {
        max-width: 100%;
        padding: 0 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .quick-info>.images>.image-options .images::-webkit-scrollbar {
        display: none !important;
        visibility: hidden;
      }

      .quick-info>.images>.image-options .images>.image {
        border: 1px solid #80808017;
        width: 70px;
        height: 70px;
        min-width: 70px;
        min-height: 70px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 10px;
      }

      .quick-info>.images>.image-options .images>.image img {
        /* border: 2px solid rgb(0, 255, 13); */
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;
      }

      .quick-info>.images>.image-options>.nav {
        /* border: 1px solid #80808017; */
        position: absolute;
        left: 10px;
        width: 26px;
        height: 26px;
        display: none;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;
        border-radius: 50px;
        background: linear-gradient(#53595f, #627ea0);
      }

      .quick-info>.images>.image-options:hover>.nav {
        display: flex;
      }

      .quick-info>.images>.image-options>.nav#right-nav {
        /* border: 1px solid #80808017; */
        position: absolute;
        left: unset;
        right: 10px;
      }

      .quick-info>.images>.image-options>.nav>svg {
        /* rotate: -90deg; */
        width: 16px;
        height: 16px;
        stroke-width: 1.8;
      }

      /*Details*/
      .quick-info>.details {
        /* border: 1px solid red; */
        /* width: 48%; */
        /* height: 100%; */
        display: flex;
        flex-flow: column;
        gap: 30px;
        justify-content: space-between;
      }

      .quick-info>.details>.top {
        /* border: 2px solid blueviolet; */
        width: 100%;
        /* height: 100%; */
        display: flex;
        flex-flow: column;
        gap: 25px;
      }

      .quick-info>.details>.top>.title {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: start;
        gap: 10px;
      }

      .quick-info>.details>.top>.title h2.name {
        font-size: 1.5rem;
        color: var(--color-two);
        /* letter-spacing: 1px; */
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 570;
      }

      .quick-info>.details>.top>.title span.line {
        display: inline-block;
        height: 4px;
        width: 30px;
        background-color: var(--color-two);
        opacity: .7;
        border-radius: 5px;
      }

      .quick-info>.details>.top .rating {
        /* border: 1px solid #404040; */
        padding: 0;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        gap: 5px;
      }

      .quick-info>.details>.top .rating .number {
        /* border: 1px solid red; */
        color: #404040;
        font-size: 1.1rem;
        font-weight: 600;
      }

      .quick-info>.details>.top .rating .stars {
        /* border: 1px solid red; */
        background-color: rgb(223, 121, 26);
        background-clip: text;
      }

      .quick-info>.details>.top .rating .stars svg {
        /* border: 1px solid red; */
        color: rgb(223, 121, 26);
        stroke: none;
        margin: 2px 0 0 2px;
        fill: rgb(223, 121, 26);
        width: 20px;
        height: 20px;
        /* background-clip: text; */
      }

      .quick-info>.details>.top .rating .stars svg path {
        stroke: none;
      }

      .quick-info>.details>.top .people {
        /* border: 1px solid red; */
        color: #404040;
        /* font-size: 0.9rem; */
        margin: 0 0 0 10px;
        text-align: center;
      }

      .quick-info>.details>.top .price {
        /* border: 1px solid red; */
        /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.116); */
        background-color: #f5f7fa;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 25px;
        border-radius: 5px;
      }

      .quick-info>.details>.top .price .now {
        /* border: 1px solid red; */
        color: var(--main-color);
        font-size: 1.7rem;
        font-weight: 600;
      }

      .quick-info>.details>.top .price .now>* {
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.116);
      }


      .quick-info>.details>.top .price .was {
        /* border: 1px solid red; */
        color: #808080;
        font-size: 1.1rem;
        /* font-weight: 500; */
        text-decoration: line-through;
        text-decoration-color: #808080;
        text-decoration-line: 2px;
      }

      .quick-info>.details>.top .price .save {
        /* border: 1px solid red; */
        padding: 5px 15px;
        color: #ffffff;
        font-weight: 500;
        background: rgb(223, 121, 26);
        background: linear-gradient(0deg,
            rgb(223, 121, 26) 0%,
            rgb(240, 156, 78) 100%);
        background-color: rgb(247, 145, 162);
        border-radius: 50px;
      }


      .quick-info>.details>.top .desc {
        /* border-top: 1px solid #80808017; */
        /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.116); */
        /* background-color: #f5f7fa; */
        /* margin: 20px 0 0 0; */
        padding: 0;
        display: flex;
        /* flex-flow: column; */
        align-items: center;
        justify-content: start;
        gap: 20px;
        /* border-radius: 5px; */
      }

      .quick-info>.details>.top .desc .title {
        /* border: 1px solid red; */
        line-height: 1.3;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.116);
        margin: 0;
        font-size: 1.2rem;
        color: #404040;
        font-family: "Inter Custom", sans-serif;
        line-height: 1.3;
        font-weight: 600;
      }

      .quick-info>.details>.top .desc .attr {
        border: 1px solid #80808027;
        padding: 3px 10px;
        /* line-height: 1.3; */
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.116);
        margin: 0;
        color: #606060;
        font-family: "Inter Custom", sans-serif;
        line-height: 1.3;
        font-weight: 400;
        border-radius: 10px;
      }


      .quick-info>.details>.top .desc .picker {
        /* border: 1px solid black; */
        background-color: #80808010;
        /* align-self: start; */
        display: flex;
        flex-flow: row;
        padding: 5px 15px;
        border-radius: 15px;
        align-items: start;
        gap: 15px;
      }

      .quick-info>.details>.top .desc .picker span.no {
        /* border: 1px solid black; */
        background-color: #ffffff;
        width: 40px;
        height: 30px;
        text-align: center;
        padding: 5px;
        border-radius: 10px;
        color: #099eef;
      }

      .quick-info>.details>.top .desc .picker>.nav {
        width: 30px;
        height: 30px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;
        border-radius: 50px;
        background: linear-gradient(#53595f, #627ea0);
      }

      .quick-info>.details>.top .desc .picker>.nav>svg {
        rotate: -90deg;
        width: 20px;
        height: 20px;
        stroke-width: 1.8;
      }

      .quick-info>.details>.actions {
        /* border: 1px solid red; */
        margin: 0 0 20px 0;
        display: flex;
        flex-flow: column;
      }

      .button-box {
        /* border: 1px solid red; */
        margin: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
      }

      .button-box .action.wish {
        border: 1px solid #fcdbb9;
        margin: -10px 0 0 0;
        cursor: pointer;
        color: #f68b1e;
        /* margin: 0; */
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
      }

      .button-box .action.wish:hover {
        background-color: #fcdbb9;
      }

      .button-box .action.wish:hover svg {
        fill: #f68b1e;
      }

      /* Btn Style One */
      .btn-style-one {
        border: none;
        width: 80%;
        position: relative;
        font-weight: 500;
        overflow: hidden;
        text-align: center;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 15px;
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

      /* Full Inf0 */
      .full-info {
        /* border-top: 1px solid #80808027; */
        padding: 30px 0 0 0;
        width: 100%;
        min-height: 50vh;
        display: flex;
        gap: 30px;
        align-items: start;
        justify-content: space-between;
      }


      .full-info>.main {
        /* border: 1px solid rgb(123, 255, 0); */
        width: calc(100% - 350px);
        display: flex;
        flex-flow: column;
        gap: 20px;
      }

      .full-info>.main * {
        transition: all 0.3s ease;
      }

      .full-info>.main ul.tab {
        height: max-content;
        width: 100%;
        border-bottom: 1px solid #80808027;
        background-color: var(--theme);
        padding: 22px 0 0 0;
        z-index: 5;
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 5px;
        align-items: center;
        position: sticky;
        top: 0;
        max-width: 100%;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .full-info>.main ul.tab::-webkit-scrollbar {
        display: none !important;
        visibility: hidden;
      }

      .full-info>.main ul.tab>li.tab-item {
        position: relative;
        color: #53595f;
        font-weight: 500;
        padding: 6px 10px 8px 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 1.05rem;
      }

      .full-info>.main ul.tab>li.tab-item:hover {
        color: var(--main-color);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      .full-info>.main ul.tab>li.active:hover {
        background-color: unset;
      }

      .full-info>.main ul.tab>li.active {
        font-size: 0.95rem;
        color: var(--main-color);
        padding: 6px 10px 10px 10px;
      }

      .full-info>.main ul.tab>li.active>.text {
        color: var(--main-color);
      }

      .full-info>.main ul.tab>li.active>span.line {
        position: absolute;
        background-color: var(--main-color);
        display: inline-block;
        bottom: 0;
        right: 0;
        left: 0;
        min-height: 4px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
      }

      .full-info>.main #description {
        /* border: 1px solid #808080; */
        display: flex;
        flex-flow: column;
        gap: 30px;
      }

      #description .specifications {
        /* border: 1px solid #8f1010; */
        display: flex;
        flex-flow: column;
        gap: 30px;
      }

      #description .title {
        /* border: 1px solid red; */
        position: relative;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: start;
        gap: 10px;
      }

      #description .title h2.name {
        font-size: 1.3rem;
        color: var(--color-two);
        /* letter-spacing: 1px; */
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 570;
      }

      #description .title span.line {
        position: absolute;
        bottom: -10px;
        display: inline-block;
        height: 4px;
        width: 25px;
        background-color: var(--color-two);
        opacity: .7;
        border-radius: 5px;
      }

      #description .specifications ul.spec-lists {
        /* border: 1px solid #8f1010; */
        margin: 10px 0 0 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-flow: column;
        justify-content: center;
        /* align-items: center; */
      }

      #description .specifications ul.spec-lists li.list {
        border-top: 1px solid #80808017;
        list-style-type: none;
        color: #404040;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap: 10px;
      }

      #description .specifications ul.spec-lists li.list:last-of-type {
        border-bottom: 1px solid #80808017;
      }

      #description .specifications ul.spec-lists li.list .key {
        border-right: 1px solid #80808017;
        padding: 10px 10px;
        width: 50%;
      }

      #description .specifications ul.spec-lists li.list .value {
        /* border-right: 1px solid #80808017; */
        padding: 10px 10px;
        /* width: 50%; */
      }

      #description .desc {
        /* border: 1px solid #8f1010; */
        display: flex;
        flex-flow: column;
        gap: 10px;
      }

      #description  .desc > .desc-lists {
        /* border: 1px solid #80808017; */
        display: flex;
        flex-flow: column;
        justify-content: center;
        gap: 0;
      }

      #description  .desc > .desc-lists p {
        color: #404040;
        line-height: 1.4;
        /* font-weight: 500; */
        font-size: 1rem;
      }


      #description  .reviews {
        /* border: 1px solid red; */
        display: flex;
        flex-flow: column;
        gap: 35px;
      }

      #reviews-container {
        /* border: 1px solid blueviolet; */
        display: flex;
        flex-flow: column;
        gap: 25px;
      }

      #reviews-container .stats {
        border-bottom: 1px solid #80808027;
        padding: 0 0 30px 0;
        display: flex;
        /* align-items: center; */
        gap: 20px;
      }

      #reviews-container .stats > .total {
        /* border: 1px solid rgb(226, 43, 43); */
        background-color: #f5f7fa;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 20px 20px;
        border-radius: 10px;
        /* width: 150px; */
        /* height: 150px; */
      }

      #reviews-container .stats > .total .of {
        /* border: 1px solid rgb(226, 43, 43); */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      #reviews-container .stats > .total > .of .score {
        font-size: 1.3rem;
        font-weight: 800;
        color: rgb(223, 121, 26);
      }

      #reviews-container .stats > .total > .of .of-total {
        font-size: 1.3rem;
        font-weight: 500;
        color: rgb(223, 121, 26);
      }


      #reviews-container .stats > .total > .of .slash {
        display: inline-block;
        width: 3px;
        height: 22px;
        border-radius: 5px;
        background-color: rgb(223, 121, 26);
        rotate: 15deg;
      }

      #reviews-container .stats > .total .stars {
        /* border: 1px solid rgb(226, 43, 43); */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }

      #reviews-container .stats > .total .stars svg {
        width: 20px;
        height: 20px;
        color: rgb(223, 121, 26);
        fill: rgb(223, 121, 26);
      }

      #reviews-container .stats > .total > p.text {
        font-size: 1rem;
        color: #404040;
        margin: 10px 0 0 0;
        font-weight: 500;
        line-height: 1.4;
      }

      #reviews-container .stats > .individual-scores {
        /* border: 1px solid red; */
        display: flex;
        flex-flow: column;
        gap: 2px;
        padding: 5px 0;
        justify-content: space-between;
      }

      #reviews-container .stats > .individual-scores span.score {
        /* border: 1px solid rgb(0, 0, 0); */
        color: #404040;
        font-weight: 500;
        display: flex;
        align-items: center;
        /* gap: 20px; */
      }

      #reviews-container .stats > .individual-scores span.score .no {
        /* border: 1px solid rgb(0, 0, 0); */
        display: inline-block;
        width: 20px;
        font-weight: 600;
        margin: 0;
      }

      #reviews-container .stats > .individual-scores span.score .numbers {
        /* border: 1px solid rgb(0, 0, 0); */
        display: inline-block;
        width: 40px;
        font-size: 0.9rem;
        margin: 0;
      }

      #reviews-container .stats > .individual-scores span.score .bar {
        /* border: 1px solid #80808020; */
        background-color: #f3f3f3;
        display: inline-block;
        width: 150px;
        height: 8px;
        margin: 0;
        border-radius: 50px;
        display: flex;
      }

      #reviews-container .stats > .individual-scores span.score .bar .progress {
        /* border: 1px solid #80808027; */
        display: inline-block;
        width: 45%;
        height: 100%;
        border-radius: 50px;
        background: rgb(223, 121, 26);
        background: linear-gradient(0deg,
            rgb(223, 121, 26) 0%,
            rgb(240, 156, 78) 100%);
        background-color: rgb(247, 145, 162);
      }

      #reviews-container .stats > .individual-scores span.score.five .bar .progress {
        /* border: 1px solid #80808027; */
        display: inline-block;
        width: 55%;
      }

      #reviews-container .stats > .individual-scores span.score.four .bar .progress {
        /* border: 1px solid #80808027; */
        display: inline-block;
        width: 30%;
      }

      #reviews-container .stats > .individual-scores span.score.three .bar .progress {
        /* border: 1px solid #80808027; */
        display: inline-block;
        width: 20%;
      }

      #reviews-container .stats > .individual-scores span.score.two .bar .progress {
        /* border: 1px solid #80808027; */
        display: inline-block;
        width: 15%;
      }

      #reviews-container .stats > .individual-scores span.score.one .bar .progress {
        /* border: 1px solid #80808027; */
        display: inline-block;
        width: 5%;
      }

      #reviews-container .user-reveiws {
        /* border: 1px solid #555555f3; */
        padding: 0 0 30px 0;
        display: flex;
        flex-flow: column;
        gap: 30px;
      }

      #reviews-container .user-reveiws .review {
        /* border: 1px solid #f31717f3; */
        display: flex;
        flex-flow: column;
        gap: 0;
      }

      #reviews-container .user-reveiws .review .stars {
        /* border: 1px solid rgb(226, 43, 43); */
        display: flex;
        gap: 5px;
      }

      #reviews-container .user-reveiws .review .stars svg {
        width: 20px;
        height: 20px;
        color: rgb(223, 121, 26);
        fill: rgb(223, 121, 26);
      }

      #reviews-container .user-reveiws .review .stars svg path {
        stroke: none;
        stroke-width: 0;
      }

      #reviews-container .user-reveiws .review  h4.title{
        /* border: 1px solid #f31717f3; */
        font-size: 1.1rem;
        font-weight: 500;
        color: #404040;
        margin: 10px 0 0 0;
        display: flex;
        align-items: start;
        flex-flow: column;
        gap: 0;
      }

      #reviews-container .user-reveiws .review  p.content {
        /* border: 1px solid #f31717f3; */
        font-size: 1rem;
        font-weight: 400;
        color: #404040;
        line-height: 1.4;
        margin: 10px 0 0 0;
        gap: 0;
      }

      #reviews-container .user-reveiws .review  span.footer {
        /* border: 1px solid #f31717f3; */
        /* font-size: 1.1rem; */
        margin: 10px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
      }

      #reviews-container .user-reveiws .review  span.footer span.left {
        /* border: 1px solid #f31717f3; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        color: #606060;
        font-size: 0.9rem;
      }

      #reviews-container .user-reveiws .review  span.footer span.right {
        /* border: 1px solid #f31717f3; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        color: var(--main-color);
      }

      #reviews-container .user-reveiws .review  span.footer span.right svg {
        width: 20px;
        height: 20px;
        margin: 3px 0 0 0;
      }

      #reviews-container .user-reveiws .actions {
        /* border: 1px solid rgb(156, 156, 156); */
        margin: 30px 0 0 0;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 0;
      }

      #reviews-container .user-reveiws .actions>.action {
        /* border: 1px solid rgb(156, 156, 156); */
        padding: 10px 15px;
        text-decoration: none;
        font-family: var(--font-alt);
        font-size: 1.1rem;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s linear;
      }

      #reviews-container .user-reveiws .actions>.explore {
        border: 1px solid #8080805d;
        background-color: #ffffff1f;
        backdrop-filter: blur(84px);
        -webkit-backdrop-filter: blur(84px);
        box-shadow: 8px 8px 100px 0px rgba(42, 67, 113, 0.158);
        color: var(--color-two);
      }


      #reviews-container .user-reveiws .action>.explore svg path {
        fill: #fafafa;
      }

      #reviews-container .user-reveiws .actions>.action svg {
        transition: all 0.3s linear;
      }

      #reviews-container .user-reveiws .text .actions>.action:hover {
        padding: 10px 20px;
        gap: 15px;
      }

      /* Side Tab */

      .full-info .side-tab {
        /* border: 1px solid rgb(123, 255, 0); */
        padding: 22px 0 0 0;
        width: 300px;
        display: flex;
        flex-flow: column;
        /* gap: 10px; */
      }

      .full-info .side-tab .title {
        border-bottom: 1px solid #80808027;
        /* background-color: hsl(0, 0%, 98%); */
        padding: 5px 0 3px 5px;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: start;
        gap: 10px;
      }

      .full-info .side-tab > .title h2.name {
        font-size: 1.3rem;
        color: var(--color-two);
        /* letter-spacing: 1px; */
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 570;
      }

      .full-info .side-tab .store {
        /* border: 1px solid red; */
        margin: 10px 0 0 0;
        display: flex;
        flex-flow: column;
      }

      .full-info .side-tab .store h2.store-name {
        font-size: 1.2rem;
        color: #404040;
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 570;
      }

      .full-info .side-tab .store p.info {
        font-size: 1rem;
        color: #404040;
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 400;
      }

      .full-info .side-tab .contact {
        /* border: 1px solid red; */
        margin: 20px 0 0 0;
        display: flex;
        flex-flow: column;
      }

      .full-info .side-tab .contact h2 {
        font-size: 1.1rem;
        color: #404040;
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 570;
      }

      .full-info .side-tab .contact .contact-details {
        /* border: 1px solid red; */
        margin: 10px 0 0 0;
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: center;
        gap: 10px;
      }

      .full-info .side-tab .contact .contact-details a {
        border: 1px solid #80808020;
        text-decoration: none;
        padding: 5px 10px 5.5px 15px;
        color: #606060;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        width: 150px;
        gap: 10px;
        border-radius: 50px;
      }

      .full-info .side-tab .contact .contact-details a:hover {
        color: var(--main-color);
      }

      .full-info .side-tab .share{
        /* border: 1px solid red; */
        margin: 20px 0 0 0;
        display: flex;
        flex-flow: column;
      }

      .full-info .side-tab .share h2 {
        font-size: 1.2rem;
        color: #404040;
        margin: 0;
        padding: 0;
        line-height: 1.4;
        font-weight: 500;
      }

      .full-info .side-tab .share .socials {
        /* border: 1px solid red; */
        margin: 10px 0 0 0;
        display: flex;
        align-items: start;
        /* justify-content: center; */
        gap: 10px;
      }

      .full-info .side-tab .share .socials a {
        text-decoration: none;
        color: #606060;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .full-info .side-tab .share .socials a:hover {
        color: var(--color-two);
      }

      
    </style>
    `
  }
}