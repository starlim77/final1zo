import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';
import { Link } from 'react-router-dom';

import SearchForm from '../Search/SearchForm';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <>
            <S.HeaderWrapper>
                <S.Top>
                    <S.TopWrapper>
                        <S.TopLi>고객센터</S.TopLi>
                        <S.TopLi>관심상품</S.TopLi>
                        <S.TopLi>마이페이지</S.TopLi>
                        <S.TopLi>로그인</S.TopLi>
                    </S.TopWrapper>
                </S.Top>
                <S.Bottom>
                    <S.BottomImg src="../image/logo.png" />
                    <S.BottomWrapper>
                        <S.BottomLi>
                            <Link to="/buy">구매 임시</Link>
                        </S.BottomLi>
                        <S.BottomLi>
                            <Link to="/sell">판매 임시</Link>
                        </S.BottomLi>
                        <S.BottomLi active={true}>STYLE</S.BottomLi>
                        <S.BottomLi>
                            <Link to={'/shop'}>shop</Link>
                        </S.BottomLi>
                        <S.BottomLi active={true}>
                            <Link to="/lookbook/trending">STYLE</Link>
                        </S.BottomLi>
                        {/* <S.BottomLi active={true}><Link to="/lookbook/detail">STYLE</Link></S.BottomLi> */}
                        <S.BottomLi>SHOP</S.BottomLi>
                        <S.BottomLi>ABOUT</S.BottomLi>
                        <S.BottomLi>
                            <div>
                                <div onClick={onOpen}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                {
                                    isOpen && <SearchForm onClose={onClose}/>
                                }
                            </div>
                        
                            

                        </S.BottomLi>
                    </S.BottomWrapper>
                </S.Bottom>
            </S.HeaderWrapper>
        </>
    );
};

export default Header;
