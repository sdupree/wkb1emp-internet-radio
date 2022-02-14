import SongTableRow from '../SongTableRow/SongTableRow';
import './SongTable.css';

export default function SongTable({ songs, user }) {
  const rows = songs.map((song, idx) =>
    <SongTableRow song={song} idx={idx} user={user}/>
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
              <th></th>
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