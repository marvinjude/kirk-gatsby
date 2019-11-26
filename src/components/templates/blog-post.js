import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout.js"

export default props => {
  return (
    <body class="flex antialiased flex-col antialiased w-screen overflow-x-hidden ">
      {/* <!-- Modal --> */}
      <div class="fixed top-0 left-0 px-2 sm:px-0 min-h-screen w-full z-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-4 sm:p-10 relative shadow-lg">
          {/* <!-- close --> */}
          <div class="absolute right-0 top-0 bg-orange-200 h-16 w-16 text-2xl rounded-tr-lg flex justify-center items-center cursor-pointer hover:bg-orange-300">
            &times;
          </div>
          {/* <!--  --> */}

          {/* <!-- Header --> */}
          <div class="text-center">
            <h2 class="text-3xl text-semibold">Sign Up</h2>
            <p class="text-sm text-gray-600">
              Ge the latest gist about real estates
            </p>
          </div>
          {/* <!--  --> */}
          <div class="p-5 flex flex-col">
            <div class="flex py-5 -mx-2 flex-wrap">
              <div class="text-lg w-full flex flex-col px-2 sm:w-1/2">
                <label for="email">Email</label>
                <input
                  id="email"
                  class="text-lg focus:bg-gray-100 border border-gray-500 p-5 py-2 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="text-lg w-full flex flex-col px-2 sm:w-1/2">
                <label for="email">Company </label>
                <input
                  id="email"
                  class="text-lg focus:bg-gray-100 border border-gray-500 p-5 py-2 rounded focus:outline-none focus:shadow-outline shadow-black"
                />
              </div>
            </div>

            <button class="w-full sm:w-auto focus:outline-none text-white focus:shadow-outline px-10 py-3 rounded bg-black shadow font-bold">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
      {/* <!--  --> */}
      <header class="flex px-5 sm:px-10 py-4 shadow justify-between w-full items-center">
        <img class="h-8 w-24" src="./assets/images/logo.png" />
        <ul class="flex">
          <li class="">
            <button class="focus:outline-none p-2 hover:bg-red-100  hover:font-bold rounded-full px-5">
              Home
            </button>
          </li>
          <li class="">
            <button class="focus:outline-none p-2 hover:bg-red-100  hover:font-bold rounded-full px-5">
              Another
            </button>
          </li>
        </ul>
      </header>
      <div>
        <section class="flex flex-wrap mw-h-screen-1/2 flex-wrap">
          <div class="w-full sm:1/2 lg:w-3/5 bg-black mw-h-screen-1/2"></div>
          <div class="w-full sm:1/2 lg:w-2/5 p-5 sm:p-10 pt-16 sm:pt-10 flex flex-col bg-site-orange text-white justify-center items-center">
            <h1 class="mb-5 font-bold text-3xl sm:text-4xl text-center md:font-bold">
              LEARN THE BANKER'S SECERTS TO GET A REAL ESTATE OR BUSINESS LOAN
              APPLICATION APPROVED
            </h1>
            <button class="cta relative w-full my-2 focus:outline-none hover:shadow-outline p-5 bg-black rounded-lg text-white shadow-xl text-lg max-w-sm relative font-bold">
              <img src="./assets/arrow-curve.svg" class="absolute z-10" />
              APPLY NOW
            </button>
          </div>
        </section>
        <section class="flex flex-wrap overflow-hidden">
          <div class="w-full md:w-2/5 overflow-hidden">
            <div class="flex flex-col h-full">
              <img
                src="./assets/images/hero1.png"
                class="w-full flex-1 object-cover"
              />
              <div class="flex-1">
                <ul class="p-4 bg-site-orange text-white text-xl font-bold flex flex-col justify-center h-full">
                  <li class="p-2 border-l-4 border-black m-2">
                    1st time Home Buyers
                  </li>
                  <li class="p-2  border-l-4 border-black m-2">
                    Loans 250K - 50Mil+
                  </li>
                  <li class="p-2  border-l-4 border-black m-2">
                    Residential & Commercial Or Business Loans
                  </li>
                  <li class="p-2  border-l-4 border-black m-2">
                    Private Money
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full md:w-5/5 relative flex-1 h-700 overflow-hidden">
            <div class="absolute hidden sm:block p-5 text-xl sm:text-lg w-full sm:w-1/3 bg-black text-white oveflow-hidden">
              <b class="text-orange-500">Do you need to get approved?</b>
              <br /> CLICK HERE To Request a FREE Mortgage App Consultation OR
              CALL US AT 818-483-9166
            </div>
            <img
              src="./assets/images/hero2.png"
              class="hidden sm:block w-full h-full object-fit"
            />
          </div>
          <div class="sm:hidden p-5 text-xl sm:text-lg w-full sm:w-1/3 bg-black text-white oveflow-hidden">
            <b class="text-orange-500">Do you need to get approved?</b>
            <br /> CLICK HERE To Request a FREE Mortgage App Consultation OR
            CALL US AT 818-483-9166
          </div>
        </section>
        <section class="relative bg-gray-100">
          <img src="./assets/dotted.svg" class="absolute w-48 h-48 right-0" />
          <img
            src="./assets/dotted.svg"
            class="absolute w-32 h-32 bottom-0 left-0"
          />
          <div class="p-5 sm:p-10">
            <div class="flex mt-10 -mx-2 flex-wrap px-0 sm:px-16">
              <div class="hidden lg:block w-full md:w-2/5 px-2 ">
                <img
                  src="./assets/images/section1.png"
                  class="max-w-lg rounded-lg shadow w-full"
                />
              </div>
              <div class="w-full lg:w-3/5 px-2">
                {/* <!--  --> */}
                <div class="px-0 sm:px-10">
                  <h1 class="text-3xl font-bold text-center sm:text-left">
                    21 Day Approval Guarantee
                  </h1>
                  <ul class="my-5 list">
                    <li class="flex  py-3 text-lg">
                      <span class="h-5 w-5 flex-none shadow-2xl bg-orange-400 rounded-full mr-2"></span>
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex  py-3 text-lg">
                      <span class="h-5 w-5 flex-none shadow-2xl bg-orange-400 rounded-full mr-2"></span>
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex  py-3 text-lg">
                      <span class="h-5 w-5 flex-none shadow-2xl bg-orange-400 rounded-full mr-2"></span>
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex py-3 text-lg">
                      <span class="h-5 w-5 flex-none shadow-2xl bg-orange-400 rounded-full mr-2"></span>
                      TTo close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex py-3 text-lg">
                      <span class="h-5 w-5 flex-none shadow-2xl bg-orange-400 rounded-full mr-2"></span>
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>
                  </ul>
                  <button class="w-full sm:w-auto focus:outline-none text-white focus:shadow-outline px-10 py-3 rounded bg-blue-600 shadow font-bold">
                    REGISTER NOW
                  </button>
                </div>
                {/* <!--  --> */}
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gray-200 p-5 sm:p-16">
          <h1 class="text-center p-5 text-3xl font-bold">
            Kirk Has Also Been Featured In
          </h1>
          <div class="slider flex flex-no-wrap overflow-x-scroll  justify-center items-center p-10 py-5 ">
            <img src="./assets/images/featured1.png" />
            <img src="./assets/images/featured2.png" />
            <img src="./assets/images/featured3.png" />
            <img src="./assets/images/featured3.png" />

            {/* <!-- Clone --> */}
            <img src="./assets/images/featured1.png" />
            <img src="./assets/images/featured2.png" />
            <img src="./assets/images/featured3.png" />
            <img src="./assets/images/featured3.png" />
          </div>
        </section>
        <section class="bg-black p-5 sm:p-16 justify-center text-white flex flex-col items-center pattern-background">
          <h1 class="text-center p-5 text-3xl font-bold">
            Proven 3 step Process
          </h1>
          <div class="flex mb-10 -mx-2 flex-wrap oveflow-hidden">
            <div class="w-full sm:w-1/2 md:w-1/3 px-2 py-2 oveflow-hidden ">
              <div class="bg-blue-900 rounded-lg flex step relative p-5">
                <div>
                  <img src="./assets/images/pinpoint.png" />
                </div>
                <div class="ml-4">
                  <h2 class="font-bold text-xl mb-4">Pinpoint</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 px-2 py-2 oveflow-hidden">
              <div class="bg-blue-900 rounded-lg flex relative step p-5">
                <div>
                  <img src="./assets/images/calendar.png" />
                </div>
                <div class="ml-4">
                  <h2 class="font-bold text-xl mb-4">Plan</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 px-2 py-2 oveflow-hidden">
              <div class="bg-blue-900 rounded-lg flex relative step last p-5  ">
                <div>
                  <img src="./assets/images/profit.png" />
                </div>
                <div class="ml-4">
                  <h2 class="font-bold text-xl mb-4">Profit</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button class="w-full sm:w-auto focus:outline-none focus:shadow-outline px-10 py-3 rounded bg-blue-600 shadow font-bold">
            REGISTER NOW
          </button>
        </section>
        <section class="flex p-5 sm:p-16 justify-center flex-col oveflow-hidden">
          <h1 class="text-center p-5 text-3xl font-bold">
            Who Uses ApprovemyloansKirk?
          </h1>
          <div class="flex flex-wrap -mx-2 overflow-hidden justify-center items-center">
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden ">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg p-2 bg-white">
                <img src="./assets/images/investor.png" />
                <div class="w-full p-5 bg-orange-500 text-white text-center">
                  INVESTORS
                </div>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3  overflow-hidden">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg p-2 bg-white">
                <img src="./assets/images/home-buyer.png" />
                <div class="w-full p-5 bg-orange-500 text-white text-center">
                  HOME BUYER
                </div>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg p-2 bg-white">
                <img src="./assets/images/professional.png" />
                <div class="w-full p-5 bg-orange-500 text-white text-center">
                  PROFESSIONAL
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-wrap p-5 sm:p-16 bg-gray-200 sm:flex-wrap-reverse">
          <div class="w-full lg:w-1/2 px-2">
            <div class="my-5">
              <h2 class="text-3xl sm:text-5xl mb-5 font-bold ">
                Want More Information on Mortgage Lenders?
              </h2>
              <button class="w-full sm:w-auto focus:outline-none focus:shadow-outline px-10 py-3 rounded bg-blue-600 shadow font-bold text-white">
                REGISTER NOW
              </button>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class="bg-black rounded h-64"></div>
          </div>
        </section>
        <section class="flex p-5 sm:p-16 justify-center flex-col">
          <div class="flex flex-wrap -mx-2 overflow-hidden justify-center items-center">
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden ">
              {/* <!--  --> */}
              <div class="shadow rounded p-2">
                <div class="w-full bg-black h-48 rounded"></div>
                <h1 class="text-center p-4 text-xl">7 Secrets</h1>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3  overflow-hidden">
              {/* <!--  --> */}
              <div class="shadow rounded p-2">
                <div class="w-full bg-black rounded h-48"></div>
                <h1 class="text-center p-4 text-xl">5 Tips</h1>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden">
              {/* <!--  --> */}
              <div class="shadow rounded p-2">
                <div class="w-full bg-black rounded h-48"></div>
                <h1 class="text-center p-4 text-xl">3 Stategies</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="relative bg-darken-2">
          <div class="p-5 sm:p-16 border">
            <h1 class="text-3xl font-bold text-center p-5">
              Here Is What You Get
            </h1>
            <div class="flex justify-center flex-wrap -mx-2 ">
              <div class="w-full lg:w-3/5 px-2">
                {/* <!--  --> */}
                <div class="md:px-10 p-3 rounded-lg">
                  <ul class="my-5 list">
                    <li class="flex  py-3 text-lg">
                      <img src="./assets/arrow.svg" class="w-5 h-5 mr-2" />
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex  py-3 text-lg">
                      <img src="./assets/arrow.svg" class="w-5 h-5 mr-2" />
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex  py-3 text-lg">
                      <img src="./assets/arrow.svg" class="w-5 h-5 mr-2" />
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex py-3 text-lg">
                      <img src="./assets/arrow.svg" class="w-5 h-5 mr-2" />
                      TTo close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>

                    <li class="flex py-3 text-lg">
                      <img src="./assets/arrow.svg" class="w-5 h-5 mr-2" />
                      To close your home purchase in 21 days or lessTo close
                      your home purchase in 21 days or less To close your home
                      purchase in 21 days or less
                    </li>
                  </ul>
                  <button class="w-full sm:w-auto focus:outline-none text-white focus:shadow-outline px-12 py-3 rounded bg-blue-600 shadow font-bold">
                    PLACE YOUR ORDER NOW
                  </button>
                </div>
                {/* <!--  --> */}
              </div>
              <div class="hidden lg:block w-full lg:w-2/5 px-2 overflow-hidden">
                <img
                  src="./assets/images/section1.png"
                  class="rounded-lg shadow max-w-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="flex p-5 sm:p-16 justify-center flex-col bg-black pattern-background">
          <h1 class="text-center p-5 text-3xl font-bold text-white">
            Our Customers Love The Loan System
          </h1>
          <div class="flex  -mx-2 justify-center items-center py-10">
            <div class="w-full p-2 sm:w-1/2 md:w-1/3 flex-shrink-0 ">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg bg-white flex flex-col items-center">
                <div class="w-full  flex -mt-10 justify-center">
                  <img
                    src="./assets/Ellipse 3.svg"
                    class="rounded-full border-gray-100 left-50 border-2 w-20 h-20 shadow-xl  bg-white z-10"
                  />
                </div>

                <h1 class="text-xl font-bold"> Jude Agboola</h1>
                <p class="text-gray-600">Charisol Limited</p>
                {/* <!-- Icon --> */}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="fill-current text-blue-700"
                >
                  <path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path>
                  <path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path>
                </svg>
                {/* <!-- Icon --> */}
                <p class="w-full p-5">
                  Kirk is one of those amazing human beings you rarely meet! He
                  actually does everything he says he’s going to do! I have
                  never worked with a more professional calm and intelligent
                  person! Thank you for everything Kirk Jaffe!"
                </p>
              </div>
              {/* <!--  --> */}
            </div>
          </div>
        </section>
        <section class="flex p-5 sm:16 justify-center flex-col">
          <h1 class="text-center p-5 text-3xl font-bold">
            Testimonies from Our Satisfied Customers
          </h1>
          <div class="flex -mx-2 overflow-scroll">
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden flex-shrink-0">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg ">
                {/* <!-- video --> */}
                <div class="rounded-lg shadow h-48 bg-black"></div>
                {/* <!--  --> */}
                <h1 class="text-orange-900 text-center p-4 text-xl">
                  Dolapo Olisa
                </h1>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden flex-shrink-0">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg ">
                {/* <!-- video --> */}
                <div class="rounded-lg shadow h-48 bg-black"></div>
                {/* <!--  --> */}
                <h1 class="text-orange-900 text-center p-4  text-xl">
                  Yewande Akerele
                </h1>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3 overflow-hidden flex-shrink-0">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg ">
                {/* <!-- video --> */}
                <div class="rounded-lg shadow h-48 bg-black"></div>
                {/* <!--  --> */}
                <h1 class="text-orange-900 text-center p-4  text-xl">
                  Sam Okposie
                </h1>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/3  overflow-hidden flex-shrink-0">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg ">
                {/* <!-- video --> */}
                <div class="rounded-lg shadow h-48 bg-black"></div>
                {/* <!--  --> */}
                <h1 class="text-orange-900 text-center p-4 text-xl">
                  Nathan Nella
                </h1>
              </div>
            </div>
            <div class="w-full px-2 py-2 sm:w-1/4 overflow-hidden flex-shrink-0">
              {/* <!--  --> */}
              <div class="shadow-lg rounded-lg ">
                {/* <!-- video --> */}
                <div class="rounded-lg shadow h-48 bg-black"></div>
                {/* <!--  --> */}
                <h1 class="text-orange-900 text-center p-4 text-xl">
                  Samson Terry
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section class="relative bg-blue-100 author__section">
          <div class="p-8 top">
            <h1 class="text-3xl font-bold text-center">About the author</h1>
            <div class="flex justify-center mt-10 flex-wrap -mx-2">
              <div class="w-full lg:w-3/5 px-2">
                <p class="text-lg px-0 sm:px-16">
                  Kirk Jaffe, CEO/Principal – Executive Management of $200MM
                  private investment fund including Mortgage Notes, Real Estate
                  Owned (REO) and Commercial Property Holdings. Has Overseen and
                  held executive authority of over 20,000 real estate
                  transactions in his 20-year real estate career including
                  buying and selling of property, foreclosure, short sale, loan
                  modification, rehabilitation of property with an aggregate
                  over $1Bil value. Kirk has also
                  <br />
                  <br />
                  originated over $280,000,000 of new Mortgages. Kirk is the
                  past President of the Universal City/North Hollywood Chamber
                  of Commerce as well as a former co0chair of the ALFN
                  Commercial Practices Committee. He is active as a speaker and
                  moderator of several trade organizations including the CA
                  Mortgage Bankers Association (CMBA), Mortgage Banking
                  Association (MBA), and the Attorney Legal Financial Network
                  (ALFN). Mr. Jaffe is quoted or has been a guest of several
                  media outlets including: KABC790 Talk Radio, NBC and the Los
                  Angeles Daily News to name a few.
                </p>
              </div>
              <div class="hidden lg:block w-full md:w-2/5 px-2 oveflow-hidden ">
                <img
                  src="./assets/images/section1.png"
                  class="max-w-sm rounded-lg shadow"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="bg-black p-5 sm:p-16 text-white flex flex-col items-center pattern-background">
          <h1 class="text-3xl text-white font-bold text-center">
            Frequently Asked Questions
          </h1>
          <div class="mt-10 max-w-3xl">
            <div class="flex mb-10">
              <div class="mr-3 sm:mr-5">
                <svg
                  class="w-5 h-5 sm:h-10 sm:w-10 plus"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3965 7V54.5"
                    stroke="#FF7C00"
                    stroke-width="13"
                    stroke-linecap="round"
                  />
                  <path
                    d="M54.5 31.1035L7 31.1035"
                    stroke="#FF7C00"
                    stroke-width="13"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <h1 class="text-xl font-bold">
                  What are the advantages of learning how to set up my own
                  Mortgage Packet?
                </h1>
                <p class="text-gray-400">
                  Borrowers who understand how to accurately represent their
                  financial file can potentially save money in fees and interest
                  rate expense. These borrowers often times can qualify for
                  longer mortgages with potentially no additional out-of-pocket
                  expense.
                </p>c
              </div>
            </div>
            <div class="flex mb-10">
              <div class="mr-3 sm:mr-5">
                <svg
                  class="w-5 h-5 sm:h-10 sm:w-10 plus"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3965 7V54.5"
                    stroke="#FF7C00"
                    stroke-width="13"
                    stroke-linecap="round"
                  />
                  <path
                    d="M54.5 31.1035L7 31.1035"
                    stroke="#FF7C00"
                    stroke-width="13"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <h1 class="text-xl font-semibold">
                  What are the advantages of learning how to set up my own
                  Mortgage Packet?
                </h1>
                <p class="text-gray-400">
                  Borrowers who understand how to accurately represent their
                  financial file can potentially save money in fees and interest
                  rate expense. These borrowers often times can qualify for
                  longer mortgages with potentially no additional out-of-pocket
                  expense.
                </p>
              </div>
            </div>
            <div>
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-center font-extrabold mb-5">
                  Register Now to a live Q&A event. Get Your Loan Approved in 1
                  hour Live!
                </h1>
                <button class="w-full sm:auto focus:outline-none text-white focus:shadow-outline px-10 py-3 rounded bg-blue-600 shadow font-bold max-w-xs">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="text-center my-10">
            <h1 class="text-3xl text-black font-bold">Demo Center Location</h1>
            <p>
              6320 Canoga Ave. Suite 1558 <br />
              Los Angeles, CA 91367
            </p>
          </div>
          <img src="./assets/images/map.png" class="mt-10" />
        </section>
        <section class="relative bg-blue-900 text-white flex flex-col pattern-background">
          <div class="p-5 sm:p-16">
            <div class="text-center text-lg mb-5">
              <a class="hover:font-bold" href="#">
                Contact{" "}
              </a>
              &bull;
              <a class="hover:font-bold" href="#">
                Privacy Policy
              </a>{" "}
              &bull;
              <a class="hover:font-bold" href="#">
                Terms & Conditions
              </a>{" "}
              &bull;
              <a class="hover:font-bold" href="#">
                Return Policy
              </a>
            </div>
            <p class="text-center text-gray-400 sm:px-20">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat,
            </p>
          </div>
          <div class="p-5 text-center">
            Copyright © 2019, ApproveMyLoan.kirk.com
          </div>
        </section>
      </div>
    </body>
  )
}
