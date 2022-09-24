//                     Breaking News

document.getElementById('breaking-news').addEventListener('click',function(){


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
 
function display (data) {
    console.log(data);
    const h2 =  document.getElementById('dataLength');
    h2.innerText =`${data.length} items found for category Breakingnews`
    data.forEach( data => {
            
        const newsContainer = document.getElementById('newsCard');
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
                  <img src="image/bi_arrow-right-short.png" class="img-fluid" height: 30px" alt="arrow" />
                  </div></div>
                 
                  </p>
             </div>
         </div>
        `;
      
      newsContainer.appendChild(newsCard);
    }
    )
    }
 loadNews();   
});

//                                Beaking news 
