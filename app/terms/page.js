
'use client';
import '@/app/style.css';
import { FaAngleLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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
          Young CEO Entertainment Terms & Conditions
        </h1>

       
         
        <p className="text-[#757575] mb-2">
          Last Updated: October 22nd, 2024
        </p>

        <section className="mb-10">
        <p className="mb-4 mt-4 text-justify text-xl">
          <span className="text-[#a6a6a6]"> Young CEO Entertainment Private Limited ("Young CEO Entertainment," "we," or "us") provides access to the Young CEO Entertainment website, currently located at [youngceoentertainment.com] and all associated websites and subpages, including, without limitation, related mobile applications that we may offer (collectively, the “Site”), along with all available features, functionalities, and services offered by us through the Site and mobile applications (collectively, the “Services”). Our Services include, but are not limited to, music distribution, artist promotional tools, analytics dashboards, and social media engagement services.</span>
          
        </p>

        <p className="text-[#a6a6a6] text-justify text-xl">
        These terms and conditions (“Terms”) govern your access to and use of the Services, whether as a registered user or otherwise. By accessing or using any part of the Services, you acknowledge that you have read, understood, and agree to comply with these Terms. If you do not agree with these Terms, you may not access or use the Services.
        Your use of Young CEO Entertainment’s music distribution services, where applicable, is also governed by the Young CEO Music Distribution Agreement
        </p>
            </section>
        {/* Combined paragraph with spans for different colors */}
        


        <section className="mb-10">
          <h2 className="text-white text-xl">  
          Terms of Access and Use
          </h2>

          <span className="text-[#A6A6A6] text-xl">
              <p className="mb-4"> Subject to these Terms, we grant you a limited, non-exclusive, non-transferable personal license to access and use the Services provided by Young CEO Entertainment. By accessing and using our Services, you represent and warrant that you are over eighteen (18) years of age or the legal age of majority in your jurisdiction, or, if under 18 but at least thirteen (13) years old (a “Minor”), that you are using the Services with the consent of your parent or legal guardian. If you are the parent or legal guardian of a Minor, you agree to fully indemnify and hold harmless Young CEO Entertainment for any breach of these Terms by the Minor. If you are under 13 years old, you are not permitted to use the Services.</p>
          <p className="mb-4">
          If you are using the Services as an authorized agent of an individual or entity, you represent and warrant that you have the necessary authority to do so, and your use of the Services will not relieve you of personal responsibility for any use of the Services. The rights granted to you under these Terms may be revoked by Young CEO Entertainment at any time at our sole discretion.
          </p>
          </span>
        </section>


        <section className="mb-10">
          <h2 className="text-white text-xl">  
          Registration and Accounts
          </h2>
          <span className="text-[#A6A6A6] text-xl">
          <p>
          To access certain features of the Services provided by Young CEO Entertainment, you may need to register for an account ("Account") and provide specific information as requested by the registration form. You represent and warrant that all the information you provide during registration is accurate, truthful, and up-to-date, and you agree to maintain the accuracy of this information. You are responsible for keeping your Account login details secure and for all activities that occur under your Account. You agree to promptly notify us of any unauthorized use or suspected unauthorized use of your Account, as well as any other breach of security. We are not liable for any loss or damage resulting from unauthorized access to your Account due to your failure to comply with these obligations.
          </p>
          </span>
        </section>

        <section className="mb-10">
          <h2 className="text-white text-xl">  
          Payments
          </h2>
          <span className="text-[#A6A6A6] text-xl">
          <p>
          Certain features or services offered by Young CEO Entertainment may require payment of fees. The amount of these fees will be determined by us in our sole discretion and may change from time to time without prior notice. Payments must be made using a valid payment method, such as a credit or debit card. We currently accept Visa, MasterCard, and American Express, though we reserve the right to modify acceptable payment methods. By using the Services, you authorize Young CEO Entertainment to charge the appropriate fees, along with any applicable taxes, to the payment method provided. Any refunds are issued at our sole discretion. If we are unable to process payment using your provided method, we reserve the right to suspend your access to the Services until payment is successfully made.
           </p>
          </span>
        </section>

        <section className="mb-10">
          <h2 className="text-white text-xl">  
          Privacy
          </h2>
          <span className="text-[#A6A6A6] text-xl">
          <p>
          For details regarding how we collect, use, and protect the information you provide to us, please review our Privacy Policy, which can be found here. This Privacy Policy is incorporated into these Terms by reference. By agreeing to these Terms, you consent to our collection, use, and disclosure of your personal information in accordance with the Privacy Policy.
           </p>
          </span>
        </section>
        
        <section className="mb-10">
          <h2 className="text-white text-xl">  
          User Content and Activity
          </h2>
          <span className="text-[#A6A6A6] text-xl">
          <p className="mb-4">
          Young CEO Entertainment’s Services may allow users to submit, upload, store, and share content, including but not limited to reviews, comments, questions, messages, audio recordings, musical compositions, images, artwork, photographs, audio-visual content, text, and other materials ("User Content"). Users may be able to share this User Content publicly or privately using the features provided by the Services from time to time. In addition, registered users may be able to make certain User Content available for public viewing and sharing by other users (both registered and unregistered). Certain features may also allow private messaging and file storage/sharing for private use. These activities are collectively referred to as "User Activity."
           </p>

           <p className="mb-4">
           You are solely responsible for all User Content you submit through the Services, as well as for your overall User Activity. Young CEO Entertainment acts as a passive conduit for your distribution, storage, publication, or other use of your User Content at your direction. Young CEO Entertainment does not claim ownership of your User Content, but by uploading, publishing, or submitting User Content to the Services (excluding private messages), you grant Young CEO Entertainment and other users a non-exclusive, transferable, fully paid, worldwide license to use, copy, perform, display, communicate, stream, and distribute your User Content for any purpose in connection with the Services.
           For private messages and files uploaded via private sharing tools, you also grant us a non-exclusive, transferable, fully paid, worldwide license to use, store, host, and share this content as directed by you, until it is deleted from the Services or otherwise permanently removed.
           </p>

           <p className="mb-4"> 
           You represent, warrant, and agree that:
           </p>

           <ul className="mb-4"> 
            <li>(a) You have the right to agree to these Terms;</li>
            <li> (b) Your User Content is either original to you, in the public domain, or used with the necessary permissions or licenses from the original owner(s);</li>
            <li>(c) Your User Content does not violate any third-party rights, including intellectual property, privacy, or publicity rights;</li>
            <li> (d) Young CEO Entertainment is not liable for any payments or other obligations to third parties in connection with the use of your User Content; and</li>
            <li>(e) Your User Content does not include unlawful, harmful, abusive, defamatory, harassing, or otherwise objectionable material or content that may be deemed “hate speech.”</li>
           </ul>

           <p className="mb-4">
           Young CEO Entertainment reserves the right to remove any User Content or other content that violates these Terms. We take no responsibility for User Content shared, stored, or posted by you or other users and assume no liability for any resulting loss or damage. You agree that any loss or damage arising from User Content you send, upload, or make available through the Services is solely your responsibility.
           </p>

           <p className="mb-4">
           You understand that while using the Services, you may encounter User Content that you find offensive or objectionable. Young CEO Entertainment is not liable for any damages arising from such content.
           </p>

           <p className="mb-4">
           For the purposes of these Terms, "Intellectual Property Rights" include patent rights, copyrights, trademarks, service marks, trade dress, moral rights, publicity rights, trade secrets, and other related rights, as well as any applications or registrations under any jurisdiction's laws.                                 
           </p>
          </span>
        </section>


        <section className="mb-10 text-xl">
          <h2 className="text-white text-2xl mb-4"> Restrictions </h2>
          <span className="text-[#A6A6A6]">
            <p> You agree not to engage in User Activity, submit User Content, or send Direct Messages that:</p>
             <ul className="list-disc list-inside"> </ul>
             <li> May cause harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or illness to you, others, or third parties;</li>
             <li> Could lead to any damage or loss to property or individuals;</li>
             <li> Exploits or endangers children by exposing them to inappropriate content or seeking personal information;</li>
             <li> Constitutes or contributes to criminal activity or tortious conduct;</li>
             <li> Contains content deemed unlawful, harmful, abusive, racially or ethnically offensive, defamatory, infringing, or invasive of personal privacy or publicity rights, harassing, humiliating, libelous, threatening, profane, or objectionable, or which could be categorized as “hate speech”;</li>
             <li> Involves illegal content, including insider information under securities law or trade secrets of third parties;</li>
             <li> Contains content that violates any contractual, fiduciary, or legal obligation;</li>
             <li> Includes false, inaccurate, or outdated information.</li>
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
