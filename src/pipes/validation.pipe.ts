import {ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform} from "@nestjs/common";
import {plainToInstance} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exception";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (!metadata.metatype) {
            throw new HttpException('No metadata send', HttpStatus.BAD_REQUEST);
        }

        const obj = plainToInstance(metadata.metatype, value);
        const errors = await validate(obj);

        if(errors.length) {
            let messages = errors.map(err => {
                if (!err.constraints) {
                    return `${err.property} - Unknown error`;
                }
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            });

            throw new ValidationException(messages);
        }

        return value;
    }
}