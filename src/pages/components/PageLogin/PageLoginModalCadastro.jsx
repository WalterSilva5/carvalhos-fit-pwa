/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import axios from "axios";
import { serverAddress } from "@/util/Settings";

const PageLoginModalCadastro = (props) => {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [error, seterror] = React.useState("");
  const [showErrorCadastro, setshowErrorCadastro] = React.useState(false);
  const [alertType, setalertType] = React.useState("danger");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const clearForm = () => {
    setusername("");
    setpassword("");
    setConfirmPassword("");
  }


  const clearData = () => {
    setshowErrorCadastro(false);
    setalertType("");
    setusername("");
    setpassword("");
    setConfirmPassword("");
    seterror("");
  }

  const showErrorCadastroMessage = (message, type) => {
    setshowErrorCadastro(true);
    seterror(message);
    setalertType(type);
  }

  React.useEffect(() => {
    if (confirmPassword !== "" && confirmPassword !== password) {
      showErrorCadastroMessage("As senhas não conferem", "danger");
    }else{
      showErrorCadastroMessage("", "")
      setshowErrorCadastro(false)
    }

  }, [confirmPassword, password]);

  const RegisterUser = (username, password) => {
    axios.defaults.headers.common = { Authorization: ""};
    axios
      .post(`${serverAddress}user/`, { username, password })
      .then((response) => {
        if (response.status === 200 || response.data.success || response.status ==201) {
          showErrorCadastroMessage("Cadastro efetuado com sucesso!", "success");
          clearForm();
        }else{
          showErrorCadastroMessage(response.data.message, "danger");
        }
      })
      .catch((error) => {       
          showErrorCadastroMessage(error.response.data.message, "danger");
      });
  };
  
  return (
    <div>
      <div
        className="modal-dialog modal-lg  "
        role="document"
        style={{ width: "100%" }}
      >
        <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
          <div className="modal-header">
            <h5 className="modal-title text-center">
              <b>CADASTRE-SE</b>
            </h5>
            <button
              className="btn wsi-btn btn-danger btn-sm"
              type="button"
              onClick={() => {
                clearData();
                props.setmodalVisible(false);
              }}
            >
              FECHAR
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="USUARIO"
              value={username}
              onChange={(e) => setusername(e.target.value.toUpperCase())}
            />
            {/* <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="NOME"
            /> */}
            <input
              type="password"
              className="form-control my-3 wsi-shadow-light"
              placeholder="SENHA"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <input
              type="password"
              className="form-control my-3 wsi-shadow-light"
              placeholder="CONFIRME A SENHA"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              className="btn btn-primary wsi-shadow-primary"
              onClick={() => {
                RegisterUser(username, password);
              }}
            >
              CADASTRAR
            </button>
            <div className={`{alert alert-${
              alertType
            } alert-dismissible alert-dismissible-dark wsi-shadow-light my-4 rounded
            ${
              showErrorCadastro ? "d-block py-4 " : "d-none"
            }}`}>
              <h4>{error}</h4>
            </div>
            <div className="mt-5">
              <p>
                Ja possui cadastro?{" "}
                <button className="btn wsi-btn-secondary wsi-shadow-light btn-sm"
                  onClick={() => {
                    clearData();
                    props.setmodalVisible(false);
                  }}
                >
                  FAZER LOGIN
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageLoginModalCadastro;
