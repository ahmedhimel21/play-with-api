// load ai data
const loadAiData = async() =>{
  const URL = 'https://openapi.programming-hero.com/api/ai/tools';
  const res = await fetch(URL);
  const data = await res.json();
  const dataArrays = data.data.tools
  displayAiData(dataArrays)
}
// display ai data
const displayAiData = aiData =>{
 const cardContainer = document.getElementById('card-container');
 cardContainer.innerHTML ='';
 if(aiData.length>6){
  aiData = aiData.slice(0,6);
  const showAll = document.getElementById('see-more-btn-container');
  showAll.classList.remove('hidden');
 }
 
 
  aiData.forEach(singleAiData => {
     const cardDiv = document.createElement('div');
     cardDiv.classList.add('max-w-sm');
     cardDiv.classList.add('bg-white');
     cardDiv.classList.add('border');
     cardDiv.classList.add('border-gray-200');
     cardDiv.classList.add('rounded-lg');
     cardDiv.classList.add('shadow');
     cardDiv.classList.add('dark:bg-gray-800');
     cardDiv.classList.add('dark:border-gray-700');
     cardDiv.classList.add('mx-auto');
     cardDiv.classList.add('mb-5');
     cardDiv.innerHTML =`
     <a href="#">
         <img class="rounded-t-lg p-5" src="${singleAiData.image}" alt="" />
     </a>
     <div class="p-5">
         <a href="#">
             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>
         </a>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           <a> 1. ${singleAiData.features[0]}</a>
           <br>
           <a> 2. ${singleAiData.features[1]}</a>
           <br>
           <a> 3. ${singleAiData.features[2]}</a>
         </p>

         <hr>

         <div class="flex justify-between items-center mt-5">
           <div>
             <h4 class="font-bold">${singleAiData.name}</h4>
             <p><i class="fa-solid fa-calendar-days"></i> ${singleAiData.published_in}</p>
           </div>
           <div>
             <a  onclick="loadDataDetails('${singleAiData.id}')" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-400 rounded-lg hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-bs-toggle="modal" data-bs-target="#exampleModal"">
               Read more
               <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
           </div>
         </div>
     </div>

     `;
     cardContainer.appendChild(cardDiv);
  });
  toggleSpinner(false);

}
loadAiData()

// sort by date
const sortByDate = () =>{
  const URL = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(URL).then(res =>res.json()).then(data =>{
    let aiData = data.data.tools;
    let aiDataSortByDate = aiData.slice(0,6);
    console.log(aiDataSortByDate)
    aiDataSortByDate.sort((a,b) => new Date(b.published_in) - new Date(a.published_in));
    displayAiData(aiDataSortByDate)
  })
}

// load all ai data
document.getElementById('btn-see-more').addEventListener('click',function(){
  const loadAllAiData = async() =>{
    const URL = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(URL);
    const data = await res.json();
    const dataArrays = data.data.tools
    displayAllAiData(dataArrays)
  }
  // display ai all data
  const displayAllAiData = aiData =>{
     const cardContainer = document.getElementById('card-container');
     if(aiData.length>=6){
      aiData = aiData.slice(6,12);
      const showAll = document.getElementById('see-more-btn-container');
      showAll.classList.add('hidden')
     }
      aiData.forEach(singleAiData => {
         const cardDiv = document.createElement('div');
         cardDiv.classList.add('max-w-sm');
         cardDiv.classList.add('bg-white');
         cardDiv.classList.add('border');
         cardDiv.classList.add('border-gray-200');
         cardDiv.classList.add('rounded-lg');
         cardDiv.classList.add('shadow');
         cardDiv.classList.add('dark:bg-gray-800');
         cardDiv.classList.add('dark:border-gray-700');
         cardDiv.classList.add('mx-auto');
         cardDiv.classList.add('mb-5');
         cardDiv.innerHTML =`
         <a href="#">
             <img class="rounded-t-lg p-5" src="${singleAiData.image}" alt="" />
         </a>
         <div class="p-5">
             <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 
                  dark:text-white">Features</h5>
             </a>
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
               <a> 1. ${singleAiData.features[0]}</a>
               <br>
               <a> 2. ${singleAiData.features[1]}</a>
               <br>
               <a> 3. ${singleAiData.features[2]}</a>
             </p>
    
             <hr>
    
             <div class="flex justify-between items-center mt-5">
               <div>
                 <h4 class="font-bold">${singleAiData.name}</h4>
                 <p>${singleAiData.published_in}</p>
               </div>
               <div>
                 <a onclick="loadDataDetails('${singleAiData.id}')"  href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-400 rounded-lg hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Read more
                   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               </a>
               </div>
             </div>
    
         </div>
         `;
         cardContainer.appendChild(cardDiv);
    
      });
    }
  
  loadAllAiData()
})

