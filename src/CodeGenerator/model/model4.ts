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

/**
* 响应数据
*/
export class Model4 {
    /**
    * 序号
    */
    'id': number;
    /**
    * 标题
    */
    'title': string;
    /**
    * 简述
    */
    'overview': string;
    /**
    * 正文，Markdown
    */
    'body': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "overview",
            "baseName": "overview",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Model4.attributeTypeMap;
    }
}

