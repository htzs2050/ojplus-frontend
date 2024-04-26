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
import { InlineResponse2005Users } from './inlineResponse2005Users';

/**
* 响应数据
*/
export class Model6 {
    /**
    * 总页数
    */
    'pages': number;
    /**
    * 总项目数
    */
    'items': number;
    'users': Array<InlineResponse2005Users>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "number"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<InlineResponse2005Users>"
        }    ];

    static getAttributeTypeMap() {
        return Model6.attributeTypeMap;
    }
}

