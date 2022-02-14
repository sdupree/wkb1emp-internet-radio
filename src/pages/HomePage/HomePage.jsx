import './HomePage.css';

export default function HomePage() {
  return (
    <main className="HomePage">
      <h2>Welcome to...</h2>
      <h1 className="mainTitle">WKB<span className="mainTitle-bigger">1</span>EMP</h1>
      <h3>Internet Radio Station Automation System</h3>
      <h2>Playing soon:</h2>
      <center><table class="SongTable"><thead><tr><th>Song Title</th><th>Artist</th><th>Duration</th><th></th></tr></thead><tbody><tr class="SongTableRowTrLight"><td class="SongTableRow"><a href="/songs/detail/6206acfae916edd9a7b44a8a">The Island</a></td><td class="SongTableRow">Pendulum</td><td class="SongTableRow">7:24</td><td class="SongTableRow"></td></tr><tr class="SongTableRowTrDark"><td class="SongTableRow"><a href="/songs/detail/6206d14d928aacd9c47b025d">Fade To Black</a></td><td class="SongTableRow">Metallica</td><td class="SongTableRow">3:54</td><td class="SongTableRow"></td></tr><tr class="SongTableRowTrLight"><td class="SongTableRow"><a href="/songs/detail/6206d197928aacd9c47b025f">Setting Sun</a></td><td class="SongTableRow">The Chemical Brothers</td><td class="SongTableRow">3:58</td><td class="SongTableRow"></td></tr></tbody></table>
      <h2>Recently played:</h2>
      <table class="SongTable"><thead><tr><th>Song Title</th><th>Artist</th><th>Duration</th><th></th></tr></thead><tbody><tr class="SongTableRowTrDark"><td class="SongTableRow"><a href="/songs/detail/6206d1fc928aacd9c47b0261">Ghost In The City</a></td><td class="SongTableRow">The Crystal Method</td><td class="SongTableRow">5:30</td><td class="SongTableRow"></td></tr><tr class="SongTableRowTrLight"><td class="SongTableRow"><a href="/songs/detail/620a8b4d32ffaf2ac88d9716">Electric Guitar</a></td><td class="SongTableRow">Fluke</td><td class="SongTableRow">20:45</td><td class="SongTableRow"></td></tr><tr class="SongTableRowTrDark"><td class="SongTableRow"><a href="/songs/detail/620a8b8b32ffaf2ac88d971b">Born Slippy</a></td><td class="SongTableRow">Underworld</td><td class="SongTableRow">16:39</td><td class="SongTableRow"></td></tr></tbody></table>
      </center>
    </main>
  );
}