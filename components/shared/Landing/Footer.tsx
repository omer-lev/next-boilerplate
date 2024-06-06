import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { APP_NAME, nav_links } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <section className='flex max-md:flex-col justify-around gap-5 max-md:gap-14 bg-secondary text-stone-700 py-20 px-[10%]'>
      <div>
        {/* ASSET */}
        <Image
          src='/next.svg'
          alt='Logo'
          width={150}
          height={50}
        />
        <p className='py-4 text-muted'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className='text-muted/60 text-sm'>Copyright © 2024 - All rights reserved</p>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-2 text-accent'>Links</h3>

        <ul>
          {/* CONSTANTS (nav_links) */}
          {nav_links.map((link, index) => (
            <li key={index}>
              <Button asChild variant='link' className='px-0 text-muted font-normal'>
                <Link href={link.href} className='px-0'>
                  {link.title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-2 text-accent'>Legal</h3>

        <ul className='space-y-3'>
          <li>
            <Dialog>
              <DialogTrigger className='text-sm font-normal text-muted hover:underline underline-offset-4'>Terms of Service</DialogTrigger>
              <DialogContent className='min-w-full h-screen px-10 bg-yellow-50 text-stone-700 overflow-y-scroll'>
                <DialogHeader className='lg:w-1/2 mx-auto'>
                  <DialogTitle className='text-2xl pb-10'>{APP_NAME} Terms of Service</DialogTitle>
                  <DialogDescription className='flex flex-col gap-10 text-stone-700 leading-6'>
                    <h3 className='font-bold text-lg'>Welcome to {APP_NAME}!</h3>

                    <p>
                      We're delighted to have you join us. {APP_NAME} is committed to providing you with valuable insights into real estate properties and their surrounding areas. Before you dive into exploring, please take a moment to review our Terms of Service.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>1. Acceptance of Terms</h3>
                      By accessing or using the {APP_NAME} website ("the Website"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the Website.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>2. Description of Service</h3>
                      {APP_NAME} provides users with information about real estate properties and their surrounding areas via the Website. This includes mapping, neighborhood insights, local amenities, transportation accessibility, community feedback, customizable filters, and integration with real estate listings.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>3. User Conduct</h3>
                      You agree to use the Website only for lawful purposes and in a manner consistent with all applicable laws and regulations. You may not use the Website in any way that could harm, disable, overburden, or impair the functionality of the service.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>4. Privacy</h3>
                      We respect your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and disclose your information. By using the Website, you consent to the collection and use of your data as described in the Privacy Policy.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>5. Intellectual Property</h3>
                      All content and materials available on the Website, including but not limited to text, graphics, logos, images, and software, are the property of {APP_NAME} or its licensors and are protected by copyright and other intellectual property laws.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>6. Third-Party Links</h3>
                      The Website may contain links to third-party websites or services that are not owned or controlled by {APP_NAME}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>7. Disclaimer of Warranties</h3>
                      The Website is provided on an "as-is" and "as-available" basis, without any warranties of any kind, either express or implied. {APP_NAME} does not warrant that the Website will be uninterrupted or error-free, nor does it make any representations regarding the accuracy, reliability, or completeness of the information provided.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>8. Limitation of Liability</h3>
                      In no event shall {APP_NAME} or its affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>9. Indemnification</h3>
                      You agree to indemnify and hold {APP_NAME}, its officers, directors, employees, and agents harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Website, your violation of these Terms of Service, or your violation of any rights of another party.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>10. Changes to Terms</h3>
                      {APP_NAME} reserves the right to modify or revise these Terms of Service at any time without prior notice. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms of Service.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>11. Governing Law</h3>
                      These Terms of Service shall be governed by and construed in accordance with the laws of Israel, without regard to its conflict of law provisions.
                    </p>

                    <p>
                      <h3 className='font-bold mb-1'>12. Contact Us</h3>
                      If you have any questions about these Terms of Service, please contact us at support@{APP_NAME}.com.
                    </p>

                    <h3 className='text-base font-bold'>
                      Thank You for Choosing {APP_NAME}!
                    </h3>

                    <p>This Terms of Service was last updated on 5/28/2024.</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </li>

          <li>
            <Dialog>
              <DialogTrigger className='text-sm font-normal text-muted hover:underline underline-offset-4'>Privacy Policy</DialogTrigger>
              <DialogContent className='min-w-full h-screen px-10 bg-yellow-50 text-stone-700 overflow-y-scroll'>
                <DialogHeader className='lg:w-1/2 mx-auto'>
                  <DialogTitle className='text-2xl pb-10'>{APP_NAME} Privacy Policy</DialogTitle>
                  <DialogDescription className='flex flex-col gap-10 text-stone-700 leading-6'>
                    <h3 className='font-bold text-lg'>Welcome to {APP_NAME}!</h3>

                    <div>
                      <h3 className="font-bold mb-1">1. Introduction</h3>
                      <p>{APP_NAME} ("we" or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us when you use our website or mobile application ("the Service").</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">2. Information We Collect</h3>
                      <ul>
                        <li><span className='font-medium'>Personal Information:</span> When you use the Service, we may collect personal information such as your name, email address, and any other information you voluntarily provide to us.</li>
                        <li><span className='font-medium'>Usage Data:</span> We may also collect information about how you interact with the Service, including your IP address, device type, browser type, pages visited, and other usage data.</li>
                        <li><span className='font-medium'>Location Information:</span> If you enable location services, we may collect and process information about your precise location to provide you with location-based services.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold mb-1">3. How We Use Your Information</h3>
                      <p className='font-medium'>We may use the information we collect for the following purposes:</p>
                      <ul>
                        <li> - To provide and maintain the Service.</li>
                        <li> - To personalize your experience and tailor content and advertisements to your interests.</li>
                        <li> - To communicate with you, respond to your inquiries, and provide customer support.</li>
                        <li> - To analyze usage trends and improve the quality and functionality of the Service.</li>
                        <li> - To comply with legal obligations and enforce our Terms of Service.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">10. Contact Us</h3>
                      <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at support@{APP_NAME}.com.</p>
                    </div>

                    <h3 className='text-base font-bold'>
                      Thank You for Choosing {APP_NAME}!
                    </h3>

                    <p>This Privacy Policy was last updated on 5/28/2024.</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;