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
    nickname: '',
    profilePhoto: null,


  });



  const [submitChange, setSubmitChange] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    console.log(name, value)
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
    setSubmitChange(true)


  };

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
      <h1
      style={{marginLeft: '110px'}}>
      Player Page  
      </h1>
      <TextField
        disabled={submitChange}
        style={{marginLeft: '90px'}}
        id="filled-basic"
        label="Player Name"
        variant="filled"
        name='name'
        onChange={(event) => handleInputChange(event)}
      />
      <br></br>
      <TextField
        disabled={submitChange}
        style={{marginLeft: '90px'}}
        id="filled-basic"
        label="Player Nickname"
        variant="filled"
        name='nickname'
        onChange={(event) => handleInputChange(event)}
      />
      <br></br>


      <div>
        <h2 
        style={{marginLeft: '130px'}}>
          Add Photo:
          </h2>
      </div>




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
              <Button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
                variant="contained"
                color={submitChange ? "success" : "info"}

              >
                Click or Drop here
            </Button>
            &nbsp;
              <Button onClick={onImageRemoveAll}
                color={submitChange ? "success" : "info"}
                variant="contained">Remove image</Button>
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
      <br></br>

      <Button
        variant="contained"
        color={submitChange ? "success" : "info"}
        onClick={() => onSubmit()}


      >
        {submitChange ? "success" : "Submit"}
      </Button>
      {submitChange && (
        <div>
          Player Information:<br></br>
         Player Name:  {playerData.name}<br></br>
         Player Nickname:  {playerData.nickname}<br></br>
         Player Photo (You lookin cute): <br></br>
          {playerData.profilePhoto}
        </div>

      )}


    </div>


  );
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

