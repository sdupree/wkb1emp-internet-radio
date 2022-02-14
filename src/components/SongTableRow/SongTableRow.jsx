import { Link, useNavigate } from 'react-router-dom';
import './SongTableRow.css';

export default function SongTableRow({song, idx, user}) {
  const navigate = useNavigate();

  async function submitEditSong(evt, song_id) {
    evt.preventDefault();  // Prevent browser from submitting form.
    navigate(`/songs/edit/${song_id}`);
  }

  return (
    <tr className={'SongTableRowTr' + (idx % 2 ? 'Dark' : 'Light')}>
      <td className="SongTableRow"><Link to={`/songs/detail/${song._id}`}>{song.title}</Link></td>
      <td className="SongTableRow">{song.artist}</td>
      <td className="SongTableRow">{song.durationDisplay}</td>
      <td className="SongTableRow">
      { (user && user._id === song.createdBy) ?
        <form onSubmit={() => submitEditSong(song._id)}>
          <button type="submit">EDIT SONG</button>
        </form>
      :
        <></>
      }
      </td>
    </tr>
  );
}