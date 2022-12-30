import React, { useState } from 'react'

const AvatarInput = ({fileName, setFileName, file, setFile}) => {
  const [data, setData] = useState({}),
    onchange = (e) => {
      const { name, value, files } = e.target;
      if (files) {
        setFileName(files[0].name);
        setFile(URL.createObjectURL(files[0]));
      } else {
        setData({ ...data, [name]: value });
      }
    },
    onDelete = () => {
      setFile("");
      setFileName("");
    };

  return (
    <div className="input-avatar">
      <div className="avatar-box">
        <img src={file} alt={fileName} />
        <input
          type="file"
          id="avatar-btn"
          onChange={onchange}
          name="imgFile"
          accept="image/jpg, image/jpeg, image/png"
          hidden
        />
        <label className="edit-btn-label" htmlFor="avatar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="edit-image"
          >
            <path
              fill="#444"
              d="M1 11.9 0 16l4.1-1 9.2-9.2-3.1-3.1L1 11.9zm.5 3.1-.4-.5.4-2 2 2-2 .5zm9.4-10.6-8.1 8-.6-.6 8.1-8 .6.6zM15.3.7C14.2-.4 12.7.2 12.7.2l-1.5 1.5 3.1 3.1 1.5-1.5c0-.1.6-1.5-.5-2.6zm-1.9.9-.5-.5C13.5.5 14 1 14 1l-.6.6z"
            />
          </svg>
        </label>

        <label className="delete-btn-label" onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="delete-image"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152Z"
              opacity=".2"
            />
            <line
              x1="215.996"
              x2="39.996"
              y1="56"
              y2="56"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              strokeLinecap="round"
              strokeWidth="16"
            />
            <line
              x1="88"
              x2="168"
              y1="24"
              y2="24"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              strokeLinecap="round"
              strokeWidth="16"
            />
            <path
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              strokeLinecap="round"
              strokeWidth="16"
              d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
            />
          </svg>
        </label>

        {file === "" && (
          <label htmlFor="avatar-btn" className="upload-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32">
              <path
                fill="#4e4e50"
                d="M12 16C5.375 16 0 21.375 0 28c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12z"
              />
              <circle cx="12" cy="6" r="6" fill="#4e4e50" />
            </svg>
          </label>
        )}
      </div>
    </div>
  );
};

export default AvatarInput
