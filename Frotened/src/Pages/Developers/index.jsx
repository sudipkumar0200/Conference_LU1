// import React, { useEffect } from 'react';
// import Photo1 from '../../assets/Aman_photo.jpg';
// import Photo2 from '../../assets/Ayush_Photo.jpg';
// import 'animate.css';

// const Developers = () => {
//     useEffect(() => {
//         const elements = document.querySelectorAll('.fade-in');
//         elements.forEach((el, index) => {
//           setTimeout(() => {
//             el.classList.add('animate__fadeIn');
//           }, index * 500);
//         });
//       }, []);
//   return (
//     <div class="bg-gray-500 flex items-center justify-center min-h-screen ">
//       <div className='fade-in animate__animated animate__fadeInLeft'>
//         <div className="max-w-sm  m-5 bg-white rounded-lg shadow-lg overflow-hidden">
//           <img className="w-full h-44 object-cover" src={Photo1} />
//           <div className="p-3">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold text-gray-800">
//                 Aman Chaurasiya
//               </h2>
//               <div>
//                 <a
//                   href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
//                   target="blank"
//                 >
//                   <i class="fa-brands fa-linkedin text-blue-600 p-2  text-3xl"></i>
//                 </a>
//                 <a href="https://github.com/HeyAman63" target="blank">
//                   <i class="fa-brands fa-github text-black p-2 text-3xl"></i>
//                 </a>
//               </div>
//             </div>

//             <p className="mt-2 text-gray-600">
//               <span className="font-bold text-black">Email : </span>
//               Chaurasiyaaman741@gmail.com
//             </p>
//           </div>
//         </div>

//         <div className="max-w-sm h-full m-5 bg-white rounded-lg shadow-lg overflow-hidden">
//           <img className="w-full h-44 object-top" src={Photo2} />
//           <div className="p-3">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold text-gray-800">
//                 Ayush Singh
//               </h2>
//               <div>
//                 <a
//                   href="https://www.linkedin.com/in/ayush-singh-641871260/"
//                   target="blank"
//                 >
//                   <i class="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
//                 </a>
//                 <a href="https://github.com/Erayushsingh" target="blank">
//                   <i class="fa-brands fa-github text-black p-2 text-3xl"></i>
//                 </a>
//               </div>
//             </div>

//             <p className="mt-2 text-gray-600">
//               <span className="font-bold text-black">Email : </span>
//               ayushsingh74340@gmail.com
//             </p>
//           </div>
//         </div>
//       </div>

      

//       <div className='fade-in animate__animated animate__fadeInRight'>
//         <div className="max-w-sm  m-5 bg-white rounded-lg shadow-lg overflow-hidden">
//           <img className="w-full h-44 object-cover" src={Photo1} />
//           <div className="p-3">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold text-gray-800">
//                 Aman Chaurasiya
//               </h2>
//               <div>
//                 <a
//                   href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
//                   target="blank"
//                 >
//                   <i class="fa-brands fa-linkedin text-blue-600 p-2  text-3xl"></i>
//                 </a>
//                 <a href="https://github.com/HeyAman63" target="blank">
//                   <i class="fa-brands fa-github text-black p-2 text-3xl"></i>
//                 </a>
//               </div>
//             </div>

//             <p className="mt-2 text-gray-600">
//               <span className="font-bold text-black">Email : </span>
//               Chaurasiyaaman741@gmail.com
//             </p>
//           </div>
//         </div>

//         <div className="max-w-sm h-full m-5 bg-white rounded-lg shadow-lg overflow-hidden">
//           <img className="w-full h-44 object-top" src={Photo2} />
//           <div className="p-3">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold text-gray-800">
//                 Ayush Singh
//               </h2>
//               <div>
//                 <a
//                   href="https://www.linkedin.com/in/ayush-singh-641871260/"
//                   target="blank"
//                 >
//                   <i class="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
//                 </a>
//                 <a href="https://github.com/Erayushsingh" target="blank">
//                   <i class="fa-brands fa-github text-black p-2 text-3xl"></i>
//                 </a>
//               </div>
//             </div>

//             <p className="mt-2 text-gray-600">
//               <span className="font-bold text-black">Email : </span>
//               ayushsingh74340@gmail.com
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Developers;

import React, { useEffect } from 'react';
import Photo1 from '../../assets/Aman_photo.jpg';
import Photo2 from '../../assets/Ayush_Photo.jpg';
import 'animate.css';

const Developers = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate__fadeIn');
            }, index * 500);
        });
    }, []);

    return (
        <div className="bg-gray-500 flex items-center justify-center min-h-screen py-4 px-2">
            <div className="flex flex-wrap justify-center">
                <div className="fade-in animate__animated animate__fadeInLeft w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo1} alt="Aman Chaurasiya" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Aman Chaurasiya
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/HeyAman63" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                Chaurasiyaaman741@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
 

                <div className="fade-in animate__animated animate__fadeInRight w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo2} alt="Ayush Singh" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Ayush Singh
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/ayush-singh-641871260/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/Erayushsingh" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                ayushsingh74340@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-in animate__animated animate__fadeInLeft w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo1} alt="Aman Chaurasiya" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Aman Chaurasiya
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/HeyAman63" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                Chaurasiyaaman741@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-in animate__animated animate__fadeInLeft w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-44 object-cover" src={Photo1} alt="Aman Chaurasiya" />
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Aman Chaurasiya
                                </h2>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/aman-chaurasiya-45914224b/"
                                        target="blank"
                                    >
                                        <i className="fa-brands fa-linkedin text-blue-600 p-2 text-3xl"></i>
                                    </a>
                                    <a href="https://github.com/HeyAman63" target="blank">
                                        <i className="fa-brands fa-github text-black p-2 text-3xl"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">
                                <span className="font-bold text-black">Email : </span>
                                Chaurasiyaaman741@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developers;
