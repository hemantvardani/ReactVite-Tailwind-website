import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headerr from './Headerr';
import LeftBar from './LeftBar';





function App() {
  // const [count, setCount] = useState(0)
  const [activeTab, setactiveTab] = useState("About");
  const [description, setdescription] = useState("This is user's description. You can change it using edit button.");
  const [isEditingDes, setIsEditingDes] = useState(false);
  const [activeLeftTab, setActiveLeftTab] = useState("Home");


  return (
    <div className=''>


      <Headerr />



      {/* main part from here */}
      <div className="flex mt-10 h-screen bg-[#f8f9fe]">


        {/* <LeftBar/> */}
        
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
 














        <div className={activeLeftTab == "Home" ? "flex flex-col w-full h-full mr-2 pl-4 " : " hidden"}>


          <div class="h-20 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>





          <div className="flex h-full space-x-3 ">
            < div className='w-[40%] flex flex-col h-full pl-4 bg-white shadow-sm rounded-md'>

              <img className=" self-center w-20 h-20 mt-[-50px] rounded-full" src="https://www.pngimages.in/uploads/png-webp/2023/April-2023/thinking_man_Symbol.webp" />
              <p className=' self-center font-medium text-1xl'>Ayaat Khanna</p>
              <p className=' self-center font-medium text-xs text-gray-400'>UI/UX Designer</p>
              <div className=' self-center mt-3  flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <p className=' font-medium-100 text-sm mx-3'>21 Followers </p>
                <p className=' font-medium-100 text-sm'>43 Following </p>






              </div>

              <div className='mt-3 flex flex'>
                <p className=' font-medium text-xs w-[80%]'>Make my profile visible to employers</p>


                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>

              </div>


              <p className=' mt-3  font-medium  text-gray-400 text-xs '>Your profile and career goals will appear when employers search our databases for candidates.</p>



              <div className='mt-3 flex flex'>
                <p className=' font-medium text-xs w-[80%]'>Online Links</p>


                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </div>


              <p className=' mt-3  font-medium  text-gray-400 text-xs '>Add your online portfolio links to increase your profile strength.</p>



              <div class="py-4 flex justify-around">
                <div class=" flex p-6 
                    bg-[#f6f9ff]
                    rounded-lg border
                    border-gray-200 shadow-md">
                  <img className='mx-2 w-5 h-5' src="https://www.svgrepo.com/show/475645/dropbox-color.svg" />

                  <img className='mx-2 w-5 h-5' src="https://www.svgrepo.com/show/416519/medium-logo.svg" />
                  <img className='mx-2 w-5 h-5' src="https://www.svgrepo.com/show/416513/cloud-download-services.svg" />



                </div>
              </div>


            














            </div>










            <div className='w-full bg-white shadow-sm rounded-md justify-center'>



              {/* <!-- component --> */}
              <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
              {/* <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script> */}


              {/* <!-- This is an example component --> */}
              <div class="max-w-2xl mx-auto">

                <div class="border-b border-gray-200 dark:border-gray-700 mb-4">
                  <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">



                    <li class="mr-2" role="presentation">
                      <button
                        onClick={() => setactiveTab('About')}

                        className=
                        {activeTab == 'About' ?
                          "active inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                          : "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                        }

                        id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"

                      >About
                      </button>
                    </li>




                    <li class="mr-2" role="presentation">
                      <button
                        onClick={() => setactiveTab('Skills')}


                        className=
                        {activeTab == 'Skills' ?
                          "active inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                          : "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                        }

                        id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Skills and Certifications</button>
                    </li>


                    <li class="mr-2"



                      role="presentation">
                      <button

                        onClick={() => setactiveTab('Posts')}

                        className=
                        {activeTab == 'Posts' ?
                          "active inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                          : "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                        }


                        id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Posts</button>
                    </li>





                    <li role="presentation">
                      <button

                        onClick={() => setactiveTab('Spaces')}

                        className=
                        {activeTab == 'Spaces' ?
                          "active inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                          : "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                        }


                        id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Spaces</button>
                    </li>




                  </ul>
                </div>


                <div id="myTabContent">
                  <div

                    class={activeTab == 'About' ? "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 active" : "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"}


                    id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <div className='flex flex-col w-full'>


                      <div className='flex '>



                        {

                          isEditingDes
                            ?
                            <div className='flex w-full'>
                              <textarea className='border w-[90%]  text-gray-500 dark:text-gray-400 text-sm'
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                              >

                              </textarea>
                              <div className='flex w-[10%] self-center ' >
                                <button onClick={() => { setIsEditingDes(false); }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                              </div>
                            </div>

                            :
                            <div className='flex w-full'>
                              <p className=' w-[90%]  text-gray-500 dark:text-gray-400 text-sm'>
                                {description}
                              </p>
                              <div className='flex  ' >
                                <button onClick={() => { setIsEditingDes(true); }} type="button" class="w-8 h-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-6 justify-center" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>

                                </button>
                              </div>



                            </div>

                        }












                      </div>





                      <hr class="h-px my-8 mx-4 border-0 border-t border-gray-300 dark:border-gray-400" />







                      <div className=' flex  flex-col w-full'>


                        <div className='text-1xl font-bold' >
                          Experience
                        </div>
                        <div className='flex w-full '>
                          <div className="items-center self-center">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>

                          </div>
                          <div className=' ml-3 flex flex-col'>
                            <p className="font-normal">
                              Crisis Intervention Specialist
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">
                              January 2023- Present

                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs" >
                              Ahmedabad
                            </p>
                          </div>
                        </div>

                        <div className='flex w-full text-sm'>
                          Working with client. Experience with back-end development and server-side languages.Knowledge of SEO best practices. Familiarity with web performance optimization techniques.

                        </div>







                      </div>



                    </div>



                  </div>




                  <div

                    class={activeTab == 'Skills' ? "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 active" : "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"}


                    id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <p class="text-gray-500 dark:text-gray-400 text-sm">This is placeholder for content of <strong class="font-medium text-gray-800 dark:text-white">Skills Section </strong>. </p>
                  </div>



                  <div

                    class={activeTab == 'Posts' ? "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 active" : "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"}


                    id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <p class="text-gray-500 dark:text-gray-400 text-sm">
                      This is placeholder for content of <strong class="font-medium text-gray-800 dark:text-white">Posts Section </strong>.                       </p>
                  </div>


                  <div

                    class={activeTab == 'Spaces' ? "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 active" : "bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"}


                    id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                    <p class="text-gray-500 dark:text-gray-400 text-sm">
                      This is placeholder for content of <strong class="font-medium text-gray-800 dark:text-white">Spaces Section </strong>.                       </p>
                  </div>
                </div>

              </div>

















            </div>

          </div>
        </div>

        <div className={activeLeftTab == "Job" ? "flex flex-col w-full mr-2 pl-4 border" : " hidden"}>
          <p className=' grid place-content-center h-full text-4xl'>  Here Job Section would appear </p>
        </div>

        <div className={activeLeftTab == "Analytics" ? "flex flex-col w-full mr-2 pl-4" : " hidden"}>
          <p className=' grid place-content-center h-full text-4xl'>  Here Analytics Section would appear </p>
        </div>

        <div className={activeLeftTab == "Profile" ? "flex flex-col w-full mr-2 pl-4" : " hidden"}>
          <p className=' grid place-content-center h-full text-4xl'>  Here Profile Section would appear </p>
        </div>

        <div className={activeLeftTab == "Explore" ? "flex flex-col w-full mr-2 pl-4" : " hidden"}>
          <p className=' grid place-content-center h-full text-4xl'>  Here Explore Section would appear </p>
        </div>






      </div>




    </div >

  )
}

export default App
