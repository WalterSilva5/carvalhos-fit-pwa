/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import PageHeader from './components/PageHeader';
import { serverAddress } from '@/util/Settings';
import PlaylistCard from './components/PageHome/PlaylistCard';
import { logoutUser } from "@/util/UserUtil";


const PageHome = () => {
  const token = localStorage.getItem('authToken')
  axios.defaults.headers.common = { Authorization: "Bearer " + token };
  const [playlists, setplaylists] = React.useState([]);
  const [isCarregando, setCarregando] = React.useState(true);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist/`, { crossDomain: true}).then((response) => {
      setplaylists(response.data.map((res) => (
        <PlaylistCard
          key={res.pk}
          titulo={res.titulo}
          descricao={res.descricao}
          id={res.pk}
          imagem={res.imagem}
        />
      )));
      setCarregando(false);
    }).catch((err)=>{
      if(err.response.status === 401){
        logoutUser();
      }
    });
  };

  React.useEffect(() => {
    getPlaylists();
  }, []);
  if (isCarregando) {
    return <div><h1>Carregando...</h1></div>;
  }
  return (
    <div>
      <PageHeader />
      <div className="row d-flex justify-content-center container-fluid">{playlists}</div>
    </div>
  );
};

export default PageHome;
