import { RiFireFill, RiMusicFill, RiTrophyFill, RiHomeFill } from 'react-icons/ri'
import { SiYoutubegaming } from 'react-icons/si'
import { HiVideoCamera } from 'react-icons/hi'


export const categories = [
    { name: 'Home',         slug: '',               icon: <RiHomeFill />, },
    { name: 'Trending',     slug: 'trending',       icon: <RiFireFill />, },
    { name: 'Live',         slug: 'live',           icon: <HiVideoCamera />, },
    { name: 'Music',        slug: 'music',          icon: <RiMusicFill />, },
    { name: 'Gaming',       slug: 'gaming',         icon: <SiYoutubegaming />, },
    { name: 'Sports',       slug: 'sports',         icon: <RiTrophyFill />, },
]