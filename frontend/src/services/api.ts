import axios from 'axios'

export const getSupportRequests = async () => {
    const response = await axios.get(`http://localhost:3000/support-requests`)

    return response.data
}

export const signupForRequest = async (supportRequestId: number) => {
    const signupEventData = {
        supportRequestId,
        "userId": "12345abc",
        "status": "pending"
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
