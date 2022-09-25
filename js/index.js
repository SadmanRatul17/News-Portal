                    // Breaking News

document.getElementById('breaking-news').addEventListener('click',function(){
// start spinner


const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
}
toggoleSpinner(true);

const loadNews = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    loadnewses(data.data.news_category[0].category_id);  
}

function loadnewses(breakingNews) {

    fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
        .then(response => response.json())
        .then(data => display(data.data));
       
} 
const newsContainer = document.getElementById('newsCard');
newsContainer.textContent = '';
 
function display (data) {
    console.log(data);
    const h2 =  document.getElementById('dataLength');
    h2.innerText =`${data.length} items found for category Breakingnews`
    data.forEach( data => {
            
      
        const newsCard = document.createElement('div')
        newsCard.classList.add('row');
        
       
       
        newsCard.innerHTML =`
        
         <div class="col-md-4 mb-5">
          <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
         </div>
         <div class="col-md-8">
             <div class="card-body">
                  <h5 class="card-title">${data.title}</h5>
                  <p class="card-text">
                
                  </p>
                <p class="card-text ">
                  <div class = "d-flex">
                  <div class="mt-2">  
                  <img  src="${data.author.img
                  }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                  <span class="h-5" >${data.author.name}</span>
                  </div>
                  <div class= "ms-3 mt-2 ">
                  <p>Publish Date : ${data.author.published_date} </hp>
                  </div>
                  <div class= "ms-4 mt-2 me-5">
                  <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                  <span class="h-5" >${data.total_view}</span>
                  </div>
                  <div class= "ms-5">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                  Details
                </button>
                  </p>
             </div>
         </div>
        `;
      
      newsContainer.appendChild(newsCard);

        
    }
    )
    // Stop Spinner
      toggoleSpinner(false);
    }
      loadNews();
    });

// modal
// const ModalloadNews = async() => {
//     const url = `https://openapi.programming-hero.com/api/news/categories`
//     const res = await fetch(url);
//     const data = await res.json();
//     Modalnewses(data.data.news_category[0].category_id);  
// }
// function Modalnewses(breakingNews) {

//     fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
//         .then(response => response.json())
//         .then(data =>  displayModal(data.data));       
// }
// function displayModal(data){
//     console.log(data)
//     data.forEach( data => {
        
//         console.log(data);
//         const newsModalLabel= document.getElementById('newsModalLabel');
//         console.log(newsModalLabel);
//         newsModalLabel.innerText= data.title ;
//     });
// }


// ModalloadNews();
 


// --------------------------------- Regular news----------------------------------- 


document.getElementById('Regular-News').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[1].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category Regular news`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-5">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Details
                    </button>
                      </div>
                      </div>
                     
                      </p>
                 </div>
             </div>


            `;
          newsContainer.appendChild(newsCard);
       
    }
    )
    // Stop Spinner
      toggoleSpinner(false);
    }
      loadNews();
    });
//    modal




//-------------------------------------International News----------------------------


document.getElementById('International-News').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[2].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category International-News`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-3">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                  Details
                </button>
                      </div></div>
                     
                      </p>
                 </div>
             </div>
            `;
          
          newsContainer.appendChild(newsCard);
        }
        )
        toggoleSpinner(false);
        }
     loadNews();   
    
    });
 


// -----------------------------------Sports-----------------------------------------



document.getElementById('Sports').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[3].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category Sports`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-3">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                      Details
                    </button>
                      </div></div>
                     
                      </p>
                 </div>
             </div>
            `;
          
          newsContainer.appendChild(newsCard);
        }
        )
        toggoleSpinner(false);
        }
     loadNews();   
    
    });


//-------------------------------------Entertaintment--------------------------------


document.getElementById('Entertaintment').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[4].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category Entertaintment`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-3">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                      Details
                    </button>
                      </div></div>
                     
                      </p>
                 </div>
             </div>
            `;
          
          newsContainer.appendChild(newsCard);
        }
        )
        toggoleSpinner(false);
        }
     loadNews();   
    
    });
    // ------------------------------Culture--------------------------------------
    

document.getElementById('Culture').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[5].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category Culture`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-5">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                      Details
                    </button>
                      </div></div>
                     
                      </p>
                 </div>
             </div>
            `;
          
          newsContainer.appendChild(newsCard);
        }
        )
        toggoleSpinner(false);
        }
     loadNews();   
    
    });
    // ------------------------------Arts------------------------------------------
    

document.getElementById('Arts').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[6].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category Arts`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-5">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                      Details
                    </button>
                      </div></div>
                     
                      </p>
                 </div>
             </div>
            `;
          
          newsContainer.appendChild(newsCard);
        }
        )
        toggoleSpinner(false);
        }
     loadNews();   
    
    });
    // ------------------------------All News--------------------------------------
    

document.getElementById('All-News').addEventListener('click',function(){
     

    // start spinner


    const toggoleSpinner = isloading => {
    const loadSpinner = document.getElementById('loader');
    if(isloading === true ){
        loadSpinner.classList.remove('d-none');
    }
    else{
        loadSpinner.classList.add('d-none');
    }
   }
    toggoleSpinner(true);
   
    const loadNews = async() => {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        loadnewses(data.data.news_category[7].category_id);  
    }
    
    function loadnewses(breakingNews) {
    
        fetch(`https://openapi.programming-hero.com/api/news/category/${breakingNews}`)
            .then(response => response.json())
            .then(data => display(data.data));
           
    } 
    const newsContainer = document.getElementById('newsCard');
    newsContainer.textContent = '';
     
    function display (data) {
        console.log(data);
        const h2 =  document.getElementById('dataLength');
        h2.innerText =`${data.length} items found for category Allnews`
        data.forEach( data => {
                
            // const newsContainer = document.getElementById('newsCard');
           
            const newsCard = document.createElement('div')
            newsCard.classList.add('row');
            
           
           
            newsCard.innerHTML =`
            
             <div class="col-md-4 mb-5">
              <img src="${data.image_url}" class="img-fluid rounded-start" alt="news" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">
                    
                      </p>
                    <p class="card-text ">
                      <div class = "d-flex">
                      <div class="mt-2">  
                      <img  src="${data.author.img
                      }"  class="img-fluid rounded-circle" style=" height: 30px" alt="news" />
                      <span class="h-5" >${data.author.name  }</span>
                      </div>
                      <div class= "ms-3 mt-2 ">
                      <p>Publish Date : ${data.author.published_date} </hp>
                      </div>
                      <div class= "ms-4 mt-2 me-5">
                      <img src="image/carbon_view.png" class="img-fluid" height: 30px" alt="view" />
                      <span class="h-5" >${data.total_view}</span>
                      </div>
                      <div class= "ms-3">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="modal" data-bs-target="#exampleModal">
                  Details
                </button>
                      </div></div>
                     
                      </p>
                 </div>
             </div>
            `;
          
          newsContainer.appendChild(newsCard);
        }
        )
        toggoleSpinner(false);
        }
     loadNews();   
    
    });