export default class ScheduleItem extends HTMLElement {
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

    this.editSchedule()
  }


  editSchedule(){
    const modalContainer = document.querySelector('body > section#modal')
    const button = this.shadowObj.querySelector('.options > .option.edit')

    const modal = `
      <modal-schedule url="some-url" edit="true" date="${button.dataset.date}" photographers="${this.getAttribute('photographers')}">
      </modal-schedule>
    `

    if (modalContainer && button) {
      button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()

        // body.insertAdjacentElement('beforeend', element)
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
      <div class="details">
        <span class="item name">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9617 11.8921H11.9927C14.8247 11.8921 17.1287 9.58814 17.1287 6.75614C17.1287 3.92414 14.8247 1.61914 11.9927 1.61914C9.15975 1.61914 6.85575 3.92414 6.85575 6.75314C6.85075 8.12214 7.37975 9.41014 8.34375 10.3811C9.30675 11.3511 10.5917 11.8881 11.9617 11.8921ZM8.35575 6.75614C8.35575 4.75114 9.98775 3.11914 11.9927 3.11914C13.9977 3.11914 15.6287 4.75114 15.6287 6.75614C15.6287 8.76114 13.9977 10.3921 11.9927 10.3921H11.9647C10.9967 10.3901 10.0897 10.0101 9.40775 9.32314C8.72575 8.63714 8.35275 7.72614 8.35575 6.75614Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40552 18.7561C4.40552 22.3811 10.1215 22.3811 11.9995 22.3811C13.8775 22.3811 19.5945 22.3811 19.5945 18.7341C19.5945 15.9411 16.1165 13.5811 11.9995 13.5811C7.88352 13.5811 4.40552 15.9511 4.40552 18.7561ZM5.90552 18.7561C5.90552 17.0211 8.51152 15.0811 11.9995 15.0811C15.4885 15.0811 18.0945 17.0101 18.0945 18.7341C18.0945 20.1581 16.0435 20.8811 11.9995 20.8811C7.95652 20.8811 5.90552 20.1661 5.90552 18.7561Z" fill="currentColor"/>
          </svg>
          <span class="text">Fredrick Ochieng</span>
        </span>
        <span class="item phone">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25917 3.23499C6.17317 3.23499 6.08617 3.24299 5.99817 3.25699C4.88017 3.44599 3.87317 4.74999 3.66517 5.08899C2.62317 6.55399 3.43717 9.95099 8.73917 15.254C14.0432 20.557 17.4402 21.369 18.8512 20.364C19.2452 20.12 20.5472 19.117 20.7362 17.997C20.8182 17.51 20.6732 17.048 20.2942 16.586C18.0772 13.894 17.3752 14.235 16.4082 14.706C14.9522 15.416 13.5302 15.789 10.8672 13.127C8.20818 10.466 8.57917 9.04399 9.28817 7.58699C9.76017 6.61799 10.1012 5.91799 7.40617 3.69799C7.02917 3.38799 6.65118 3.23499 6.25917 3.23499ZM17.5122 22.264C15.5302 22.264 12.3922 21.028 7.67917 16.314C0.641174 9.27699 1.35517 5.74999 2.40717 4.27299C2.40517 4.27299 3.72917 2.15599 5.69217 1.78899C6.62617 1.61499 7.54517 1.87399 8.35917 2.53899C11.7012 5.29299 11.3912 6.69499 10.6372 8.24299C10.1742 9.19399 9.80818 9.94499 11.9282 12.066C14.0492 14.185 14.8012 13.823 15.7512 13.357C17.3002 12.604 18.7012 12.292 21.4532 15.633C22.1212 16.449 22.3812 17.374 22.2032 18.309C21.8262 20.301 19.6742 21.617 19.6532 21.629C19.1882 21.963 18.4902 22.264 17.5122 22.264Z" fill="currentColor"/>
          </svg>
          <span class="text">+254713253018</span>
        </span>
        <span class="item address">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.76025 10.7106C8.76025 8.9153 10.2151 7.46008 12.0097 7.46008C13.8052 7.46008 15.2603 8.91511 15.2603 10.7106C15.2603 12.5053 13.805 13.9601 12.0097 13.9601C10.2153 13.9601 8.76025 12.5051 8.76025 10.7106ZM12.0097 8.96008C11.0439 8.96008 10.2603 9.74333 10.2603 10.7106C10.2603 11.6766 11.0437 12.4601 12.0097 12.4601C12.977 12.4601 13.7603 11.6764 13.7603 10.7106C13.7603 9.74353 12.9768 8.96008 12.0097 8.96008Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 3.75012C8.28063 3.75012 5.25 6.80742 5.25 10.5988C5.25 13.0727 6.31773 15.5148 7.75334 17.3469C8.46835 18.2593 9.25791 18.9985 10.0196 19.5036C10.7928 20.0164 11.4786 20.2501 11.9995 20.2501C12.5207 20.2501 13.2068 20.0163 13.98 19.5036C14.7419 18.9984 15.5315 18.2593 16.2466 17.3468C17.6823 15.5148 18.75 13.0727 18.75 10.5988C18.75 6.80755 15.7185 3.75012 11.9995 3.75012ZM3.75 10.5988C3.75 5.99775 7.43357 2.25012 11.9995 2.25012C16.5653 2.25012 20.25 5.99762 20.25 10.5988C20.25 13.4848 19.017 16.2434 17.4272 18.2721C16.6295 19.29 15.7252 20.1462 14.809 20.7537C13.9041 21.3538 12.9278 21.7501 11.9995 21.7501C11.0714 21.7501 10.0953 21.3537 9.19058 20.7537C8.27446 20.1461 7.37027 19.2899 6.57265 18.272C4.98301 16.2434 3.75 13.4848 3.75 10.5988Z" fill="currentColor"/>
          </svg>
          <span class="text">Kajiado, Kitengela, Kitengela G4S,Pickup-G4S Paws</span>
        </span>
      </div>
      <span class="options">
        <span class="option edit" data-date="${this.getAttribute('date')}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.0001C4.617 22.0001 2 19.3831 2 12.0001C2 4.61712 4.617 2.00012 12 2.00012C12.414 2.00012 12.75 2.33612 12.75 2.75012C12.75 3.16412 12.414 3.50012 12 3.50012C5.486 3.50012 3.5 5.48612 3.5 12.0001C3.5 18.5141 5.486 20.5001 12 20.5001C18.514 20.5001 20.5 18.5141 20.5 12.0001C20.5 11.5861 20.836 11.2501 21.25 11.2501C21.664 11.2501 22 11.5861 22 12.0001C22 19.3831 19.383 22.0001 12 22.0001Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2365 9.38606L20.2952 8.19072C21.4472 6.88972 21.3252 4.89472 20.0252 3.74172C19.3952 3.18372 18.5812 2.90372 17.7452 2.95572C16.9052 3.00672 16.1352 3.38272 15.5772 4.01272L9.6932 10.6607C7.8692 12.7187 9.1172 15.4397 9.1712 15.5547C9.2602 15.7437 9.4242 15.8877 9.6232 15.9497C9.6802 15.9687 10.3442 16.1717 11.2192 16.1717C12.2042 16.1717 13.4572 15.9127 14.4092 14.8367L19.0774 9.56571C19.1082 9.54045 19.1374 9.51238 19.1646 9.4815C19.1915 9.45118 19.2155 9.41925 19.2365 9.38606ZM10.4082 14.5957C11.0352 14.7097 12.4192 14.8217 13.2862 13.8427L17.5371 9.04299L15.0656 6.85411L10.8172 11.6557C9.9292 12.6567 10.2122 13.9917 10.4082 14.5957ZM16.0596 5.73076L18.5322 7.91938L19.1722 7.19672C19.7752 6.51472 19.7122 5.46872 19.0312 4.86572C18.7002 4.57372 18.2712 4.42472 17.8362 4.45272C17.3962 4.48072 16.9932 4.67672 16.7002 5.00672L16.0596 5.73076Z" fill="black" />
          </svg>
          <span class="text">Edit</span>
        </span>
        <span class="option delete" data-date="${this.getAttribute('date')}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81166 5.77478C7.85456 5.07999 8.05238 4.08798 8.74916 3.28669C9.48616 2.43769 10.5802 2.00769 11.9992 2.00769C13.4192 2.00769 14.5122 2.43769 15.2502 3.28669C15.9468 4.08782 16.1443 5.07993 16.187 5.77478H20.0756C20.4896 5.77478 20.8256 6.11078 20.8256 6.52478C20.8256 6.93878 20.4896 7.27478 20.0756 7.27478H3.92456C3.51056 7.27478 3.17456 6.93878 3.17456 6.52478C3.17456 6.11078 3.51056 5.77478 3.92456 5.77478H7.81166ZM14.6842 5.77478C14.6464 5.32288 14.5136 4.72157 14.1122 4.26369C13.6722 3.76169 12.9612 3.50769 11.9992 3.50769C11.0382 3.50769 10.3272 3.76169 9.88616 4.26369C9.48476 4.72157 9.35218 5.32288 9.31447 5.77478H14.6842Z" fill="black" />
            <path d="M11.989 21.9925C9.03002 21.9925 7.20802 21.4795 6.08202 20.3315C4.49397 18.7125 4.54596 16.0587 4.6179 12.3871L4.61802 12.3805C4.63502 11.5195 4.65302 10.5935 4.65302 9.59753C4.65302 9.18353 4.98902 8.84753 5.40302 8.84753C5.81702 8.84753 6.15302 9.18353 6.15302 9.59753C6.15302 10.6035 6.13502 11.5405 6.11702 12.4105C6.05002 15.8435 6.00602 18.1105 7.15302 19.2805C7.96302 20.1075 9.50002 20.4925 11.989 20.4925C14.483 20.4925 16.023 20.1055 16.837 19.2765C17.991 18.0996 17.948 15.8188 17.883 12.3661L17.8812 12.2695C17.8657 11.4406 17.849 10.5496 17.849 9.59753C17.849 9.18353 18.185 8.84753 18.599 8.84753C19.013 8.84753 19.349 9.18353 19.349 9.59753C19.349 10.5765 19.366 11.4885 19.383 12.3375L19.3832 12.3452C19.4521 16.0352 19.5019 18.7027 17.907 20.3275C16.778 21.4785 14.952 21.9925 11.989 21.9925Z" fill="black" />
          </svg>
          <span class="text">Remove</span>
        </span>
      </span>
    `
  }

  getPhotographers(num){
    if (parseInt(num) > 1) {
      return `
        <span class="no">${this.getAttribute('photographers-no')}</span>
        <span class="text">Photographers are booked/occupied this day</span>
      `
    }
    else {
      return `
      <span class="no">${this.getAttribute('photographers-no')}</span>
      <span class="text">Photographer is booked/occupied this day</span>
    `
    }
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }

      :host {
        border: 1px solid #80808017;
        margin: 0;
        padding: 15px;
        max-width: 250px;
        display: flex;
        flex-flow: column;
        align-items: stretched;
        justify-content: start;
        gap: 20px;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-image: none;
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.034);
        border-radius: 15px;
      }

      * {
        font-family: var(--font-alt);
        color: #404040;
      }

      .details {
        /*border: 1px solid #808080;*/
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: center;
        gap: 5px;
      }

      .details > .item {
        /*border: 1px solid #808080;*/
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666666;
        font-size: 0.95rem;
      }

      .details > .item.address span {
        font-size: 0.8rem;
      }
      .details > .item svg {
        /*border: 1px solid #808080;*/
        width: 20px;
        color: #666666;
      }

      .details > .item.address svg {
        /*border: 1px solid #808080;*/
        min-width: 20px;
        color: #666666;
      }

      .options {
        display: flex;
        justify-content: space-between;
        gap: 30px;
      }

      .options >.option {
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

      .options > .option svg {
        width: 20px;
        height: 20px;
      }

      .options > .option svg path {
        fill: #666666;
      }
    </style>
    `
  }
}