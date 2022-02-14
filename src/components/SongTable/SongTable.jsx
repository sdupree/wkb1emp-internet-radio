import SongTableRow from '../SongTableRow/SongTableRow';
import './SongTable.css';

export default function SongTable({ songs }) {
  const rows = songs.map((song, idx) =>
    <SongTableRow 
      idx={idx}
      id={song._id}
      title={song.title}
      artist={song.artist}
      durationDisplay={song.durationDisplay}
    />
  );
  return (
    <>
      { rows.length ?
        <table className="SongTable">
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