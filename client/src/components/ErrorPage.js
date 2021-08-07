import React from 'react'
import {NavLink} from 'react-router-dom'
function ErrorPage() {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>404</h1>
                    </div>
                    <h2>We are Sorry, page Not Found</h2>
                    <p className="mb-5">The Page is REmoved</p>
                    <NavLink to="/">back To Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
