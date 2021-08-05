import friends from '../data/friends'
import styles from '../styles/Friends.module.scss'
import FriendLinkBox from '../components/FriendLinkBox'
import shuffle from '../utils/shuffle'
import FriendLink from '../types/FriendLink'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {LeftOutlined} from '@ant-design/icons'

function Friends() {
    const [shuffledList, setShuffledList] = useState<FriendLink[]>(friends)
    useEffect(() => setShuffledList(shuffle(friends)))

    return <div className={styles.container}>
        <div className={styles.title}>
            好朋友们～
        </div>
        <div className={styles.back}>
            <Link href="/">
                <a>
                    <LeftOutlined />
                </a>
            </Link>
        </div>
        {shuffledList.map(f => <FriendLinkBox item={f} key={f.name}/>)}
    </div>
}

export default Friends
