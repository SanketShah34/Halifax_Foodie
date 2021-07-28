
import React, { Component, useState } from 'react';
import { Switch,Route } from 'react-router';
import PrivateNavbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import MyOrders from '../MyOrders/myorders';
import BuyFoods from '../BuyFoods/buyFoods';
import Homepage from '../../Public/HomePage/Homepage'
import RestaurantItem from '../../Private/RestaurantItems/RestaurantItems';
import OrderPage from '../../Private/OrderPage/Orderpage'
import WordCloud from '../../Private/WordCloud/WordCloud';

const Layout = () => {

    const [sidebarexpand,setsidebarexpand] = useState();
    const setstyle = sidebarexpand ? "200px" : "52px";

    return ( 
        <div>
            <div>
                <PrivateNavbar></PrivateNavbar>
            </div>
            <div>
                <div style={{position:"relative"}}  > 
                    <Sidebar sendExpandedvalue={isExpanded=>setsidebarexpand(isExpanded)}></Sidebar>
                </div>
                <div style={{ marginLeft : setstyle }}>
                    <Switch>
                        <Route path="/myOrders" component={MyOrders}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path="/buyFoods" component={Homepage}>
                            <Homepage></Homepage>
                        </Route>
                        <Route path="/restaurantsItem" component={RestaurantItem}>
                            <RestaurantItem></RestaurantItem>
                        </Route>

                        <Route path="/orderItem" component={OrderPage}>
                            <OrderPage></OrderPage>
                        </Route>

                        <Route path="/wordCloud" component={WordCloud}>
                            <WordCloud></WordCloud>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;