// 
const loadDataDetails = async(id) => {
  const URL =`https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(URL);
  const data = await res.json();
  displayDetails(data.data);
}
const displayDetails = details => {
  const feature =[];
  const features = details.features;
  for(const singleFeature in features){
    feature.push(features[singleFeature].feature_name)
  }
  const modalDetailsContainer = document.getElementById('modal-details-container');
  modalDetailsContainer.innerHTML = `
  <div class="card col w-50 " style="width: 18rem;">
  <h3 class="mt-3 fs-6 fw-semibold">
    ${details.description}
  </h3>
  <div class="d-flex justify-content-evenly mt-5 fs-6 fw-semibold">
    <p class="border shadow-lg rounded-2 text-success-emphasis">
      ${details.pricing ? details.pricing[0].price : 'Free of cost'}
      <br>
      ${details.pricing ? details.pricing[0].plan : ''}
    </p>
    <p class="border shadow-lg rounded-2 text-warning-emphasis">
    ${details.pricing ? details.pricing[1].price : 'Free Of cost'}
      <br>
      ${details.pricing ? details.pricing[1].plan : ''}
    </p>
    <p class="border shadow-lg rounded-2 text-danger-emphasis">
      ${details.pricing ? details.pricing[2].plan : ''}
      <br>
      ${details.pricing ? details.pricing[2].price.slice(0,10) : 'Free of Cost'}
      </div>

      <div class="row mt-5">
        <div class = "col w-100-sm">
          <h3 class="fs-4 fw-semibold">
          Features
          </h3>
    <p>${feature ? feature.map(singleFeature => '<li>' + singleFeature+ '</li>').join(''): 'No data Found'} 
    </p>
        </div>
        <div class ="col w-100-sm">
          <h3 class="fs-4 fw-semibold">Integrations</h3>
  <p>
  ${details.integrations ? details.integrations.map(singleIntegration => '<li>' + singleIntegration+ '</li>').join(''): 'No data Found'}
  </p>
        </div>
      </div>
</div>
<div class="card col w-45" style="width: 18rem;">
          <img src="${details.image_link ? details.image_link[0] : 
             'https://picsum.photos/200/300'}" class="img-fluid mt-5" alt="...">
             <button id="btn-accuracy" type="button" class="btn btn-danger position-absolute top-0 end-20" style="background-color:#EB5757 ; padding: 10px; opacity:1;">${details.accuracy.score ? details.accuracy.score  : 'Initial stage'} % accuracy
             </button>
          <div class="card-body">
            <h3 class=" d-flex justify-content-center fs-6 fw-semibold">
    ${details.input_output_examples ? details.input_output_examples[0].input : 
    'Not found'}
            </h3>
            <p class="mt-2 m-3">
            ${details.input_output_examples ? details.input_output_examples[0].output : 
            'No! Not Yet! Take a break!!!'}
            </p>
          </div>
        </div>
  `;
    modalDetailsContainer.innerContent = '';
}

// toggle spinner
const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('hidden')
  }
  else{
    loaderSection.classList.add('hidden');
  }
}
toggleSpinner(true);



