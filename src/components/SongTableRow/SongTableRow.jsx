import { Link } from 'react-router-dom';
import './SongTableRow.css';

export default function SongTableRow({idx, id, title, artist, durationDisplay }) {
  // const orderDate = new Date(orderItem.createdAt).toLocaleDateString();

  return (
    <tr className={'SongTableRowTr' + (idx % 2 ? 'Dark' : 'Light')}>
      <td className="SongTableRow"><Link to={`/songs/detail/${id}`}>{title}</Link></td>
      <td className="SongTableRow">{artist}</td>
      <td className="SongTableRow">{durationDisplay}</td>
    </tr>
  );
}