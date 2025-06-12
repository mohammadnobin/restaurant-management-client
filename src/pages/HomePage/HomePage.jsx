import { Suspense } from "react";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import TrendingOrders from "../../components/TrendingOrders/TrendingOrders";
import TopSellingFoods from "./TopSellingFoods";
import { toSellingFoods } from "../../api/TopSellingFood";
import Banner from "./Banner";


const HomePage = () => {
    return (
        <>
        <Banner />
            <Suspense>
                <TopSellingFoods toSellingFoods={toSellingFoods()} />
            </Suspense>
            <MenuCategory />
            <TrendingOrders />
            {/* <div className="fixed top-1/2 right-0 w-[100px] h-[100px] bg-orange"></div> */}
        </>
    );
};

export default HomePage;