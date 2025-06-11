import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import Item from '../components/Item';
import { fetchItems, addFavourites, removeFavourites } from '../redux/actions';

function ItemContainer({ itemData, getItems }) {
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getItems();
    closeModal();
  }, []);

  const token = useSelector(state => state.user.token);
  const favState = useSelector(state => state.favourites);

  const handleFavourite = (id, favourit) => {
    const itemInfo = {
      item_id: id,
    };

    if (favourit === 'Yes') {
      dispatch(removeFavourites(id));
      openModal();
    } else {
      dispatch(addFavourites(itemInfo));
      openModal();
    }
    getItems();
  };

  // eslint-disable-next-line no-nested-ternary
  return itemData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : token === undefined || token === 'undefined' ? (
    <h2 className="text-center pt-5 white">
      { itemData.error }
      <Redirect to="/login" />
    </h2>
  ) : (
    <Container className="bg-dark">
      <div className="mt-5 d-flex flex-wrap justify-content-center">
        { itemData.items.map(itemInfo => (
          <Item
            key={itemInfo.id}
            item={itemInfo}
            handleFavourite={() => handleFavourite(itemInfo.id, itemInfo.fav)}
          />
        )) }
        <Modal visible={visible} width="300" height="100" effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modal-popup">
            <p className="text-center">{favState.message || favState.error}</p>
            <button type="button" className="btn-oval" onClick={() => closeModal()}>Закрити</button>
          </div>
        </Modal>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  itemData: state.items,
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchItems()),
});

ItemContainer.propTypes = {
  itemData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    items: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getItems: PropTypes.func.isRequired,
};

ItemContainer.defaultProps = {
  itemData: {
    items: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
