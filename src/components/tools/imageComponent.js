import React, { useContext, useState } from 'react';
import Button from '../reusable/button';
import { AppSidebarContext } from '../../pages/page';

const ImageComponent = ({ left, top, id, remove }) => {
  const [src, setSrc] = useState('');
  const { mode } = useContext(AppSidebarContext);
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="component-wrapper" style={{id, left, top , remove }}>
      {(mode !== 'edit' && src ) ? (
        <img src={src} alt="Uploaded" className="image-component" />
      ) : (
        mode === 'edit' && 
        <div>
        <Button handleClick={remove} id={id}/>
        <input className="file-input" placeholder="Click me to upload your image." type="file" onChange={handleImageUpload} />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
