import React from "react";
import Marquee from "react-fast-marquee";
import photographyImg from "/FindYourNiche/photography.jpg";
import musicImg from "/FindYourNiche/music.jpg";
import writingImg from "/FindYourNiche/writingandliterature.png";
import cinematographyImg from "/FindYourNiche/cinematography.png";
import danceImg from "/FindYourNiche/dance.png";
import poetryImg from "/FindYourNiche/poetry.jpeg";
import fashionImg from "/FindYourNiche/fashion&design.png";
import productionImg from "/FindYourNiche/production.png";
import graphicDesignImg from "/FindYourNiche/graphicdesign.jpg";

const FindYourNiche = () => {
    const marquee1Content = [
        { type: "text", value: "PHOTOGRAPHY" },
        { type: "image", value: photographyImg, bgPosition: "bg-[0%_37.5%]" },
        { type: "text", value: "MUSIC" },
        { type: "image", value: musicImg, bgPosition: "bg-[0%_37.5%]" },
        { type: "text", value: "WRITING&LITERATURE" },
        { type: "image", value: writingImg, bgPosition: "bg-[0%_37.5%]" },
    ];

    const marquee2Content = [
        { type: "text", value: "CINEMATOGRAPHY&FILMMAKING" },
        { type: "image", value: cinematographyImg, bgPosition: "bg-[0%_37.5%]" },
        { type: "text", value: "DANCE" },
        { type: "image", value: danceImg, bgPosition: "bg-[0%_42%]" },
        { type: "text", value: "POETRY&SPOKENWORD" },
        { type: "image", value: poetryImg, bgPosition: "bg-top" },
    ];

    const marquee3Content = [
        { type: "text", value: "FASHION" },
        { type: "image", value: fashionImg, bgPosition: "bg-[0%_22%]" },
        { type: "text", value: "PRODUCTION" },
        { type: "image", value: productionImg, bgPosition: "bg-[0%_82%]" },
        { type: "text", value: "GRAPHICDESIGN&ILLUSTRATION" },
        { type: "image", value: graphicDesignImg, bgPosition: "bg-bottom" },
    ];

    const renderMarquee = (content) =>
        content.map((item, i) =>
            item.type === "text" ? (
                <p key={i} className="font-bold text-[5rem] text-shadow-lg">
                    {item.value}
                </p>
            ) : (
                <figure
                    key={i}
                    style={{ backgroundImage: `url(${item.value})` }}
                    className={`min-h-[6.25rem] min-w-[21.875rem] bg-cover ${item.bgPosition} rounded-full`}
                ></figure>
            )
        );

    return (
        <section className="min-h-screen bg-[#E10600] text-white pt-[2.5rem] pb-[2.8125rem] font-clash">
            <h1 className="mt-[1.125rem] mb-6 py-[1.4375rem] text-center text-[5rem] font-medium">
                FIND YOUR NICHE
            </h1>

            <article className="max-h-full h-fit mt-6">
                <div className="mb-8 min-h-[7.5rem] flex items-center overflow-hidden">
                    <Marquee className="gap-10" speed={50} gradient={false}>
                        <div className="flex items-center gap-10">
                            {renderMarquee(marquee1Content)}
                        </div>
                    </Marquee>
                </div>

                <div className="mb-8 min-h-[7.5rem] flex items-center overflow-hidden">
                    <Marquee className="gap-10" speed={50} gradient={false} direction="right">
                        <div className="flex items-center gap-10">
                            {renderMarquee(marquee2Content)}
                        </div>
                    </Marquee>
                </div>

                <div className="mb-8 min-h-[7.5rem] flex items-center overflow-hidden">
                    <Marquee className="gap-10" speed={50} gradient={false}>
                        <div className="flex items-center gap-10">
                            {renderMarquee(marquee3Content)}
                        </div>
                    </Marquee>
                </div>
                {/* <div className='mb-8   min-h-[7.5rem] flex items-center overflow-x-clip'>
                    <div className='animate-slideLeft flex items-center gap-10'>
                        {renderMarquee(marquee1Content)}
                    </div>
                    <div className='animate-slideLeft flex items-center gap-10'>
                        {renderMarquee(marquee1Content)}
                    </div>
                </div>

                <div className='mb-8   min-h-[7.5rem] flex items-center overflow-x-clip'>
                    <div className='animate-slideRight flex items-center gap-10'>
                        {renderMarquee(marquee2Content)}
                    </div>
                    <div className='animate-slideRight flex items-center gap-10'>
                        {renderMarquee(marquee2Content)}
                    </div>
                </div>

                <div className='mb-8   min-h-[7.5rem] flex items-center overflow-x-clip'>
                    <div className='animate-slideLeft flex items-center gap-10'>
                        {renderMarquee(marquee3Content)}
                    </div>
                    <div className='animate-slideLeft flex items-center gap-10'>
                        {renderMarquee(marquee3Content)}
                    </div>
                </div> */}
            </article>

            <h2 className="text-center text-[2.625rem] font-medium mt-[6rem]">
                Explore countless creative paths — these are just a few.
            </h2>
        </section>
    );
};

export default FindYourNiche;