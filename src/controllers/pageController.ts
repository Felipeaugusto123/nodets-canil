import {Request, Response} from 'express';

export const home = (req:Request, res:Response) =>{
    res.send('home constroller')
    //res.render('pages/page');
}

export const dogs = (req:Request, res:Response) =>{
    res.send('home')
    //res.render('pages/page');
}

export const cats = (req:Request, res:Response) =>{
    res.send('home')
    //res.render('pages/page');
}

export const fishes = (req:Request, res:Response) =>{
    res.send('home')
    //res.render('pages/page');
}