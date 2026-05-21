import React from 'react'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const CookiePolicy = () => {
    return (
        <main className="bg-near-black text-foreground min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-8 lg:px-12">
            <article className="max-w-4xl mx-auto bg-primary p-6 sm:p-8 lg:p-10 space-y-6">
                <header className="space-y-3">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Cookie Policy" },
                        ]}
                        className="mb-4"
                    />
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        Cookie Policy
                    </h1>
                    <p className="text-base sm:text-lg font-medium text-orange">
                        WILDFIRE EXPRESS LLC
                    </p>
                    <p className="text-sm">
                        This Cookie Policy explains how WILDFIRE EXPRESS LLC uses cookies and similar tracking technologies to recognize, collect, and safeguard information when you visit our website.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">1. What Are Cookies?</h2>
                    <p className="leading-8">
                        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, improve performance, and provide reporting information.
                    </p>
                    <p className="leading-8">
                        Cookies set by the website owner (in this case, WILDFIRE EXPRESS LLC) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">2. Why We Use Cookies</h2>
                    <p className="leading-8">
                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">3. Types of Cookies We Use</h2>
                    
                    <h3 className="text-2xl font-medium">3.1 Essential Website Cookies</h3>
                    <p className="leading-8">
                        These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Because these cookies are strictly necessary to deliver the website to you, you cannot refuse them without impacting how our website functions.
                    </p>

                    <h3 className="text-2xl font-medium">3.2 Performance and Analytics Cookies</h3>
                    <p className="leading-8">
                        These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you in order to enhance your experience.
                    </p>

                    <h3 className="text-2xl font-medium">3.3 Functional Cookies</h3>
                    <p className="leading-8">
                        These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">4. How Can I Control Cookies?</h2>
                    <p className="leading-8">
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by using the cookie consent banner when you first visit our site, or by adjusting the settings on your web browser to accept or refuse cookies.
                    </p>
                    <p className="leading-8">
                        As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">5. Policy Updates</h2>
                    <p className="leading-8">
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">6. Contact Information</h2>
                    <p className="leading-8">
                        If you have any questions about our use of cookies or other technologies, please email or write to us at:
                    </p>
                    <ul className="space-y-2 leading-8">
                        <li><strong>Company:</strong> WILDFIRE EXPRESS LLC</li>
                        <li><strong>Email:</strong> hr@wildfireexpress.com</li>
                        <li><strong>Phone:</strong> +1 (615) 578-1333</li>
                        <li><strong>Address:</strong> 250 Clifton Ave, Mount Juliet, TN</li>
                        <li><strong>Website:</strong> https://wildfire-express.com</li>
                    </ul>
                </section>
            </article>
        </main>
    )
}

export default CookiePolicy
