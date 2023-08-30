import { FC } from 'react';

interface Props {}

const Contact: FC<Props> = () => {
    return (
        <div className="bg-[#fcffff] flex flex-col gap-6 justify-center p-[50px] items-center" id="ContactUsRoot">
            <div className="flex flex-col space-y-4 items-center">
                <h2 className="text-center text-5xl font-['Public_Sans'] font-bold leading-[64px] text-[#d80000]">Contact Us</h2>
                <p className="text-center leading-[24px] text-[#222222] w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <form className="bg-white text-black flex flex-col space-y-6 h-[640px] items-start p-12 rounded-lg" id="Bakground">
                <div className="flex space-x-32 w-full">
                    <label className="font-['Public_Sans'] font-semibold leading-[24px] w-1/2">Name</label>
                    <label className="font-['Public_Sans'] font-semibold leading-[24px] w-1/2">Email</label>
                </div>
                <div className="flex space-x-32 w-full">
                    <input placeholder="Enter your name" className="border border-black/12 rounded-lg w-60 h-12 pl-8" />
                    <input placeholder="Enter your Email" className="border border-black/12 rounded-lg w-60 h-12 pl-8" />
                </div>
                <div className="flex space-x-32 w-full">
                    <label className="font-['Public_Sans'] font-semibold leading-[24px] w-1/2">Subject</label>
                    <label className="font-['Public_Sans'] font-semibold leading-[24px] w-1/2">Subject</label>
                </div>
                <div className="flex space-x-32 w-full">
                    <input placeholder="Provide context" className="border border-black/12 rounded-lg w-1/2 h-12 pl-8" />
                    <input placeholder="Select Subject" className="border border-black/12 rounded-lg w-1/2 h-12 pl-8" />
                </div>
                <label className="font-['Public_Sans'] font-semibold leading-[24px]">Message</label>
                <textarea placeholder="Write your question here" className="border border-black/12 rounded-lg w-full h-32 pl-8 py-4"></textarea>
                <button className="bg-[#d80000] h-12 rounded-[41px] text-lg font-['Manrope'] font-semibold leading-[32px] text-white px-16 self-end">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
