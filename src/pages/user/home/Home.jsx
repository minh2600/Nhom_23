import CategoryMenu from "../../../components/category/CategoryMenu";
import SlideBigBanner from "../../../components/slide_big_banner/SlideBigBanner";
import Header from "../../../components/header/Header";
import styles from './Home.module.css';
import SlideSpecialBanner from "../../../components/slide_special_banner/SlideSpecialBanner";
import SlideTrendBanner from "../../../components/slide_trend_banner/SlideTrendBanner";
import ListEvents from "../../../components/list_events/ListEvents";
import SectionEvents from "../../../components/list_events/SectionEvents";
const Home = () => {
    return (
        <>
            <Header />
            <CategoryMenu />
            <div className={styles.homeContainer}>
                <SlideBigBanner />
                <SlideSpecialBanner />
                <SlideTrendBanner />
                <SectionEvents />
                <ListEvents />
            </div>
        </>
    );
}

export default Home;
