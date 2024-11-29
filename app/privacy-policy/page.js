
'use client';
import '@/app/style.css';
import { FaAngleLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="max-h-screen bg-black px-4 md:px-10 lg:px-20 py-10 overflow-auto font-poppins">
      <div className="mt-10">
        {/* Back Button */}
        <div className="flex items-center mb-4 cursor-pointer" onClick={() => router.back()}>
          <FaAngleLeft className="text-white text-lg mr-2" />
          <span className="text-white font-small">Back</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl lg:text-4xl font-semibold text-white mb-6">
          Young CEO Entertainment Privacy Policy
        </h1>

        <p className="text-[#757575] mb-2">
          Last Updated: October 22nd, 2024
        </p>

        {/* Combined paragraph with spans for different colors */}
        <p className="mb-6 mt-6 text-justify text-xl">
          <span className="text-[#a6a6a6]">At Young CEO Entertainment, we take your privacy seriously. Please read this Privacy Policy to understand how we handle your personal data.</span>
          <span className="text-white"> By using or accessing our Services, you agree to the practices outlined here, and you consent to the collection, use, and sharing of your information as described.</span>
        </p>

        <p className="text-[#a6a6a6] text-justify text-xl">
          Your use of Young CEO Entertainment's services is subject to our Terms of Service, which includes this Privacy Policy. Any terms used but not defined here will have the meanings assigned to them in the <Link href="/terms"> <span className="text-[#74B7FF]"> Terms of Service. </span> </Link> 
        </p>

        <p className="text-[#a6a6a6] mb-6 mt-6 text-xl text-justify">
          You can print a copy of this Privacy Policy by clicking <span className="text-[#74B7FF]">here.</span>
        </p>

        <p className="text-[#a6a6a6] text-xl mb-6 mt-6 text-justify">
          As we work to enhance our services, this Privacy Policy may be updated periodically. Upon any changes, we will notify you by placing a notice on our website, sending an email, or other appropriate means. Please be aware that even if you have opted not to receive legal notice emails, these notices still apply to your use of our services. If you continue to use our services after changes are made, you agree to the updated terms.
        </p>

        {/* Privacy Policy Scope Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Privacy Policy Table of Contents</h2>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          What This Privacy Policy Covers
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          Personal Data
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          — Categories of Sources of Personal Data
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          — Categories of Personal Data We Collect
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          — Our Commercial or Business Purposes for Collecting or Disclosing Personal Data
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          — Other Permitted Purposes for Processing Personal Data
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          How We Disclose Your Personal Data
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          Tracking Tools, Advertising, and Opt-Out
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          Data Security
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          Personal Data of Children
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          Indian Consumer Privacy Rights
          </p>
          <p className="text-[#74B7FF] mb-1.5 text-xl text-semibold">
          Exercising Your Rights under Indian Privacy Laws
          </p>
          <p className="text-[#74B7FF] mb-10 text-xl text-semibold">
          Contact Information
          </p>

        </section>

        {/* Privacy Policy Covers */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold t text-white mb-4 	underline">What This Privacy Policy Covers</h2>
          <p className="text-[#a6a6a6] mb-10 text-xl text-semibold">
          This policy outlines how we handle "Personal Data," meaning information identifying or relating to a specific individual. It applies when you access or use our services and doesn't cover companies we don&apos;t control or people we don&apos;t manage.
          </p>
        </section>

        {/* Personal Data */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 underline">Personal Data</h2>
          <p className="text-[#a6a6a6] text-2xl mb-1.5 underline italic">
          Categories of Sources of Personal Data
          </p>
          <p className="text-[#a6a6a6] text-2xl mb-1.5 mt-4">
          You:
          </p>
          <ul className="list-disc text-xl list-inside mb-10 text-[#a6a6a6]">
            <li>When you create an account or use our services.</li>
            <li>When you voluntarily provide information via forms, surveys, or direct communication (email, support requests, etc.).</li>
            <li>Automatically through Cookies or other tracking technologies when you use our services.</li>
            <li> Through location data if using location-enabled apps or browsers.</li>
          </ul>
        </section>

        {/* Data Security Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Third Parties</h2>
          <p className="text-[#a6a6a6] text-xl italic underline">
          Vendors
          </p>
          <p className="text-[#a6a6a6] mb-4 text-xl">
          Analytics providers and customer support partners.
          </p>

          <p className="text-[#a6a6a6] text-xl italic underline">
          Advertising Partners
          </p>
          <p className="text-[#a6a6a6] mb-4 text-xl">
          Information from marketing-related interactions.
          </p>

          <p className="text-[#a6a6a6]  text-xl italic underline">
          Social Networks
          </p>
          <p className="text-[#a6a6a6] mb-10 text-xl">
          If you log in through a third-party account.
          </p>
        </section>

        {/* Your Rights Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Providing, Customizing and Improving the Services</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>Creating and managing your account or other user profiles.</li>
            <li>Processing orders or other transactions; billing.</li>
            <li>Processing orders or other transactions; billing.</li>
            <li> Providing you with the products, services or information you request.</li>

            <li>Meeting or fulfilling the reason you provided the information to us.</li>
            <li>Providing support and assistance for the Services.</li>
            <li>Improving the Services, including testing, research, internal analytics and product development.</li>
            <li>Personalizing the Services, website content and communications based on your preferences.</li>
            <li> Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws, such as California Consumer Privacy Act, as amended by the California Privacy Rights Act of 2020 (the "CCPA"), the Virginia Consumer Data Protection Act, the Colorado Privacy Act, the Connecticut Data Privacy Act, the Utah Consumer Privacy Act , the Texas Data Privacy and Security Act, the Oregon Consumer Privacy Act, and the Montana Consumer Data Privacy Act (collectively, the "State Privacy Laws").</li>
          </ul>
         
        </section>

         {/* Your Rights Section */}
         <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Marketing the Services</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>Marketing and selling the Services.</li>
            <li>Showing you advertisements, including interest-based or online behavioral advertising.</li>
          </ul>
         
        </section>

         {/* Your Rights Section */}
         <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Corresponding with You</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>Responding to correspondence that we receive from you, contacting you when necessary or requested, and sending you information about Young CEO Entertainment or the Services.</li>
            <li>Sending emails and other communications according to your preferences or that display content that we think will interest you.</li>
          </ul>
         
        </section>

        <section className="mb-6">
          <h2 className="text-xl text-center text-[#a6a6a6] mb-10 italic underline"> 
          Other Permitted Purposes for Processing Personal Data
          </h2> 
         
        </section>
           
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Meeting Legal Requirements and Enforcing Legal Terms</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>Fulfilling our legal obligations under applicable law, regulation, court order or other legal process, such as preventing, detecting and investigating security incidents and potentially illegal or prohibited activities.</li>
            <li> Protecting the rights, property or safety of you, YCE or another party.</li>
            <li>Enforcing any agreements with you.</li>
            <li>Responding to claims that any posting or other content violates third-party rights.</li>
          </ul>
         
        </section>


        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Business Transfers</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>In connection with a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business..</li>
           
          </ul>
         
        </section>


        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Aggregating, De-Identifying, Anonymizing Data</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-6 text-justify text-[#a6a6a6]">
            <li>We may create aggregated, de-identified or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user.</li>
          </ul>
          <p className="text-[#a6a6a6] mb-4 text-xl">
          We may create aggregated, de-identified or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user.
          </p>
        </section>
       
        <section className="mb-6">
          <h2 className="text-xl text-center text-[#a6a6a6] mb-6 italic underline"> 
          Purposes for Processing "Sensitive Personal Data"
           </h2> 
           <p className="text-[#a6a6a6] text-justify mb-10 text-xl">
           Please note that we only collect "sensitive" categories of Personal Data for the purposes of Meeting Legal Requirements and Enforcing Legal Terms (described above) and Corresponding with You (also described above) as required to provide our Services to you. We do not process "sensitive" categories of Personal Data for the purpose of inferring characteristics about you.
          </p>
        </section>


        <section className="mb-6">
          <h2 className="text-xl font-semibold t text-white mb-4 	underline">How We Disclose Your Personal Data</h2>
          <p className="text-[#a6a6a6] mb-10 text-xl text-semibold">
          We disclose your Personal Data to the categories of service providers and other parties listed in this section. Depending on state laws that may be applicable to you, some of these disclosures may constitute a "sale" of your Personal Data. For more information, please refer to the <span className="text-[#74B7FF]"> Targeted Advertising,  "Sharing," and "Selling"  </span> section.
          </p>
        </section>
     
         
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Service Providers</li>
           </ul>
          </h2>

          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>Hosting, technology and communication providers.</li>
            <li>Support and customer service vendors.</li>
          </ul>
         
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li>Advertising Partners - <span className="font-normal text-[#A6A6A6]"> These parties help us market our services and provide you with other offers that may be of interest to you. They include: </span></li>
           </ul>
          </h2>


          <ul className="list-disc text-xl list-inside mb-10 text-justify text-[#a6a6a6]">
            <li>Ad networks.</li>
            <li>Support and customer service vendors.</li>
          </ul>

        </section>
         

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li> Analytics Partners - <span className="font-normal text-[#A6A6A6]"> These parties provide analytics on web traffic or usage of the Services. They include: </span></li>
           </ul>
          </h2>


          <ul className="list-disc text-xl list-inside text-justify text-[#a6a6a6]">
            <li>Companies that track how users found or were referred to the Services.</li>
            <li>Companies that track how users interact with the Services.</li>
          </ul>

        </section>



        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li> Business Partners - <span className="font-normal text-[#A6A6A6]">  These parties partner with us in offering various services. They include: </span></li>
           </ul>
          </h2>


          <ul className="list-disc text-xl list-inside text-justify text-[#a6a6a6]">
            <li>Businesses that you have a relationship with.</li>
            <li> Musicians or content creator customers that you interact with. </li>
          </ul>

        </section>


        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4"> 
          <ul className="list-disc text-xl list-inside">
          <li> Parties You Authorize, Access or Authenticate </li>
           </ul>
          </h2>


          <ul className="list-disc text-xl list-inside text-justify text-[#a6a6a6]">
            <li>Third parties you access through the services.
            We use YouTube API services to provide you with YouTube videos, YouTube Music, or other YouTube content or services. When you engage with such products or services, Google LLC ("Google") will receive certain Personal Data in connection with your engagement. Please see Youtube's Terms of Service and Google's Privacy Policy for information on Google's use and storage of your Personal Data.</li>
            <li> Social media services. </li>
          </ul>
          </section>

          <section className="text-[#A6A6A6] text-xl mb-10">
          <p className="underline text-xl mb-6 itlaic"> Legal Obligations </p>
          <p className="text-[#A6A6A6] text-xl text-justify"> All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices. </p>
          </section>


          <section className="text-[#A6A6A6] text-xl mb-10">
          <p className="underline text-xl mb-6 itlaic"> Business Transfers </p>
          <p className="text-[#A6A6A6] text-xl text-justify"> All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices. </p>
          </section>
           
          
          <section className="text-xl mb-10">
          <p className="text-xl text-white mb-6 underline"> Tracking Tools, Advertising and Opt-Out </p>
          <p className="text-[#A6A6A6] text-xl text-justify"> All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices. </p>
          </section>
          

          <section className="text-[#A6A6A6] text-xl mb-10">
           <p className="text-[#A6A6A6] underline mb-6">We use the following types of Cookies:</p>
          <ul className="list-disc text-justify list-inside">
              <li className='mb-4'> Essential Cookies. Essential Cookies are required for providing you with features or services that you have requested. For example, certain Cookies enable you to log into secure areas of our Services. Disabling these Cookies may make certain features and services unavailable.</li>
               
              <li className='mb-4'> Functional Cookies. Functional Cookies are used to record your choices and settings regarding our Services, maintain your preferences over time and recognize you when you return to our Services. These Cookies help us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region). </li>

              <li className='mb-4'> Performance/Analytical Cookies. Performance/Analytical Cookies allow us to understand how visitors use our Services. They do this by collecting information about the number of visitors to the Services, what pages visitors view on our Services and how long visitors are viewing pages on the Services. Performance/Analytical Cookies also help us measure the performance of our advertising campaigns in order to help us improve our campaigns and the Services' content for those who engage with our advertising. For example, Google's uses cookies in connection with its Google Analytics services. Google's ability to use and share information collected by Google Analytics about your visits to the Services is subject to the Google Analytics Terms of Use and the Google Privacy Policy. You have the option to opt-out of Google's use of Cookies by visiting the Google advertising opt-out page at www.google.com/privacy_ads.html or the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout/. </li> 
              
              <li className="underline"> Retargeting/Advertising Cookies.Retargeting/Advertising Cookies collect data about your online activity and identify your interests so that we can provide advertising that we believe is relevant to you. For more information about this, please see the 'Information about Interest-Based Advertisements' section below.</li>
          </ul>
          </section>
           
          <section className="text-[#A6A6A6] text-xl mb-10 text-justify">
           <p className="mb-6">You can decide whether or not to accept Cookies through your internet browser's settings. Most browsers have an option for turning off the Cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new Cookie in a variety of ways. You can also delete all Cookies that are already on your device. If you do this, however, you may have to manually adjust some preferences every time you visit our website and some of the Services and functionalities may not work.</p>
           
           <p className="">  To explore what Cookie settings are available to you or to modify your preferences with respect to Cookies, you can access your Cookie management settings by clicking the "cooking settings" tab at the bottom of our website. To find out more information about Cookies generally, including information about how to manage and delete Cookies, please visit http://www.allaboutcookies.org/ or https://ico.org.uk/for-the-public/online/cookies/ if you are located in the European Union.</p>
          </section>


          <section className="text-[#A6A6A6] text-xl mb-10 text-justify">
           <p className="mb-6 underline italic"> Information about Interest-Based Advertisements: </p>
           
           <p className="">  We may serve advertisements, and also allow third-party ad networks, including third-party ad servers, ad agencies, ad technology vendors and research firms, to serve advertisements through the Services. These advertisements may be targeted to users who fit certain general profile categories or display certain preferences or behaviors ("Interest-Based Ads"). Information for Interest-Based Ads (including Personal Data) may be provided to us by you, or derived from the usage patterns of particular users on the Services and/or services of third parties. Such information may be gathered through tracking users' activities across time and unaffiliated properties, including when you leave the Services. To accomplish this, we or our service providers may deliver Cookies, including a file (known as a "web beacon") from an ad network to you through the Services. Web beacons allow ad networks to provide anonymized, aggregated auditing, research and reporting for us and for advertisers. Web beacons also enable ad networks to serve targeted advertisements to you when you visit other websites. Web beacons allow ad networks to view, edit or set their own Cookies on your browser, just as if you had requested a web page from their site. </p>
          </section>

        
           
          <section className=" text-xl mb-10 text-justify">
           <p className="mb-6 underline text-white"> Data Security </p>
           
           <p className="text-[#A6A6A6]"> We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures based on the type of Personal Data and how we are processing that data. You should also help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanism; limiting access to your computer or device and browser; and signing off after you have finished accessing your account. Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure. </p>
          </section>


          <section className=" text-xl mb-10 text-justify">
           <p className="mb-6 underline text-white"> Data Rentention </p>
           
           <p className="text-[#A6A6A6] mb-4"> We retain Personal Data about you for as long as necessary to provide you with our Services or to perform our business or commercial purposes for collecting your Personal Data. When establishing a retention period for specific categories of data, we consider who we collected the data from, our need for the Personal Data, why we collected the Personal Data, and the sensitivity of the Personal Data. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally. </p>
          
            
            <ul className="text-[#A6A6A6] list-disc list-inside text-justify"> 
                 <p className="mb-4"> For Example: </p>
              <li> 
              We retain your profile information and credentials for as long as you have an account with us.
              </li>
               <li> We retain your payment data for as long as we need to process your purchase or subscription.</li>
            <li> 
            We retain your device/IP data for as long as we need it to ensure that our systems are working appropriately, effectively and efficiently.
            </li>
            </ul>
          </section>



          <section className=" text-xl mb-10 text-justify">
           <h2 className="mb-6 underline text-white"> Exercising Your Rights under Indian Privacy Laws </h2>
           
           <p className="text-[#A6A6A6] mb-4"> If you reside in India, you may have certain rights regarding your personal data under the applicable Indian privacy laws, including the Digital Personal Data Protection Act, 2023. Please refer to the 'Exercising Your Rights under Indian Privacy Laws' section below for instructions on how to exercise these rights.</p>
           
           <p className="text-[#A6A6A6] mb-6"> Please note that we may process Personal Data of our customers' end users or employees in connection with the services we provide to our customers. If we are processing your Personal Data as a data processor on behalf of another entity, you should contact that entity (the data fiduciary) to address your rights regarding such data. </p>
            
            <ul className="text-[#A6A6A6] list-decimal list-inside text-justify"> 
                 <p className="mb-6"> Your rights, as outlined by Indian law, include but are not limited to:</p>
              <li> 
              Right to Access: You can request access to the personal data we have about you.
              </li>
               <li> Right to Correction and Erasure: You may request correction of inaccurate data or deletion of data that is no longer necessary.</li>
            <li> 
            Right to Data Portability: Where applicable, you can request a copy of your data in a commonly used format.
            </li>
            <li>
            Right to Consent Withdrawal: You have the right to withdraw your consent for data processing at any time, where consent is the basis of processing.
            </li>
            <li>
            Right to Grievance Redressal: You may lodge complaints if your privacy rights are violated.
            </li>
            </ul>
          </section>

        
         <section className="text-xl mb-10">
            <h2 className="underline text-white"> Data Privacy Framework(s) </h2>

            <span className="text-[#A6A6A6] text-justify">
              <p className="mb-4">  Young CEO Entertainment complies with Indian data protection regulations, including the Information Technology Act (2000) and upcoming Personal Data Protection Bill (PDPB). For international users, we adhere to relevant privacy standards, such as GDPR for EU citizens and equivalent frameworks in other regions. We prioritize secure handling of personal data and ensure transparency in how it’s collected, used, and shared. Users can exercise their rights to access, correct, or delete data by contacting us.</p>
              <p> For international compliance queries, please reach out to our support team. </p>
            </span>
         </section>
         
         <section className="text-xl mb-10">
            <h2 className="underline text-white"> Contact Information: </h2>

            <span className="text-[#A6A6A6] text-justify">
              <p className="mb-4">  If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data or your choices and rights regarding such collection and use, please do not hesitate to contact us at:</p>
            </span>
           
            <span className=" text-[#74B7FF]">
             <ul className="list-disc list-inside ml-4"> 
              <li className="mb-4 list-inside">  https://youngceoentertainment.com/   </li>
               <li className="mb-4">  connectwithus@youngceoentertainment.com </li>
             </ul>
            </span>
            
            <span>
            <ul className="list-disc list-inside text-white">
            <li>  <span className="text-white"> Address: </span> <span className="text-[#A6A6A6]"> 2nd Floor Training Room, COEP Bhau institute, Wellesley Rd, Shivajinagar, Pune, Maharashtra 411005</span> </li> 

               </ul>
            </span>
           
         </section>



         
        {/* Footer */}
        <footer className="border-t border-gray-200 pt-4 mt-6">
          <p className="text-sm text-white">
            © 2024 Young CEO Entertainment. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
