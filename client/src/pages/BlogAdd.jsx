
import React, { useState } from 'react';
import { DashNav, SideNav } from '../components';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { defImg, edit, trash } from '../assets';
import { useNavigate } from 'react-router-dom';
import { setAlert, setBlogs } from '../store/ui';

const BlogAdd = () => {
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blogs)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === 'file' && files) {
      setFormData((p) => ({ ...p, [name]: files[0], }));
    } else {
      setFormData(p => ({ ...p, [name]: value }));
    }
  }

  const handleSubmit = async () => {

    setIsSubmitting(true);

    if (!formData.img) {
      dispatch(setAlert({ message: 'No Thumbnail', type: 'warning' }))
      setTimeout(() => dispatch(setAlert({ message: '', type: 'info' })), 1200)
      return;
    }

    const data = new FormData();
    data.append("file", formData.img);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    try {
      const thumbnailResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, data);
      
      const { img, ...restFormData } = formData;
      
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/submit`, {
          ...restFormData,
          img: thumbnailResponse.data.secure_url,
          content: value
        });

      dispatch(setAlert({ message: res.data.message, type: 'success' }))

      dispatch(setBlogs([...blogs, res.data.blog]))
      // fetchRaisings()

      navigate("/blogs");

      setFormData({ img: '', title: '', heading: '', content: '' })

    } catch (e) {
      dispatch(setAlert({ message: e.response.data.error, type: 'warning' }))
      console.log(e)
    }
    finally {
      setTimeout(() => dispatch(setAlert({ message: '', type: 'info' })), 1200)
      setIsSubmitting(false);
    }
  };

  const [formData, setFormData] = useState({ img: '', title: '', heading: '', content: '' });

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

  
  const handleEditorChange = (content) => {
    setValue(content);
  };

  const cloudinaryUpload = (blobInfo, progress)=> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', blobInfo.blob());
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Your Cloudinary upload preset
      formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Your Cloudinary cloud name

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, true);

      // Track upload progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          progress(Math.round(percentComplete)); // Report progress to TinyMCE
        }
      };

      // Handle success or failure
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response.secure_url); // Return the uploaded image URL to TinyMCE
        } else {
          reject('Image upload failed');
        }
      };

      xhr.onerror = () => reject('Image upload failed');
      xhr.send(formData);
    });
  };

  return (
    <div className="h-screen w-full overflow-hidden relative flex bg-[#f2f2f2]">
      <SideNav />
      <div className="flex h-[100vh] w-[100%] flex-col">
        <DashNav />
        <div className="overflow-auto w-[100%] flex flex-col gap-5 xlg:p-4 md:p-3 p-2.5 md:pr-4 sm:pr-2 pr-0">

          <h2 className="text-black font-bold text-[21px] font-inter">Title</h2>
          <div className="form-group h-[64px] flex justify-end flex-col relative">
            <input type="text" id="title" name="title" value={formData.title ?? ''} onChange={handleChange} placeholder="Enter Title" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
          </div>

          <h2 className="text-black font-bold text-[21px] font-inter">heading</h2>
          <div className="form-group h-[64px] flex justify-end flex-col relative">
            <input type="text" id="heading" name="heading" value={formData.heading ?? ''} onChange={handleChange} placeholder="Enter heading" className="form-input text-[14px] outline-none border-b border-[#D0D2D5] py-2.5 px-1" />
          </div>

          <div className="h-screen">

            <Editor
              apiKey={import.meta.env.VITE_TINY_API_KEY}
              value={value}
              init={{
                height: 500,
                menubar: true,
                a11y_advanced_options: true,
                plugins: [
                  'advlist autolink lists link image charmap preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | removeformat | help | image',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } img {display:block; max-width: 100%; height: 370px; }',
                images_upload_handler: (blobInfo, progress) => cloudinaryUpload(blobInfo, progress),
              }}
              onEditorChange={handleEditorChange}
            />
            {/* <div>
              <h2>Preview:</h2>
              <div dangerouslySetInnerHTML={{ __html: value }} />
            </div> */}
          </div>

          <h2 className="text-black font-bold text-[21px] font-inter leading-[101%]">Add a cover photo</h2>
          <p className="font-popins text-[14px] leading-6 text-[#676767]">Use clear and bright photo helps people connect to your blog instantly.</p>

          <div className="relative">
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
                    <img src={URL.createObjectURL(img)} className="rounded-lg bg-contain w-[100%] h-[100%]" alt="Preview Image" />
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

          <button className="text-center text-white text-sm font-medium font-popins px-2 py-1.5 bg-gradient-to-b from-[#4F38DC] to-[#563CF0] rounded-[36px]" onClick={handleSubmit} disabled={isSubmitting}>Submit</button>

        </div>
      </div>
    </div>
  );
};

export default BlogAdd;
