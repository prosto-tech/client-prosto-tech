import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import ItemDetails from '../components/ItemDetails';
import { fetchItem } from '../redux/actions';

function TechItemContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);
  const loading = useSelector(state => state.item.loading);
  useEffect(() => {
    dispatch(fetchItem(id));
  }, []);

  return loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="white" />
    </h2>
  ) : (
    <ItemDetails item={item.item} />
  );
}

export default TechItemContainer;
