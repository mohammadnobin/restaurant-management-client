// Home page code here
import { Suspense } from "react";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import TrendingOrders from "../../components/TrendingOrders/TrendingOrders";
import TopSellingFoods from "./TopSellingFoods";
import { toSellingFoods } from "../../api/TopSellingFood";
import Banner from "./Banner";
import Loading from "../Shared/Loading";
import LatestNewsBlogs from "./LatestNewsBlogs";


const HomePage = () => {
    return (
        <>
        <Banner />
            <Suspense fallback={<Loading />}>
                <TopSellingFoods toSellingFoods={toSellingFoods()} />
            </Suspense>
            <MenuCategory />
            <TrendingOrders />
            <LatestNewsBlogs />
        </>
    );
};

export default HomePage;