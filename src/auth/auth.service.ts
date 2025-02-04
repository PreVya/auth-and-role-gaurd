import { Injectable } from "@nestjs/common";
import * as admin from 'firebase-admin';
import * as fs from 'fs';
import { using } from "rxjs";

@Injectable()
export class AuthService{
    constructor()
    {
        const serviceAcc = JSON.parse(fs.readFileSync('firebase-admin.json','utf-8'));
        if(!admin.app.length){
            admin.initializeApp({
                credential:admin.credential.cert(serviceAcc),
            })
        }
    }

    async verifyToken(token:string){
        return await admin.auth().verifyIdToken(token);
    }

    async setRole(uid:string,role:string){
        return admin.auth().setCustomUserClaims(uid,{role});
    }

    async getRole(uid:string){
        const userRecord = await admin.auth().getUser(uid);
        return userRecord.customClaims?.role || 'user';
    }
}