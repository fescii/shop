export default class StatContainer extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();
  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
    // this.innerHTML = this.getTemplate();
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
      <div class="top">
        <h1 class="number">${this.getAttribute('items')}</h1>
        <div class="other">
          <p class="name">Products</p>
          <span class="text">Ordered since <i>${this.getAttribute('date')}</i></span>
        </div>
      </div>
      <div class="body">
        <div class="left">
          <div class="head">
            <h3 class="title">Orders</h3>
            <span class="total">${this.getAttribute('items')} Products</span>
          </div>
          ${this.getCards()}
        </div>
        <div class="right">
          ${this.getAnalytics()}
        </div>
      </div>
    `
  }

  getCards() {
    return `
      <div class="cards">
        <div class="card completed">
          <span class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0905 9.09687C16.3834 9.38976 16.3834 9.86463 16.0905 10.1575L11.3445 14.9035C11.0517 15.1964 10.5769 15.1964 10.284 14.9036L7.90997 12.5306C7.61701 12.2378 7.61691 11.7629 7.90974 11.47C8.20258 11.177 8.67745 11.1769 8.9704 11.4698L10.8141 13.3126L15.0299 9.09687C15.3227 8.80397 15.7976 8.80397 16.0905 9.09687Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24305 4.24354C5.91083 2.57576 8.48966 2.00024 11.9998 2.00024C15.5099 2.00024 18.0887 2.57576 19.7565 4.24354C21.4242 5.91132 21.9998 8.49015 21.9998 12.0002C21.9998 15.5103 21.4242 18.0892 19.7565 19.7569C18.0887 21.4247 15.5099 22.0002 11.9998 22.0002C8.48966 22.0002 5.91083 21.4247 4.24305 19.7569C2.57527 18.0892 1.99976 15.5103 1.99976 12.0002C1.99976 8.49015 2.57527 5.91132 4.24305 4.24354ZM5.30371 5.3042C4.08074 6.52717 3.49976 8.57334 3.49976 12.0002C3.49976 15.4271 4.08074 17.4733 5.30371 18.6963C6.52668 19.9193 8.57285 20.5002 11.9998 20.5002C15.4267 20.5002 17.4728 19.9193 18.6958 18.6963C19.9188 17.4733 20.4998 15.4271 20.4998 12.0002C20.4998 8.57334 19.9188 6.52717 18.6958 5.3042C17.4728 4.08123 15.4267 3.50024 11.9998 3.50024C8.57285 3.50024 6.52668 4.08123 5.30371 5.3042Z" fill="black"/>
            </svg>
          </span>
          <p class="title">Completed</p>
          <div class="date">
            <span class="no">${this.getAttribute('completed')}</span>
            <span class="date">${this.getAttribute('date')}</span>
          </div>
        </div>
        <div class="card upcoming">
          <span class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.24342 4.24354C5.91119 2.57576 8.49002 2.00024 12.0001 2.00024C15.5102 2.00024 18.0891 2.57576 19.7568 4.24354C21.4246 5.91132 22.0001 8.49015 22.0001 12.0002C22.0001 15.5103 21.4246 18.0892 19.7568 19.7569C18.0891 21.4247 15.5102 22.0002 12.0001 22.0002C8.49002 22.0002 5.91119 21.4247 4.24342 19.7569C2.57564 18.0892 2.00012 15.5103 2.00012 12.0002C2.00012 8.49015 2.57564 5.91132 4.24342 4.24354ZM5.30408 5.3042C4.0811 6.52717 3.50012 8.57334 3.50012 12.0002C3.50012 15.4271 4.0811 17.4733 5.30408 18.6963C6.52705 19.9193 8.57322 20.5002 12.0001 20.5002C15.427 20.5002 17.4732 19.9193 18.6962 18.6963C19.9191 17.4733 20.5001 15.4271 20.5001 12.0002C20.5001 8.57334 19.9191 6.52717 18.6962 5.3042C17.4732 4.08123 15.427 3.50024 12.0001 3.50024C8.57322 3.50024 6.52705 4.08123 5.30408 5.3042Z"
                fill="currentColor" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.9993 6.88428C12.4135 6.88428 12.7493 7.22006 12.7493 7.63428V11.5694L15.7745 13.3742C16.1302 13.5864 16.2466 14.0468 16.0344 14.4025C15.8221 14.7582 15.3617 14.8746 15.006 14.6624L11.615 12.6394C11.3882 12.504 11.2493 12.2594 11.2493 11.9953V7.63428C11.2493 7.22006 11.5851 6.88428 11.9993 6.88428Z"
                fill="currentColor" />
            </svg>
          </span>
          <p class="title">Pending</p>
          <div class="date">
            <span class="no">${this.getAttribute('pending')}</span>
            <span class="date">${this.getAttribute('date')}</span>
          </div>
        </div>
        <div class="card cancelled">
          <span class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9244 9.06464C15.2173 9.35753 15.2173 9.83241 14.9244 10.1253L10.1324 14.9173C9.83949 15.2102 9.36461 15.2102 9.07172 14.9173C8.77883 14.6244 8.77883 14.1495 9.07172 13.8566L13.8637 9.06464C14.1566 8.77175 14.6315 8.77175 14.9244 9.06464Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06952 9.06293C9.36242 8.77004 9.83729 8.77004 10.1302 9.06293L14.9302 13.8629C15.2231 14.1558 15.2231 14.6307 14.9302 14.9236C14.6373 15.2165 14.1624 15.2165 13.8695 14.9236L9.06952 10.1236C8.77663 9.8307 8.77663 9.35582 9.06952 9.06293Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24329 4.24354C5.91107 2.57576 8.4899 2.00024 12 2.00024C15.5101 2.00024 18.0889 2.57576 19.7567 4.24354C21.4245 5.91132 22 8.49015 22 12.0002C22 15.5103 21.4245 18.0892 19.7567 19.7569C18.0889 21.4247 15.5101 22.0002 12 22.0002C8.4899 22.0002 5.91107 21.4247 4.24329 19.7569C2.57552 18.0892 2 15.5103 2 12.0002C2 8.49015 2.57552 5.91132 4.24329 4.24354ZM5.30396 5.3042C4.08098 6.52717 3.5 8.57334 3.5 12.0002C3.5 15.4271 4.08098 17.4733 5.30396 18.6963C6.52693 19.9193 8.5731 20.5002 12 20.5002C15.4269 20.5002 17.4731 19.9193 18.696 18.6963C19.919 17.4733 20.5 15.4271 20.5 12.0002C20.5 8.57334 19.919 6.52717 18.696 5.3042C17.4731 4.08123 15.4269 3.50024 12 3.50024C8.5731 3.50024 6.52693 4.08123 5.30396 5.3042Z" fill="black"/>
            </svg>
          </span>
          <p class="title">Cancelled</p>
          <div class="date">
            <span class="no">${this.getAttribute('cancelled')}</span>
            <span class="date">${this.getAttribute('date')}</span>
          </div>
        </div>
      </div>
    `
  }

  getAnalytics(){
    return `
      <div class="analytic">
        <span class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58012 12.0259H9.61012C12.4301 12.0259 14.7241 9.73187 14.7241 6.91087C14.7241 4.09087 12.4301 1.79688 9.61012 1.79688C6.79112 1.79688 4.49712 4.09088 4.49712 6.90788C4.49112 8.27087 5.01712 9.55287 5.97712 10.5199C6.93612 11.4849 8.21512 12.0209 9.58012 12.0259ZM5.99712 6.91088C5.99712 4.91788 7.61812 3.29688 9.61012 3.29688C11.6031 3.29688 13.2241 4.91788 13.2241 6.91088C13.2241 8.90388 11.6031 10.5259 9.61012 10.5259H9.58312C8.62112 10.5219 7.71812 10.1449 7.04212 9.46187C6.36412 8.77987 5.99312 7.87488 5.99712 6.91088Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05078 18.6743C2.05078 22.2033 7.54278 22.2033 9.60978 22.2033C11.4788 22.2033 17.1688 22.2033 17.1688 18.6543C17.1688 15.9673 13.7078 13.6963 9.60978 13.6963C5.51178 13.6963 2.05078 15.9753 2.05078 18.6743ZM3.55078 18.6743C3.55078 17.0323 6.14178 15.1963 9.60978 15.1963C13.0778 15.1963 15.6688 17.0213 15.6688 18.6543C15.6688 20.3473 12.3738 20.7033 9.60978 20.7033C5.58878 20.7033 3.55078 20.0203 3.55078 18.6743Z" fill="black"/>
            <path d="M16.8532 10.8261C16.5212 10.8261 16.2182 10.6051 16.1282 10.2691C16.0222 9.86909 16.2592 9.45909 16.6602 9.35109C17.7672 9.05509 18.5402 8.04809 18.5402 6.90009C18.5412 5.70009 17.6902 4.65409 16.5162 4.41309C16.1102 4.33009 15.8482 3.93309 15.9322 3.52809C16.0142 3.12209 16.4102 2.85609 16.8172 2.94409C18.6862 3.32809 20.0412 4.99209 20.0412 6.90009C20.0412 8.72509 18.8092 10.3301 17.0462 10.8011C16.9822 10.8181 16.9162 10.8261 16.8532 10.8261Z" fill="black"/>
            <path d="M18.9932 18.0196C19.0742 18.3646 19.3822 18.5976 19.7222 18.5976C19.7792 18.5976 19.8372 18.5916 19.8952 18.5776C21.0842 18.2976 21.9492 17.2986 21.9492 16.2016C21.9492 14.4746 19.8342 12.9016 17.5122 12.9016C17.0982 12.9016 16.7622 13.2376 16.7622 13.6516C16.7622 14.0656 17.0982 14.4016 17.5122 14.4016C19.1332 14.4016 20.4492 15.4916 20.4492 16.2016C20.4492 16.5486 20.1132 16.9856 19.5512 17.1176C19.1482 17.2116 18.8982 17.6166 18.9932 18.0196Z" fill="black"/>
          </svg>
        </span>
        <div class="data">
          <p class="no">${this.getAttribute('visitors')}</p>
          <span class="info">Total visitors</span>
        </div>
      </div>
      <div class="analytic">
        <span class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7124 9.27218C17.0398 9.52588 17.0996 9.99698 16.8459 10.3244L13.9169 14.1044C13.7945 14.2623 13.6143 14.3648 13.4161 14.3894C13.2178 14.4139 13.018 14.3583 12.8609 14.235L10.0426 12.0225L7.51139 15.3114C7.25876 15.6397 6.78786 15.701 6.45961 15.4484C6.13135 15.1958 6.07004 14.7249 6.32267 14.3966L9.31567 10.5076C9.43775 10.349 9.61816 10.2457 9.81677 10.2208C10.0154 10.196 10.2157 10.2515 10.3731 10.3751L13.1935 12.589L15.6602 9.40565C15.9139 9.07822 16.385 9.01847 16.7124 9.27218Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6671 3.1001C19.0193 3.1001 18.4951 3.62431 18.4951 4.2721C18.4951 4.91914 19.0196 5.4441 19.6671 5.4441C20.3146 5.4441 20.8391 4.91914 20.8391 4.2721C20.8391 3.62431 20.3149 3.1001 19.6671 3.1001ZM16.9951 4.2721C16.9951 2.79588 18.1909 1.6001 19.6671 1.6001C21.1433 1.6001 22.3391 2.79588 22.3391 4.2721C22.3391 5.74706 21.1436 6.9441 19.6671 6.9441C18.1906 6.9441 16.9951 5.74706 16.9951 4.2721Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00342 5.60706C3.78045 6.83003 3.19946 8.8762 3.19946 12.3031C3.19946 15.7305 3.78046 17.7767 5.0034 18.9995C6.22635 20.2223 8.2725 20.8031 11.6995 20.8031C15.127 20.8031 17.1731 20.2223 18.3959 18.9995C19.6187 17.7767 20.1995 15.7306 20.1995 12.3031C20.1995 11.1974 20.1397 10.228 20.0136 9.37934C19.9527 8.96963 20.2355 8.58813 20.6452 8.52725C21.0549 8.46636 21.4364 8.74914 21.4973 9.15886C21.6372 10.1002 21.6995 11.1468 21.6995 12.3031C21.6995 15.8136 21.1242 18.3925 19.4565 20.0602C17.7889 21.7279 15.21 22.3031 11.6995 22.3031C8.18943 22.3031 5.61058 21.7279 3.94278 20.0602C2.27497 18.3925 1.69946 15.8137 1.69946 12.3031C1.69946 8.793 2.27498 6.21417 3.94276 4.5464C5.61054 2.87862 8.18936 2.3031 11.6995 2.3031C12.8345 2.3031 13.8631 2.36333 14.7902 2.49788C15.2001 2.55737 15.4842 2.9379 15.4247 3.34782C15.3652 3.75774 14.9847 4.04181 14.5747 3.98233C13.7379 3.86087 12.7844 3.8031 11.6995 3.8031C8.27256 3.8031 6.22639 4.38408 5.00342 5.60706Z" fill="black"/>
          </svg>
        </span>
        <div class="data">
          <p class="no">${this.getAttribute('interactions')}</p>
          <span class="info">New interactions</span>
        </div>
      </div>
      <div class="analytic">
        <span class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.48315 9.51111C7.89737 9.51111 8.23315 9.84689 8.23315 10.2611V16.9548C8.23315 17.369 7.89737 17.7048 7.48315 17.7048C7.06894 17.7048 6.73315 17.369 6.73315 16.9548V10.2611C6.73315 9.84689 7.06894 9.51111 7.48315 9.51111Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0369 6.3075C12.4511 6.3075 12.7869 6.64328 12.7869 7.0575V16.9554C12.7869 17.3696 12.4511 17.7054 12.0369 17.7054C11.6227 17.7054 11.2869 17.3696 11.2869 16.9554V7.0575C11.2869 6.64328 11.6227 6.3075 12.0369 6.3075Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5157 13.0483C16.93 13.0483 17.2657 13.3841 17.2657 13.7983V16.9552C17.2657 17.3694 16.93 17.7052 16.5157 17.7052C16.1015 17.7052 15.7657 17.3694 15.7657 16.9552V13.7983C15.7657 13.3841 16.1015 13.0483 16.5157 13.0483Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96051 4.96063C3.66147 6.25968 3.05005 8.42756 3.05005 12.037C3.05005 15.6465 3.66147 17.8143 4.96051 19.1134C6.25956 20.4124 8.42744 21.0239 12.0369 21.0239C15.6463 21.0239 17.8142 20.4124 19.1133 19.1134C20.4123 17.8143 21.0237 15.6465 21.0237 12.037C21.0237 8.42756 20.4123 6.25968 19.1133 4.96063C17.8142 3.66159 15.6463 3.05017 12.0369 3.05017C8.42744 3.05017 6.25956 3.66159 4.96051 4.96063ZM3.89985 3.89997C5.6437 2.15612 8.34424 1.55017 12.0369 1.55017C15.7295 1.55017 18.4301 2.15612 20.1739 3.89997C21.9178 5.64382 22.5237 8.34436 22.5237 12.037C22.5237 15.7297 21.9178 18.4302 20.1739 20.1741C18.4301 21.9179 15.7295 22.5239 12.0369 22.5239C8.34424 22.5239 5.6437 21.9179 3.89985 20.1741C2.156 18.4302 1.55005 15.7297 1.55005 12.037C1.55005 8.34436 2.156 5.64382 3.89985 3.89997Z" fill="black"/>
          </svg>
        </span>
        <div class="data">
          <p class="no">${this.getAttribute('visitors')}</p>
          <span class="info">New visitors</span>
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

      :host {
        /*border: 1px solid #808080;*/
        width: 100%;
        min-height: 85vh;
        height: max-content;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 35px;
      }

      .top {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
      }

      .top {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }

      .top h1.number {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 0;
        font-family: var(--font-alt);
        font-size: 4rem;
        color: transparent;
        background:  rgb(223, 121, 26);
        background: linear-gradient(0deg, rgb(223, 121, 26) 0%, rgb(240, 156, 78) 100%);
        background-color: rgb(247, 145, 162);
        background-clip: text;
        -webkit-background-clip: text;
      }

      .top > .other {
        /* border: 1px solid #808080; */
        margin: 0;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        justify-content: center;
        gap: 0;
      }

      .top .other p {
        border-bottom: 2px solid  rgba(223, 121, 26, 0.63);
        margin: 0;
        width: calc(100% + 20px);
        padding: 5px 0;
        font-family: var(--font-alt);
        font-size: 1.6rem;text-align: center;
        font-weight: 500;
        color: #404040;
      }

      .top .other span.text {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 5px 0;
        font-family: var(--font-alt);
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        color: #808080;
      }

      .body {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
      }

      .body > .left {
        border: 1px solid #80808017;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0;
        border-radius: 20px;
        padding: 20px 25px;
        background: #fff;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-image: none;
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.034);
        /* border-radius: 15px; */
      }

      .body > .left .head {
        /* border: 1px solid #c72828; */
        padding: 0;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
      }

      .body > .left .head h3 {
        /* border: 1px solid #808080; */
        margin: 0;
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 500;
        color: #404040;
      }

      .body > .left .head span.total {
        /* border: 1px solid #808080; */
        margin: 0;
        font-family: var(--font-alt);
        font-size: 0.93rem;
        /* font-weight: 500; */
        color: #808080;
      }

      .body > .left .cards {
        /* border: 1px solid #c72828; */
        padding: 25px 0 0 0;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 25px;
      }

      .body > .left .cards > .card {
        border: 1px solid #e7e7e7;
        padding: 15px 20px;
        display: flex;
        width: 150px;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 20px;
      }

      .body > .left .cards > .card .logo {
        /* border: 1px solid #80e280; */
        padding: 0;
        margin: 0 0 15px 0;
        width: 50px;
        height: 50px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
      }

      .body > .left .cards > .card .logo > svg {
        width: 30px;
        height: 30px;
      }

      .body > .left .cards > .card.completed .logo {
        background-color: #099eef18;
      }

      .body > .left .cards > .card.completed .logo svg path {
        fill: #08b86f;
      }

      .body > .left .cards > .card.upcoming .logo {
        background-color: #ffcc004c;
      }

      .body > .left .cards > .card.upcoming .logo svg path {
        fill: #ff9500;
      }

      .body > .left .cards > .card.cancelled .logo {
        background-color: #fb482c19;
      }

      .body > .left .cards > .card.cancelled .logo svg path {
        fill: #f84125;
      }

      .body > .left .cards > .card p.title {
        margin: 0;
        font-family: var(--font-alt);
        font-size: 1rem;
        letter-height: 1.4;
        font-weight: 500;
        color: #404040;
      }

      .body > .left .cards > .card > .date {
        margin: 3px 0 0 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .body > .left .cards > .card > .date .no {
        border-right: 1px solid #80808087;
        font-family: var(--font-alt);
        line-height: 1;
        font-size: 0.9rem;
        padding: 0 8px 0 0;
        /* font-weight: 500; */
        color: #808080;
      }

      .body > .left .cards > .card > .date .date {
        font-family: var(--font-alt);
        font-size: 0.8rem;
        padding: 0 0 0 8px;
        /* font-weight: 500; */
        color: #808080;
      }

      .body > .right {
        /* border: 1px solid #808080; */
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
      }

      .body > .right .analytic{
        border: 1px solid #80808027;
        display: flex;
        width: 300px;
        /* flex-flow: column; */
        align-items: center;
        justify-content: start;
        gap: 20px;
        border-radius: 15px;
        padding: 15px 20px;
        background: #fff;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-image: none;
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.034);
        /* border-radius: 15px; */
      }

      .body > .right .analytic > .data {
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: center;
        gap: 0;
      }

      .body > .right .analytic > .data  p{
        margin: 0;
        color: #404040;
        font-family: var(--font-alt);
        font-weight: 500;
      }

      .body > .right .analytic > .data  span{
        margin: 0;
        color: #808080;
        font-family: var(--font-alt);
        font-size: 0.9rem;
      }

      .body > .right .analytic > .icon {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0;
      }

      .body > .right .analytic > .icon svg {
        width: 26px;
        height: 26px;
      }

      .body > .right .analytic > .icon svg path {
        fill: #404040;
      }

    </style>
    `
  }
}