import './stylessheets/NavBar.css'
import appLogo from './assets/aheadApp.jpg'
export default function NavBar() {
    const pages = ['Emotions', 'Manifesto', 'Self-awareness test', 'Work with Us']
    function getPages() {
        return pages.map((pageName, key) => {
            return (
                <div key={key} className='NavBar_elements'>
                    {pageName}
                </div>
            )
        })
    }
    return (
        <div className="NavBar">
            <img className='smallImage NavBar_logo' src={appLogo} alt="appLogo" />
            <div className='NavBar_center'>
                {getPages()}
            </div>
            <div className='blackButton'>Download App</div>
        </div>
    )
}