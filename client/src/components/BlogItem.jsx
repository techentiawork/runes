import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { defImg, edit, trash } from "../assets";
import { setAlert } from "../store/ui";

function BlogItem({ setDeletePopup }) {

    const [formData, setFormData] = useState({ img: '', title: '', heading: '', content: '' });

    const { id } = useParams();
    const dispatch = useDispatch();
    
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`);
                setFormData(res.data.blog);
            } catch (e) {
                dispatch(setAlert({ message: e.response.data.message, type: "error" }));
            }
        };

    useEffect(() => {
        fetchBlog();
        window.scrollTo(0, 0);
    }, []);

    const updateBlog = async () => {

        if (!formData.img) {
            console.error('No img');
            return;
        }

        const data = new FormData();
        try {
            if (typeof formData.img !== 'string') {
                data.append("file", formData.img);
                data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
                data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

                const thumbnailResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, data);
                const res = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`, {
                    ...formData,
                    img: thumbnailResponse.data.secure_url,
                });
                console.log(res)
                setFormData(res.data.blog);
            } else {
                const res = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`, formData);
                console.log(res);
            }
            dispatch(setAlert({ message: 'blog Updated successfully', type: "success" }));
        } catch (e) {
            dispatch(setAlert({ message: e.response.data.message, type: "error" }));
            console.log(e.response.data);
        } finally {
            setTimeout(() => dispatch(setAlert({ message: '', type: "error" })), 1200);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target 

        if (type === 'file' && files) {
            setFormData((p) => ({ ...p, [name]: files[0] }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const { img } = formData;

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        (document.getElementById("img")).files = dataTransfer.files;
    };

    const clearThumbnail = () => {
        (document.getElementById("img")).files = null
        setFormData((p) => ({ ...p, img: null }))
    }

    return (
        <>
            <div className="justify-start overflow-auto flex-col  w-[100%] items-start gap-1 inline-flex xlg:p-4 md:p-3 p-2.5">
                <div className="pb-[14px]">
                    <Link to="/blogs" className="py-1.5 px-2 flex justify-center items-center gap-1 rounded-[36px] text-[#298D7C] text-center font-popins text-[14px] leading-6 font-[500]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.8002 7.99981L3.2002 7.9998M3.2002 7.9998L6.59431 11.1998M3.2002 7.9998L6.59431 4.7998" stroke="#298D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Back to Dashboard</p>
                    </Link>
                </div>
                <div className="max-w-[793px] w-[100%] xlg:p-4 md:p-3 p-2.5 bg-white rounded-lg border border-[#d0d0d0] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch flex-col justify-start items-start gap-5 flex">

                        <div className="relative w-full">
                            <input type="file" className="z-[2] opacity-0 h-[260px] md:h-[360px] relative w-[100%]" id="img" accept="image/*" name="img" onChange={handleChange} onDragOver={handleDragOver} onDrop={handleDrop} />
                            <div className="flex w-[100%] z-[1] absolute top-0">
                                {
                                    !img ?
                                        <label htmlFor="img" className="border-dashed border-2 w-[100%] h-[260px] md:h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]" >
                                            <img src={defImg} alt="Default Image Icon" />
                                            <p className="leading-6 text-[14px] font-popins text-[#676767] flex flex-wrap justify-center">
                                                Drag or upload your photo here
                                            </p>
                                        </label> :
                                        <div className="rounded-lg w-[100%] h-[260px] md:h-[360px] border-gray-400 flex flex-col justify-center items-center gap-[39px]">
                                            <img src={typeof formData.img === 'string'?formData.img:URL.createObjectURL(formData.img)} className="rounded-lg bg-contain w-[100%] h-[100%]" alt="Preview Image" />
                                        </div>
                                }
                            </div>
                            {
                                img &&
                                <div className="flex justify-between pt-2 px-1.5">
                                    <img src={edit} alt='Edit' onClick={clearThumbnail} />
                                    <img src={trash} alt='Trash' onClick={clearThumbnail} />
                                </div>
                            }
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">Title</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="text" id="title" name="title" value={formData.title ?? ''} onChange={handleChange} placeholder="Enter Title" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">heading</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="text" id="heading" name="heading" value={formData.heading ?? ''} onChange={handleChange} placeholder="Enter heading" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                        </div>

                        <h2 className="text-black font-bold text-[21px] font-inter">content</h2>
                        <div className="form-group flex justify-end flex-col relative">
                            <input type="text" id="content" name="content" value={formData.content ?? ''} onChange={handleChange} placeholder="Enter content" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
                        </div>

                        <div className="self-stretch w-full justify-end items-end gap-3 inline-flex">
                            <button onClick={updateBlog} className="px-2 py-1.5 sm:w-fit w-full bg-[#e5f8f4]/70 rounded-[36px] border-2 border-[#288d7c] justify-center items-center gap-1 flex">
                                <div className="justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-[#288d7c] text-sm font-medium font-['Poppins'] leading-normal">Save changes</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch h-px bg-[#d9d9d9]" />
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-normal">Delete Blog</div>
                        <div className="w-5 h-5 relative" />
                    </div>
                    <div className="sm:flex-row flex-col sm:justify-between gap-5 w-full sm:items-center inline-flex">
                        <div className="text-[#6d6d6d] text-sm font-normal font-roboto leading-tight">NOTE: All your data according this Blog ...</div>
                        <div className="px-2 py-1.5 rounded-[36px] border-2 cursor-pointer border-[#ff4f49] justify-center items-center gap-1 flex" onClick={() => setDeletePopup(true)}>
                            <div className="px-1 justify-start items-start gap-2.5 flex">
                                <div className="text-center text-[#ff4f49] text-sm font-medium font-['Poppins'] leading-normal">Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BlogItem;