import SongTableRow from '../SongTableRow/SongTableRow';

export default function SongTable({ songs }) {
  const rows = songs.map(song =>
    <SongTableRow 
      id={song._id}
      title={song.title}
      artist={song.artist}
      durationDisplay={song.durationDisplay}
    />
  );
  return (
    <>
      { rows.length ?
        <table>
          <thead>
            <tr>
              <th>Song Title</th>
              <th>Artist</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      :
        <></>
      }
    </>
  );
}