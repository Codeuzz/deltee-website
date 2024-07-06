import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar"
import LivraisonGratuite from "../../components/LivraisonGratuite/LivraisonGratuite"

function Home() {
   return (
    <>
        <LivraisonGratuite />
        <Navbar />
        <h1>Home</h1>
    </>
   )
}

export default Home