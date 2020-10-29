import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { apiConfig } from './api-config';

export const handleAuthorization = (req: Request, resp: Response) => {
  const token = extractToken(req);
  console.log('******request**********');
  console.log(req.body);
  console.log('***********************');
  if (!token) {
    console.log('***Token not Found******');
    resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
    resp.status(401).json({ message: 'Você precisa se autenticar.' });
  } else {
    console.log('***Token found******');
    jwt.verify(token, apiConfig.secret, (error, decoded) => {
      console.log('***Decoded******');
      console.log(decoded);
      console.log('****************');
      if (decoded) {
        resp.status(200).json({ message: 'Score registred', position: '1' });
      } else {
        resp.status(403).json({ message: 'Não autorizado.' });
      }
    });
  }
};

function extractToken(req: Request): string {
  let token = undefined;
  console.log('******headers**********');
  console.log(req.headers);
  console.log('***********************');
  if (req.header && req.headers.authorization) {
    // Autorization: Bearer zzz.zzz.zzz
    const parts: string[] = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
    return token;
  }
}
