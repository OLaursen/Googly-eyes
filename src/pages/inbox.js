import React from 'react'
import { Link } from 'react-router-dom'

export default class Inbox extends React.Component {
    render() {
        return (
            <>
                <Link to={"/"}>
                    <h1>THIS IS THE INBOX</h1>
                </Link>
            </>
        )
    }
}