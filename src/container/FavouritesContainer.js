import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import Item from '../components/Item';
import { fetchFavourites } from '../redux/actions';

function FavouritesContainer({ itemData, getItems }) {
  useEffect(() => {
    getItems();
  }, []);
  const token = useSelector(state => state.user.token);

  const handleFavourite = id => {
    // eslint-disable-next-line no-unused-vars
    const itemInfo = {
      item_id: id,
    };
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
            handleFavourite={() => handleFavourite(itemInfo.id)}
          />
        )) }
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  itemData: state.getFavs,
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchFavourites()),
});

FavouritesContainer.propTypes = {
  itemData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    items: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getItems: PropTypes.func.isRequired,
};

FavouritesContainer.defaultProps = {
  itemData: {
    items: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesContainer);
