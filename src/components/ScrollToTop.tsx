import { useWindowScroll } from 'react-use'
import { Icon } from '~/Icons'

const ScrollToTop = () => {
    const { y } = useWindowScroll()

    if (y < 100) return null
    return (
        <button
            type="button"
            aria-label="Scroll to top"
            className="fixed bottom-4 right-4 z-50 border-none outline-none text-black bg-white cursor-pointer rounded-full w-10 h-10 flex justify-center items-center hover:bg-white/75 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <Icon name="upArrow" size={32} />
        </button>
    )
}

export default ScrollToTop
