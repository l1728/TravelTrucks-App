import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './CamperDetailPage.module.css';
import Gallery from '../../components/Gallery/Gallery.jsx';
// import ReviewList from '../../components/ReviewList/ReviewList.jsx';
// import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import { fetchCamperById } from '../../redux/slices/campersSlice.js';
import Header from '../../components/Header/Header.jsx';
// import FeatureDetails from '../../components/FeatureDetails/FeatureDetails.jsx';

const CamperDetailPage = () => {
  const { camperId } = useParams(); // Отримуємо ID кемпера з URL
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.selectedCamper);
  const status = useSelector(state => state.campers.status);

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        // Заміна на ваш action, якщо він виконує запит
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
        {/* <h1 className={css.camperName}>{camper.name}</h1> */}
        <Gallery
          images={camper.gallery}
          description={camper.description}
          price={camper.price}
          location={camper.location}
          camper={camper}
        />
        {/* <FeatureDetails />
      <ReviewList />
      <BookingForm /> */}
      </div>
    </div>
    // <div className={css.camperDetailPage}>
    //   <h1 className={css.camperName}>{camper.name}</h1>
    //   <Gallery images={camper.gallery} />
    //   <p className={css.carDescript}>{camper.description}</p>
    //   <div className={css.camperInfo}>
    //     <h2>Specifications</h2>
    //     <p>Transmission: {camper.transmission}</p>
    //     <p>Engine: {camper.engine}</p>
    //     <p>Length: {camper.length} m</p>
    //     <p>Width: {camper.width} m</p>
    //     <p>Height: {camper.height} m</p>
    //     <p>Tank: {camper.tank} L</p>
    //     <p>Consumption: {camper.consumption} L/100km</p>
    //     <p>Price: € {camper.price.toFixed(2)}</p>
    //   </div>
    //   <h2>Reviews</h2>
    //   <ReviewList reviews={camper.reviews} />
    //   <BookingForm camperId={camper.id} />
    // </div>
  );
};

export default CamperDetailPage;
