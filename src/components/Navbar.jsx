import { Link, useLocation } from "react-router-dom";
import { git, line, logo, maskgroup, maskgroup2, maskgroup3, menu, telegram, xicon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "../store/ui";

function Navbar() {
    const { navOpen } = useSelector((store) => store)
    console.log(navOpen)
    const dispatch = useDispatch();
    const loc = useLocation();
    return (
        <>
            <div className={`lg:px-16 lg:py-7 py-4 md:px-8 px-4 h-15 flex justify-between items-center relative ${loc.pathname == "/" ? "bg-[#FCFCFC]" : "bg-white"}`}>
                <div className="flex items-center">
                    <Link to={'/blog'}>
                        <div className="text-black md:text-2xl sm:text-[19px] text-[14px] font-normal font-lato">RunesBridge</div>
                    </Link>
                    <img src={logo} className="md:w-[35px] md:h-[39px] w-28px] h-[31px]" alt="Logo" />
                </div>
                <div className="links px-6 py-4 lg:flex hidden gap-5 items-center rounded-[12px] border-[1px] border-[#EEE] bg-[#F4F4F4]">
                    <Link to={"/"}>
                        <img src={telegram} alt="Telegram" />
                    </Link>
                    <img src={line} alt="Line" />
                    <Link to={"/"}>
                        <img src={git} alt="Git" />
                    </Link>
                    <img src={line} alt="Line" />
                    <Link to={"/"}>
                        <img src={xicon} alt="Xicon" />
                    </Link>
                    <img src={line} alt="Line" />
                    <Link to={"/"}>
                        <img src={maskgroup} alt="Maskgroup" />
                    </Link>
                    <img src={line} alt="Line" />
                    <Link to={"/"}>
                        <img src={maskgroup2} alt="maskgroup2" />
                    </Link>
                    <img src={line} alt="Line" />
                    <Link to={"/"}>
                        <img src={maskgroup3} alt="maskgroup3" />
                    </Link>
                </div>
                <Link to={"/dashboard"} className="flex items-center gap-0.5">
                    <div className="wallet-btn">Wallet</div>
                    <img src={menu} alt="Menu" className="lg:hidden w-5" onClick={() => dispatch(setNavOpen(!navOpen))} />
                </Link>
            </div>
            {
                navOpen && <div className="links px-6 py-4 lg:hidden z-[100] absolute w-fit left-4 flex flex-col gap-5 items-center rounded-[12px] border-[1px] border-[#EEE] bg-[#F4F4F4]">
                    <Link to={"/dashboard"}>
                        <img src={telegram} alt="Telegram" />
                    </Link>
                    <img src={line} alt="Line" className="rotate-90" />
                    <Link to={"/"}>
                        <img src={git} alt="Git" />
                    </Link>
                    <img src={line} alt="Line" className="rotate-90" />
                    <Link to={"/"}>
                        <img src={xicon} alt="Xicon" />
                    </Link>
                    <img src={line} alt="Line" className="rotate-90" />
                    <Link to={"/"}>
                        <img src={maskgroup} alt="Maskgroup" />
                    </Link>
                    <img src={line} alt="Line" className="rotate-90" />
                    <Link to={"/"}>
                        <img src={maskgroup2} alt="maskgroup2" />
                    </Link>
                    <img src={line} alt="Line" className="rotate-90" />
                    <Link to={"/"}>
                        <img src={maskgroup3} alt="maskgroup3" />
                    </Link>
                </div>
            }
        </>
    );
}

export default Navbar;