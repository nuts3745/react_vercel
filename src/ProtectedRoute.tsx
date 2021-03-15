import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'
import { Route } from 'react-router'

function ProtectedRoute({ component, ...args }: any) {
    return (
        <div>
            <Route component={withAuthenticationRequired(component, {})} {...args} />
        </div>
    )
}

export default ProtectedRoute
