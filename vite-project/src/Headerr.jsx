import React from 'react'

function Headerr() {
  return (
    <div>
      
      
      <div className="max-h-1 flex shadow-lg bg-white shado">


        < div className=" ml-10 w-[20%] ">
          <div className="flex" >

            <img className="w-10  items-center self-center  justify-center " src="https://thumbs.dreamstime.com/z/abstract-blue-spiral-swirl-logo-icon-cartoon-vector-illustration-abstract-blue-spiral-swirl-logo-icon-vector-illustration-184881067.jpg?w=768" />

            <p className=" text-2xl  items-center self-center justify-center ">Sphere</p>


          </div>

        </div>



        <div className='flex w-[80%] justify-end' >


          <div className="mr-4 max-h-1">


            <form>
              {/* <label for="default-search" className=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
               <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>

                <input type="search" id="default-search" className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" &nbsp; &nbsp; Search.." required />


              </div>




            </form>

          </div>




          < div className=" mr-4 mt-3 ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>


          </div>




          < div className=" mr-4 mt-3 ">


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>



          </div>


          <div className=" mt-1 mr-4" >


            <img className="w-9 h-9 rounded-full" src="https://www.pngimages.in/uploads/png-webp/2023/April-2023/thinking_man_Symbol.webp" />

          </div>


        </div>

      </div>
 



    </div>
  );
}

export default Headerr;
