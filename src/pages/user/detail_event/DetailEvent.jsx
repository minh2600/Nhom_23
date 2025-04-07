import CategoryMenu from "../../../components/category/CategoryMenu";
import DetailBanners from "../../../components/detail_banners/DetailBanners";
import DetailTicket from "../../../components/detail_ticket/DetailTicket";
import Header from "../../../components/header/Header";
import ListTickets from "../../../components/list_tickets/ListTickets";
import styles from "./DetailEvent.module.css";

const DetailEvent = () => {

    return (
        <div style={{ backgroundColor: "F5F7FC", height: "auto" }}>
            <Header />
            <CategoryMenu />
            <DetailTicket />
            <div className={styles.containerBody}>
                <DetailBanners />
                <ListTickets />
            </div>
        </div>
    );
}

export default DetailEvent;