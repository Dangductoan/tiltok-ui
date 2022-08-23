import React from 'react'
import classnames from 'classnames/bind';
import styles from './SideBar.module.scss'
const cx = classnames.bind(styles);
function SideBar() {
    return (
        <aside className={cx("wrapper")}>
            <h2>sidebar</h2>
        </aside>
    )
}

export default SideBar