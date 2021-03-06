/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useForm} from 'react-hook-form'
import { Input } from '@material-ui/core';
import Header from '../components/header/header'
import Navigation from '../components/Navigation/navigation';
import {CardContent, makeStyles ,Card} from '@material-ui/core/';


const style = makeStyles((theme)=>({
  cardsStyle: {
    maxWidth: '1000px',
    margin:`${theme.spacing(9)}px auto`,
  },
  ttleStyle: {
   padding: '10px'
   
  },
  
 
}));

const wait = function(duration = 1000){
    return new Promise((resolve)=>{
        window.setTimeout((resolve,duration))
    })
}
export default function authentification() {
    const classes = style();

    const{register, handleSubmit, formState , errors}= useForm({
        mode:'onTouched'
    });
    const { isSubmitSuccessful } = formState ;
    const onSubmit = async data =>{
            console.log(data);

        await wait(2000)
       
    }
    
    return (
        <>
        <Header/>
      <Navigation/>
        <div className={classes.arriereplan}>
                                  <h1  className={classes.ttleStyle}>Connexion</h1>

      <Card className={classes.cardsStyle}> 
          <CardContent> 
            <form onSubmit={handleSubmit(onSubmit)}>
                {isSubmitSuccessful && <div className='alert.alert-success'>Merci pour votre inscription</div>}
            
                 <div> 
                {/* email */}
                 <label htmlFor="mail">Email</label>
                 <Input name="mail" id='mail' ref={register({  required: 'Vous devez renseigner votre Email',  pattern: /^[A-Za-z]+$/i })} />
                  {errors.mail &&<span>{errors.mail.message}</span>}
                </div>
                {/* mot de passe */}
                 <label htmlFor="MotdePasse">Mot de passe</label>
                 <input type='Password' name="Password" id='Password' ref={register({  required: 'Vous devez saisir un mot de passe correcte',  pattern: /^[A-Za-z]+$/i })} />
                  {errors.Password &&<span>{errors.Password.message}</span>}

                <Input type="submit"/>
            </form>
            </CardContent>
            </Card>
        </div>
          </>
    )
}
