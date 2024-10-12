import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './CamperDetailPage.module.css';
import Gallery from '../../components/Gallery/Gallery.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import { fetchCamperById } from '../../redux/slices/campersSlice.js';
import Header from '../../components/Header/Header.jsx';
import FeatureDetails from '../../components/FeatureDetails/FeatureDetails.jsx';
import ReviewList from '../../components/ReviewList/ReviewList.jsx';

const CamperDetailPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.selectedCamper);
  const status = useSelector(state => state.campers.status);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        await dispatch(fetchCamperById(camperId));
      } catch (error) {
        console.error('Error fetching camper:', error);
      }
    };

    fetchCamperDetails();
  }, [dispatch, camperId]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!camper) {
    return <p>No camper found</p>;
  }

  return (
    <div>
      <Header className={css.header} />
      <div className={css.containerDetailPage}>
        <Gallery
          images={camper.gallery}
          description={camper.description}
          price={camper.price}
          location={camper.location}
          camper={camper}
        />
        <div className={css.headerDetPageDown}>
          <h2
            className={`${css.headerItem} ${
              activeTab === 'features' ? css.active : ''
            }`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </h2>
          <h2
            className={`${css.headerItem} ${
              activeTab === 'reviews' ? css.active : ''
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </h2>
        </div>
        <hr className={css.divider} />
        <div className={css.contentSect}>
          <div className={css.leftSection}>
            {activeTab === 'features' ? (
              <FeatureDetails camper={camper} className={css.featureCont} />
            ) : (
              <ReviewList className={css.rewCont} reviews={camper.reviews} />
            )}
          </div>

          <div className={css.richSection}>
            <BookingForm camperId={camper.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperDetailPage;
