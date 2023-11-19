import { Link, useLocation } from "react-router-dom"

function BreadCrumbs() {

    const location = useLocation()

    const currentLink = []

    const crumbs = location.pathname.split('/')
        .filter((crumb) => crumb != '')
        .map((crumb) => {
            currentLink.push(`/`)
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink.join('')}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="align-element flex gap-3 mt-5 font-medium text-xl">{crumbs}</div>
    )
}

export default BreadCrumbs