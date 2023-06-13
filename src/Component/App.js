import { useNavigate } from 'react-router-dom';
import '../App.css'
function App() {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/main')
  }
  return (
    <>
      <div className="home-page">
        <h1 className='home-text'>Check weather report here!!!</h1>
        <button type="button" onClick={handleclick}className="btn btn-light home-button">Click here</button>
      </div>
    </>
  );
}

export default App;
