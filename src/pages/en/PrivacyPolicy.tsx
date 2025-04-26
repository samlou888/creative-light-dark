
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto pt-32 px-6 pb-20">
      <h1 className="text-4xl font-bold mb-12">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-3xl">
        <p className="text-muted-foreground mb-8">Effective Date: April 2025</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
          <p className="text-muted-foreground">
            The following information provides a simple overview of what happens to your personal data when you visit our website.<br />
            Personal data refers to any data that can personally identify you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Data Collection on Our Website</h2>
          
          <h3 className="text-xl font-semibold mb-3">Who is responsible for data collection on this website?</h3>
          <p className="text-muted-foreground mb-6">
            The data processing on this website is carried out by the website operator.<br />
            Their contact details can be found in the Imprint section of this website.
          </p>

          <h3 className="text-xl font-semibold mb-3">How do we collect your data?</h3>
          <p className="text-muted-foreground mb-6">
            Your data is collected in part when you provide it to us.<br />
            This may include data you enter into a contact form, for example.<br /><br />
            Other data is collected automatically by our IT systems when you visit the website.<br />
            These are primarily technical data (e.g., web browser, operating system, or time of the page request).
          </p>

          <h3 className="text-xl font-semibold mb-3">What do we use your data for?</h3>
          <p className="text-muted-foreground mb-6">
            Part of the data is collected to ensure the website is provided without errors.<br />
            Other data may be used to analyze your user behavior.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right at any time to request free information about the origin, recipient, and purpose of your stored personal data.<br />
            You also have the right to request the correction, blocking, or deletion of this data.<br />
            For this purpose, as well as for further questions regarding data protection, you can contact us at any time at the address provided in the Imprint.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
