

class Home extends HTMLElement {
  constructor() {
    super();
  }



connectedCallback() {
    this.innerHTML = `
      <style>
      
      .home{
        background-color:  black;
      }

      h1{
            display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  
    color: white;
      }
      

      </style>

      <div class="home" >
 <h1>home
            
            </h1>
      </div>
      
    `;
  }
}

customElements.define("home-component", Home);