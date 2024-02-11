export default class ScheduleModal extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();

    this.countiesData = {
      "Baringo": ["Baringo Central", "Baringo North", "Baringo South", "Eldama Ravine", "Mogotio", "Tiaty"],
      "Bomet": ["Bomet Central", "Bomet East", "Chepalungu", "Sotik"],
      "Bungoma": ["Bumula", "Bungoma East", "Bungoma North", "Bungoma South", "Bungoma West", "Cheptais", "Kanduyi", "Kimilili", "Mount Elgon", "Sirisia", "Tongaren"],
      "Busia": ["Budalang'i", "Bunyala", "Butula", "Nambale", "Samia"],
      "Elgeyo-Marakwet": ["Keiyo North", "Keiyo South", "Marakwet East", "Marakwet West"],
      "Embu": ["Manyatta", "Mbeere North", "Mbeere South", "Runyenjes"],
      "Garissa": ["Balambala", "Dadaab", "Fafi", "Garissa Township", "Hulugho", "Ijara"],
      "Homa Bay": ["Homa Bay Town", "Kasipul", "Kabondo Kasipul", "Karachuonyo", "Ndhiwa", "Rangwe", "Suba"],
      "Isiolo": ["Isiolo North", "Isiolo South"],
      "Kajiado": ["Kajiado Central", "Kajiado East", "Kajiado North", "Kajiado West"],
      "Kakamega": ["Butere", "Kakamega Central", "Kakamega East", "Kakamega North", "Kakamega South", "Lugari", "Malava", "Matungu", "Mumias East", "Mumias West"],
      "Kericho": ["Ainamoi", "Belgut", "Bureti", "Kipkelion East", "Kipkelion West"],
      "Kiambu": ["Gatundu North", "Gatundu South", "Juja", "Kabete", "Kiambaa", "Kiambu Town", "Kikuyu", "Lari", "Limuru", "Ruiru", "Thika"],
      "Kilifi": ["Ganze", "Kaloleni", "Kilifi North", "Kilifi South", "Magarini", "Malindi", "Rabai"],
      "Kirinyaga": ["Gichugu", "Kirinyaga Central", "Kirinyaga East", "Kirinyaga West", "Mwea"],
      "Kisii": ["Bobasi", "Bomachoge Borabu", "Bonchari", "Kitutu Chache North", "Kitutu Chache South", "Nyamache", "South Mugirango"],
      "Kisumu": ["Kisumu Central", "Kisumu East", "Kisumu West", "Seme", "Nyando", "Muhoroni", "Nyakach"],
      "Kitui": ["Kitui Central", "Kitui East", "Kitui Rural", "Kitui South", "Kitui West", "Mwingi Central", "Mwingi North", "Mwingi West"],
      "Kwale": ["Kinango", "Lunga Lunga", "Matuga"],
      "Laikipia": ["Laikipia East", "Laikipia North", "Laikipia West"],
      "Lamu": ["Lamu East", "Lamu West"],
      "Machakos": ["Athi River", "Kangundo", "Kathiani", "Machakos", "Masinga", "Matungulu", "Mavoko", "Mwala", "Yatta"],
      "Makueni": ["Kaiti", "Kibwezi East", "Kibwezi West", "Kilome", "Makueni", "Mbooni"],
      "Mandera": ["Banisa", "Lafey", "Mandera East", "Mandera North", "Mandera South", "Mandera West"],
      "Marsabit": ["Laisamis", "Marsabit Central", "Moyale", "North Horr", "Saku"],
      "Meru": ["Buuri", "Igembe Central", "Igembe North", "Igembe South", "Imenti Central", "Imenti North", "Imenti South", "Meru Central", "Meru South", "Tharaka"],
      "Migori": ["Kuria East", "Kuria West", "Migori", "Nyatike", "Rongo", "Suna East", "Suna West"],
      "Mombasa": ["Changamwe", "Jomvu", "Kisauni", "Likoni", "Mvita", "Nyali"],
      "Murang'a": ["Gatanga", "Kahuro", "Kandara", "Kangema", "Kigumo", "Kiharu", "Mathioya", "Murang'a South"],
      "Nairobi": ["Dagoretti", "Embakasi", "Kamukunji", "Kasarani", "Lang'ata", "Makadara", "Mathare", "Nairobi West"],
      "Nakuru": ["Gilgil", "Kuresoi North", "Kuresoi South", "Molo", "Naivasha", "Nakuru East", "Nakuru North", "Nakuru West", "Njoro", "Rongai", "Subukia"],
      "Nandi": ["Aldai", "Chesumei", "Emgwen", "Mosop", "Nandi Central", "Tinderet"],
      "Narok": ["Narok East", "Narok North", "Narok South", "Narok West", "Trans Mara East", "Trans Mara West"],
      "Nyamira": ["Borabu", "Manga", "Masaba North", "Masaba South", "Nyamira North", "Nyamira South"],
      "Nyandarua": ["Kipipiri", "Ndaragwa", "Ol Kalou"],
      "Nyeri": ["Kieni East", "Kieni West", "Mathira East", "Mathira West", "Mukurweini", "Nyeri South", "Tetu"],
      "Samburu": ["Samburu Central", "Samburu East", "Samburu North"],
      "Siaya": ["Alego Usonga", "Gem", "Rarieda", "Siaya", "Ugenya", "Ugunja"],
      "Taita-Taveta": ["Mwatate", "Taveta", "Voi"],
      "Tana River": ["Bura", "Garsen"],
      "Tharaka-Nithi": ["Chuka", "Igambang'ombe", "Maara", "Tharaka"],
      "Trans Nzoia": ["Cherang'any", "Endebess", "Kwanza", "Saboti", "Sirisia"],
      "Turkana": ["Loima", "Turkana Central", "Turkana East", "Turkana North", "Turkana South"],
      "Uasin Gishu": ["Ainabkoi", "Kapseret", "Kesses", "Moiben", "Soy", "Turbo"],
      "Vihiga": ["Emuhaya", "Hamisi", "Luanda", "Sabatia", "Vihiga"],
      "Wajir": ["Eldas", "Tarbaj", "Wajir East", "Wajir North", "Wajir South", "Wajir West"],
      "West Pokot": ["Kacheliba", "Pokot Central", "Pokot North", "Pokot South"],
    };

  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');
    this.disableScroll()
    this.populateCountiesDropdown()
    this.updateSubCounties()

    const exitModal = this.shadowObj.querySelector('#content .content-head > .actions > .control')
    const overlay = this.shadowObj.querySelector('div.overlay')
    if (exitModal) {
      exitModal.addEventListener('click', (e) => {
        e.preventDefault()
        this.remove()
      })
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        e.preventDefault()
        this.remove()
      })
    }

    this.activateContent()

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

  populateCountiesDropdown() {
    const countySelect = this.shadowObj.querySelector("section#content > .container > .fields  .field #county");
    const subCountySelect = this.shadowObj.querySelector("section#content > .container > .fields  .field #subCounty");
    for (let county in this.countiesData) {
      let option = document.createElement("option");
      option.value = county;
      option.text = county;
      countySelect.add(option);
    }

    let selectedCounty = countySelect.value;

    subCountySelect.innerHTML = "";

    this.countiesData[selectedCounty].forEach(subCounty => {
      let option = document.createElement("option");
      option.value = subCounty;
      option.text = subCounty;
      subCountySelect.add(option);
    });
  }

  updateSubCounties() {
    const self = this;
    const countySelect = this.shadowObj.querySelector("section#content > .container > .fields  .field #county");
    countySelect.addEventListener('change', e => {
      e.preventDefault()
      e.stopPropagation()

      const subCountySelect = this.shadowObj.querySelector("section#content > .container > .fields  .field #subCounty");
      let selectedCounty = countySelect.value;

      subCountySelect.innerHTML = "";

      self.countiesData[selectedCounty].forEach(subCounty => {
        let option = document.createElement("option");
        option.value = subCounty;
        option.text = subCounty;
        subCountySelect.add(option);
      });
    })
  }

  validateInputs(data, contentContainer) {
    data.UserData = {}
    const hideError = (element) => {
      setTimeout(() => {
        element.style.display = 'none'
      }, 2000);
    }

    const container = this.shadowObj.querySelector("section#content > .container > .fields")

    const inputs = container.querySelectorAll('.field input')
    if (inputs) {
      let next = true;
      inputs.forEach(input => {
        switch (input.dataset.type) {
          case 'name':
            if (input.value.length < 3) {
              next = false;
              const errSpan = input.parentElement.querySelector('.error')
              errSpan.style.display = 'flex'
              hideError(errSpan)
            }
            else {
              data.UserData[`${input.dataset.name}`] = input.value
            }
            break;
          case 'number':
            if (input.value.length < 9 || input.value.length > 10) {
              next = false;
              const errSpan = input.parentElement.parentElement.querySelector('.error')
              errSpan.style.display = 'flex'
              hideError(errSpan)
            }
            else if (input.value.length === 10 || input.value[0] === "0") {
              next = false;
              const errSpan = input.parentElement.parentElement.querySelector('.error')
              errSpan.textContent = "Don't start with 0, start with 7 or 1";
              errSpan.style.display = 'flex'
              hideError(errSpan)
            }
            else {
              data.UserData[`${input.dataset.name}`] = input.value
            }
          default:
            break;
        }
      });

      const countySelect = this.shadowObj.querySelector("section#content > .container > .fields  .field #county");
      const subCountySelect = this.shadowObj.querySelector("section#content > .container > .fields  .field #subCounty");

      if (countySelect.value.length < 1) {
        next = false;
        const errSpan = countySelect.parentElement.querySelector('.error')
        errSpan.style.display = 'flex'
        hideError(errSpan)
      }
      else {
        data.UserData[`${countySelect.dataset.name}`] = countySelect.value
      }

      if (subCountySelect.value.length < 1) {
        next = false;
        const errSpan = subCountySelect.parentElement.querySelector('.error')
        errSpan.style.display = 'flex'
        hideError(errSpan)
      }
      else {
        data.UserData[`${subCountySelect.dataset.name}`] = subCountySelect.value
      }

      if (next) {
        stepValue.textContent = 2;
        contentContainer.innerHTML = this.getStepTwo()
        this.activateStepTwo()
      }
    }
  }

  activateContent(){
    // console.log('Inside')
    const options = this.shadowObj.querySelectorAll("section#content > .container > .services > .options > .option")
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault()
        option.classList.toggle('selected')
      })
    });
  }

  getTemplate() {
    if (!this.shadowObj) {
      // The shadow DOM is not created yet, return an empty string or handle it as needed.
      return '';
    }
    // Show HTML Here
    return `
      <div class="overlay"></div>
      <section id="content" class="content">
        <div id="container" class="container">
          ${this.getForm()}
        </div>
        <div class="footer">
          <div class="action next">
            <span class="text">Save</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50076 19.7504C8.63076 19.7504 8.76176 19.7174 8.88176 19.6464C9.63576 19.1994 16.2498 15.1914 16.2498 12.0004C16.2498 8.81043 9.63676 4.80143 8.88176 4.35443C8.52676 4.14343 8.06476 4.26143 7.85476 4.61843C7.64375 4.97543 7.76176 5.43543 8.11776 5.64643C10.6818 7.16543 14.7498 10.2334 14.7498 12.0004C14.7498 13.7704 10.6818 16.8374 8.11776 18.3544C7.76176 18.5654 7.64375 19.0254 7.85476 19.3824C7.99476 19.6184 8.24376 19.7504 8.50076 19.7504Z" fill="black"/>
            </svg>
          </div>
        </div>
      </section>
      ${this.getStyles()}
    `
  }


  getForm() {
    return `
      <div class="head">
        <h2 class="step-title">Your Information</h2>
        <p class="description">
          Please fill in the informatiom about your delivery address.
        </p>
      </div>
      <form class="fields">
        <div class="field name">
          <div class="input-group">
            <label for="firstname">First Name</label>
            <input data-name="first_name" data-type="name" type="text" name="firstname" id="firstname" placeholder="Your first name" required>
            <span class="error">Name is required</span>
          </div>
          <div class="input-group">
            <label for="lastname">Last Name</label>
            <input data-name="last_name"  data-type="name" type="text" name="lastname" id="lastname" placeholder="Your last name" required>
            <span class="error">Name is required</span>
          </div>
        </div>
        <div class="field contact">
          <div class="input-group">
            <label for="phone">Phone Number</label>
            <span class="wrapper">
              <span class="country">+254</span>
              <input data-name="phone"  data-type="number" type="text" name="number" id="number" placeholder="Phone number" required>
            </span>
            <span class="error">Phone is required</span>
          </div>
          <div class="input-group">
            <label for="email">Email</label>
            <input data-name="email" data-type="name" type="email" name="email" id="email" placeholder="Your email" required>
            <span class="error">Email is required</span>
          </div>
        </div>
        <div class="field location">
          <div class="input-group">
            <label for="county">County</label>
            <select data-name="county" id="county">
                <!-- Counties dropdown will be populated dynamically -->
            </select>
            <span class="error">County is required</span>
          </div>
          <div class="input-group">
            <label for="subCounty">Sub-County</label>
            <select data-name="sub_county" id="subCounty"></select>
            <span class="error">Sub-County is required</span>
          </div>
        </div>
        <div class="field address">
          <div class="input-group">
            <label for="postal">Address/Postal</label>
            <input data-name="address" data-type="name" type="text" name="postal" id="postal" placeholder="Address/Postal Code/Town/Apartment" required>
            <span class="error">Address/Postal is required</span>
          </div>
        </div>
      </form>
    `
  }

  getOptions = (edit) => {
    let html = ''
    if (edit === 'true') {
      const photographers = this.getAttribute('photographers').split(',')
      console.log(photographers)

      photographers.forEach(item => {
        html += `
          <span class="option selected" data-value="event">
            <span class="text">${item}</span>
          </span>
        `
      })

      return html
    }
    else {
      console.log('No data available')
    }

    return html
  }


  getTop(edit){
    if (edit === 'true') {
      return `
        <div class="head">
          <h2 class="step-title">Edit your address</h2>
          <p class="description">
            Create or edit delivery addresses based on your current location
          </p>
        </div>
      `
    }
    else {
      return `
        <div class="head">
          <h2 class="step-title">Add an address</h2>
          <p class="description">
            Create or edit delivery addresses based on your current location
          </p>
        </div>
      `
    }
  }


  getStyles() {
    console.log('No data available')
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
      }

      section#content {
        background-color: #ffffff;
        padding: 15px 0;
        z-index: 20;
        display: flex;
        flex-flow: column;
        justify-content: start;
        align-items: center;
        gap: 0;
        width: 700px;
        height: 100%;
        max-height: max-content;
        min-height: min-content;
        height: max-content;
        border-radius: 25px;
        position: relative;
      }

      #content .content-head{
        margin: 0 20px;
        width: 100%;
        padding: 5px 0 10px 0;
        display: flex;
        flex-flow: column;
        gap: 0px;
        justify-content: center;
      }

      #content .content-head > .actions{
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
      }

      #content .content-head > .actions > .control{
        position: absolute;
        left: 20px;
        top: 15px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        color: #808080;
        cursor: pointer;
      }

      #content .content-head > .actions > .control:hover{
        color: #ee7752;
      }

      #content .content-head > .actions > .control > svg{
        width: 25px;
        height: 25px;
      }

      #content .content-head > .actions > span.steps {
        /*background-color: #08b86f;*/
        color: #808080;
        padding: 4px 15px 5px 12px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 3px;
        cursor: pointer;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }

      #content .content-head > .actions > span.steps > .text{
        padding: 0 5px 0 0;
      }

      #content .content-head > .actions > span.steps > .step {
        color: rgb(223, 121, 26);
      }

      section#content > .footer {
        border-top: 1px solid #80808027;
        margin: 0;
        width: 90%;
        padding: 20px 0 10px 0;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        justify-self: end;
      }

      section#content > .footer > .action {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 50px;
        font-family: var(--font-alt);
        line-height: 1.2;
        font-size: 1.2rem;
        font-weight: 500;
        color: #404040;
        cursor: pointer;
      }

      section#content > .footer > .action.prev {
        padding: 10px 20px 10px 15px;
        background: rgba(57, 56, 56, 0.087);
        background: linear-gradient(0deg, rgba(57, 56, 56, 0.087) 0%, rgba(57, 56, 56, 0.187) 100%);
      }

      section#content > .footer > .action.prev svg path {
        fill: #404040;
      }

      section#content > .footer > .action.next {
        padding: 10px 15px 10px 20px;
        color: #ffffff;
        background: #ad5389;
        background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
        background-color: rgb(247, 145, 162);
      }

      section#content > .footer > .action.next svg path {
        fill: #ffffff;
      }

      section#content > .footer > .action.disabled {
        background: #80808023;
        pointer-events: none;
        opacity: .9;
      }

      section#content > .container {
        /*border: 2px solid #808080;*/
        width: 90%;
        padding: 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }

       section#content > .container > .head {
        /*border: 1px solid blue;*/
        width: 90%;
        margin: 0 0 30px 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 0px;
      }

       section#content > .container > .head > h2.step-title {
        margin: 0;
        font-family: var(--font-alt);
        line-height: 1.2;
        font-size: 2rem;
        font-weight: 500;
        color: #404040;
      }

       section#content > .container > .head > p.description {
        margin: 0;
        font-family: var(--font-alt);
        font-size: 0.93rem;
        font-weight: 400;
        line-height: 1.5;
        color: #808080;
        text-align: center;
      }

      section#content > .container > .fields {
        margin: 0 0 20px 0;
        width: 90%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 20px;
      }

      section#content > .container > .fields > .field {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 2px;
      }

      section#content > .container > .fields  .field.location,
      section#content > .container > .fields  .field.contact,
      section#content > .container > .fields  .field.name {
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: start;
        gap: 20px;
      }

      section#content > .container > .fields  .field .input-group {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        color: #404040;
        gap: 0;
      }

      section#content > .container > .fields  label {
        /* border: 1px solid black; */
        padding: 0 0 5px 5px;
        color: #404040;
      }

      section#content > .container > .fields  .field  span.error {
        color: #ee7752;
        font-size: 0.8rem;
        display: none;
      }

      section#content > .container > .fields  .field  span.wrapper {
        display: flex;
        align-items: center;
        gap: 0;
        width: 100%;
      }
      section#content > .container > .fields  .field  span.wrapper > span {
        border: 1px solid #80808037;
        border-right: none;
        font-size: 1rem;
        width: 60px;
        height: 40px;
        padding: 10px 12px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        color: #08b86f;
        display: flex;
        align-items: center;
      }

      section#content > .container > .fields  .field  span.wrapper > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: calc(100% - 60px);
        outline: none;
        height: 40px;
        padding: 10px 12px;
        border-radius: 0;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        color: #404040;
      }

      section#content > .container > .fields  .field   span.wrapper > input:focus {
        border: 1px solid #08b86f60;
      }

      section#content > .container > .fields  .field  input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: 100%;
        height: 40px;
        outline: none;
        padding: 10px 12px;
        border-radius: 12px;
        color: #404040;
      }

      section#content > .container > .fields  .field  input:focus {
        border: 1px solid #08b86f60;
      }

      section#content > .container > .fields  .field select {
        font-size: 1rem;
        width: 100%;
        height: 40px;
        outline: none;
        padding: 10px 12px;
        border: 1px solid #80808017;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #fefefe;
        color: #404040;
        border-radius: 12px;
      }

      select:hover {
        border-color: #999;
      }

      select:focus {
        outline: none;
        border-color: #555;
      }

      section#content > .container > .fields  .field  textarea:focus{
        border: 1px solid #08b86f60;
      }

      section#content > .container > .services {
        /*border: 1px solid #808080;*/
        width: 90%;
        padding: 0 0 25px 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 15px;
      }

      section#content > .container > .services > .options {
        /*border: 1px solid #808080;*/
        width: 100%;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
        gap: 15px;
      }

      section#content > .container > .services > .options > .option {
        border: 1px solid #80808037;
        font-size: 1rem;
        padding: 8px 20px;
        border-radius: 50px;
        color: #666666;
        cursor: pointer;
        font-family: var(--font-alt);
        line-height: 1.2;
      }

      section#content > .container > .services > .options > .option.selected {
        border: none;
        background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
        color: #ffffff;
      }


      section#content > .container > .services > .other{
        /*border-top: 1px solid #80808017;*/
        width: 100%;
        padding: 15px 0px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      section#content > .container > .services > .other span.text {
        color: #666666;
        /*text-transform: capitalize;*/
        font-family: var(--font-alt);
        line-height: 1.2;
      }

      section#content > .container > .services > .other > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: 100%;
        outline: none;
        padding: 10px 12px;
        border-radius: 12px;
        color: #404040;
      }

      section#content > .container > .services > .other > input:focus {
        border: 1px solid #08b86f60;
      }

      </style>
    `;
  }
}