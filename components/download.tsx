import { FC } from 'react';

interface Props {}

const Download: FC<Props> = () => {
    return (
            <div className="bg-[#fcffff] flex  gap-6 justify-center p-[50px] items-center" id="DownloadNowRoot">
            <div className="flex flex-col mx-20 space-y-4 mb-24">
                <h2 className="text-center text-3xl font-['Public_Sans'] font-bold leading-[48px] text-[#d80000]">Download Kepto Cash</h2>
                <p className="font-['Public_Sans'] font-semibold leading-[24px] text-[#222222]">sample text lorum ipsum sample text</p>
                <p className="font-['Public_Sans'] leading-[28px] text-[#222222] w-full">
                    Download mobile app for ios & android. It helps <br />
                    you rating quickly & smoothly
                </p>
                <div className="flex space-x-3">
                    <img src="https://file.rendit.io/n/F7ueGgQzVh9dsDZn7E42.svg" className="w-24" alt="App Store Link" />
                    <img src="https://file.rendit.io/n/vSBanaDCbeC8vj28cCRB.svg" className="w-24" alt="Google Play Link" />
                </div>
            </div>
            <div className="relative mx-20 w-[318px]">
                <img src="https://file.rendit.io/n/ciKAd6YDbkGRNC57rvMN.png" alt="Mobile App Preview" />
            </div>
        </div>
    );
};

export default Download;
