// import './SongListItem.css';

export default function SongListItem({id, title, artist, length }) {
  // const orderDate = new Date(orderItem.createdAt).toLocaleDateString();

  return (
    <tr>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{length}</td>
    </tr>
  );
}