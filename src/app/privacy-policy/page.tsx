import React from 'react'

const PrivacyPolicy = () => {
    return (
        <main className="bg-near-black text-foreground min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-8 lg:px-12">
            <article className="max-w-4xl mx-auto bg-primary p-6 sm:p-8 lg:p-10 space-y-6">
                <header className="space-y-3">
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg font-medium text-orange">
                        WILDFIRE EXPRESS LLC
                    </p>
                    <p className="text-sm">
                        This Privacy Policy explains how WILDFIRE EXPRESS LLC collects, uses, and safeguards your information when you use our services.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">1. Information Collection</h2>
                    <p className="leading-8">
                        Our primary purpose for collecting information is to provide and facilitate your use of our transportation and communication services.
                    </p>

                    <h3 className="text-2xl font-medium">1.1 Account and Profile Information</h3>
                    <p className="leading-8">When you access our services, you may provide:</p>
                    <ul className="list-disc pl-6 space-y-2 leading-8">
                        <li>Full name</li>
                        <li>Mobile phone number</li>
                        <li>Email address</li>
                        <li>Mailing address</li>
                        <li>Driver license and carrier-related credentials (if applicable)</li>
                    </ul>

                    <h3 className="text-2xl font-medium">1.2 Service Usage Information</h3>
                    <p className="leading-8">We may automatically collect:</p>
                    <ul className="list-disc pl-6 space-y-2 leading-8">
                        <li>Pages visited and session duration</li>
                        <li>Operational or request-level usage information</li>
                        <li>Message and communication metadata</li>
                        <li>Device and browser diagnostics</li>
                    </ul>

                    <h3 className="text-2xl font-medium">1.3 Device Information</h3>
                    <ul className="list-disc pl-6 space-y-2 leading-8">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system and device identifiers</li>
                    </ul>

                    <h3 className="text-2xl font-medium">1.4 Contact Information (SMS and Phone Numbers)</h3>
                    <p className="leading-8">
                        Phone numbers collected for SMS purposes are used only to deliver service-related messages such as updates, alerts, and notices.
                    </p>
                    <p className="leading-8 font-medium">
                        SMS consent and phone numbers will not be shared with third parties or affiliates for marketing purposes.
                    </p>
                    <p className="leading-8">
                        Users may opt out of SMS communication at any time by replying STOP to any message or by contacting us.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">2. Information Use and Sharing</h2>
                    <h3 className="text-2xl font-medium">2.1 How We Use Information</h3>
                    <ul className="list-disc pl-6 space-y-2 leading-8">
                        <li>Provide and maintain our services</li>
                        <li>Communicate service updates and responses</li>
                        <li>Improve service quality, security, and reliability</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>

                    <h3 className="text-2xl font-medium">2.2 Service Providers</h3>
                    <p className="leading-8">
                        We may share information with trusted service providers that help us operate our website and services, subject to confidentiality and security obligations.
                    </p>

                    <h3 className="text-2xl font-medium">2.3 Legal Compliance</h3>
                    <p className="leading-8">
                        We may disclose information when required by law, subpoena, or legal process, or when necessary to protect rights, safety, and prevent unlawful activity.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">3. Cookies and Tracking Technologies</h2>
                    <p className="leading-8">
                        We use cookies and similar technologies to understand usage patterns, maintain functionality, and improve user experience. You can manage cookies through your browser settings.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">4. Your Rights and Choices</h2>
                    <h3 className="text-2xl font-medium">4.1 Access and Correction</h3>
                    <p className="leading-8">
                        You may request access to your personal information and ask us to correct inaccurate or outdated information.
                    </p>
                    <h3 className="text-2xl font-medium">4.2 Deletion and Objection</h3>
                    <p className="leading-8">
                        You may request deletion of your personal information where applicable and object to specific processing activities.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">5. Policy Updates</h2>
                    <p className="leading-8">
                        We may update this Privacy Policy from time to time. Updates will be posted on this page and become effective when published.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">6. Contact Information</h2>
                    <p className="leading-8">
                        If you have any privacy-related questions, contact us at:
                    </p>
                    <ul className="space-y-2 leading-8">
                        <li><strong>Company:</strong> WILDFIRE EXPRESS LLC</li>
                        <li><strong>Email:</strong> [EMAIL_ADDRESS]</li>
                        <li><strong>Phone:</strong> +1 (615) 578-1333</li>
                        <li><strong>Address:</strong> 250 Clifton Ave, Mount Juliet, TN</li>
                        <li><strong>Website:</strong> https://wildfireexpress.co/</li>
                    </ul>
                </section>
            </article>
        </main>
    )
}

export default PrivacyPolicy