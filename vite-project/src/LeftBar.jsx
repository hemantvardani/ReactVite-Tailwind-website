import React from 'react'

function LeftBar() {
  return (
    <div>

           
<div className='w-[20%] shadow-lg'>







<div className="flex flex-col ">





 



  <ul class=" flex-col hidden text-sm font-medium text-center  divide-x divide-gray-200 rounded-lg sm:flex">






    <li class="">


      <button type="button" onClick={() => { setActiveLeftTab("Home") }}
        class={
          activeLeftTab == "Home"
            ?
            " w-full inline-block  p-4 rounded-l-lg bg-[#e8e9fe] focus:ring-1 focus:ring-blue-300 active focus:outline-none "

            :
            " w-full inline-block  p-4 rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none "



        }



        aria-current="page">







        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8273f1" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          <p className='ml-2'>Home</p>


        </div>





      </button>



    </li>










    <li class="">
      <button type="button" onClick={() => { setActiveLeftTab("Job") }}
        class={
          activeLeftTab == "Job"
            ?
            " w-full inline-block  p-4 rounded-l-lg bg-[#e8e9fe] focus:ring-1 focus:ring-blue-300 active focus:outline-none "

            :
            " w-full inline-block  p-4 rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none "



        }

        aria-current="page">






        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8273f1" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
          </svg>
          <p className='ml-2'>Job Invites</p>


        </div>




      </button>

    </li>






    <li class="">
      <button type="button" onClick={() => { setActiveLeftTab("Analytics") }}


        class={
          activeLeftTab == "Analytics"
            ?
            " w-full inline-block  p-4 rounded-l-lg bg-[#e8e9fe] focus:ring-1 focus:ring-blue-300 active focus:outline-none "

            :
            " w-full inline-block  p-4 rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none "



        }
        aria-current="page">


        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8273f1" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <p className='ml-2'>Analytics</p>


        </div>


      </button>

    </li>



    <li class="">
      <button type="button" onClick={() => { setActiveLeftTab("Profile") }}

        class={
          activeLeftTab == "Profile"
            ?
            " w-full inline-block  p-4 rounded-l-lg bg-[#e8e9fe] focus:ring-1 focus:ring-blue-300 active focus:outline-none "

            :
            " w-full inline-block  p-4 rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none "



        }
        aria-current="page">


        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8273f1" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className='ml-2'>My Profile</p>


        </div>


      </button>

    </li>


    <li class="">
      <button type="button" onClick={() => { setActiveLeftTab("Explore") }}

        class={
          activeLeftTab == "Explore"
            ?
            " w-full inline-block  p-4 rounded-l-lg bg-[#e8e9fe] focus:ring-1 focus:ring-blue-300 active focus:outline-none "

            :
            " w-full inline-block  p-4 rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none "



        }

        aria-current="page">


        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8273f1" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <p className='ml-2'>Explore</p>


        </div>


      </button>

    </li>




  </ul>

</div>

<hr class="h-px my-8 mx-4 border-0 border-t border-gray-300 dark:border-gray-400" />










</div>




      
    </div>
  )
}

export default LeftBar
