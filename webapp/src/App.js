import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './component/Layout/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentTerms from './component/payment/PaymentTerms';
import PayHeader from './component/payment/PayHeader';
import SizePage from './component/payment/SizePage';
import SizePageNew from './component/payment/SizePageNew';
import OrderType from './component/payment/OrderType';
import Main from './component/Main/Main';
import Shop from './component/Shop/Shop';
import UserWrite from './component/Shop/register/NewWrite';
import UsedMain from './component/Used/UsedMain';
import UsedWrite from './component/Used/UsedWrite';
import UsedItem from './component/Used/UsedItem';
import UploadForm2 from './component/Used/UploadForm2';
import Products from './component/Products/Products';
import PayForm from './component/payment/PayForm';
import Trending from './component/Lookbook/Trending';
import Detail from './component/Lookbook/Detail';
import StyleComment from './component/Lookbook/StyleComment';
import Mystyle from './component/Lookbook/Mystyle';
import Social from './component/Lookbook/Social';
import SearchForm from './component/Search/SearchForm';
import CsNotice from './component/Cs/CsNotice/CsNotice';
import CsFaq from './component/Cs/CsFaq';

import CsFaqWriteForm from './component/Cs/CsFaqWriteForm';
import LoginForm from './component/User/LoginForm';
import WriteForm from './component/User/WriteForm';
import MystyleDetail from './component/Lookbook/MystyleDetail';
import MystyleUpdate from './component/Lookbook/MystyleUpdate';
import CsFaqUpdateForm from './component/Cs/CsFaqUpdateForm';
import CsMain from './component/Cs/CsMain';
import ManagerPage from './component/Shop/manager/ManagerPage';
import List from './component/Shop/manager/NewList';
import AdminWrite from './component/Shop/register/NewWrite';
import NewList from './component/Shop/manager/NewList';
import NewProducts from './component/Products/NewProducts';
import UsedUpdate from './component/Used/UsedUpdate';
import FindEmail from './component/User/FindEmail';
import FindPassword from './component/User/FindPassword';
import FindEmailResult from './component/User/FindEmailResult';
import FindPasswordResult from './component/User/FindPasswordResult';
import Logout from './component/User/Logout';
import MyPageMain from './component/myPage/MyPageMain';
import MyPageApp from './component/myPage/MyPageApp';
import NewUpdate from './component/Shop/manager/NewUpdate';
import SocialLoginRedirect from './component/User/SocialLoginRedirect';
import UsedItemList from './component/Shop/manager/UsedItemList';
import jwt_decode from 'jwt-decode';
import NewProductPage from './component/Shop/newProduct/NewProductPage';
import ReList from './component/Shop/resell/ReList';
import ReUpdate from './component/Shop/resell/ReUpdate';
import ReWrite from './component/Shop/register/ReWrite';
import Following from './component/Lookbook/Following';
import RequireAuth from './component/Require/RequireAuth';
import SellForm from './component/payment/SellForm';
import SalesList from './component/Shop/manager/SalesList';
import MainBanner from './component/Main/MainBanner/MainBanner';
import StyleOneProduct from './component/Lookbook/StyleOneProduct';
import SearchForm2 from './component/Search/SearchForm2';
import RequireAdmin from './component/Require/RequireAdmin';

