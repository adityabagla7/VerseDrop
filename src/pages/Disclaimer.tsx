import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const disclaimerText = `

Last updated: 2025-10-01

WEBSITE DISCLAIMER

The information provided by VerseDrop (“Company”, “we”, “our”, “us”) on www.versedrop.in (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.

UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.

EXTERNAL LINKS DISCLAIMER

The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.

For example, the outlined Disclaimer has been created using PolicyMaker.io, a free web application for generating high-quality legal documents. PolicyMaker’s disclaimer generator is an easy-to-use tool for creating an excellent sample Disclaimer template for a website, blog, eCommerce store or app.

WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.

AFFILIATES DISCLAIMER

The Site may contain links to affiliate websites, and we may receive an affiliate commission for any purchases or actions made by you on the affiliate websites using such links.

TESTIMONIALS DISCLAIMER

The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume that all users will have the same experiences.

YOUR INDIVIDUAL RESULTS MAY VARY.

The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity, where the full testimonial contained extraneous information not relevant to the general public.

The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.

ERRORS AND OMISSIONS DISCLAIMER

While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, VerseDrop is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.

In no event will VerseDrop, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.

LOGOS AND TRADEMARKS DISCLAIMER

All logos and trademarks of third parties referenced on www.versedrop.in are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of VerseDrop by such owners.

CONTACT US

Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: contact@versedrop.in.

This Disclaimer was created for www.versedrop.in by PolicyMaker.io on 2025-10-01.`;

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="mx-auto max-w-6xl prose prose-invert">
          <h1 className="text-4xl font-bold">Disclaimer</h1>
          <pre className="whitespace-pre-wrap text-base">{disclaimerText}</pre>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
