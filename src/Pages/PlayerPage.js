import React, { useState } from 'react';
//import PlayerProfile from '../components/PlayerProfile';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const PlayerPage = () => {

  let images
  let onChange
  let maxNumber = 1
  const [playerData, setPlayerData] = useState({
    name: '',
    username: '',
    profilePhoto: null,
  });
   const [submitChange, setSubmitChange] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayerData({ ...playerData, [name]: value });
  };

  const handlePhotoUpload = (event) => {
    const photoFile = event.target.files[0];
    setPlayerData({ ...playerData, profilePhoto: photoFile });
  };

  const handleProfileUpdate = () => {
    // Update player profile data in API or local data source
  };
  const onSubmit = () => {
    console.log('herer eererersers')
    setSubmitChange(true)
  }

  

  function App() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);


    };
  }

  return (

    <div>
      <h1>Player Page</h1>
        <TextField id="filled-basic" label="Player Name" variant="filled" style={{paddingRight: '10px'}} />
        
        <TextField id="filled-basic" label="Player Nickname" variant="filled" />
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove image</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

      <Button 
        variant="contained" 
        color={submitChange ? "success" : "info"} 
        onClick={()=>onSubmit()}

      >
       {submitChange ? "success" : "Submit"}
      </Button>
    </div>
    
    
  );
  const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
};

