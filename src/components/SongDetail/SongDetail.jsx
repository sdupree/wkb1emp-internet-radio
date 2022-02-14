// import './SongDetail.css';

export default function SongDetail({ song, user }) {
  return (
    <>
      { song ?
        <>
          <h2>Song: {song.title}</h2>
          <h2>By: {song.artist}</h2>
          <h3>Length: {song.durationDisplay}</h3>
          <h3>Album: {song.album}</h3>
          <h3>Release Year: {song.releaseYear}</h3>
          
        </>
      :
        <></>
      }
    </>
  );
}