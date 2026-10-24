import React,{useRef, useState} from 'react'

export default function ImageSelector({
    title,
    onFileChange
}) {

    const inputRef = useRef(null);
    const [fileContent,setFileContent] = useState('');

    function onFileSelected(e){ 
        let file = null;
        if(e.target.files.length){
        file = e.target.files[0];

        const reader = new FileReader();

        reader.onload = (res) => {
            //read is successful
            setFileContent(res.target.result);
        };

        reader.readAsDataURL(file);

     }
        onFileChange(file);
    }

  return (
    <div className="mb-3">
        <label className="form-label">Image Selection</label>
    <input
    ref = {inputRef}
    onChange={onFileSelected} 
    type="file" 
    className="form-control"
    style={{display: 'none'}}
    />

    {

        fileContent ?
        <div className="text-center">
            <img src = {fileContent} alt='file content' style={{width: '50%', height: '50%', padding: '50px'}}/>

        </div>
        :
        <></>
    }
    <div className="text-center">
        <button onClick={()=>inputRef.current.click()}
        className='btn btn-success'>
            select image
        </button>
    </div>
    </div>
  )
}
