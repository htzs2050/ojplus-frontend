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


import { Model4 } from './model4';

/**
 * 
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     * 业务消息
     * @type {string}
     * @memberof InlineResponse2006
     */
    message: string;
    /**
     * 业务状态码
     * @type {number}
     * @memberof InlineResponse2006
     */
    code: number;
    /**
     * 
     * @type {Model4}
     * @memberof InlineResponse2006
     */
    data: Model4;
}


