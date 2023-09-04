import Image from 'next/image';
import { FC } from 'react';

interface Props { }

const BenefitsTwo: FC<Props> = (props): JSX.Element => {
    const benefits = [
        { icon: 'ecom', title: 'E-commerce Assessments' },
        { icon: 'ICT', title: 'ICT Infrastructure & Services' },
        { icon: 'payment', title: 'Payment' },
        { icon: 'trade', title: 'Trade Logistics' },
        { icon: 'legal', title: 'Legal & Regulatory Frameworks' },
        { icon: 'skills', title: 'Skills Developments' },
        { icon: 'finance', title: 'Financing for E-commerce' }
    ];

    return (
        <section className='flex flex-col gap-[83px] justify-center items-center w-full py-[60px] px-[100px] bg-[#FBFBFB]'>
            <div className="flex justify-center items-center gap-8 w-full">
                <div className="flex flex-col items-start gap-10">
                    {benefits.map((benefit, index) => (
                        <div key={index} className='flex w-[576px] h-[72px] p-3 justify-center items-center flex-shrink-0'>
                            <Image src={`/assets/${benefit.icon}.svg`} width={60} height={60} alt={benefit.icon} />
                            <div className='pl-5'>
                                <div className="w-[428px] text-[var(--Black,#222)] font-public-sans text-[24px] font-bold leading-[36px]">
                                    {benefit.title}
                                </div>
                                <div className="w-[472px] text-[var(--Primary,#1D2130)] font-public-sans text-[16px] leading-[28px]">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-[576px] flex-col items-end gap-[74px] pr-8 pb-8 pl-[63px]">
                    <div className='w-[478px] h-[122px]'>
                        <div className="w-[478px] h-[61px] flex-shrink-0 text-[var(--Secondary,#D80000)] text-center font-public-sans text-[48px] font-bold leading-[64px]">
                            What We Serve
                        </div>
                        <div className="w-[439.707px] text-[#5B5B5B] text-center font-public-sans text-[16px] font-semibold leading-[24px]">
                            Digital Inclusion= Seamless Financial Inclusion with greater velocity
                        </div>
                    </div>
                    <Image className='w-[481px] h-[343px]' src='/assets/we-serve.svg' width={100} height={100} alt='we-serve' />
                </div>
            </div>
        </section>
    )
};

export default BenefitsTwo;
