import React from 'react'
import Header from '../components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout