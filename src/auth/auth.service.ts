import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(token: string) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const firebaseUid = decodedToken.uid;

      // Fetch user from NeonDB using userService
      const user = await this.userService.findOneByFirebaseUid(firebaseUid);

      if (!user) throw new UnauthorizedException('User not found in database');

      return { uid: user.firebaseUid, email: user.email, role: user.role };
    } catch (error) {
      throw new UnauthorizedException('Invalid Firebase token');
    }
  }
}
