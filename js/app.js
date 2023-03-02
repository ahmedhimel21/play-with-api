const loadAiData = async() =>{
  const URL = 'https://openapi.programming-hero.com/api/ai/tools';
  const res = await fetch(URL);
  const data = await res.json();
  const dataArrays = data.data.tools
  displayAiData(dataArrays)
  // displayAiData(data.data.tools)
  // console.log(dataArrays)
}

const displayAiData = aiData =>{
console.log(aiData)
 const cardContainer = document.getElementById('card-container');
 aiData = aiData.slice(0,6);
  aiData.forEach(singleAiData => {
    console.log(singleAiData.published_in)
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
             <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-400 rounded-lg hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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