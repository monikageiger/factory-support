import { useEffect, useState } from 'react'
import { getSupportRequests, signupForRequest } from '../services/api'

interface SupportRequest {
    id: number
    description: string
    workType: string
    location: string
    dateOfJob: string
    requiredNumOfPeople: number
    isUserSignedUp: boolean
}

function SupportRequests() {
    const [requests, setRequests] = useState([])
    const [signedUp, setSignedUp] = useState<number[]>([])

    useEffect(() => {
        getSupportRequests().then((requests) => {
            setRequests(requests)
            console.log(requests)
        })
    }, [])

    const handleSignUpEvent = (supportRequestId: number) => {
        signupForRequest(supportRequestId)

        setSignedUp((oldValue) => [supportRequestId, ...oldValue])
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
                    <button
                        onClick={() => handleSignUpEvent(request.id)}
                        disabled={
                            request.isUserSignedUp ||
                            signedUp.includes(request.id)
                        }
                    >
                        {request.isUserSignedUp || signedUp.includes(request.id)
                            ? 'subscribed'
                            : 'subscribe'}
                    </button>
                </div>
            ))}
        </>
    )
}

export default SupportRequests
