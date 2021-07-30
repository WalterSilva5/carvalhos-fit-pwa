import axios from "axios";
import { serverAddress } from "@/util/Settings";
import { logoutUser } from "@/util/UserUtil";
import { useParams } from "react-router-dom";
const FormAdicionarAula = (props) => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: "Bearer " + token };

  const [titulo, setTitulo] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [playlistId, setPlaylistId] = React.useState(1);
  const [tipoAlerta, setTipoAlerta] = React.useState("success");
  const [alertaAdicionarAula, setAlertaAdicionarAula] = React.useState(false);
  const [mensagemAdicionarAula, setMensagemAdicionarAula] = React.useState("");
  const [playlists, setplaylists] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [videoPk, setVideoPk] = React.useState(0);
  const [permiteDeletar, setPermiteDeletar] = React.useState(false);

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      axios.get(`${serverAddress}video/${params.id}`).then((response) => {
        setTitulo(response.data.titulo);
        setUrl(response.data.url);
        setPlaylistId(response.data.playlist_id);
        setVideoPk(response.data.pk);
      });
    }
  }, []);

  const deleteAula = ()=>{
    setAlertaAdicionarAula(true);
    if(!permiteDeletar) {
      setTipoAlerta("warning");
      setMensagemAdicionarAula("MARQUE A CAIXA PRA CONFIRMAR ANTES DE DELETAR");
    }else{
      axios.delete(`${serverAddress}video/${params.id}`).then((response) => {
        setTipoAlerta("success");
        setMensagemAdicionarAula("Aula removida com sucesso");
      }).catch((error) => {
        console.log(error.response);
        setTipoAlerta("danger");
        setMensagemAdicionarAula("Não foi possível remover aula");
      });
    }
  }

  const getPlaylists = () => {
    axios
      .get(`${serverAddress}playlist/`, { crossDomain: true })
      .then((response) => {
        setplaylists(
          response.data.map((res) => (
            <option key={res.pk} value={res.pk}>
              {res.titulo}
            </option>
          ))
        );
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logoutUser();
        }
      });
  };

  const salvarVideo = () => {
    setAlertaAdicionarAula(true);
    let request_method = ""
    let request_url = ""
    let request_data ={
      titulo: titulo,
      url: url,
      pk: videoPk,
      playlist_id: playlistId,
    }

    if (!videoPk) {
      request_method = "post";
      request_url = `${serverAddress}video/`;
    } else {
      request_url = `${serverAddress}video/${videoPk}/`;
      request_method = "put";
    }
    axios(
      {
        method: request_method,
        url: request_url,
        data: request_data,
      },
      { crossDomain: true }
    ).then((response) => {
        setTipoAlerta("success");
        if(response.status === 201){
          setMensagemAdicionarAula("Aula adicionada com sucesso!");
        }else if(response.status === 200){
          setMensagemAdicionarAula("Aula alterada com sucesso!");
        }else {
          setMensagemAdicionarAula("Sucesso ao adicionar aula!");
        }
      })
      .catch((err) => {
        setTipoAlerta("danger");
        if (err.response.status === 400) {
          setMensagemAdicionarAula("Erro ao adicionar aula!");
        } else if (err.response.status === 500) {
          setMensagemAdicionarAula("Erro no servidor!");
        } else {
          setMensagemAdicionarAula("Erro desconhecido!");
        }
      });
  };

  React.useEffect(() => {
    getPlaylists();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="p-2">
      <div
        className="wsi-shadow-primary border border-danger rounded wsi-container-dark"
        style={{ minHeight: "70vh" }}
      >
        <div className="d-flex justify-content-center">
          <div className="col-lg-10 col-sm-12 my-4 p-2 border border-danger rounded">
            <div className="form-group mb-2">
              <label htmlFor="titulo" className="h2">
                Titulo:
              </label>
              <input
                type="text"
                id="titulo"
                className="form-control"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="link" className="h2">
                Link:
              </label>
              <input
                type="text"
                id="link"
                className="form-control"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="playlist" className="h2">
                Playlist:
              </label>
              <select
                name="playlist"
                id="playlist"
                className="form-control"
                onChange={(e) => setPlaylistId(e.target.value)}
              >
                {playlists}
              </select>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn wsi-btn-admin my-2"
                onClick={() => {
                  salvarVideo();
                }}
              >
                SALVAR
              </button>
              {videoPk ? (
                <div>
                  <input
                    className="form-check-input mx-3 mt-2"
                    onChange={(e) => {
                      setPermiteDeletar(e.target.checked);
                      console.log(permiteDeletar);
                    }}
                    type="checkbox"
                    value={permiteDeletar}
                    id="flexCheckDefault"
                  />
                  <button className="btn btn-danger"
              onClick={()=>{
                deleteAula();
              }}
              >
                DELETAR AULA
              </button>
                </div>
              ) : null}
              
            </div>
            {alertaAdicionarAula ? (
              <div
                id="alerta_adicionar_aula"
                className={`my-3 alert alert-${tipoAlerta}`}
              >
                <h5>{mensagemAdicionarAula}</h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAdicionarAula;