import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiResponseInterface } from 'src/interfaces/apiResponse.interface';
import { RoleEntity } from 'src/entities/role.entity';
import { RoleDTO } from 'src/dto/role.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Role')
@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Get()
    async findAll(): Promise<ApiResponseInterface<RoleEntity>> {
        const roles = await this.roleService.findAll();
        const response: ApiResponseInterface<RoleEntity> = {
            items: roles,
            totalCount: roles.length,
            skip: 0,
            take: roles.length,
        };
        return response;
    }

    @Post()
    async create(@Body() role: RoleDTO): Promise<{ id: string }> {
        return this.roleService.create(role);
    }
}
