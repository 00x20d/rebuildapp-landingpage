import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - Rebuild",
  description:
    "How Rebuild collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>PRIVACY POLICY</h2>
      <p>Last updated August 12, 2026</p>
      <p>
        This Privacy Notice for Daniel Juergens (&quot;we,&quot; &quot;us,&quot;
        or &quot;our&quot;), describes how and why we might access, collect,
        store, use, and/or share (&quot;process&quot;) your personal
        information when you use our services (&quot;Services&quot;), including
        when you:
      </p>
      <ul>
        <li>
          Download and use our mobile application (Rebuild: Earn Your Screen
          Time), or any other application of ours that links to this Privacy
          Notice
        </li>
        <li>
          Use Rebuild: Earn Your Screen Time. A productivity tool that helps
          users decrease their screen time and help them build a better
          relationship with technology.
        </li>
        <li>
          Engage with us in other related ways, including any marketing or
          events
        </li>
      </ul>
      <p>
        Questions or concerns? Reading this Privacy Notice will help you
        understand your privacy rights and choices. We are responsible for
        making decisions about how your personal information is processed. If
        you do not agree with our policies and practices, please do not use our
        Services. If you still have any questions or concerns, please contact
        us at <a href="mailto:hello@tryrebuild.app">hello@tryrebuild.app</a>.
      </p>

      <h2>SUMMARY OF KEY POINTS</h2>
      <p>
        This summary provides key points from our Privacy Notice, but you can
        find out more details about any of these topics by clicking the link
        following each key point or by using our{" "}
        <a href="#table-of-contents">table of contents below</a> to find the
        section you are looking for.
      </p>
      <ul>
        <li>
          <strong>What personal information do we process?</strong> When you
          visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use.{" "}
          <a href="#what-information-do-we-collect">Learn more about personal information you disclose to us</a>.
        </li>
        <li>
          <strong>Do we process any sensitive personal information?</strong>{" "}
          Some of the information may be considered &quot;special&quot; or
          &quot;sensitive&quot; in certain jurisdictions, for example your
          racial or ethnic origins, sexual orientation, and religious beliefs.
          We do not process sensitive personal information.
        </li>
        <li>
          <strong>Do we collect any information from third parties?</strong> We
          do not collect any information from third parties.
        </li>
        <li>
          <strong>How do we process your information?</strong> We process your
          information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to
          comply with law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so.{" "}
          <a href="#how-do-we-process-your-information">Learn more about how we process your information</a>.
        </li>
        <li>
          <strong>
            In what situations and with which parties do we share personal
            information?
          </strong>{" "}
          We may share information in specific situations and with specific
          third parties.{" "}
          <a href="#when-and-with-whom-do-we-share-your-personal-information">Learn more about when and with whom we share your personal information</a>.
        </li>
        <li>
          <strong>How do we keep your information safe?</strong> We have
          adequate organizational and technical processes and procedures in
          place to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties
          will not be able to defeat our security and improperly collect,
          access, steal, or modify your information.{" "}
          <a href="#how-do-we-keep-your-information-safe">Learn more about how we keep your information safe</a>.
        </li>
        <li>
          <strong>What are your rights?</strong> Depending on where you are
          located geographically, the applicable privacy law may mean you have
          certain rights regarding your personal information.{" "}
          <a href="#what-are-your-privacy-rights">Learn more about your privacy rights</a>.
        </li>
        <li>
          <strong>How do you exercise your rights?</strong> The easiest way to
          exercise your rights is by submitting a data subject access request,
          or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </li>
        <li>
          <strong>Want to learn more about what we do with any information we
          collect?</strong> Review the Privacy Notice in full.
        </li>
      </ul>

      <h2 id="table-of-contents">TABLE OF CONTENTS</h2>
      <ul className="toc">
        <li>
          <a href="#what-information-do-we-collect">
            1. WHAT INFORMATION DO WE COLLECT?
          </a>
        </li>
        <li>
          <a href="#how-do-we-process-your-information">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </a>
        </li>
        <li>
          <a href="#what-legal-bases-do-we-rely-on-to-process-your-personal-information">
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
            INFORMATION?
          </a>
        </li>
        <li>
          <a href="#when-and-with-whom-do-we-share-your-personal-information">
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </a>
        </li>
        <li>
          <a href="#how-long-do-we-keep-your-information">
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </a>
        </li>
        <li>
          <a href="#how-do-we-keep-your-information-safe">
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </a>
        </li>
        <li>
          <a href="#do-we-collect-information-from-minors">
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </a>
        </li>
        <li>
          <a href="#what-are-your-privacy-rights">
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </a>
        </li>
        <li>
          <a href="#controls-for-do-not-track-features">
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </a>
        </li>
        <li>
          <a href="#do-united-states-residents-have-specific-privacy-rights">
            10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </a>
        </li>
        <li>
          <a href="#do-we-make-updates-to-this-notice">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </a>
        </li>
        <li>
          <a href="#how-can-you-contact-us-about-this-notice">
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </a>
        </li>
        <li>
          <a href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you">
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </a>
        </li>
      </ul>

      <h2 id="what-information-do-we-collect">
        1. WHAT INFORMATION DO WE COLLECT?
      </h2>
      <h3>Personal information you disclose to us</h3>
      <p>
        <strong>In Short:</strong> We collect personal information that you
        provide to us.
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      <p>
        <strong>Sensitive Information.</strong> We do not process sensitive
        information.
      </p>
      <p>
        <strong>Application Data.</strong> If you use our application(s), we
        also may collect the following information if you choose to provide us
        with access or permission:
      </p>
      <ul>
        <li>
          <strong>Push Notifications.</strong> We may request to send you push
          notifications regarding your account or certain features of the
          application(s). If you wish to opt out from receiving these types of
          communications, you may turn them off in your device&apos;s settings.
        </li>
      </ul>
      <p>
        This information is primarily needed to maintain the security and
        operation of our application(s), for troubleshooting, and for our
        internal analytics and reporting purposes. All personal information
        that you provide to us must be true, complete, and accurate, and you
        must notify us of any changes to such personal information.
      </p>

      <h2 id="how-do-we-process-your-information">
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We process your information to provide,
        improve, and administer our Services, communicate with you, for
        security and fraud prevention, and to comply with law.
      </p>
      <p>
        We process the personal information for the following purposes listed
        below. We may also process your information for other purposes only
        with your prior explicit consent.
      </p>
      <p>
        We process your personal information for a variety of reasons,
        depending on how you interact with our Services, including:
      </p>
      <ul>
        <li>
          <strong>
            To facilitate account creation and authentication and otherwise
            manage user accounts.
          </strong>{" "}
          We may process your information so you can create and log in to your
          account, as well as keep your account in working order.
        </li>
        <li>
          <strong>To deliver and facilitate delivery of services to the
          user.</strong> We may process your information to provide you with
          the requested service.
        </li>
        <li>
          <strong>To request feedback.</strong> We may process your information
          when necessary to request feedback and to contact you about your use
          of our Services.
        </li>
        <li>
          <strong>To comply with our legal obligations.</strong> We may process
          your information to comply with our legal obligations, respond to
          legal requests, and exercise, establish, or defend our legal rights.
        </li>
      </ul>

      <h2 id="what-legal-bases-do-we-rely-on-to-process-your-personal-information">
        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We only process your personal information
        when we believe it is necessary and we have a valid legal reason (i.e.,
        legal basis) to do so under applicable law, like with your consent, to
        comply with laws, to provide you with services to enter into or fulfill
        our contractual obligations, to protect your rights, or to fulfill our
        legitimate business interests.
      </p>
      <p>
        If you are located in Canada, this section applies to you. We may
        process your information if you have given us specific permission
        (i.e., express consent) to use your personal information for a specific
        purpose, or in situations where your permission can be inferred (i.e.,
        implied consent). You can withdraw your consent at any time.
      </p>
      <p>
        In some exceptional cases, we may be legally permitted under applicable
        law to process your information without your consent, including, for
        example:
      </p>
      <ul>
        <li>
          If collection is clearly in the interests of an individual and
          consent cannot be obtained in a timely way
        </li>
        <li>For investigations and fraud detection and prevention</li>
        <li>For business transactions provided certain conditions are met</li>
        <li>
          If it is contained in a witness statement and the collection is
          necessary to assess, process, or settle an insurance claim
        </li>
        <li>
          For identifying injured, ill, or deceased persons and communicating
          with next of kin
        </li>
        <li>
          If we have reasonable grounds to believe an individual has been, is,
          or may be victim of financial abuse
        </li>
        <li>
          If it is reasonable to expect collection and use with consent would
          compromise the availability or the accuracy of the information and
          the collection is reasonable for purposes related to investigating a
          breach of an agreement or a contravention of the laws of Canada or a
          province
        </li>
        <li>
          If disclosure is required to comply with a subpoena, warrant, court
          order, or rules of the court relating to the production of records
        </li>
        <li>
          If it was produced by an individual in the course of their
          employment, business, or profession and the collection is consistent
          with the purposes for which the information was produced
        </li>
        <li>
          If the collection is solely for journalistic, artistic, or literary
          purposes
        </li>
        <li>
          If the information is publicly available and is specified by the
          regulations
        </li>
      </ul>
      <p>
        We may disclose de-identified information for approved research or
        statistics projects, subject to ethics oversight and confidentiality
        commitments
      </p>

      <h2 id="when-and-with-whom-do-we-share-your-personal-information">
        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We may share information in specific
        situations described in this section and/or with the following third
        parties.
      </p>
      <p>
        We may need to share your personal information in the following
        situations:
      </p>
      <ul>
        <li>
          <strong>Business Transfers.</strong> We may share or transfer your
          information in connection with, or during negotiations of, any
          merger, sale of company assets, financing, or acquisition of all or a
          portion of our business to another company.
        </li>
        <li>
          <strong>Offer Wall.</strong> Our application(s) may display a
          third-party hosted &quot;offer wall.&quot; Such an offer wall allows
          third-party advertisers to offer virtual currency, gifts, or other
          items to users in return for the acceptance and completion of an
          advertisement offer. Such an offer wall may appear in our
          application(s) and be displayed to you based on certain data, such as
          your geographic area or demographic information. When you click on an
          offer wall, you will be brought to an external website belonging to
          other persons and will leave our application(s). A unique identifier,
          such as your user ID, will be shared with the offer wall provider in
          order to prevent fraud and properly credit your account with the
          relevant reward.
        </li>
      </ul>

      <h2 id="how-long-do-we-keep-your-information">
        5. HOW LONG DO WE KEEP YOUR INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We keep your information for as long as
        necessary to fulfill the purposes outlined in this Privacy Notice
        unless otherwise required by law.
      </p>
      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this Privacy Notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice
        will require us keeping your personal information for longer than the
        period of time in which users have an account with us.
      </p>
      <p>
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any
        further processing until deletion is possible.
      </p>

      <h2 id="how-do-we-keep-your-information-safe">
        6. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </h2>
      <p>
        <strong>In Short:</strong> We aim to protect your personal information
        through a system of organizational and technical security measures.
      </p>
      <p>
        We have implemented appropriate and reasonable technical and
        organizational security measures designed to protect the security of
        any personal information we process. However, despite our safeguards
        and efforts to secure your information, no electronic transmission over
        the Internet or information storage technology can be guaranteed to be
        100% secure, so we cannot promise or guarantee that hackers,
        cybercriminals, or other unauthorized third parties will not be able to
        defeat our security and improperly collect, access, steal, or modify
        your information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services
        within a secure environment.
      </p>

      <h2 id="do-we-collect-information-from-minors">
        7. DO WE COLLECT INFORMATION FROM MINORS?
      </h2>
      <p>
        <strong>In Short:</strong> We do not knowingly collect data from or
        market to children under 18 years of age or the equivalent age as
        specified by law in your jurisdiction.
      </p>
      <p>
        We do not knowingly collect, solicit data from, or market to children
        under 18 years of age or the equivalent age as specified by law in your
        jurisdiction, nor do we knowingly sell such personal information. By
        using the Services, you represent that you are at least 18 or the
        equivalent age as specified by law in your jurisdiction or that you are
        the parent or guardian of such a minor and consent to such minor
        dependent&rsquo;s use of the Services. If we learn that personal
        information from users less than 18 years of age or the equivalent age
        as specified by law in your jurisdiction has been collected, we will
        deactivate the account and take reasonable measures to promptly delete
        such data from our records. If you become aware of any data we may have
        collected from children under age 18 or the equivalent age as
        specified by law in your jurisdiction, please contact us at{" "}
        <a href="mailto:hello@tryrebuild.app">hello@tryrebuild.app</a>.
      </p>

      <h2 id="what-are-your-privacy-rights">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
      <p>
        <strong>In Short:</strong> Depending on your state of residence in the
        US or in some regions, such as Canada, you have rights that allow you
        greater access to and control over your personal information. You may
        review, change, or terminate your account at any time, depending on
        your country, province, or state of residence.
      </p>
      <p>
        In some regions (like Canada), you have certain rights under applicable
        data protection laws. These may include the right (i) to request access
        and obtain a copy of your personal information, (ii) to request
        rectification or erasure; (iii) to restrict the processing of your
        personal information; (iv) if applicable, to data portability; and (v)
        not to be subject to automated decision-making. If a decision that
        produces legal or similarly significant effects is made solely by
        automated means, we will inform you, explain the main factors, and
        offer a simple way to request human review. In certain circumstances,
        you may also have the right to object to the processing of your
        personal information. You can make such a request by contacting us by
        using the contact details provided in the section{" "}
        <a href="#how-can-you-contact-us-about-this-notice">
          &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
        </a>{" "}
        below. We will consider and act upon any request in accordance with
        applicable data protection laws.
      </p>
      <p>
        <strong>Withdrawing your consent:</strong> If we are relying on your
        consent to process your personal information, which may be express
        and/or implied consent depending on the applicable law, you have the
        right to withdraw your consent at any time. You can withdraw your
        consent at any time by contacting us by using the contact details
        provided in the section{" "}
        <a href="#how-can-you-contact-us-about-this-notice">
          &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
        </a>{" "}
        below. However, please note that this will not affect the lawfulness of
        the processing before its withdrawal nor, when applicable law allows,
        will it affect the processing of your personal information conducted in
        reliance on lawful processing grounds other than consent.
      </p>
      <h3>Account Information</h3>
      <p>
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </p>
      <p>
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our
        legal terms and/or comply with applicable legal requirements.
      </p>
      <p>
        If you have questions or comments about your privacy rights, you may
        email us at <a href="mailto:hello@tryrebuild.app">hello@tryrebuild.app</a>.
      </p>

      <h2 id="controls-for-do-not-track-features">
        9. CONTROLS FOR DO-NOT-TRACK FEATURES
      </h2>
      <p>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (&quot;DNT&quot;) feature or
        setting you can activate to signal your privacy preference not to have
        data about your online browsing activities monitored and collected. At
        this stage, no uniform technology standard for recognizing and
        implementing DNT signals has been finalized. As such, we do not
        currently respond to DNT browser signals or any other mechanism that
        automatically communicates your choice not to be tracked online. If a
        standard for online tracking is adopted that we must follow in the
        future, we will inform you about that practice in a revised version of
        this Privacy Notice. California law requires us to let you know how we
        respond to web browser DNT signals. Because there currently is not an
        industry or legal standard for recognizing or honoring DNT signals, we
        do not respond to them at this time.
      </p>

      <h2 id="do-united-states-residents-have-specific-privacy-rights">
        10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </h2>
      <p>
        <strong>In Short:</strong> If you are a resident of California,
        Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
        Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
        Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have
        the right to request access to and receive details about the personal
        information we maintain about you and how we have processed it, correct
        inaccuracies, get a copy of, or delete your personal information. You
        may also have the right to withdraw your consent to our processing of
        your personal information. These rights may be limited in some
        circumstances by applicable law. More information is provided below.
      </p>
      <h3>Categories of Personal Information We Collect</h3>
      <p>
        The table below shows the categories of personal information we have
        collected in the past twelve (12) months. The table includes
        illustrative examples of each category and does not reflect the
        personal information we collect from you. For a comprehensive inventory
        of all personal information we process, please refer to the section{" "}
        <a href="#what-information-do-we-collect">
          &quot;WHAT INFORMATION DO WE COLLECT?&quot;
        </a>
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Collected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A. Identifiers</td>
            <td>
              Contact details, such as real name, alias, postal address,
              telephone or mobile contact number, unique personal identifier,
              online identifier, Internet Protocol address, email address, and
              account name
            </td>
            <td>YES</td>
          </tr>
          <tr>
            <td>
              B. Personal information as defined in the California Customer
              Records statute
            </td>
            <td>
              Name, contact information, education, employment, employment
              history, and financial information
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>C. Protected classification characteristics under state or federal law</td>
            <td>
              Gender, age, date of birth, race and ethnicity, national origin,
              marital status, and other demographic data
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>D. Commercial information</td>
            <td>
              Transaction information, purchase history, financial details, and
              payment information
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>E. Biometric information</td>
            <td>Fingerprints and voiceprints</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>F. Internet or other similar network activity</td>
            <td>
              Browsing history, search history, online behavior, interest data,
              and interactions with our and other websites, applications,
              systems, and advertisements
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>G. Geolocation data</td>
            <td>Device location</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>H. Audio, electronic, sensory, or similar information</td>
            <td>
              Images and audio, video or call recordings created in connection
              with our business activities
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>I. Professional or employment-related information</td>
            <td>
              Business contact details in order to provide you our Services at
              a business level or job title, work history, and professional
              qualifications if you apply for a job with us
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>J. Education Information</td>
            <td>Student records and directory information</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>
              K. Inferences drawn from collected personal information
            </td>
            <td>
              Inferences drawn from any of the collected personal information
              listed above to create a profile or summary about, for example,
              an individual&rsquo;s preferences and characteristics
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>L. Sensitive personal Information</td>
            <td></td>
            <td>NO</td>
          </tr>
        </tbody>
      </table>
      <p>
        We may also collect other personal information outside of these
        categories through instances where you interact with us in person,
        online, or by phone or mail in the context of:
      </p>
      <ul>
        <li>Receiving help through our customer support channels;</li>
        <li>Participation in customer surveys or contests; and</li>
        <li>
          Facilitation in the delivery of our Services and to respond to your
          inquiries.
        </li>
      </ul>
      <p>
        We will use and retain the collected personal information as needed to
        provide the Services or for: Category A - As long as the user has an
        account with us
      </p>
      <h3>Sources of Personal Information</h3>
      <p>
        Learn more about the sources of personal information we collect in{" "}
        <a href="#what-information-do-we-collect">
          &quot;WHAT INFORMATION DO WE COLLECT?&quot;
        </a>
      </p>
      <h3>How We Use and Share Personal Information</h3>
      <p>
        Learn more about how we use your personal information in the section,{" "}
        <a href="#how-do-we-process-your-information">
          &quot;HOW DO WE PROCESS YOUR INFORMATION?&quot;
        </a>
      </p>
      <h3>Will your information be shared with anyone else?</h3>
      <p>
        We may disclose your personal information with our service providers
        pursuant to a written contract between us and each service provider.
        Learn more about how we disclose personal information to in the
        section,{" "}
        <a href="#when-and-with-whom-do-we-share-your-personal-information">
          &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&quot;
        </a>
      </p>
      <p>
        We may use your personal information for our own business purposes, such
        as for undertaking internal research for technological development and
        demonstration. This is not considered to be &quot;selling&quot; of your
        personal information.
      </p>
      <p>
        We have not disclosed, sold, or shared any personal information to
        third parties for a business or commercial purpose in the preceding
        twelve (12) months. We will not sell or share personal information in
        the future belonging to website visitors, users, and other consumers.
      </p>
      <h3>Your Rights</h3>
      <p>
        You have rights under certain US state data protection laws. However,
        these rights are not absolute, and in certain cases, we may decline
        your request as permitted by law. These rights include:
      </p>
      <ul>
        <li>
          Right to know whether or not we are processing your personal data
        </li>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to request the deletion of your personal data</li>
        <li>
          Right to obtain a copy of the personal data you previously shared
          with us
        </li>
        <li>Right to non-discrimination for exercising your rights</li>
        <li>
          Right to opt out of the processing of your personal data if it is
          used for targeted advertising (or sharing as defined under
          California&rsquo;s privacy law), the sale of personal data, or
          profiling in furtherance of decisions that produce legal or similarly
          significant effects (&quot;profiling&quot;)
        </li>
      </ul>
      <p>
        Depending upon the state where you live, you may also have the
        following rights:
      </p>
      <ul>
        <li>
          Right to access the categories of personal data being processed (as
          permitted by applicable law, including the privacy law in Minnesota)
        </li>
        <li>
          Right to obtain a list of the categories of third parties to which we
          have disclosed personal data (as permitted by applicable law,
          including the privacy law in California, Delaware, and Maryland)
        </li>
        <li>
          Right to obtain a list of specific third parties to which we have
          disclosed personal data (as permitted by applicable law, including
          the privacy law in Minnesota and Oregon)
        </li>
        <li>
          Right to obtain a list of third parties to which we have sold
          personal data (as permitted by applicable law, including the privacy
          law in Connecticut)
        </li>
        <li>
          Right to review, understand, question, and depending on where you
          live, correct how personal data has been profiled (as permitted by
          applicable law, including the privacy law in Connecticut and
          Minnesota)
        </li>
        <li>
          Right to limit use and disclosure of sensitive personal data (as
          permitted by applicable law, including the privacy law in California)
        </li>
        <li>
          Right to opt out of the collection of sensitive data and personal
          data collected through the operation of a voice or facial recognition
          feature (as permitted by applicable law, including the privacy law in
          Florida)
        </li>
      </ul>
      <h3>How to Exercise Your Rights</h3>
      <p>
        To exercise these rights, you can contact us by submitting a data
        subject access request, by emailing us at{" "}
        <a href="mailto:hello@tryrebuild.app">hello@tryrebuild.app</a>, by
        visiting{" "}
        <a href="http://www.tryrebuild.app/contact">http://www.tryrebuild.app/contact</a>, or by referring to the contact details at the bottom of this
        document.
      </p>
      <p>
        Under certain US state data protection laws, you can designate an
        authorized agent to make a request on your behalf. We may deny a
        request from an authorized agent that does not submit proof that they
        have been validly authorized to act on your behalf in accordance with
        applicable laws.
      </p>
      <h3>Request Verification</h3>
      <p>
        Upon receiving your request, we will need to verify your identity to
        determine you are the same person about whom we have the information in
        our system. We will only use personal information provided in your
        request to verify your identity or authority to make the request.
        However, if we cannot verify your identity from the information already
        maintained by us, we may request that you provide additional
        information for the purposes of verifying your identity and for
        security or fraud-prevention purposes. If you submit the request
        through an authorized agent, we may need to collect additional
        information to verify your identity before processing your request and
        the agent will need to provide a written and signed permission from you
        to submit such request on your behalf.
      </p>
      <h3>Appeals</h3>
      <p>
        Under certain US state data protection laws, if we decline to take
        action regarding your request, you may appeal our decision by emailing
        us at <a href="mailto:hello@tryrebuild.app">hello@tryrebuild.app</a>.
        We will inform you in writing of any action taken or not taken in
        response to the appeal, including a written explanation of the reasons
        for the decisions. If your appeal is denied, you may submit a complaint
        to your state attorney general.
      </p>
      <h3>California &quot;Shine The Light&quot; Law</h3>
      <p>
        California Civil Code Section 1798.83, also known as the &quot;Shine
        The Light&quot; law, permits our users who are California residents to
        request and obtain from us, once a year and free of charge, information
        about categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of
        all third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us by using the contact details provided in the section{" "}
        <a href="#how-can-you-contact-us-about-this-notice">
          &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
        </a>
      </p>

      <h2 id="do-we-make-updates-to-this-notice">
        11. DO WE MAKE UPDATES TO THIS NOTICE?
      </h2>
      <p>
        <strong>In Short:</strong> Yes, we will update this notice as necessary
        to stay compliant with relevant laws.
      </p>
      <p>
        We may update this Privacy Notice from time to time. The updated
        version will be indicated by an updated &quot;Revised&quot; date at the
        top of this Privacy Notice. If we make material changes to this Privacy
        Notice, we may notify you either by prominently posting a notice of
        such changes or by directly sending you a notification. We encourage
        you to review this Privacy Notice frequently to be informed of how we
        are protecting your information.
      </p>

      <h2 id="how-can-you-contact-us-about-this-notice">
        12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h2>
      <p>
        If you have questions or comments about this notice, you may email us
        at <a href="mailto:hello@tryrebuild.app">hello@tryrebuild.app</a> or
        contact us by post at:
      </p>
      <p>
        Daniel Juergens
        <br />
        Steinweg 19
        <br />
        Braunschweig, Lower Saxony 38100
        <br />
        Germany
      </p>

      <h2 id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">
        13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </h2>
      <p>
        Based on the applicable laws of your country or state of residence in
        the US, you may have the right to request access to the personal
        information we collect from you, details about how we have processed
        it, correct inaccuracies, or delete your personal information. You may
        also have the right to withdraw your consent to our processing of your
        personal information. These rights may be limited in some circumstances
        by applicable law. To request to review, update, or delete your
        personal information, please fill out and submit a data subject access
        request.
      </p>
    </LegalPage>
  );
}
