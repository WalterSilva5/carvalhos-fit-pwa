/* eslint-disable max-len */
import $ from 'jquery';
import cfitBanner from '@/assets/img/logo.png';
import PageLoginModalCadastro from './PageLoginModalCadastro';

const PageLoginNav = (props) => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  return (
    <nav className="navbar wsi-black px-md-5 mx-0">
      <img src={cfitBanner} className="img-fluid col-3 col-ms-4" alt="" />
      <div className="col-8 d-flex justify-content-end float-right">

        {modalVisible
          ? (
            <div className="modal d-block">
              <PageLoginModalCadastro setmodalVisible={setmodalVisible} />
            </div>
          )
          : null}
        {/* <button className="btn btn-lg wsi-bg-primary wsi-shadow-primary" onClick={() => { setmodalVisible(true); }}>CADASTRE-SE</button> */}
        {/* <button className="btn btn-lg wsi-bg-primary wsi-shadow-light" onClick={share}>COMPARTILHE!</button> */}
      </div>
    </nav>
  );
};
export default PageLoginNav;
