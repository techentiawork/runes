import Lottie from "lottie-react";
import { anim1, anim2, anim3, anism1, anism2, anism3, anism4, bitcoin, co1, co2, co3, co4, co5, comp1, comp2, comp3, comp4, comp5, comp6, drone, drone2, evm, gl1, gl2, gl3, gl4, gl5, gl6, gl7, gl8, gl9, gr1, gr2, gr3, gr4, gr5, gr6, herow, l2, leadingline, logol, runes, solana, zetachain } from "../assets";
import para from '../assets/para.json'
import govt from '../assets/govt.json'
import dec from '../assets/dec.json'


import { Footer } from "../components";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger)

function Home() {

    const mainRef = useRef();

    useGSAP(() => {

        gsap.to('.globe', {
            rotate: '180deg',
            duration: 6,
            scrollTrigger: {
                trigger: '.globe',
                start: "top 450vh",
                end: "top 50vh",
                scrub: 1,
                // markers:1,  
            }
        })
        gsap.to('.ani-coin-1', {
            x: '60vh',
            y: '60vh',
            opacity: 0,
            duration: 6,
            scrollTrigger: {
                trigger: '.globe',
                start: "top 450vh",
                end: "top 150vh",
                scrub: 1,
                // markers:1,
            }
        })
        gsap.to('.ani-coin-2', {
            x: '60vh',
            y: '60vh',
            opacity: 0,
            duration: 6,
            scrollTrigger: {
                trigger: '.globe',
                start: "top 450vh",
                end: "top 150vh",
                scrub: 1,
                // markers:1,
            }
        })
        gsap.to('.ani-coin-3', {
            x: '-60vh',
            y: '60vh',
            opacity: 0,
            duration: 6,
            scrollTrigger: {
                trigger: '.globe',
                start: "top 450vh",
                end: "top 150vh",
                scrub: 1,
                // markers:1,
            }
        })
        gsap.to('.ani-coin-4', {
            x: '-60vh',
            y: '60vh',
            opacity: 0,
            duration: 6,
            scrollTrigger: {
                trigger: '.globe',
                start: "top 450vh",
                end: "top 150vh",
                scrub: 1,
                // markers:1,
            }
        })
        gsap.to('.ani-coin-5', {
            x: '-60vh',
            y: '60vh',
            opacity: 0,
            duration: 6,
            scrollTrigger: {
                trigger: '.globe',
                start: "top 450vh",
                end: "top 150vh",
                scrub: 1,
                // markers:1,
            }
        })

        gsap.from('.partners', {
            y: 100,
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: '.partners',
                start: 'top 75%',
                end: 'bottom 75%',
                // scrub:1,
                // markers:1,
            }
        })

        gsap.from('.discover', {
            y: 30,
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: '.discover',
                start: 'top 80%',
                end: 'bottom 80%',
                // scrub:1,
                // markers: 1,
            }
        })

        gsap.to('.holder img', {
            clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.holder',
                start: 'top 60%',
                end: 'top 30%',
                // scrub: 1,
                // markers: 1
            }
        });

        gsap.fromTo('.runes-right',
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.5,
                ease: 'power2.in',
                scrollTrigger: {
                    trigger: '.runes-right',
                    start: 'top 70%',
                    end: 'top -10%',
                    // scrub: 1,
                    // markers: 1 
                }
            }
        );

        gsap.fromTo('.runes-left',
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.runes-left',
                    start: 'top 60%',
                    end: 'top 20%',
                    // scrub: 1,
                    // markers: 1 
                }
            }
        );

        gsap.utils.toArray('.hbc').forEach((sec, index) => {
            gsap.from(sec, {
                scale: 0,
                opacity: 0,
                y: 20,
                duration: 1,
                scrollTrigger: {
                    trigger: sec,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    // markers:1
                }
            })
        })

    }, { dependencies: [], scope: mainRef })

    let list = [[
        {
            icon: gl1,
            heading: "RSIC Metaprotocol",
            desc: "Distributes RSIC tokens, crucial for the Runes protocol, offering a gamified mining experience."
        },
        {
            icon: gl2,
            heading: "Runecoin",
            desc: "An original Runes project that allows users to mine Runes and engage in various ecosystem activities."
        },
        {
            icon: gl3,
            heading: "Runes Terminal",
            desc: "Provides essential infrastructure for the Runes Protocol, including tools like RunesScan and launchpad services."
        },
        {
            icon: gl4,
            heading: "MEME ECONOMICS",
            desc: "Focuses on the economic aspects of meme coins within the Runes ecosystem, offering a unique approach to the digital asset market."
        },
        {
            icon: gl5,
            heading: "NodeMonkes",
            desc: "A notable collection in the Ordinals ecosystem, akin to CryptoPunks on Ethereum, recognized for its high value and distinct pixel art."
        },
        {
            icon: gl6,
            heading: "Runeflex",
            desc: "Distributes RSIC tokens, crucial for the Runes protocol, offering a gamified mining experience."
        },
        {
            icon: gl7,
            heading: "Taproot Wizards",
            desc: "Early pioneers in the Ordinals space, offering culturally and financially significant digital assets."
        },
        {
            icon: gl8,
            heading: "DOG•GO•TO•THE•MOON",
            desc: "Wanna see a bitcoin dog go to the moon? This is the dog to do it!"
        },
        {
            icon: gl9,
            heading: "Liquidium",
            desc: "Liquidium is how you borrow or lend BTC."
        },
    ], [
        {
            icon: gr1,
            heading: "Uniswap",
            desc: "A DEX for swapping tokens directly from your wallet on Ethereum.polygon.technology"
        },
        {
            icon: gr2,
            heading: "Arbitrum",
            desc: "Uses Optimistic Rollups to make Ethereum transactions faster and cheaper."
        },
        {
            icon: gr3,
            heading: "Lido",
            desc: "Allows staking of ETH with liquid tokens for use in DeFi."
        },
        {
            icon: gr4,
            heading: "Nexus Mutual",
            desc: "Provides insurance for smart contracts and crypto risks on Ethereum."
        },
        {
            icon: gr5,
            heading: "Decentraland",
            desc: "A virtual world for buying, building, and trading digital real estate on Ethereum."
        },
        {
            icon: gr6,
            heading: "Base",
            desc: "Offers low-cost, high-speed DeFi and NFTs on Ethereum."
        },
        {
            icon: gr6,
            heading: "Immutable",
            desc: "Focuses on making NFT transactions cheaper and faster on Ethereum."
        },
        {
            icon: gr6,
            heading: "Blast",
            desc: "Provides quick, low-fee Ethereum transactions with rollups."
        },
        {
            icon: gr6,
            heading: "MakerDAO",
            desc: "A decentralized lending platform that creates and manages the stablecoin DAI."
        },
    ]]

    let list1 = [
        {
            row: 0,
            col: 1
        },
        {
            row: 0,
            col: 2
        },
        {
            row: 0,
            col: 3
        },
        {
            row: 0,
            col: 4
        },
        {
            row: 1,
            col: 3
        },
        {
            row: 1,
            col: 2
        }
    ]

    return (
        <div className="w-full bg-[#FCFCFC] overflow-x-hidden" ref={mainRef}>
            <div className="lg:px-16 lg:py-7 py-4 md:px-8 px-4 w-full  bg-[#FCFCFC]">
                <div className="w-full flex justify-center h-[376.8px] sm:h-[295.25px] lg:h-[373.2px] ">
                    <div className="w-[668px] max-w-full flex-col flex items-center gap-4">
                        <div className=" pt-4 sm:border-t-[1px] border-[rgba(0,0,0,0.04)] w-[422px] max-w-full flex justify-center">
                            <div className="w-[154.28px] max-w-full h-[30px] bg-[#fcfcfc] flex justify-center items-center rounded-[100px] shadow border border-[#dadada]">
                                <div className="w-[128.48px] max-w-full h-4 text-center text-[#444444] text-[11.06px] font-medium font-['Inter'] leading-none">Mobile App is live! 🎉</div>
                            </div>
                        </div>
                        <div className="w-[668px] max-w-full flex-col flex items-center">
                            <div className="flex items-center justify-center py-4 border-t-[1px] w-[90%] border-b-[1px] border-[rgba(0,0,0,0.08)]">

                                <div className="text-black lg:text-[48px] md:text-[36px] text-[27px] xl:text-[64px] font-normal font-['Bricolage Grotesque'] ">RunesBridge </div>
                                <div className="lg:w-[79.56px] w-[54px] relative h-[61.31px] lg:h-[90.35px]">
                                <img className="w-full h-full" src={logol} />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-center gap-4 inline-flex">
                                <div className="text-center text-[#444444] md:text-[15px] text-[12px] lg:text-lg font-normal font-['Inter'] md:w-full w-[296px] leading-relaxed py-3 lg:py-4 border-b-[1px] border-[rgba(0,0,0,0.08)]">A fork of RunesBridge, RunesBridge-V is a decentralized platform including a bridge layer built to unlock liquidity and community through interoperability between blockchains.</div>
                                <div className="justify-start items-center gap-4 flex xxs:flex-row flex-col">
                                    <div className="wallet-btn cursor-pointer">Buy now</div>
                                    <div className="px-6 py-3.5 cursor-pointer bg-white rounded-[10px] border border-[#cccccc] justify-center items-center gap-2.5 flex">
                                        <div className="text-center text-[#444444] text-sm font-semibold font-['Inter'] leading-tight">Read Whitepaper</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center"><span className="sm:hidde py-8 text-black text-[10px] sm:text-base font-normal font-['Inter'] tracking-tight">Contract address</span><span className="sm:hidde py-8 text-black text-[10px] sm:text-base font-light font-['Inter'] tracking-tight"> - 0x25574757585885575ef</span></div>
                <div className="flex w-full justify-center ani-main h-[88vw] sm:h-[105vw] lg:h-[1030px]">
                    <img src={herow} alt="World" className="globe z-30 ani-world " />
                    <img src={co1} className="z-0 ani-coin-1 ani-coin " alt="co1" />
                    <img src={co2} className="z-0 ani-coin-2 ani-coin " alt="co1" />
                    <img src={co3} className="z-0 ani-coin-3 ani-coin " alt="co1" />
                    <img src={co4} className="z-0 ani-coin-4 ani-coin " alt="co1" />
                    <img src={co5} className="z-0 ani-coin-5 ani-coin " alt="co1" />
                </div>
                <div className="w-full flex justify-center"><span className="sm:hidde py-8 text-black text-[10px] sm:text-base font-normal font-['Inter'] tracking-tight">Contract address</span><span className="sm:hidde py-8 text-black text-[10px] sm:text-base font-light font-['Inter'] tracking-tight"> - 0x25574757585885575ef</span></div>
            </div>
            <div className="partners w-[1440px] xl:w-full max-w-full bg-white flex justify-center lg:py-[96px] py-[44px] xl:py-[60px]">
                <div className="w-[712px] max-w-full px-4 md:bloc hidden">
                    <div className="text-center text-[#111111] text-sm font-normal font-['Inter'] uppercase leading-[21px] tracking-widest">Decentralized Governance</div>
                    <div className="w-[656px] max-w-full text-center text-[#1f1f1f] text-xl font-normal font-['Inter']">We facilitate simple, seamless cross-chain interactions for digital asset management. RunesBridgeV promotes security, integrity, and cost-effectiveness through robust institutionalization and an innovative decentralized architecture.</div>
                </div>
                <div className="md:hidde flex flex-col gap-5 w-full">
                    <div className="text-center text-[#111111] text-xs font-normal font-['Inter'] uppercase leading-[21px] tracking-wide">Trusted by our incredible partners</div>
                    <div className="flex flex-wrap gap-y-5 sm:gap-y-20 gap-x-10 2xl:gap-x-20 justify-center px-12">
                        <img className="w-[40%] sm:w-[25%] 2xl:w-[23%]" src={comp1} alt="Comp" />
                        <img className="w-[40%] sm:w-[25%] 2xl:w-[23%]" src={comp2} alt="Comp" />
                        <img className="w-[40%] sm:w-[25%] 2xl:w-[23%]" src={comp3} alt="Comp" />
                        <img className="w-[40%] sm:w-[25%] 2xl:w-[23%]" src={comp4} alt="Comp" />
                        <img className="w-[40%] sm:w-[25%] 2xl:w-[23%]" src={comp5} alt="Comp" />
                        <img className="w-[40%] sm:w-[25%] 2xl:w-[23%]" src={comp6} alt="Comp" />
                    </div>
                </div>
            </div>
            <div className="xl:px-[133px] p-4 md:p-8 xl:py-[100px] flex-col justify-start items-start gap-4 inline-flex w-full  bg-[#FCFCFC]">
                <div className="p-2.5 flex-col justify-center items-start gap-2.5 flex">
                    <div><span className="text-[#ff0025] md:text-[28px] text-[24px] lg:text-[32px] font-extrabold font-['Bricolage Grotesque']">.</span><span className="text-[#444444] md:text-[28px] text-[24px] lg:text-[32px] font-normal font-['Bricolage Grotesque']">Level up</span></div>
                </div>
                <div className="discover w-[1173px] max-w-full">
                    <div className="w-[682px] max-w-full text-[#232323] xl:text-[80px]  lg:text-[55px] md:text-[40px] text-[28px] font-semibold font-['Bricolage Grotesque'] md:block hidden tracking-[3.20px] leading-[1.1]">Discover a new connection.</div>
                    <div className="w-[682px] max-w-full text-[#232323] xl:text-[80px]  lg:text-[55px] md:text-[40px] text-[28px] font-semibold font-['Bricolage Grotesque'] md:hidden block md:tracking-[2px] tracking-[1.12px] xl:tracking-[3.20px] leading-[1.1]">Take advantage of every chance on the chain</div>
                </div>
            </div>
            <div className="holder xl:px-[133px] px-4 md:px-8 w-full overflow-x-hidden  bg-[#FCFCFC]">
                <div className="w-full md:flex justify-end hidden">
                    <img className="opacity-0" src={leadingline} alt="leadingline" />
                </div>
                <div className="w-full md:hidden justify-end flex">
                    <img className="opacity-0" src={l2} alt="leadingline" />
                </div>
                <div className=" max-w-full flex justify-end">
                    <div className="md:w-[421px] sm:w-[320px] xss:w-[250px] w-[200px] max-w-full">
                        <div className="runes-right w-[421px] max-w-full"><span className="text-[#bcbcbc] lg:text-[26px] md:text-[20px] text-[14px] sm:text-[18px] xl:text-[32px] font-normal font-['Inter']">The RunesBridge-V project is pioneering the integration of Ethereum and Bitcoin, Expanding the importance of interoperability in blockchain technology. </span><span className="text-[#1a1a1a] lg:text-[26px] md:text-[20px] text-[14px] sm:text-[18px] xl:text-[32px] font-bold font-['Inter']">By bridging {"Ethereum's"} smart contract capabilities with {"Bitcoin's"} security, RunesBridge-V aims to set and grow a new standard for hybrid or dual launch projects.</span><span className="text-[#bcbcbc] lg:text-[26px] md:text-[20px] text-[14px] sm:text-[18px] xl:text-[32px] font-normal font-['Inter']"> This infrastructure solidifies a commitment to uniting the two most important blockchain ecosystems with a decentralized bridge layer while carefully selecting and supporting projects to promote responsible growth in the crypto space.</span></div>
                    </div>
                </div>
            </div>
            <div className="xl:px-[133px] px-4 md:px-8 w-full overflow-x-hidden lg:py-[156px] py-20  bg-[#FCFCFC]">
                <div className="flex-col justify-start items-start gap-[156px] inline-flex w-full">
                    <div className="runes-left sm:w-[636px] md:w-full xs:w-full w-[291px] max-w-full flex flex-col gap-4">
                        <div className="w-[686px] max-w-full text-[#232323] lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-6xl font-semibold font-['Bricolage Grotesque'] tracking-[0.96px] md:tracking-widest">Powerful and Solid Bridging Mechanism</div>
                        <div className="w-[636px] max-w-full text-[#bcbcbc] lg:text-[26px] md:text-[20px] text-[14px] sm:text-[18px] xl:text-[32px] font-normal font-['Inter']">We facilitate simple, seamless cross-chain interactions for digital asset management. RunesBridgeV promotes security, integrity, and cost-effectiveness through robust institutionalization and an innovative decentralized architecture.</div>
                    </div>
                </div>
            </div>

            <div className="xl:px-[133px] px-4 md:px-8 lg:py-20 pt-5 pb-16 bg-white justify-between gap-6 items-center flex w-full xxs:flex-row flex-col">
                <div className="lg:w-[545.03px] xxs:w-[50%] max-w-full flex flex-col gap-3 md:gap-6">
                    <div className="text-[#232323] lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-[64px] font-semibold font-['Bricolage Grotesque'] tracking-[2.56px]">The Runes Protocol:</div>
                    <div className="w-[417.33px] max-w-full text-[#5a585a] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] xl:text-2xl font-medium font-['Inter']">The Runes Protocol: The Safety, Longevity and Governance of Bitcoin.</div>
                    <div className="lg:w-[545.03px] w-full max-w-full flex items-center px-3 py-2 lg:px-[41px] xl:h-20 lg:h-16 md:h-12 sm:h-11 h-[38px] relative bg-[#eee] rounded-[40px] border-[2px] gap-2 border-[#0F0F0F]">
                        <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5003 17.9993L14.167 14.666" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input type="text" className="border-none bg-transparent outline-none w-full text-[#000] lg:text-[26px] md:text-[20px] text-[14px] sm:text-[18px] xl:text-[30px] font-[500]" placeholder="Search" />
                    </div>
                </div>
                <div className="lg:w-[390px] xxs:w-[50%] max-w-full flex flex-col xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-[9px]">
                    <div className="w-fit lg:w-[390px] max-w-full flex lg:gap-5 md:gap-4 gap-3 xl:gap-[30px] items-center">
                        <img src={solana} alt="Solana" className="xl:w-20 lg:w-16 md:w-12 sm:w-10 w-8" />
                        <div className="text-black lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-6xl font-medium font-['Inter'] leading-[1.4]">Solana</div>
                    </div>
                    <div className="w-fit lg:w-[390px] max-w-full flex lg:gap-5 md:gap-4 gap-3 xl:gap-[30px] items-center">
                        <img src={evm} alt="EVM" className="xl:w-20 lg:w-16 md:w-12 sm:w-10 w-8" />
                        <div className="text-black lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-6xl font-medium font-['Inter'] leading-[1.4]">EVM</div>
                    </div>
                    <div className="w-fit lg:w-[390px] max-w-full flex lg:gap-5 md:gap-4 gap-3 xl:gap-[30px] items-center">
                        <img src={bitcoin} alt="Bitcoin" className="xl:w-20 lg:w-16 md:w-12 sm:w-10 w-8" />
                        <div className="text-black lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-6xl font-medium font-['Inter'] leading-[1.4]">Bitcoin</div>
                    </div>
                    <div className="w-fit lg:w-[390px] max-w-full flex lg:gap-5 md:gap-4 gap-3 xl:gap-[30px] items-center">
                        <img src={zetachain} alt="ZetaChain" className="xl:w-20 lg:w-16 md:w-12 sm:w-10 w-8" />
                        <div className="text-black lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-6xl font-medium font-['Inter'] leading-[1.4]">ZetaChain</div>
                    </div>
                    <div className="w-fit lg:w-[390px] max-w-full flex lg:gap-5 md:gap-4 gap-3 xl:gap-[30px] items-center">
                        <img src={runes} alt="Runes" className="xl:w-20 lg:w-16 md:w-12 sm:w-10 w-8" />
                        <div className="text-black lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px] xl:text-6xl font-medium font-['Inter'] leading-[1.4]">Runes</div>
                    </div>
                </div>
            </div>
            <div className="lg:my-20 py-10 xl:px-[133px] px-4 md:px-8 w-full bg-[#FCFCFC]">
                <div className="pb-6 flex-col justify-center gap-2 inline-flex w-full items-center lg:hidden">
                    <div className="text-center text-[#232323] text-2xl font-semibold font-['Bricolage Grotesque'] tracking-wide">Get to know our ecosytem</div>
                    <div className="text-center text-[#5a585a] text-xs font-medium font-['Inter']">Our trusted partners ensure secure transactions, innovative technology, and reliable support for your crypto success.</div>
                </div>
                <div className="flex w-full gap-4 lg:flex-row  justify-between lg:items-center">
                    <div className="scroll-card lg:w-[481px] w-full max-w-full h-[454px] lg:h-[544px] overflow-y-auto hidden lg:flex flex-col gap-4">
                        {
                            list[0].map((item, key) => {
                                return (
                                    <div className="flex lg:px-5 px-4 py-3 lg:py-4 gap-4 lg:gap-[37px] items-center bg-[rgba(110,110,110,0.17)] rounded-[20px] lg:min-h-[124px] h-full" key={key}>
                                        <img src={item.icon} alt={item.heading} className="lg:w-20 w-[56px]" />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[#1f1f1f] md:text-[18px] text-[16px] lg:text-xl font-bold font-['Inter'] uppercase">{item.heading}</div>
                                            <div className="text-[#1f1f1f] text-[12px] lg:text-sm font-normal font-['Inter'] capitalize">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="h-[400px] xlg:max-w-[250px] lg:w-[180px] xl:max-w-[374px] xl:w-full flex-col justify-center items-center gap-6 hidden lg:flex">
                        <div className="max-w-full text-center text-[#232323] lg:text-[32px] md:text-[32px] xl:text-[64px] font-semibold font-['Bricolage Grotesque'] tracking-[2.56px] leading-[1.1]">Get to know our ecosytem</div>
                        <div className="max-w-full text-center text-[#5a585a] text-2xl font-medium font-['Inter']">Our trusted partners ensure secure transactions, innovative technology, and reliable support for your crypto success.</div>
                    </div>

                    <div className="scroll-card lg:w-[481px] w-full max-w-full h-[454px] lg:h-[544px] overflow-y-auto hidden lg:flex flex-col gap-4">
                        {
                            list[1].map((item, key) => {
                                return (
                                    <div className="flex lg:px-5 px-4 py-3 lg:py-4 gap-4 lg:gap-[37px] items-center bg-[rgba(110,110,110,0.17)] rounded-[20px] lg:min-h-[124px] h-full" key={key}>
                                        <img src={item.icon} alt={item.heading} className="lg:w-20 w-[56px]" />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[#1f1f1f] md:text-[18px] text-[16px] lg:text-xl font-bold font-['Inter'] uppercase">{item.heading}</div>
                                            <div className="text-[#1f1f1f] text-[12px] lg:text-sm font-normal font-['Inter'] capitalize">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="scroll-card lg:w-[481px] w-full max-w-full h-[454px] lg:h-[544px] overflow-y-auto flex lg:hidden flex-col gap-4">
                        {
                            list1.map((item, key) => {
                                return (
                                    <div className="flex lg:px-5 px-4 py-3 lg:py-4 gap-4 lg:gap-[37px] items-center bg-[rgba(110,110,110,0.17)] rounded-[20px] lg:min-h-[124px] h-full" key={key}>
                                        <img src={list[item.row][item.col].icon} className="lg:w-20 w-[56px]" alt={list[item.row][item.col].heading} />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-[#1f1f1f] md:text-[18px] text-[16px] lg:text-xl font-bold font-['Inter'] uppercase">{list[item.row][item.col].heading}</div>
                                            <div className="text-[#1f1f1f] text-[12px] lg:text-sm font-normal font-['Inter'] capitalize">
                                                {list[item.row][item.col].desc}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="xl:px-[133px] px-4 md:px-8 py-20 bg-white justify-between gap-6 items-center flex w-full">
                <div className="w-full">
                    <div className="pb-[46px] md:block hidden"><span className="text-[#ff0025] text-[32px] font-extrabold font-['Inter'] leading-[34px]">.</span><span className="text-black text-[32px] font-medium font-['Inter'] leading-[34px]">Secure and private</span></div>
                    <div className="flex flex-col gap-3">
                        <div className=" text-black lg:text-[60px] md:text-[28px] sm:text-[30px] text-[20px] xl:text-7xl font-medium font-['Bricolage Grotesque'] leading-normal lg:tracking-[4px] md:tracking-[2px] tracking-[0.96px] xl:tracking-[8.64px]">RunesBridge-V Platform</div>
                        <div className="flex  text-black lg:text-[60px] md:text-[28px] sm:text-[30px] text-[20px] xl:text-7xl font-medium font-['Bricolage Grotesque'] leading-normal lg:tracking-[4px] md:tracking-[2px] tracking-[0.96px] xl:tracking-[8.64px] relative overflow-hidden">
                            <span className="relative left-0">and neeche cards
                                <img src={drone} alt="Drone" className="md:block hidden absolute  top-[50%] left-[100%] translate-y-[-50%]" />
                                <img src={drone2} alt="Drone" className="md:hidden block absolute  left-[100%] top-[50%] translate-y-[-50%]" />
                            </span>

                        </div>
                    </div>
                    <div className="lg:pt-20 md:pt-10 pt-6 w-full flex flex-col md:gap-[30px] gap-4 lg:gap-[45px]">
                        <div className="hbc flex justify-between w-full md:px-16 px-4 lg:px-[120px] min-h-[158px] lg:min-h-[560px] items-center rounded-[20px] bg-[#F9FAF9] py-4 lg:order-1">
                            <div className="w-[60%] md:w-full">
                                <div className="text-black lg:text-[50px] md:text-[38px] sm:text-[24px] text-[18px] xl:text-[60px] font-[600] md:font-bold font-['Bricolage Grotesque'] pb-6 leading-[1.2]">An Incubator:</div>
                                <div className="max-w-[642px] text-black lg:text-[28px] md:text-[22px] sm:text-[16px] text-[12px] xl:text-[34.88px] font-normal font-['Inter'] leading-[1.3]">Advisors help launch new projects dual-chain.</div>
                            </div>
                            <div className="w-[35%] flex justify-center ">
                                <div className="w-[80%] lg:w-[280px]">
                                    <Lottie animationData={anim3} loop={true} />
                                </div>
                            </div>
                        </div>
                        <div className="hbc flex justify-between w-full md:px-16 px-4 lg:px-[120px] min-h-[158px] lg:min-h-[560px] items-center rounded-[20px] bg-[#F9FAF9] py-4 lg:order-1">
                            <div className="w-[60%] md:w-full">
                                <div className="text-black lg:text-[50px] md:text-[38px] sm:text-[24px] text-[18px] xl:text-[60px] font-[600] md:font-bold font-['Bricolage Grotesque'] pb-6 leading-[1.2]">Decentralized Business Development Team:</div>
                                <div className="max-w-[642px] text-black lg:text-[28px] md:text-[22px] sm:text-[16px] text-[12px] xl:text-[34.88px] font-normal font-['Inter'] leading-[1.3]">It will be easier to use and more accessible with an intuitive interface, which will help the organic industry grow.</div>
                            </div>
                            <div className="w-[35%] flex justify-center ">
                                <div className="w-[80%] lg:w-[280px]">
                                    <Lottie animationData={anim1} loop={true} />
                                </div>
                            </div>
                        </div>
                        <div className="hbc flex justify-between w-full md:px-16 px-4 lg:px-[120px] min-h-[158px] lg:min-h-[560px] items-center rounded-[20px] bg-[#F9FAF9] py-4 lg:order-1 order-2">
                            <div className="w-[60%] md:w-full">
                                <div className="text-black lg:text-[50px] md:text-[38px] sm:text-[24px] text-[18px] xl:text-[60px] font-[600] md:font-bold font-['Bricolage Grotesque'] pb-6 leading-[1.2]">Airdrop Guild:</div>
                                <div className="max-w-[642px] text-black lg:text-[28px] md:text-[22px] sm:text-[16px] text-[12px] xl:text-[34.88px] font-normal font-['Inter'] leading-[1.3]">We’ve mastered the art of airdrops for the purpose of supporting and growing projects and communities. Our token holders can expect to be part of the launch of many new entrants into the space and enjoy fun and exciting airdrops.</div>
                            </div>
                            <div className="w-[35%] flex justify-center ">
                                <div className="w-[80%] lg:w-[280px]">
                                    <Lottie animationData={para} loop={true} />
                                </div>
                            </div>
                        </div>
                        <div className="hbc flex justify-between w-full md:px-16 px-4 lg:px-[120px] min-h-[158px] lg:min-h-[560px] items-center rounded-[20px] bg-[#F9FAF9] py-4 lg:order-1">
                            <div className="w-[60%] md:w-full">
                                <div className="text-black lg:text-[50px] md:text-[38px] sm:text-[24px] text-[18px] xl:text-[60px] font-[600] md:font-bold font-['Bricolage Grotesque'] pb-6 leading-[1.2]">Governance Council:</div>
                                <div className="max-w-[642px] text-black lg:text-[28px] md:text-[22px] sm:text-[16px] text-[12px] xl:text-[34.88px] font-normal font-['Inter'] leading-[1.3]">	Governance Council:Makes decisions and manages all high-level needs of the project to ensure long-term autonomy, growth, and success.</div>
                            </div>
                            <div className="flex justify-center w-[35%] ">
                                <div className="w-[80%] lg:w-[280px]">
                                    <Lottie animationData={govt} loop={true} />
                                </div>

                                
                            </div>
                        </div>
                        <div className="hbc flex justify-between w-full md:px-16 px-4 lg:px-[120px] min-h-[158px] lg:min-h-[560px] items-center rounded-[20px] bg-[#F9FAF9] py-4 lg:order-1">
                            <div className="w-[60%] md:w-full">
                                <div className="text-black lg:text-[50px] md:text-[38px] sm:text-[24px] text-[18px] xl:text-[60px] font-[600] md:font-bold font-['Bricolage Grotesque'] pb-6 leading-[1.2]">Decentralized Bridge Layer</div>
                                <div className="max-w-[642px] text-black lg:text-[28px] md:text-[22px] sm:text-[16px] text-[12px] xl:text-[34.88px] font-normal font-['Inter'] leading-[1.3]">Decentralized Bridge Layer: Designed to connect different blockchains to unlock liquidity, expand communities, and support growth.</div>
                            </div>
                            <div className="flex justify-center w-[35%] ">
                                {/* <img src={anism1} alt="Ani1" className="lg:hidden w-full" /> */}
                                <div className="w-[80%] lg:w-[280px] ">
                                    <Lottie animationData={dec} loop={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
