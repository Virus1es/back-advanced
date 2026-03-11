import {
    ArgumentMetadata,
    BadRequestException,
    HttpException,
    HttpStatus,
    Injectable,
    PipeTransform
} from "@nestjs/common";
import {plainToInstance} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exception";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (!this.toValidate(metadata) || !metadata.metatype) {
            return value;
        }

        const object = plainToInstance(metadata.metatype, value);

        if (!object || typeof object !== 'object') {
            throw new BadRequestException('Invalid data format');
        }

        const errors = await validate(object);

        if (errors.length > 0) {
            const messages = errors.map(err => {
                if (!err.constraints) {
                    return `${err.property} - Unknown error`;
                }
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
            });
            throw new BadRequestException(messages);
        }

        return object;
    }

    private toValidate(metadata: ArgumentMetadata): boolean {
        const { metatype } = metadata;
        return (
            metatype !== undefined &&
            metatype !== String &&
            metatype !== Boolean &&
            metatype !== Number &&
            metatype !== Array &&
            metatype !== Object
        );
    }
}