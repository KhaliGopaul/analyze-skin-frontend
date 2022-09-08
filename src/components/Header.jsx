import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate()
    const goHome = ()=> navigate("/")
  
    return (
    <header>
      <button className="btn" onClick={goHome}>
        <h1> ANALYZE SKIN </h1>
      </button>
    </header>
  );
}
