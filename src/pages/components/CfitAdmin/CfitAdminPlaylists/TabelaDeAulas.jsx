import axios from "axios";
import { serverAddress } from "@/util/Settings";
import FormAdicionarAula from "../CfitAdminAddAula/FormAdicionarAula";
const TabelaDeAulas = (props) => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: "Bearer " + token };
  const [aulas, setAulas] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const getAulas = () => {
    axios
      .get(
        `${serverAddress}video/videos_por_playlist/?playlist_id=${props.playlistId}`
      )
      .then((response) => {
        if(!response.data || response.data.length === 0) {
          setAulas(<tr><td>ESSA PLAYLIST NÃO TEM AULAS</td><td></td></tr>);
        }else{
          setAulas(
            response.data.map((video) => (
              <tr key={video.pk}>
                <td>{video.titulo}</td>
                <td>
                  <a className="btn wsi-btn-admin"
                  href={`/cfit_admin/add_aula/${video.pk}`}  
                  >EDITAR</a>
                </td>
              </tr>
            ))
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
      });
  };


  React.useEffect(() => {
    if(props.playlistId != -1){
      getAulas();
    }
  }, [props.playlistId]);


  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Aulas Na Playlist</h1>
        <div>
          <a className="btn wsi-btn-admin" href="/cfit_admin/add_aula">ADICIONAR AULA</a>
        </div>
      </div>
      <table className="table table-hover table-dark table-borderd wsi-border-admin rounded">
        <thead className="wsi-border-admin">
          <tr className="">
            <th
              scope="col"
              className="border border-primary"
              style={{ backgroundColor: "blue" }}
            >
              TITULO
            </th>
            <th className="border border-primary col-1"
              style={{ backgroundColor: "blue" }}
            >
              EDITAR
            </th>
          </tr>
        </thead>
        <tbody>{aulas}</tbody>
      </table>
    </div>
  );
};

export default TabelaDeAulas;
