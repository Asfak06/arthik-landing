import { FC } from 'react';

interface Props { }

const Nav: FC<Props> = (props): JSX.Element => {
    return (
        <div className="overflow-hidden flex justify-center gap-2 w-full items-center" id="NavRoot">
            <img src="https://file.rendit.io/n/B1Z9jBan73xXZ90rgRWE.svg" className="self-start mr-44" id="Layer1" />
            <div className="flex justify-center gap-6 items-center">
                <button className="text-sm font-medium leading-6 text-white h-12 px-12 py-3" id="NavButton4-1">Home</button>
                <button className="text-sm font-medium leading-6 text-white h-12 px-12 py-3" id="Home1">Features</button>
                <button className="text-sm font-medium leading-6 text-white h-12 px-12 py-3" id="Home2">About Us</button>
                <button className="text-sm font-medium leading-6 text-white h-12 px-12 py-3" id="Home3">Contact Us</button>
            </div>

            <button className="flex justify-center gap-2 w-24 items-center" id="NavButton5">
                <img src="https://file.rendit.io/n/Cbii6y82l6e33obyZYC7.svg" className="w-4" />
                <div className="text-sm font-medium leading-6 text-white my-1" id="Home4">English</div>
            </button>
            <button className="flex flex-col w-16 items-center px-2 py-0.5 rounded" id="NavButton6">
                <div className="text-sm font-bold leading-6 text-white" id="Home5">Signup</div>
            </button>
        </div>
    );
};

export default Nav;
