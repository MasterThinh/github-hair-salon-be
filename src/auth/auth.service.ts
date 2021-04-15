import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Staff } from 'src/schemas/staff.schema';
import { StaffService } from '../staff/staff.service';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        private staffService: StaffService) { }

    async validateUser(params: { username: string, password: string }): Promise<any> {
        const user = await this.staffService.findOneByUsernamePassword(params);
        if (user) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
