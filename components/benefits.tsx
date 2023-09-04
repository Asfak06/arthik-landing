import Image from 'next/image';
import { FC } from 'react';

interface Props { }

const Benefits: FC<Props> = (): JSX.Element => (
    <section className='flex flex-col gap-[83px] justify-center items-center w-full pt-[60px] pr-[100px] pb-[137px] pl-[100px] bg-[#FBFBFB]'>
        
        <header className='w-[478px]'>
            <h2 className="w-full h-[61px] flex-shrink-0 text-[#D80000] text-center font-public-sans text-[48px] font-bold leading-[64px]">
                About Us
            </h2>
            <p className="text-[#5B5B5B] text-center font-public-sans text-[16px] font-semibold leading-[24px]">
                We accelerate Financial Inclusion
            </p>
        </header>

        <div className='w-[1284px] flex gap-16'>
            <div className='relative w-[596px] h-[274px]'>
                <Image src='/assets/about_us.svg' layout="fill" objectFit="cover" alt='about us' />
            </div>

            <article className="w-[500px] text-[var(--Primary,#1D2130)] font-public-sans text-[16px] font-normal leading-[28px]">
                In Arthik we wish to aggregate all the value chain in the financial sector – from Investors to Borrowers which will have a significant economic impact, where every party of the financial ecosystems will be able to take wise & informed borrowing & investment decisions that are substantial. In Arthik, we also offer all the activities which can accelerate financial inclusion or produce more financial activities through digital inclusion, end-to-end solutions to investors, reducing their acquisition cost by generating valid leads with scores and other services which will reduce the current lead time of loan disbursements with the aim to provide digital solutions to ensure real-time loan disbursement. For the borrowers, we offer a single platform to get easy access to all finance products & services as per their requirements at their convenience.
            </article>

        </div>
    </section>
);

export default Benefits;
