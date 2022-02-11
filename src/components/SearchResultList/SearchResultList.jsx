import SongListItem from '../SongListItem/SongListItem';

export default function SearchResultList({ searchResults }) {
  const items = searchResults.map(song =>
    <SongListItem 
      id={song._id}
      title={song.title}
      artist={song.artist}
      length={song.length}
    />
  );
  return (
    <>
      { items.length ?
        <table>
          <thead>
            <tr>
              <th>Song Title</th>
              <th>Artist</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      :
        <></>
      }
    </>
  );
}