import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';
import { Button } from './schemas/button.schema';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('buttons')
@Controller({ version: '1', path: 'buttons' })
export class ButtonsController {
    constructor(private readonly buttonsService: ButtonsService) {}

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Creates a new button' })
    @ApiCreatedResponse({ type: Button, isArray: false, description: 'Successful creation of a button response' })
    @ApiBadRequestResponse({
        description: 'Input validation error',
        type: BadRequestException,
        example: { message: ['buttonNo must not be less than 0', 'itemName must be longer than or equal to 2 characters', 'count must not be less than 1'], error: 'Bad Request', statusCode: 400 },
    })
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() createButtonDto: CreateButtonDto): Promise<Button> {
        return this.buttonsService.create(createButtonDto);
    }

    @ApiOperation({ summary: 'Retrieves all buttons' })
    @ApiOkResponse({ type: Button, isArray: true, description: 'List of buttons' })
    @Get()
    findAll(): Promise<Button[]> {
        return this.buttonsService.findAll();
    }

    @ApiOperation({ summary: 'Retrieves all information about a button' })
    @ApiParam({ name: 'buttonNo', description: 'Button number', type: Number })
    @ApiOkResponse({ type: Button, isArray: false, description: 'Button details' })
    @ApiNotFoundResponse({
        description: 'Button does not exist',
        type: BadRequestException,
        example: { message: ['buttonNo does not exit'], error: 'Bad Request', statusCode: 404 },
    })
    @ApiBadRequestResponse({
        description: 'Item has insufficient stock',
        type: BadRequestException,
        example: { message: ['buttonNo has no more stocks'], error: 'Bad Request', statusCode: 400 },
    })
    @Get(':buttonNo')
    buyOne(@Param('buttonNo') buttonNo: string): Promise<{ purchase: boolean }> {
        return this.buttonsService.buyOne(+buttonNo);
    }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update one button' })
    @ApiParam({ name: 'buttonNo', description: 'Button number', type: Number })
    @ApiOkResponse({ type: Button, isArray: false, description: 'Button details' })
    @ApiNotFoundResponse({
        description: 'Button does not exist',
        type: BadRequestException,
        example: { message: ['buttonNo does not exit'], error: 'Bad Request', statusCode: 404 },
    })
    @UseGuards(AuthGuard)
    @Patch(':buttonNo')
    update(@Param('buttonNo') buttonNo: string, @Body() updateButtonDto: UpdateButtonDto) {
        return this.buttonsService.updateStock(+buttonNo, updateButtonDto);
    }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete one button' })
    @ApiParam({ name: 'buttonNo', description: 'Button number', type: Number })
    @ApiResponse({ status: 200, type: Button, isArray: false, description: 'Button details' })
    @ApiNotFoundResponse({
        description: 'Button does not exist',
        type: BadRequestException,
        example: { message: ['buttonNo does not exit'], error: 'Bad Request', statusCode: 404 },
    })
    @UseGuards(AuthGuard)
    @Delete(':buttonNo')
    remove(@Param('buttonNo') buttonNo: string) {
        return this.buttonsService.removeItems(+buttonNo);
    }
}
