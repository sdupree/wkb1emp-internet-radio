// import './SongListItem.css';

export default function SongTableRow({id, title, artist, durationDisplay }) {
  // const orderDate = new Date(orderItem.createdAt).toLocaleDateString();

  return (
    <tr>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{durationDisplay}</td>
    </tr>
  );
}