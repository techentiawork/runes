import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BlogCard, DashNav, SideNav } from "../components";

function BlogDashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="h-screen w-full overflow-hidden relative flex bg-[#f2f2f2]">
      <SideNav />
      <div className="flex h-[100vh] w-[100%] flex-col">
        <DashNav />
        <div className="justify-start overflow-auto  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
          <div className="w-[100%] flex-col justify-start items-start gap-3 xlg:gap-5 inline-flex md:pr-4 sm:pr-2 pr-0">
            <div className="self-stretch pl-5 pr-2.5 py-2.5 bg-white rounded-lg border border-[#d0d0d0] justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
              </div>
              <div className="h-8 md:h-9 px-2 py-1.5 cursor-pointer bg-gradient-to-b from-[#4F38DC] to-[#563CF0] rounded-[36px] justify-center items-center gap-1 flex" onClick={() => navigate("/add")}>
                <div className="px-1 justify-start items-start gap-2.5 hidden md:flex">
                  <div className="text-center text-white text-sm font-medium font-popins leading-normal">Create New </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.99967 3.33398V12.6673M12.6663 8.00065H3.33301" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              {
                blogs?.map((blog, ind) =>
                  <Link to={`/blogs/${blog._id}`} >
                    <BlogCard blog={blog} key={ind} to={`/blogs/${blog._id}`} />
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogDashboard
