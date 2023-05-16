import Image from "next/image";

import styles from './navsocialmedia.module.scss';

const accounts = [
    {
        name: "Facebook",
        slug: "facebook",
        url: "https://www.facebook.com/subaruofamerica"
    },
    {
        name: "Twitter",
        slug: "twitter",
        url: "https://www.twitter.com/subaru_usa"
    },
    {
        name: "Instagram",
        slug: "instagram",
        url: "https://www.instagram.com/subaru_usa"
    },
    {
        name: "YouTube",
        slug: "youtube",
        url: "https://www.youtube.com/user/Subaru"
    }
]

const NavSocialMedia = () => {
    //loop, li, a, svg
    return <nav>
        <ul className={styles.nav_socialmedia}>
            {accounts.map((account, index) => {
                const { name, slug, url } = account;
                return <li key={`socialMediaLink${index}`}>
                    <a href={url} target="_blank"></a>
                    <Image 
                        src={`/icon/${slug}.svg`}
                        alt={`${name} icon`}
                        width={32}
                        height={32}
                        
                    />
                </li>
            })}
        </ul>
    </nav>
}
export default NavSocialMedia;