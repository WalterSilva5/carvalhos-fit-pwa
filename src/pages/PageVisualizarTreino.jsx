import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import { useParams, NavLink } from 'react-router-dom';
import PageHeader from '@/pages/components/PageHeader';
import Carregando from '@/pages/generic/Carregando';
import ModalConfirmDelete from './components/ModalConfirmDelete';
import ModalEnviarTreino from './components/PageTreinos/ModalEnviarTreino';
import ModalExercicioPreview from './generic/ModalExercicioPreview';

const PageVisualizarTreino = (props) => {
  const token = localStorage.getItem('authToken');
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  const [treino, setTreino] = React.useState(null);
  const [series, setSeries] = React.useState(null);
  const [treino_id, setTreino_id] = React.useState(-1);
  const [carregando, setCarregando] = React.useState(true);
  const [exercicios, setExercicios] = React.useState([]);
  const [videoAtual, setVideoAtual] = React.useState('');
  const [confirmDelTreino, setConfirmDel] = React.useState(false);
  const [modalConfirmdeleteVisivel, setModalConfirmDeleteVisivel] = React.useState(false);
  const [modalEnviarParaAmigoVisivel, setModalEnviarParaAmigoVisivel] = React.useState(false);
  const [exercicioPreview, setExercicioPreview] = React.useState('');
  const params = useParams();

  const getExercicios = () => {
    axios.get(`${serverAddress}exercicio/`)
      .then((response) => {
        setExercicios(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getTreino = () => {
    axios
      .get(`${serverAddress}treino/${treino_id}`)
      .then((response) => {
        setTreino(response.data);
      }).catch((error) => {
        console.log(error.response);
        window.location.href = '/treinos';
      });
  };

  const deleteTreino = () => {
    axios.delete(`${serverAddress}treino/${treino_id}`)
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error.response);
      });
  };

  React.useEffect(() => {
    if (exercicios.length == 0) {
      getExercicios();
    }
  }, [exercicios]);

  const getSeries = () => {
    axios
      .get(
        `${serverAddress}serie/serie_por_treino?treino_id=${treino_id}`,
      )
      .then((response) => {
        setSeries(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const printPage = () => {
    const atual = document.body.innerHTML;
    setTimeout(() => {
      document.body.innerHTML = document.getElementById('lista-de-treinos').innerHTML;
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);
    }, 5000);
    return false;
  };
  React.useEffect(() => {
    if (treino_id != -1 && treino_id != null) {
      getTreino();
    }
  }, [treino_id]);

  React.useEffect(() => {
    try {
      if (treino_id != -1 && treino_id != null && series == null) {
        getSeries();
      } else if (series != null && treino.titulo != null) {
        setCarregando(false);
        // setVideoAtual(getVideoUrl(series[0].exercicio_id));
      }
    } catch (e) {
      getTreino();
    }
  }, [treino_id, series, treino]);

  const getVideoUrl = (videoId) => exercicios.find((ex) => ex.pk == videoId).video;

  React.useEffect(() => {
    if (videoAtual != null && videoAtual != undefined) {
      setVideoAtual(videoAtual);
    }
  }, [videoAtual]);

  React.useEffect(() => {
    if (params.id) {
      setTreino_id(params.id);
    }
  }, [params]);

  React.useEffect(() => {
    if (confirmDelTreino) {
      deleteTreino();
      setModalConfirmDeleteVisivel(false);
      setConfirmDel(false);
      setTimeout(() => {
        window.location.href = '/treinos';
      }, 1000);
    }
  }, [confirmDelTreino]);

  if (carregando) {
    return (
      <Carregando />
    );
  } if (series != null && treino != null) {
    try {
      return (
        <div>
          <PageHeader />
          <h3 className="text-center display-5">
            TREINO:
            {' '}
            {
              treino != null
                ? (
                  <span>
                    {treino.titulo}
                  </span>
                ) : <></>
            }
          </h3>
          <div className="d-flex justify-content-center my-4">
            <div className="p-2 border wsi-border rounded py-3 my-2 col-md-6">
              <div className="d-flex justify-content-center">
                {/* <img
                  src={videoAtual}
                  alt=""
                  className="img-fluid col-12 animate__animated animate__bounceIn"
                  style={{
                    maxWidth: '400px',
                    display: videoAtual != '' ? 'block' : 'none',
                  }}
                /> */}
                <ModalExercicioPreview setExercicioPreview={setExercicioPreview} exercicioPreview={exercicioPreview} />
              </div>
              <div id="lista-de-treinos">
                {series.map((serie) => (
                  <div
                    key={serie.pk}
                    className="border border-secundary rounded my-2 py-3 px-2"
                  >
                    <div className="d-flex">
                      <h5>
                        EXERCICIO:
                      </h5>
                      <h6 className="mx-2">
                        {exercicios.find((ex) => ex.pk == serie.exercicio_id).nome}
                      </h6>
                    </div>

                    <div className="d-flex">
                      <h5>
                        Repeti????es:
                      </h5>
                      <h6 className="mx-2">
                        {serie.repeticoes}
                      </h6>
                    </div>
                    <div className="d-flex">
                      <h5>
                        Exemplo:
                        {' '}
                      </h5>
                      <button
                        className="btn btn-primary mx-3"
                        onClick={() => {
                          setExercicioPreview(getVideoUrl(serie.exercicio_id));
                        }}
                      >
                        VISUALIZAR
                      </button>
                    </div>
                    <div className="d-flex">
                      <h5>
                        Dica:
                      </h5>
                      <h6 className="mx-2">
                        {serie.dica}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
              {treino.dica != null && treino.dica != '' ? (
                <div className="border border-secondary rounded p-2 mb-2 d-flex">
                  <h6 className="mx-2">Dica:</h6>
                  {treino.dica}
                </div>
              ) : ''}

              <div className="d-flex justify-content-center p-2">
                <div className="rounded bg-secondary">
                  <div className="row my-3">
                    <button
                      className="btn wsi-btn-secondary"
                      onClick={() => {
                        setModalEnviarParaAmigoVisivel(true);
                      }}
                    >
                      ENVIAR TREINO
                    </button>
                  </div>
                  <div className="row my-3">
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        printPage();
                      }}
                    >
                      BAIXAR TREINO
                    </button>
                  </div>
                  <div className="row mt-2">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: 'blue',
                        color: '#fff',
                      }}
                      onClick={() => {
                        window.location.href = `/cadastro_treino/${treino_id}`;
                      }}
                    >
                      EDITAR TREINO
                    </button>
                  </div>
                  <div className="row my-3">
                    <NavLink className="btn btn-primary" to="/treinos">VOLTAR PRA TREINOS</NavLink>
                  </div>
                  <div className="row mt-5">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: '#ff0000',
                        color: '#fff',
                      }}
                      onClick={() => {
                        setModalConfirmDeleteVisivel(true);
                      }}
                    >
                      DELETAR
                    </button>
                  </div>
                </div>
              </div>
              <ModalConfirmDelete
                campo=" ESTE TREINO"
                setConfirmDel={setConfirmDel}
                setModalConfirmDeleteVisivel={setModalConfirmDeleteVisivel}
                modalConfirmdeleteVisivel={modalConfirmdeleteVisivel}
              />
              <ModalEnviarTreino
                treino={treino}
                setModalEnviarParaAmigoVisivel={setModalEnviarParaAmigoVisivel}
                modalEnviarParaAmigoVisivel={modalEnviarParaAmigoVisivel}
              />
            </div>
          </div>
        </div>
      );
    } catch (e) {
      window.location.reload();
    }
  }
};

export default PageVisualizarTreino;
