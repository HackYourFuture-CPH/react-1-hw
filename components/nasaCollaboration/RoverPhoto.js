const RoverPhotos = ({src,date,roverName}) => {
    return(
        <>
            <img src={src}></img>
            <p>Date: {date}</p>
            <p>RoverName: {roverName}</p>
        </>
    );
} 


export default RoverPhotos;