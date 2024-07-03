import axios from "axios"

export const loginRequest = async ({ email, success, error, loading }) => {
    try {
        loading(true)

        let response = await axios.post("/user/login", {email: email},
        {
        headers: {
            'Content-Type': 'application/json'
          }
        })
        success(response.data)
        loading(false)
    }
    catch (err) {
        console.log(err)
        error(err)
        loading(false)
    }

}

export const registerRequest = async ({ email, success, error, loading, name }) => {
    try {
        loading(true)

        let response = await axios.post("/user/register", 
        {
            email,
            name,        

        },
        {
        headers: {
            'Content-Type': 'application/json'
          }
        })
        success(response.data)
        loading(false)
    }
    catch (err) {
        console.log(err)
        error(err)
        loading(false)
    }

}

