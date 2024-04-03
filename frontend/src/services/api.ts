import axios from 'axios'

export const getSupportRequests = async () => {
    const response = await axios.get(`http://localhost:3000/support-requests`)
    return response.data
}

export const signupForRequest = async (supportRequestId: number) => {
    const signupEventData = {
        supportRequestId,
        userId: 'q816x4c8-0339-4bb6-bf82-86v9c35d80e2',
        status: 'pending',
    }
    try {
        const response = await axios.post(
            'http://localhost:3000/signup-event/create',
            signupEventData
        )
        return response.data
    } catch (error) {
        console.error('error', error)
    }
}
