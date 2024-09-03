import {Card, TextInput, Button, Title} from '@tremor/react'
import React, { useState } from 'react'
import { useUsersActions } from '../hooks/useUsersActions'

export const NewUser = ()=>{
    const { addUser} = useUsersActions()
    const [result,setResult] = useState<'ok' | 'ko' | null>(null)
    const handleSUbmit = (event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setResult(null)
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string
        if(!name || !email || !github){
            return setResult('ko')
        }
        addUser({name,email,github})
        setResult('ok')
        form.reset()
    }
    return(
        <Card style={{marginTop:"16px"}}>
            <Title>Agregar usuario</Title>
            <form onSubmit={handleSUbmit}>
                <TextInput
                name='name'
                placeholder='Ingresa un nombre'/>
                <TextInput
                name='email'
                placeholder='Ingresa email'/>
                <TextInput
                name='github'
                placeholder='Ingresa github'/>
                
                    <Button style={{backgroundColor:'blue',color:'white'}} type='submit'>
                        Enviar
                    </Button>
                
            </form>
        </Card>
    )
}