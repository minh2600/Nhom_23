import Header from "../../../components/header/Header";
import CategoryMenu from "../../../components/category/CategoryMenu";
import ListEvents from "../../../components/list_events/ListEvents";
import styles from "./CategoryEvents.module.css";
import Filter from "../../../components/filter/Filter";
import { Card, Typography } from "antd";
const { Title, Text } = Typography;
const CategoryEvents = () => {
    return (
        <>
            <div style={{ height: 'auto', backgroundColor: '#27272A' }}>
                <Header />
                <CategoryMenu />
                <div style={{ padding: '50px 130px 30px 130px' }}>
                    <Filter />
                </div>
                <ListEvents />
                <ListEvents />
                <ListEvents />
                <ListEvents />
            </div>

        </>
    );
}

export default CategoryEvents;