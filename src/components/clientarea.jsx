import { useEffect } from 'react'
import { Carousel,Card,Rating,RatingStar, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Clientarea() {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true
    })
  })

  return (
    <>
    {/* hero */}
    <section>
      <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl py-40">
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div data-aos='fade-up' class="text-center">
              <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-blue-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Just connect to the internet, we will solve your computer problems.
              </h1>
              <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">Techera offers the ultimate solution to resolve all your software problems seamlessly.</p>
              <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div class="mt-3 rounded-lg sm:mt-0">
                  <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* hero */}

    {/* carousel */}
    <div className='flex justify-center'>
      <div className="w-5/6 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="../src/assets/content/order.png" alt="..." />
          <img src="../src/assets/content/order.png" alt="..." />
          <img src="../src/assets/content/order.png" alt="..." />
          <img src="../src/assets/content/order.png" alt="..." />
          <img src="../src/assets/content/order.png" alt="..." />
        </Carousel>
      </div>
    </div>
    {/* carousel */}

    {/* about */}
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 md:mt-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-aos='fade-right' className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Techera is an online service platform and consulting service that makes things easy for those of you who have computer problems, especially software and data management. Solve cases that often occur on computer devices such as application setup, disk management, driver installation, and Windows update troubleshooting.
          </p>
        </div>
      </div>
    </div>
    {/* about */}

    {/* card */}
    <div className='my-32'>
    <div className='text-center'>
      <h1 className='text-4xl text-blue-800 font-semibold my-2'>Why Techera?</h1>
      <p className='text-gray-500'>Techera is a reliable technology partner that can efficiently resolve all your computer-related issues.</p>
    </div>
    <div className='gap-x-4 justify-center my-14 mx-9 md:flex'>
    <Card
      className="md:w-1/4 m-4 hover:shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
        <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
      </svg>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Live Chat
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Communicate easily with our technician
      </p>
    </Card>
    <Card
      className="md:w-1/4 m-4 hover:shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Ratings
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Professional Technicians with great qualifications and rating
      </p>
    </Card>
    <Card
      className="md:w-1/4 m-4 hover:shadow-lg" 
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
      </svg>


      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Reference
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Find many safe reference web
      </p>
    </Card>
    <Card
      className="md:w-1/4 m-4 hover:shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
      </svg>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Remote
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Fixing your computer from distance
      </p>
    </Card>
    </div>
    </div>
    {/* card */}

    {/* technician */}
    <div className='my-32 py-8'>
    <div className='text-center'>
      <h1 className='text-4xl text-blue-800 font-semibold my-2'>Our Technician</h1>
      <p className='text-gray-500'>Experienced technicians who have successfully resolved many computer problems</p>
    </div>
    <div className='md:flex justify-center md:mt-4'>
      <div className='gap-x-4 justify-center mx-9 md:flex'>
      <Card className="max-w-sm m-4 border-4 border-blue-800" imgSrc="../src/assets/technician/me1.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Jovis
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Software
          </p>
          <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
          </Rating>
          <div className='flex gap-x-2'>
            <button className='p-2 bg-blue-800 text-white w-20 rounded-md'>Call</button>
            <button className='p-2 bg-blue-600 text-white w-20 rounded-md'>Detail</button>
          </div>
        </Card>
        <Card className="max-w-sm m-4 border-4 border-blue-800" imgSrc="../src/assets/technician/a.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Agus Bisana
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Hardware
          </p>
          <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
          </Rating>
          <div className='flex gap-x-2'>
            <button className='p-2 bg-blue-800 text-white w-20 rounded-md'>Call</button>
            <button className='p-2 bg-blue-600 text-white w-20 rounded-md'>Detail</button>
          </div>
        </Card>
      </div>
    </div>
    <div className='md:flex justify-center md:mt-4'>
      <div className='gap-x-4 justify-center mx-9 md:flex'>
      <Card className="max-w-sm m-4 border-4 border-blue-800" imgSrc="../src/assets/technician/g.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Gideon Aji
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Network
          </p>
          <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
          </Rating>
          <div className='flex gap-x-2'>
            <button className='p-2 bg-blue-800 text-white w-20 rounded-md'>Call</button>
            <button className='p-2 bg-blue-600 text-white w-20 rounded-md'>Detail</button>
          </div>
        </Card>
        <Card className="max-w-sm m-4 border-4 border-blue-800" imgSrc="../src/assets/technician/s.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Shaela
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Cyber Security
          </p>
          <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
          </Rating>
          <div className='flex gap-x-2'>
            <button className='p-2 bg-blue-800 text-white w-20 rounded-md'>Call</button>
            <button className='p-2 bg-blue-600 text-white w-20 rounded-md'>Detail</button>
          </div>
        </Card>
      </div>
    </div>
    </div>

    {/* qna */}
    <div className='my-32 py-8'>
      <div className='md:flex justify-center p-6'>
        <div className='max-w-md mb-4'>
          <h1 className='text-4xl text-blue-800 font-semibold my-2'>Frequently Asked Questions</h1>
          <p className='text-gray-500'>Here are our frequently asked questions for quick solutions to common inquiries.</p>
          <p className="mb-2 text-gray-700 dark:text-gray-400 font-bold">
                Have other question?
          </p>
          <button className='p-2 bg-blue-800 text-white w-36 rounded-md'>Ask more</button>
        </div>
        <div className='max-w-sm'>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>What is techera?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Techera is an online consultation and service platform that provides convenience for those who have computer problems, especially software and data management. Solve cases that often occur on computer devices such as application setup, disk management, driver installation, and Windows update troubleshooting.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>techera comes from?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Techera was founded by a group of Infinite Learning students, namely Segara Samudra.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>How to use Techera features?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Currently the Techera feature is not yet available and is in the development stage
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>

    {/* footer */}
    <div className='max-h-svh bg-blue-800'>
      <div className='md:flex justify-between p-8'>
        <div>
            <img className='h-10 rounded-lg' src="ss.png" alt="" />
            <p className='text-white'>segara@example.com</p>
            <div className='flex gap-4 mt-10'>
              <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Google"><path d="M896 786h725q12 67 12 128 0 217-91 387.5T1282.5 1568 896 1664q-157 0-299-60.5T352 1440t-163.5-245T128 896t60.5-299T352 352t245-163.5T896 128q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65T484 652.5 420 896t64 243.5T657.5 1316t238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78H896V786z" fill="#ffffff" class="color000000 svgShape"></path></svg>
              <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Facebook"><path d="M1376 128q119 0 203.5 84.5T1664 416v960q0 119-84.5 203.5T1376 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T948 666v171H748v232h200v595H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960z" fill="#ffffff" class="color000000 svgShape"></path></svg>
            </div>
        </div>
        <div>
            <img className='h-10 m-6' src="../src/assets/logo/techera2.png" alt="" />
            <h1 className='text-white font-semibold text-center'>A product of techera</h1>
        </div>
        <div>
          <h1 className='text-white font-semibold text-lg'>Quick links</h1>
          <a href="#"><p className='text-white'>Consultation</p></a>
          <a href="#"><p className='text-white'>Remote</p></a>
          <a href="#"><p className='text-white'>Blog</p></a>
          <p className='text-white mt-10'>2024 techera. All right reserved</p>
        </div>
      </div>
    </div>
    {/* footer */}
  </>
  )
}
