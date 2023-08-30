import { FC } from 'react';

interface Props {}

interface TestimonialData {
  imgSrc: string;
  name: string;
  starsSrc: string;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialData> = ({ imgSrc, name, starsSrc, testimonial }) => (
  <div className="relative flex flex-col w-[430px] h-[294px]">
    <div className="w-[390px] h-[294px] bg-[#f9f8f8] absolute top-0 left-0 rounded-lg" />
    <div className="bg-[#f9f8f8] relative flex flex-col ml-10 gap-6 h-full items-start pl-8 py-8 rounded-lg">
      <div className="flex flex-row gap-4 w-3/5 items-start">
        <img src={imgSrc} className="w-16" />
        <div className="flex flex-col gap-3 w-3/5 items-start">
          <div className="text-lg font-['Public_Sans'] font-bold leading-[28px]">{name}</div>
          <img src={starsSrc} />
        </div>
      </div>
      <div className="font-['Public_Sans'] leading-[28px] text-[#0d1317] w-5/6">{testimonial}</div>
    </div>
  </div>
);

const Testimonials: FC<Props> = () => {
  const testimonials: TestimonialData[] = [
    {
      imgSrc: "https://file.rendit.io/n/9B0MScraIAz08Vhgk6jE.png",
      name: "Breanna Parker",
      starsSrc: "https://file.rendit.io/n/1vMB3hM9ZLyepzxU4ayr.svg",
      testimonial: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla."
    },
    {
      imgSrc: "https://file.rendit.io/n/9B0MScraIAz08Vhgk6jE.png",
      name: "Breanna Parker",
      starsSrc: "https://file.rendit.io/n/1vMB3hM9ZLyepzxU4ayr.svg",
      testimonial: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla."
    },
    {
      imgSrc: "https://file.rendit.io/n/9B0MScraIAz08Vhgk6jE.png",
      name: "Breanna Parker",
      starsSrc: "https://file.rendit.io/n/1vMB3hM9ZLyepzxU4ayr.svg",
      testimonial: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla."
    }
  ];

  return (
  <div className="bg-[#fcffff] flex flex-col gap-6 justify-center p-[50px] items-center" id="TestiimonialsSectionRoot">
      <div className="flex flex-col  w-2/5 items-center">
        <div className="text-5xl font-['Public_Sans'] font-bold leading-[64px] text-[#d80000] ">Customer Testimonials</div>
        <div className="text-center font-['Public_Sans'] font-semibold leading-[24px] text-[#5b5b5b] " id="Subtitle">What our clients say</div>
      </div>
      <div className="self-stretch relative flex flex-row items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
