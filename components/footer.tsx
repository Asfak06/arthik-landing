import { FC } from 'react';

interface Props {}

const Footer: FC<Props> = () => {
    return (
        <footer className="flex flex-col justify-center bg-cover bg-center w-[1920px] min-w-full max-w-full mx-auto" id="NewRootRoot">
            <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://file.rendit.io/n/COx6oDqdBhLF8mmVXHhI.png)' }}>
                <div className="bg-[#ac0303] opacity-75 flex flex-row justify-between items-start space-x-20 px-64 py-8">
                    <div className="flex flex-col space-y-20 items-start">
                        <div className="flex flex-col space-y-3 w-[241px]">
                            <img src="https://file.rendit.io/n/WEfLLyeN2wqBRZKvfDln.svg" alt="Layer1" />
                            <p className="font-['Public_Sans'] leading-[28px] text-white">Sample textSample textSample textSample textSample textSample text</p>
                        </div>
                        <p className="font-['Public_Sans'] leading-[28px] text-white">© All rights reserved – Kepto Cash</p>
                    </div>
                    <div className="flex flex-col mt-10 space-y-4">
                        <h3 className="font-['Public_Sans'] font-semibold leading-[24px] text-white">Company</h3>
                        <ul className="flex flex-col space-y-1">
                            <li className="font-['Public_Sans'] leading-[28px] text-white">About Us</li>
                            <li className="font-['Public_Sans'] leading-[28px] text-white">Careers</li>
                            <li className="font-['Public_Sans'] leading-[28px] text-white">Services</li>
                            <li className="font-['Public_Sans'] leading-[28px] text-white">Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col mt-10 space-y-4">
                        <h3 className="font-['Public_Sans'] font-semibold leading-[24px] text-white">Connect</h3>
                        <ul className="flex flex-col space-y-1">
                            <li className="font-['Public_Sans'] leading-[28px] text-white">hi@finsweet.com</li>
                            <li className="font-['Public_Sans'] leading-[28px] text-white">+(123) 456-7890</li>
                        </ul>
                    </div>
                    <div className="flex mt-10 flex-col space-y-24">
                        <div className="flex flex-col space-y-3">
                            <h3 className="font-['Public_Sans'] font-semibold leading-[24px] text-white">Join Newsletter</h3>
                            <input placeholder="Type email here" className="border rounded-[31px] h-10 px-8" />
                            <button className="bg-[#2b2b2b] h-10 rounded-[31px] text-sm font-['Public_Sans'] font-medium leading-[24px] text-white">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex space-x-1">
                            <p className="font-['Public_Sans'] leading-[28px] text-white">Privacy Policy</p>
                            <p className="font-['Public_Sans'] leading-[28px] text-white">Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
