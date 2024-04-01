import { useEffect, useState } from 'react'
import { getSupportRequests, signupForRequest } from '../services/api'

interface SupportRequest {
    id: number
    description: string
    workType: string
    location: string
    dateOfJob: string
    requiredNumOfPeople: number
}

function SupportRequests() {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        getSupportRequests().then((requests) => {
            setRequests(requests)
            console.log(requests)
        })
    }, [])

    const handleSignUpEvent = (supportRequestId: number) => {
        signupForRequest(supportRequestId)
    }
    return (
        <>
            {requests.map((request: SupportRequest) => (
                <div key={request.id}>
                    <h2>Work Type: {request.workType}</h2>
                    <p>Description: {request.description}</p>
                    <p>Location: {request.location}</p>
                    <p>Date of Job: {request.dateOfJob}</p>
                    <p>
                        Required number of people: {request.requiredNumOfPeople}
                    </p>
                    <button onClick={() => handleSignUpEvent(request.id)}>
                        subscribe
                    </button>
                </div>
            ))}
        </>
    )
}

export default SupportRequests
