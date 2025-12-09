import React, { useEffect } from 'react';

const LegalLayout = ({ title, children }: { title: string, children?: React.ReactNode }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white pb-4 border-b dark:border-slate-700">{title}</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const About: React.FC = () => (
    <LegalLayout title="About Us">
        <p>
            Welcome to <strong>OmniTools Pro</strong>, your reliable partner for digital productivity. We are a dedicated team of developers and designers passionate about making the web a more efficient place.
        </p>
        <h3>Our Mission</h3>
        <p>
            In a digital landscape often cluttered with complex software and paywalled services, our mission is simple: <strong>To provide high-quality, professional-grade web tools completely free of charge.</strong> We believe that essential utilities—like text analyzers, code formatters, and calculators—should be accessible to everyone, from students in classrooms to engineers in top tech firms.
        </p>
        <h3>Why We Started</h3>
        <p>
            OmniTools Pro was founded in 2024 with a clear vision. We noticed that many free tool websites were plagued by slow loading speeds, intrusive ads, and poor user interfaces. We wanted to build a platform that felt like a premium software suite but remained accessible in the browser.
        </p>
        <h3>Technology & Privacy</h3>
        <p>
            We prioritize your privacy above all else. Most of our tools are engineered to run "client-side." This means that when you paste text or upload an image to our site, the processing happens directly on your device using JavaScript. Your sensitive data is not sent to our servers, ensuring a secure and private experience.
        </p>
        <p>
            Thank you for choosing OmniTools Pro. We are constantly updating our suite, so check back often for new features!
        </p>
    </LegalLayout>
);

export const Privacy: React.FC = () => (
    <LegalLayout title="Privacy Policy">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last Updated: October 26, 2024</p>
        <p>At OmniTools Pro, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OmniTools Pro and how we use it.</p>

        <h3>1. Information Collection</h3>
        <p>
            <strong>Personal Data:</strong> We do not require user registration. We do not collect personal identification information (PII) such as names, email addresses, or phone numbers unless you voluntarily provide them via our contact forms.
        </p>
        <p>
            <strong>Usage Data:</strong> Like most standard websites, we use log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h3>2. Cookies and Web Beacons</h3>
        <p>
            OmniTools Pro uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h3>3. Google DoubleClick DART Cookie</h3>
        <p>
            Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="nofollow noreferrer">https://policies.google.com/technologies/ads</a>.
        </p>

        <h3>4. Client-Side Processing</h3>
        <p>
            A unique feature of OmniTools Pro is our commitment to client-side processing. For tools such as the "JSON Formatter," "Image Converter," or "Text Summarizer," the data you input is processed within your web browser. It is not transmitted to our servers for storage or analysis, providing you with an additional layer of security.
        </p>
        
        <h3>5. Consent</h3>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
    </LegalLayout>
);

export const Terms: React.FC = () => (
    <LegalLayout title="Terms of Service">
        <h3>1. Acceptance of Terms</h3>
        <p>
            By accessing and using OmniTools Pro, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h3>2. Use License</h3>
        <p>
            Permission is granted to use the tools on OmniTools Pro's website for personal, educational, and commercial purposes. However, you may not:
        </p>
        <ul>
            <li>Modify or copy the materials for the purpose of building a competing service;</li>
            <li>Attempt to reverse engineer any software contained on OmniTools Pro's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials;</li>
        </ul>

        <h3>3. Disclaimer</h3>
        <p>
            The materials on OmniTools Pro's website are provided on an 'as is' basis. OmniTools Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h3>4. Limitations</h3>
        <p>
            In no event shall OmniTools Pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OmniTools Pro's website.
        </p>
    </LegalLayout>
);

export const Disclaimer: React.FC = () => (
    <LegalLayout title="Disclaimer">
        <p>
            The information provided by OmniTools Pro ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
        
        <h3>Professional Advice</h3>
        <p>
            The tools provided (such as the BMI Calculator or Financial Calculators) are for estimation and educational purposes only. They should not be substituted for professional medical, legal, or financial advice. Always consult with a qualified professional before making decisions based on data from this website.
        </p>
        
        <h3>External Links</h3>
        <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
    </LegalLayout>
);

export const Contact: React.FC = () => (
    <LegalLayout title="Contact Us">
        <p>
            We appreciate your interest in OmniTools Pro. Whether you have a suggestion for a new tool, found a bug, or just want to say hello, we are here to listen.
        </p>
        
        <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-lg border border-gray-200 dark:border-slate-600 mt-6">
            <h3 className="mt-0">Get in Touch</h3>
            <p><strong>Email Support:</strong> <a href="mailto:support@omnitools.pro" className="text-brand-600 dark:text-brand-400 font-bold">support@omnitools.pro</a></p>
            <p><strong>Business Inquiries:</strong> <a href="mailto:business@omnitools.pro" className="text-brand-600 dark:text-brand-400 font-bold">business@omnitools.pro</a></p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">We aim to respond to all inquiries within 24-48 hours.</p>
        </div>
    </LegalLayout>
);