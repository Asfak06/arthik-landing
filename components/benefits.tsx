import { FC } from 'react';

interface Props { }

const BenefitItem: FC<{ iconSrc: string, headline: string, description: string }> = ({ iconSrc, headline, description }) => (
    <div className="relative flex flex-row gap-8 items-start w-[576px]">
        <div className="bg-[#f9f9f9] flex justify-center items-center w-16 h-16 rounded-full">
            <img src={iconSrc} className="w-12" alt={headline} />
        </div>
        <div className="text-2xl font-['Public_Sans'] font-bold leading-[36px] text-[#222222]">
            {headline}
        </div>
        <div className="font-['Public_Sans'] leading-[28px] text-[#1d2130] absolute top-10 left-24 h-6 w-5/6">
            {description}
        </div>
    </div>
);

const Benefits: FC<Props> = (): JSX.Element => (
    <div className="bg-[#fcffff] flex gap-6 justify-center p-[100px] items-center" id="BenifitsRoot">
        <div className="flex flex-col gap-4 items-start w-[576px]">
            <div className="font-['Public_Sans'] font-semibold leading-[24px] text-[#222222]">
                Why should you work with us?
            </div>
            <div className="text-5xl font-['Public_Sans'] font-bold leading-[64px] text-[#d80000]">
                Analyze your sales and marketing leads
            </div>
            <p className="font-['Public_Sans'] leading-[28px] text-[#1d2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem.
            </p>
        </div>
        <div className="flex flex-col gap-10 items-start">
            <BenefitItem iconSrc="https://file.rendit.io/n/H3JGXYEAy1CysQXD5Mmm.svg" headline="Low Charge" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." />
            <BenefitItem iconSrc="https://file.rendit.io/n/bm7QGdADsQej6q82k6E9.svg" headline="Fast Transaction" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." />
            <BenefitItem iconSrc="https://file.rendit.io/n/1aVIrm8ugldsBRgZROkb.svg" headline="Secure Payment" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." />
            <BenefitItem iconSrc="https://file.rendit.io/n/XSxjN3XO0nDP4XGgSEkp.svg" headline="24/7 Support" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." />
        </div>
    </div>
);

export default Benefits;
