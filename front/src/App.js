import logo from './logo.svg';
import './App.css';
import Sql from './component/Sql'
import Post from './component/Post'
import Get from './component/Get'

function App() {
  return (
    <div className="App">      
      <Sql></Sql>
      <Post></Post>
      <Get></Get>
    </div>
  );
}

export default App;
