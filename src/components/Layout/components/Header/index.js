import React from 'react'
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function Header() {
    console.log(images.logo);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />

                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search" spellCheck={false}/>
                      <button className={cx('clear')}>
                      <FontAwesomeIcon icon={faCircleXmark} /> 
                      </button>                   
                      <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />           
                      <button className={cx('search-btn')}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} /> 
                      </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    )
}

export default Header