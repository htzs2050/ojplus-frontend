// tslint:disable
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


import { Model6 } from './model6';

/**
 * 
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {
    /**
     * 业务消息
     * @type {string}
     * @memberof InlineResponse20010
     */
    message: string;
    /**
     * 业务状态码
     * @type {number}
     * @memberof InlineResponse20010
     */
    code: number;
    /**
     * 
     * @type {Model6}
     * @memberof InlineResponse20010
     */
    data: Model6;
}

