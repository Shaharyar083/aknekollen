import React, { useEffect } from "react";
import "./privacy.css";
import Navbar from "../Navbar/Navbar";
import FooterMain from "../FooterMain/Footer"
const Privacy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }, [])
  return (
    <>
      <Navbar flag={false} />
      <div className="privacy_page">
        <div className="privacy_main">
          <h3 className="text-center">Privacy Policy</h3>
          <div className="privacy_data">
            <p style={{ background: "none", color: "#3d3934" }}>
              Acnecheck.ae protects your personal privacy and works hard to
              ensure that your personal information is protected when using our
              services. Below is our privacy policy which describes how we
              process, use and protect your personal data and the rights you as
              a registrant have.
            </p>

            <div className="privcydiv_block">
              <h5>Generally</h5>
              <p>
                This privacy policy (the "Privacy Policy") describes how
                acnecheck.ae, (hereinafter referred to as "Checkers") processes
                your personal data.
              </p>
              <p>
                The checkers are caregivers and thus responsible for personal
                data when personal data is processed in connection with the
                provision of health and medical care.
              </p>
              <p>
                In the Privacy Policy, e.g. for which categories of personal
                data we process, for what purposes we process them and on what
                legal basis we support the processing. We also account for who
                may have access to and process the data, the principles for
                thinning, which third parties we may share the personal data
                with, where the personal data is processed and your rights as
                registered in the form of right to information, correction and
                deletion etc.
              </p>
              <p>
                We may need to update or change the Privacy Policy from time to
                time. If the changes are significant, we will inform you in an
                appropriate manner and ask you to take note of the changes that
                have been made. The latest version of the Privacy Policy can
                always be found on our website https://acnecheck.ae
              </p>
              <p>
                We hope that this Privacy Policy answers your questions about
                our processing of your personal data. If you have further
                questions or concerns, you are always welcome to contact us at
                the address above.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>How do we process your personal data? </h5>
              <p>
                We collect your information directly from you when you contact
                acnecheck.ae. When you register, we can retrieve your
                information via the electronic identification service you use or
                the population register.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>Purposes of treatment, legal basis and storage period</h5>
              <p>
                Your personal data will not be used in a way that is
                incompatible with the purposes for which the data was collected.
                We process your information for the purposes set out below.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>
                Provide care and fulfill our legal obligations as caregivers.
              </h5>
              <p>
                We also use your personal information, including your User
                Information, to provide you with healthcare and make medical
                diagnoses as well as to keep records. When you visit or contact
                acnecheck.ae, we ask questions to make medical assessments and
                give you advice. For these purposes, you can provide symptom
                descriptions and other information about your health ("Patient
                Information").
              </p>
              <p>
                The legal basis for the processing of personal data for this
                purpose is that it is necessary to be able to provide you with
                health care and for us to be able to fulfill our legal
                obligations as a care provider.
              </p>
              <p>
                Furthermore, we as care providers are obliged to use your
                Patient Information to fulfill the legal obligations that apply
                to us as care providers, which means, among other things, that
                we must keep a record of your care. By law, we are obliged to
                keep journal documents for at least 5 years from the last note.
              </p>
            </div>

            <div className="privcydiv_block">
              <h5>Fulfill legal obligations</h5>
              <p>
                We may also process your personal data so that we can fulfill
                our legal obligations in accordance with law, judgments or
                government decisions. The requirements may include requirements
                regarding accounting, patient data, and health and medical care
                legislation.
              </p>
              <p>
                The legal basis for the processing of personal data for this
                purpose is that it is necessary for us to be able to fulfill our
                legal obligations.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>How we share your information</h5>
              <p>
                We do not share your information with any third party except in
                the manner described below.
              </p>
              <p>
                Other care providers: If you seek care from a care provider
                other than us, we may, with your consent, publish your medical
                record information.
              </p>
              <p>
                Our suppliers: We may use third parties to manage one or more
                aspects of our business, including our personal data processing.
                We may share personal information with these third parties in
                order for them to perform services on our behalf, such as
                sending messages and marketing communications to you, storing
                our data and providing other IT services to us. When we use
                suppliers in accordance with this section, we establish personal
                data assistant agreements and perform other appropriate measures
                to ensure that your personal data is processed in a manner that
                complies with this Privacy Policy.
              </p>
              <p>
                We can also share your personal information to e.g. to the
                police, or other government entity when we are obliged to do so
                by law.
              </p>
            </div>

            <div className="privcydiv_block">
              <h5>How we protect your information</h5>
              <p>
                We take appropriate protection measures and maintain security
                standards to protect your personal data against unauthorized
                access, unauthorized disclosure and misuse by, among other
                things, using accessibility restriction for access to your data.
                Your personal information is stored on files that are only
                available to our employees, agents and service providers who
                need the information for the performance of their services.
              </p>
              <p>
                We use technical tools such as firewalls and passwords, and we
                ensure that our employees are trained in the importance of
                maintaining security and confidentiality in relation to the
                personal data we process and ensure that confidentiality
                agreements are in place.
              </p>
              <p>
                As caregivers, we are also subject to a statutory duty of
                confidentiality. Only our employees who need the information to
                participate in your care or for their work in health care may
                take part of it.
              </p>
            </div>

            <div className="privcydiv_block">
              <h5>Where we process your personal data</h5>
              <p>
                Our goal is to always process personal data within the UAE.
                However, it may happen that personal data is shared with
                suppliers to us who are either themselves or through
                subcontractors established or store information in a country
                outside the UAE. In such a case, we will take all reasonable
                legal, organizational and technical measures required to ensure
                that the level of protection for the treatment corresponds to
                that within the UAE. Such a level of protection exists, among
                other things, if the country in question already ensures an
                adequate level of protection in accordance with a decision by
                the UAE or by using other appropriate protection measures such
                as standard contract clauses or approved codes of conduct in our
                agreements with such suppliers.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>Your Rights</h5>
              <p>
                This section describes your rights as a registrant. You can
                always assert these rights by contacting us at info@acnecheck.ae
              </p>
              <p>
                The right of access, your journal and information about access
                to your personal data
              </p>
              <p>
                If you want information about what personal data we process
                about you, you can request access to the data. The information
                will then be provided in the form of a register extract that
                states which personal data we process, for what purposes we
                process them, where the data has been obtained from, which third
                parties the data has been transferred to and how long the data
                will be stored.
              </p>
              <p>
                As a general rule, you also have the right to take part in your
                journal documents. If it would be harmful for you to take part
                in your medical record document, it may not be disclosed by law.
                Therefore, the person responsible for the medical record, which
                is often the doctor responsible, makes an examination of all
                extraditions.
              </p>
              <p>
                You also have the right to receive information about the access
                to your personal data in your record, including which direct
                access and other electronic access to your record has occurred.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>The right to rectification</h5>
              <p>
                You have the right to have incorrect information about you
                corrected without delay. You also have the right to complete
                incomplete information
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>The right to block</h5>
              <p>
                You have the right to block information in your medical record,
                which means that no other care provider can access it, e.g. in
                the case of unified record keeping.
              </p>
            </div>

            <div className="privcydiv_block">
              <h5>The right to deletion</h5>
              <p>
                You have the right to have your personal data deleted by us in
                certain circumstances, if the personal data is no longer
                necessary to fulfill the purposes for which they were collected
                or processed, if the personal data processing is based on your
                consent and you revoke this, if you have objected to processing
                of personal data and we do not have a legitimate interest that
                outweighs your interest, if the personal data has been processed
                illegally or if the personal data must be deleted in order to
                fulfill a legal obligation. However, in some cases we have the
                right to oppose the deletion of your personal data and we will
                inform you if it would be applicable.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>The right to limit treatment</h5>
              <p>
                You have the right to demand that we restrict the processing of
                your personal data in certain cases if you dispute the accuracy
                of the personal data during the time it takes for us to check
                whether the data is correct, if the processing is illegal and
                you object to the data being deleted and instead request a
                restriction. , if we no longer need the personal data but you do
                need them in order to establish, assert or defend legal claims
                or if you have objected to a processing based on our legitimate
                interest during the time we check whether our interest outweighs
                your interests .
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>The right to object</h5>
              <p>
                You have the right to object to the processing of your personal
                data that takes place on the basis of our legitimate interest.
                If this happens, in order to continue the treatment, we must be
                able to show compelling legitimate reasons that outweigh your
                interests, rights and freedoms.
              </p>
            </div>
            <div className="privcydiv_block">
              <h5>The right to data portability</h5>
              <p>
                If we process your personal data based on an agreement with you
                or your consent, you have the right to obtain the personal data
                that you have provided to us and that concerns you in an
                electronic format that is generally used when This is
                technically possible, and this can be done in an automated way.
                You have the right, where applicable, to transfer such
                information to another personal data controller (data
                portability).
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterMain />
    </>
  );
};

export default Privacy;
