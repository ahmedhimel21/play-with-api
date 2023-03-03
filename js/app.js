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
console.log(aiData)
 const cardContainer = document.getElementById('card-container');
 if(aiData.length>6){
  aiData = aiData.slice(0,6);
  const showAll = document.getElementById('see-more-btn-container');
  showAll.classList.remove('hidden');
 }
 
  aiData.forEach(singleAiData => {
    // console.log(singleAiData.id)
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
             <p>${singleAiData.published_in}</p>
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

}
loadAiData()

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
    // console.log(aiData)
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

const loadDataDetails = async(id) => {
  const URL =`https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(URL);
  const data = await res.json();
  // console.log(data.data)
  displayDetails(data.data);
}
const displayDetails = details => {
  console.log(details)
  const feature =[]
  const features = details.features;
  for(const x in features){
    feature.push(features[x].feature_name)
  }
  const modalDetailsContainer = document.getElementById('modal-details-container');
  modalDetailsContainer.innerHTML = `
  <div class="card col w-50" style="width: 18rem;">
  <h3 class="mt-3 fs-6 fw-semibold">
    ${details.description}
  </h3>
  <div class="d-flex justify-content-evenly mt-5 fs-6 fw-semibold">
    <p class="border shadow-lg rounded-2 text-success-emphasis">
      ${details.pricing[0].price ? details.pricing[0].price : 'Price Not Found'}
      <br>
      ${details.pricing[0].plan ?details.pricing[0].plan : 'Price Not Found'}
    </p>
    <p class="border shadow-lg rounded-2 text-warning-emphasis">
    ${details.pricing[1].price ? details.pricing[1].price : 'Price Not Found'}
      <br>
      ${details.pricing[1].plan ? details.pricing[1].plan : 'Price Not Found'}
    </p>
    <p class="border shadow-lg rounded-2 text-danger-emphasis">
      ${details.pricing[2].plan ? details.pricing[2].plan : 'Price Not Found'}
      <br>
      ${details.pricing[2].price ? details.pricing[2].price : 'Price Not Found'}
      </div>
      <!--  -->
      <div class="d-flex justify-content-between mt-5">
        <div>
          <h3 class="fs-4 fw-semibold">
          Features
          </h3>
         <p>${feature ? feature.map(x => x).join(''): 'Not found'}</p>
        </div>
        <div>
          <h3 class="fs-4 fw-semibold">Integrations</h3>
          <a href="">${details.integrations[0] ? details.integrations[0] : 'Not Found'}   
           </a>
          <br>
          <a href="">${details.integrations[1] ? details.integrations[1]: 'Not Found'}</a>
          <br>
          <a href="">${details.integrations[2] ? details.integrations[2]: 'Not Found'}</a>
        </div>
      </div>
</div>
<div class="card col w-45" style="width: 18rem;">
          <img src="${details.image_link[0] ? details.image_link[0] : 
             'https://picsum.photos/200/300'}" class="img-fluid mt-2" alt="...">
          <div class="card-body">
            <h3 class=" d-flex justify-content-center fs-6 fw-semibold">
    ${details.input_output_examples[0].input ? details.input_output_examples[0].input : 
    'Not found'}
            </h3>
            <p class="mt-2 m-3">
            ${details.input_output_examples[0].output ? details.input_output_examples[0].output : 'Not found'}
            </p>
          </div>
        </div>
  `
}
// loadDataDetails();