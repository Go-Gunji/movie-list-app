import { RowComponent } from "./components/Row/Row";
import { requestMovies } from "./utils/requestMovies";

function App() {
  return (
    <div className="App">
      <RowComponent
        title="NETFLIX ORIGUINALS"
        fetchUrl={requestMovies.feachNetflixOriginals}
        isLargeRow
      />
      <RowComponent title="Top Rated" fetchUrl={requestMovies.feactTopRated} />
      <RowComponent
        title="Action Movies"
        fetchUrl={requestMovies.feactActionMovies}
      />
      <RowComponent
        title="Comedy Movies"
        fetchUrl={requestMovies.feactComedyMovies}
      />
      <RowComponent
        title="Horror Movies"
        fetchUrl={requestMovies.feactHorrorMovies}
      />
      <RowComponent
        title="Romance Movies"
        fetchUrl={requestMovies.feactRomanceMovies}
      />
      <RowComponent
        title="DOcumentaries"
        fetchUrl={requestMovies.feactDocumentMovies}
      />
    </div>
  );
}

export default App;
