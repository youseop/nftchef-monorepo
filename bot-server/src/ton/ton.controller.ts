import { Body, Controller, Get } from '@nestjs/common';
import { TonService } from './ton.service';
import { Address } from 'ton-core';
import {
  GetAllNFTDto,
  GetAllNFTReq,
  GetAllNFTRes,
  LinkRes,
  TransactionDto,
  TransactionReq,
  VerifyRes,
} from './dtos/ton.dto';

@Controller('ton')
export class TonController {
  constructor(private readonly tonService: TonService) {}

  @Get('Verify')
  async verifyTransactionExistance(
    @Body() req: TransactionReq,
  ): Promise<VerifyRes> {
    const reqDto = Object.assign(new TransactionDto(), req);
    return this.tonService.verifyTransaction(reqDto);
  }

  @Get('Link')
  generatePayLink(@Body() req: TransactionReq): LinkRes {
    const reqDto = Object.assign(new TransactionDto(), req);
    return this.tonService.generatePayLink(reqDto);
  }

  @Get('allNFT')
  async getAllNFT(@Body() req: GetAllNFTReq): Promise<GetAllNFTRes> {
    const reqDto = Object.assign(new GetAllNFTDto(), req);
    return this.tonService.getAllNFT(reqDto);
  }
}
