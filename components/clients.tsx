import { FC } from 'react';

interface Props { }

const ClientLogo: FC<{ src: string, alt?: string }> = ({ src, alt = '' }) => (
    <img src={src} alt={alt} className="" />
);

const Clients: FC<Props> = (): JSX.Element => (
    <div className="bg-[#fcffff] flex flex-col gap-6 justify-center p-[50px] items-center" id="OurClientsRoot">
        <div className="flex flex-col gap-2 w-[382px] items-start">
            <h2 className="text-center text-5xl font-['Public_Sans'] font-bold leading-[64px] text-[#d80000]">
                Brands we Serve
            </h2>
            <p className="text-center font-['Public_Sans'] font-semibold leading-[24px] text-[#5b5b5b] ml-5">
                10,000+ clients who are getting more replies
            </p>
        </div>
        <div className='flex flex-row'>
            <div className="flex flex-col gap-px items-start mr-6">
                <ClientLogo src="https://file.rendit.io/n/j0BRF9muNzIE4L3IKnJb.svg" />
                <ClientLogo src="https://file.rendit.io/n/j0BRF9muNzIE4L3IKnJb.svg" />
            </div>
            <div className="flex flex-col gap-px items-start mr-6">
                <ClientLogo src="https://file.rendit.io/n/K79M7qhF8QVOcGG9FES4.svg" />
                <ClientLogo src="https://file.rendit.io/n/K79M7qhF8QVOcGG9FES4.svg" />
            </div>

            <div className="flex flex-col gap-px items-start mr-6">
                <ClientLogo src="https://file.rendit.io/n/K79M7qhF8QVOcGG9FES4.svg" />
                <ClientLogo src="https://file.rendit.io/n/K79M7qhF8QVOcGG9FES4.svg" />
            </div>
            <div className="flex flex-col gap-px items-start mr-6">
                <ClientLogo src="https://file.rendit.io/n/WobXf6fVk0M4D8R2tU8X.svg" />
                <ClientLogo src="https://file.rendit.io/n/WobXf6fVk0M4D8R2tU8X.svg" />
            </div>

            <div className="flex flex-col gap-px items-start mr-6">
                <ClientLogo src="https://file.rendit.io/n/M6Vr0WnOLPCVUE8wk8Fu.svg" />
                <ClientLogo src="https://file.rendit.io/n/M6Vr0WnOLPCVUE8wk8Fu.svg" />
            </div>
        </div>
    </div>
);

export default Clients;
