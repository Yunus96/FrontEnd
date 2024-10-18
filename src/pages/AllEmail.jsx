import React, {useState, useEffect} from 'react'
import { Container, Card } from '../components/index.js'
import authService from "../service/auth.service.js";


function AllEmail() {
    const [emails, setemails] = useState([])
    useEffect(() => {  
        authService.getEmails().then((email) => {
            console.log(email.length>0)
            if (email.length>0) {
                setemails([email])
            }
        })
    },[])

  return (
    <div className='w-full py-8'>
        <Container>

            <div className='flex flex-wrap'>
                {emails.map((mail, index) => (   
                    <div key={index} className='p-2'>
                        <p>id :{mail.id}</p>
                        <Card {...mail} />
                    </div>
                ))}
            </div> 
        </Container>
    </div>
  )
}

export default AllEmail