function App() {
    const token = localStorage.getItem('accessToken');

    const [auth, setAuth] = useState('ROLE_GUEST');
    const [sub, setSub] = useState('');

    useEffect(() => {
        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setAuth(tokenJson['auth']);
            setSub(tokenJson['sub']);
        }
    }, []);

    // ROLE_GUEST, ROLE_USER, ROLE_ADMIN

    // user or admin => //
    // admin => //

    //console.log(auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout auth={auth} />}>
                    <Route
                        path="/"
                        element={
                            <>
                                <MainBanner />
                                <Main />
                            </>
                        }
                    />

                    {/* shop */}
                    <Route path="shop" element={<Shop />} />

                    <Route
                        path="shop/newProduct"
                        element={<NewProductPage />}
                    />

                    <Route
                        path="admin"
                        element={
                            <RequireAdmin>
                                <ManagerPage />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="admin/newWrite"
                        element={
                            <>
                                <ManagerPage />
                                <AdminWrite />
                            </>
                        }
                    />
                    <Route
                        path="admin/newList"
                        element={
                            <>
                                <ManagerPage />
                                <NewList />
                            </>
                        }
                    />
                    <Route
                        path="admin/newSearch"
                        element={
                            <>
                                <ManagerPage />
                                {/* <NewSearch /> */}
                            </>
                        }
                    />
                    <Route
                        path="admin/newWrite"
                        element={
                            <>
                                <ManagerPage />
                                <AdminWrite />
                            </>
                        }
                    />
                    <Route
                        path="admin/newList"
                        element={
                            <>
                                <ManagerPage />
                                <NewList />
                            </>
                        }
                    />
                    <Route
                        path="admin/newSearch"
                        element={
                            <>
                                <ManagerPage />
                                {/* <NewSearch /> */}
                            </>
                        }
                    />
                    <Route
                        path="admin/newUpdate"
                        element={
                            <>
                                <ManagerPage />
                                <NewUpdate />
                            </>
                        }
                    />
                    <Route
                        path="admin/salesList"
                        element={
                            <>
                                <ManagerPage />
                                <SalesList />
                            </>
                        }
                    />
                    <Route path="admin" element={<ManagerPage />} />
                    <Route
                        path="admin/newWrite"
                        element={
                            <>
                                <ManagerPage />
                                <AdminWrite />
                            </>
                        }
                    />
                    <Route
                        path="admin/newList"
                        element={
                            <>
                                <ManagerPage />
                                <NewList />
                            </>
                        }
                    />
                    <Route
                        path="admin/newUpdate"
                        element={
                            <>
                                <ManagerPage />
                                <NewUpdate />
                            </>
                        }
                    />

                    <Route
                        path="admin/reWrite"
                        element={
                            <>
                                <ManagerPage />
                                <ReWrite />
                            </>
                        }
                    />
                    <Route
                        path="admin/reList"
                        element={
                            <>
                                <ManagerPage />
                                <ReList />
                            </>
                        }
                    />
                    <Route
                        path="admin/reUpdate"
                        element={
                            <>
                                <ManagerPage />
                                <ReUpdate />
                            </>
                        }
                    />

                    <Route path="Used/usedMain" element={<UsedMain />} />
                    <Route path="Used/usedWrite" element={<UsedWrite />} />
                    <Route
                        path="Used/useditem"
                        element={<UsedItem></UsedItem>}
                    ></Route>
                    <Route
                        path="Used/uploadform2"
                        element={<UploadForm2></UploadForm2>}
                    ></Route>
                    <Route path="products/:seq" element={<Products />} />
                    <Route path="/payTerms/*" element={<PaymentTerms />} />
                    <Route path="/orderType/*" element={<OrderType />} />
                    <Route path="/newBuy" element={<SizePageNew />} />
                    <Route path="/buy" element={<SizePage />} />
                    <Route path="buy/payTerms" element={<PaymentTerms />} />
                    <Route path="buy/orderType" element={<OrderType />} />
                    <Route path="/sell" element={<SizePage />} />
                    <Route path="sell/payTerms" element={<PaymentTerms />} />
                    <Route path="sell/orderType" element={<OrderType />} />
                    <Route path="shop" element={<Shop />} />
                    <Route
                        path="Used/useditem"
                        element={<UsedItem></UsedItem>}
                    ></Route>
                    <Route path="products/:seq" element={<Products />} />
                    <Route
                        path="pay/payForm"
                        element={
                            <RequireAuth auth={auth}>
                                <PayForm></PayForm>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="sell/sellForm"
                        element={<SellForm></SellForm>}
                    ></Route>
                    <Route path="Used/usedMain" element={<UsedMain />} />
                    <Route path="Used/usedItem" element={<UsedItem />} />
                    <Route path="Used/usedWrite" element={<UsedWrite />} />
                    <Route path="Used/useditem" element={<UsedItem />}></Route>
                    <Route
                        path="Used/usedUpdate"
                        element={<UsedUpdate />}
                    ></Route>
                    <Route
                        path="Used/uploadform2"
                        element={<UploadForm2 />}
                    ></Route>
                    <Route path="products/:seq" element={<Products />} />
                    <Route path="newProducts/:seq" element={<NewProducts />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/login/find_email" element={<FindEmail />} />
                    <Route
                        path="/login/find_password"
                        element={<FindPassword />}
                    />
                    <Route path="/join" element={<WriteForm />} />
                    {/* <Route path="/Search/SearchForm" element={<SearchForm />} /> */}
                    <Route
                        path="/Search/SearchForm"
                        element={<SearchForm2 />}
                    />
                    <Route
                        path="/login/find_email/result"
                        element={<FindEmailResult />}
                    />
                    <Route
                        path="/login/find_password"
                        element={<FindPassword />}
                    />
                    <Route
                        path="/login/find_password/result"
                        element={<FindPasswordResult />}
                    />
                    <Route path="/logout" element={<Logout />} />
                    <Route
                        path="/oauth2/redirect"
                        element={<SocialLoginRedirect />}
                    />
                    <Route path="/join" element={<WriteForm />} />
                    <Route path="/cs/*" element={<CsMain />} />

                    {/* 마이 페이지 */}
                    <Route
                        path="/my/*"
                        element={
                            <RequireAuth>
                                <MyPageApp />
                            </RequireAuth>
                        }
                    />

                    <Route path="/lookbook/trending" element={<Trending />} />
                    <Route
                        path="/styleOneProduct/:seq"
                        element={<StyleOneProduct />}
                    />
                    <Route path="/lookbook/social" element={<Social />} />
                    <Route path="/lookbook/mystyle" element={<Mystyle />} />
                    <Route path="/lookbook/detail" element={<Detail />} />
                    <Route
                        path="/lookbook/following/:tokenId"
                        element={<Following />}
                    />
                    <Route
                        path="/lookbook/styleComment/:styleSeq/:id/:currentId3"
                        element={<StyleComment />}
                    />
                    <Route
                        // path="/lookbook/mystyledetail/:seq/:id"
                        path="/lookbook/mystyledetail/:id"
                        element={<MystyleDetail />}
                    />
                    <Route
                        path="/lookbook/mystyleUpdate/:seq/:id/:product_seq"
                        element={<MystyleUpdate />}
                    />
                    <Route
                        path="admin/UsedItemList"
                        element={
                            <>
                                <ManagerPage />
                                <UsedItemList />
                            </>
                        }
                    />
                </Route>

                <Route path="/searchForm" element={<SearchForm2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
