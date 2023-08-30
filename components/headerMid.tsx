import { FC } from 'react';

interface Props { }

const HeaderMid: FC<Props> = (): JSX.Element => {
    return (
        <div className="flex w-[1920px] pt-6 px-2">
            <div className="flex flex-col gap-4 w-80 items-start">
                <h2 className="font-['Public_Sans'] font-semibold text-white ">Cashless Payment</h2>
                <h1 className="text-5xl font-['Public_Sans'] font-bold text-white " id="EasySolution">Easy Solution</h1>
                <p className="font-['Public_Sans'] text-white w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                <button className="flex items-center gap-2 px-3 py-2 mt-2" id="Button1">
                    <span className="text-sm font-['Public_Sans'] font-medium text-white">Learn More</span>
                    <img src="https://file.rendit.io/n/o6jzTMHD0tbZiNdcjllV.svg" className="w-6" id="NextArrow" alt="Next Arrow" />
                </button>
            </div>
        </div>
    );
};

export default HeaderMid;
