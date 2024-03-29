export default class ScheduleContainer extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // let's create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();
  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

    this.openCreate()
  }

  openCreate(){
    const modalContainer = document.querySelector('body > section#modal')
    const button = this.shadowObj.querySelector('.header')

    const modal = `
      <modal-schedule url="some-url" edit="false" date="${button.dataset.dat}">
      </modal-schedule>
    `

    if (modalContainer && button) {
      button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()

        modalContainer.innerHTML = modal
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

  getBody() {
    return `
      ${this.getHeader()}
      <div id="content-container" class="content">
        ${this.getSchedules()}
      </div>
    `
  }

  getHeader() {
    return `
      <div class="header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"  viewBox="0 0 16 16">
          <path  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        <span class="text">Add Address</span>
      </div>
    `
  }

  getSchedules(){
    return `
      <schedule-item date-en="12 Sep, 2023" date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
      <schedule-item date-en="12 Sep, 2023"  date="2023-10-01"
        photographers="mathias,malcolm,femar" photographers-no="3"
      >
      </schedule-item>
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
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        /* align-items: center; */
        justify-content: center;
        gap: 10px;
      }

      .header {
        margin: 35px 0 0 0;
        background-color: rgba(20,167,62,1);
        padding: 7px 30px 8px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        gap: 5px;
        width: max-content;
        color: white;
        cursor: pointer;
      }

      .header > svg {
        /* border: 1px solid #80808017; */
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .header > span {
        font-family: var(--font-alt);
        font-weight: 400;
      }

      .content {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 20px 0;
        width: 100%;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        gap: 30px;
      }

      .content > .day {
        border: 1px solid #80808017;
        margin: 0;
        padding: 15px;
        max-width: 250px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: start;
        gap: 20px;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-image: none;
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.034);
        border-radius: 15px;
      }

      .content > .day * {
        font-family: var(--font-alt);
        color: #404040;
        text-align: center;
      }
      .content > .day .date {
        color: #808080;
        font-size: 0.95rem;
      }

      .content > .day .options {
        display: flex;
        gap: 30px;
      }

      .content > .day .options >.option {
        background-color: #f5f5f5;
        color: #666666;
        padding: 5px 15px 5px 10px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 0.9rem;
        border-radius: 50px;
        cursor: pointer;
      }

      .content > .day .options > .option svg {
        width: 20px;
        height: 20px;
      }

      .content > .day .options > .option svg path {
        fill: #666666;
      }
      
    </style>
    `
  }
}