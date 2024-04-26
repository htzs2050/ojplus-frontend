/**
 * OJPlus
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class InlineResponse2009 {
    /**
    * 业务消息
    */
    'message': string;
    /**
    * 业务状态码
    */
    'code': number;
    /**
    * 响应数据
    */
    'data': object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2009.attributeTypeMap;
    }
}
